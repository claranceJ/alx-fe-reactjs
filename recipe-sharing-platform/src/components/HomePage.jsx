import React, { useState, useEffect } from "react";

const HomePage = () => {
  // Declare state variable to hold the list of recipes
  const [recipes, setRecipes] = useState([]);

  // useEffect to load data when the component mounts
  useEffect(() => {
    // Fetch mock data from data.json file
    fetch("./src/data.json")
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => setRecipes(data)); // Set fetched data to recipes state
  }, []);

  return (
    // Container for the page content with padding
    <div className="container mx-auto p-4">
      {/* Page heading */}
      <h1 className="text-3xl font-bold mb-4 text-center">Recipe List</h1>

      {/* Grid layout for recipe cards with responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Map over the recipes and display each recipe in a card */}
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            // Card container with shadow, rounded corners, and hover effects
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Display recipe image with consistent height */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-32 sm:h-48 object-cover"
            />

            {/* Display recipe details */}
            <div className="p-4">
              {/* Recipe title with bold text */}
              <h2 className="text-xl font-bold">{recipe.title}</h2>

              {/* Recipe summary with gray text */}
              <p className="mt-2 text-gray-600">{recipe.summary}</p>

              {/* Button with background color, rounded corners, and hover effect */}
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
