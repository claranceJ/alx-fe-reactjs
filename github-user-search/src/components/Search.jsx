import React, { useState } from "react";
import { fetchUserData } from "../services/githubService"; // We will create this service soon

const SearchUser = () => {
  const [username, setUsername] = useState("");  // Capturing input
  const [userData, setUserData] = useState(null);  // Storing fetched user data
  const [loading, setLoading] = useState(false);  // Loading state
  const [error, setError] = useState(null);  // Error state

  const handleSearch = async (e) => {
    e.preventDefault();  // Prevent form default submission behavior

    // Reset previous state
    setLoading(true);
    setError(null);
    setUserData(null);

    // Fetch user data from GitHub
    const data = await fetchUserData(username);

    if (data) {
      setUserData(data);
    } else {
      setError("Looks like we cant find the user");
    }
    setLoading(false);  // Set loading state to false after the request
  };

  return (
    <div>
      <h2>Search GitHub User</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional rendering for loading, error, and user data */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} width={100} />
          <h3>{userData.name || "No name provided"}</h3>
          <p>Username: {userData.login}</p>
          <p>Followers: {userData.followers}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default SearchUser;
