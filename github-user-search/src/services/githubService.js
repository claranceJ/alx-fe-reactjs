import axios from "axios";

// Function to fetch advanced user data from GitHub
export const fetchUserData = async (username, location, minRepos) => {
  try {
    let query = username ? `${username} in:login` : "";  // Base query by username

    if (location) {
      query += ` location:${location}`;  // Add location filter if provided
    }

    if (minRepos) {
      query += ` repos:>${minRepos}`;  // Add minimum repos filter if provided
    }

    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data;  // Return search result data
  } catch (error) {
    console.error("Error fetching advanced user data:", error);
    return null;  // Return null in case of an error
  }
};
