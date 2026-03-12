const extractJsonFromText = (text) => {
    try {
        console.log("=== PARSER INPUT ===");
        console.log("Raw text length:", text?.length || 0);
        console.log("First 500 chars:", text?.substring(0, 500));
        console.log("===================");

        // Step 1: Remove markdown code fences
        let cleanedText = text.replace(/```json\s*/g, '').replace(/```\s*/g, '');

        // Step 2: Remove markdown headers (### Questions, ### Basic Skills, etc.)
        cleanedText = cleanedText.replace(/###?\s*[^\n]+/g, '');

        // Step 3: Remove explanatory text and keep only JSON-like structures
        // Find all array structures in the text
        const arrayMatches = [];
        let depth = 0;
        let startIdx = -1;

        for (let i = 0; i < cleanedText.length; i++) {
            if (cleanedText[i] === '[') {
                if (depth === 0) startIdx = i;
                depth++;
            } else if (cleanedText[i] === ']') {
                depth--;
                if (depth === 0 && startIdx !== -1) {
                    const jsonStr = cleanedText.substring(startIdx, i + 1);
                    try {
                        // Attempt to parse this JSON array
                        const parsed = JSON.parse(jsonStr);
                        if (Array.isArray(parsed) && parsed.length > 0) {
                            arrayMatches.push(parsed);
                        }
                    } catch (e) {
                        // If parsing fails, try to fix common issues
                        const fixed = jsonStr
                            .replace(/'/g, '"') // Replace single quotes with double quotes
                            .replace(/,\s*}/g, '}') // Remove trailing commas before }
                            .replace(/,\s*]/g, ']'); // Remove trailing commas before ]

                        try {
                            const parsed = JSON.parse(fixed);
                            if (Array.isArray(parsed) && parsed.length > 0) {
                                arrayMatches.push(parsed);
                            }
                        } catch (e2) {
                            console.warn('Failed to parse JSON block:', e2.message);
                        }
                    }
                    startIdx = -1;
                }
            }
        }

        if (arrayMatches.length > 0) {
            return arrayMatches;
        }

        // Fallback: If no arrays found, return empty arrays
        console.warn('No valid JSON arrays found in Gemini response');
        return [[], []];

    } catch (error) {
        console.error('Error in extractJsonFromText:', error);
        return [[], []];
    }
};

export default extractJsonFromText;
