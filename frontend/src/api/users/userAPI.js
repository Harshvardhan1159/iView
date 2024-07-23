import axios from 'axios';
const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/users`;

// Function to register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// Function to log in a user
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

// Function to edit user details
export const editUser = async (userData, token) => {
  try {
    const response = await axios.put(`${API_URL}/edit`, userData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error editing user details:', error);
    throw error;
  }
};
