import React, { useState } from "react";
import { fetchAdvancedUserData } from "../services/githubService"; // We'll update this service next

const Search = () => {
  const [username, setUsername] = useState("");  // Search by username
  const [location, setLocation] = useState("");  // Search by location
  const [minRepos, setMinRepos] = useState("");  // Search by minimum repos
  const [userData, setUserData] = useState([]);  // To store multiple user results
  const [loading, setLoading] = useState(false);  // Loading state
  const [error, setError] = useState(null);  // Error state

  const handleSearch = async (e) => {
    e.preventDefault();  // Prevent default form submission

    // Reset previous state
    setLoading(true);
    setError(null);
    setUserData([]);

    // Fetch user data from GitHub using advanced search
    const data = await fetchAdvancedUserData(username, location, minRepos);

    if (data && data.items.length > 0) {
      setUserData(data.items);  // Update with fetched user data
    } else {
      setError("No users found with the provided criteria");
    }
    setLoading(false);  // Set loading state to false after the request
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Advanced GitHub User Search</h2>
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="number"
          placeholder="Minimum Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-lg">
          Search
        </button>
      </form>

      {/* Conditional rendering for loading, error, and user data */}
      {loading && <p className="mt-4 text-blue-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {userData && userData.length > 0 && (
        <div className="mt-4 space-y-4">
          {userData.map((user) => (
            <div key={user.id} className="p-4 border rounded-lg">
              <img src={user.avatar_url} alt={user.login} width={100} className="rounded-full mb-2" />
              <h3 className="text-xl font-bold">{user.login}</h3>
              {user.location && <p>Location: {user.location}</p>}
              <p>Repositories: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
