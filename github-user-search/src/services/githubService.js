import axios from "axios";

// Function to fetch user data from GitHub
export const fetchUserData = async (username) => {
  try {
    // Make a GET request to GitHub API
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;  // Return user data
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;  // Return null in case of an error
  }
};
