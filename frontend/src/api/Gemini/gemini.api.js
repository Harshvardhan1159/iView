import axios from "axios";

// Use Vite environment variables
const API_URL = import.meta.env.VITE_GEMINI_API_URL;
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

/**
 * Function to generate the body of the post for Gemini API based on specified job role, company, and experience level.
 * @param {string} jobRole - The specific job role for the technical interview (e.g., 'SDE').
 * @param {string} companyName - The name of the company (e.g., 'Google').
 * @param {string} experienceLevel - The experience level (e.g., 'Fresher').
 * @returns {object} - The formatted request body for the Gemini API.
 */
export const generatePostBody = (jobRole, companyName, experienceLevel) => {
  return {
    contents: [
      {
        parts: [
          {
            text:
              `Generate sample data for technical interview questions and basic skills suggestions tailored to the following specifications:\n\n` +
              `- **Job Role**: [${jobRole}]\n` +
              `- **Company Name**: [${companyName}]\n` +
              `- **Experience Level**: [${experienceLevel}]\n\n` +
              `The questions should focus on relevant technical concepts, challenges, and problem-solving scenarios that align with the specified role. Provide the data in the following format:\n\n` +
              `### Questions\n` +
              `- Each question should include:\n` +
              `  - **\`id\`**: A unique identifier.\n` +
              `  - **\`number\`**: The sequence number of the question.\n` +
              `  - **\`text\`**: A concise technical question relevant to the specified job role.\n` +
              `  - **\`rating\`**: A numerical value (1-10) indicating the expected proficiency level.\n` +
              `  - **\`remark\`**: A short evaluation or note about the expected response.\n` +
              `  - **\`icon\`**: A Lucide icon that visually represents the question topic.\n\n` +
              `### Basic Skills\n` +
              `- Each skill should include:\n` +
              `  - **\`id\`**: A unique identifier.\n` +
              `  - **\`name\`**: The skill name, focusing on core competencies needed for the job role.\n` +
              `  - **\`rating\`**: A numerical value (1-10) representing the desired level of proficiency.\n` +
              `  - **\`icon\`**: A Lucide icon symbolizing the skill area.\n\n` +
              `Ensure the generated data is suitable for a technical interview, reflecting the complexity and requirements associated with the given role and company.`,
          },
        ],
      },
    ],
  };
};

/**
 * Function to fetch a response from the Gemini API using the provided job role, company name, and experience level.
 * Includes retry logic with exponential backoff for rate limiting (429 errors).
 * @param {string} jobRole - The specific job role for the technical interview (e.g., 'SDE').
 * @param {string} companyName - The name of the company (e.g., 'Google').
 * @param {string} experienceLevel - The experience level (e.g., 'Fresher').
 * @param {number} maxRetries - Maximum number of retry attempts (default: 3).
 * @returns {string} - The response from the Gemini API or an error message.
 */
export const fetchGeminiResponse = async (
  jobRole,
  companyName,
  experienceLevel,
  maxRetries = 3
) => {
  let lastError;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      // Generate the body content using the provided parameters
      const bodyContent = generatePostBody(
        jobRole,
        companyName,
        experienceLevel
      );

      // Make the API call with the API key in the header
      const response = await axios.post(
        `${API_URL}?key=${API_KEY}`, // API endpoint with key as query param
        bodyContent, // JavaScript object data to be serialized by axios
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Extract response text with optional chaining for safety
      const responseText =
        response?.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

      // Log for debugging
      console.log("=== GEMINI API RESPONSE ===");
      console.log("Input:", { jobRole, companyName, experienceLevel });
      console.log("Response:", responseText);
      console.log("===========================");

      return responseText;
    } catch (error) {
      lastError = error;

      // Only retry on 429 (rate limit) errors
      if (error.response?.status === 429 && attempt < maxRetries - 1) {
        const delay = Math.pow(2, attempt) * 1000; // 1s, 2s, 4s
        console.warn(
          `Rate limited (429). Retrying in ${delay}ms... (Attempt ${attempt + 1
          }/${maxRetries})`
        );
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        // Don't retry on other errors, break immediately
        break;
      }
    }
  }

  // If we get here, all retries failed
  console.error(
    "Gemini API:",
    lastError.response?.data?.message || lastError.message
  );
  throw new Error(
    lastError.response?.data?.message ||
    "An error occurred while fetching the response"
  );
};
