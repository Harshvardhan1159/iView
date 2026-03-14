const extractJsonFromText = (text) => {
    try {
        console.log("=== PARSER INPUT ===");
        console.log("Raw text length:", text?.length || 0);
        console.log("First 500 chars:", text?.substring(0, 500));
        console.log("===================");

        if (!text) return [[], []];

        // Step 1: Extract JSON using regex (looking for {...} or [...])
        // Specifically look for markdown code blocks first
        let jsonStr = "";
        const codeBlockMatch = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);

        if (codeBlockMatch) {
            jsonStr = codeBlockMatch[1];
        } else {
            // Fallback: Find the first { and the last }
            const startIdx = text.indexOf('{');
            const endIdx = text.lastIndexOf('}');
            if (startIdx !== -1 && endIdx !== -1) {
                jsonStr = text.substring(startIdx, endIdx + 1);
            } else {
                // Try searching for arrays directly [ ... ]
                const arrayStart = text.indexOf('[');
                const arrayEnd = text.lastIndexOf(']');
                if (arrayStart !== -1 && arrayEnd !== -1) {
                    jsonStr = text.substring(arrayStart, arrayEnd + 1);
                }
            }
        }

        if (!jsonStr) {
            console.warn('No JSON structure found in text');
            return [[], []];
        }

        // Clean up common JSON syntax errors that AI might make
        const cleanedJson = jsonStr
            .replace(/\/\/.*$/gm, '') // Remove single line comments
            .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments
            .replace(/,(\s*[\]}])/g, '$1'); // Remove trailing commas

        try {
            const parsed = JSON.parse(cleanedJson);

            // Handle if the response is an object { questions: [], skills: [] }
            if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
                return [parsed.questions || [], parsed.skills || []];
            }

            // Handle if the response is an array of arrays [[questions], [skills]]
            if (Array.isArray(parsed)) {
                return [parsed[0] || [], parsed[1] || []];
            }

            return [[], []];
        } catch (e) {
            console.error('JSON Parse error after cleaning:', e.message);
            return [[], []];
        }
    } catch (error) {
        console.error('Error in extractJsonFromText:', error);
        return [[], []];
    }
};

export default extractJsonFromText;
