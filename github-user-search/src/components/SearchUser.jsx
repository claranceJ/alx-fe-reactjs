import React, { useState } from "react";
import { getUserData } from "../services/githubService";

const SearchUser = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    // Clear previous data
    setError(null);
    setUserData(null);

    // Fetch user data from GitHub
    const data = await getUserData(username);

    // Handle the response
    if (data) {
      setUserData(data);
    } else {
      setError("User not found or error occurred.");
    }
  };

  return (
    <div>
      <h2>Search GitHub User</h2>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {userData && (
        <div>
          <h3>{userData.name}</h3>
          <p>Username: {userData.login}</p>
          <p>Bio: {userData.bio}</p>
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
