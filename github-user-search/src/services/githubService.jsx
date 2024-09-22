import axios from "axios";

// GitHub API base URL
const API_URL = "https://api.github.com/users/";

// Optional: Add your API key if available
const API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

// Function to get user data from GitHub
export const getUserData = async (username) => {
  try {
    // Axios request to fetch user data
    const response = await axios.get(`${API_URL}${username}`, {
      headers: {
        Authorization: API_KEY ? `token ${API_KEY}` : "",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};
