import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch the recipes from the mock data.json file
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Recipe List</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Wrap the image and content in a Link to navigate to the RecipeDetail page */}
            <Link to={`/recipe/${recipe.id}`}>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{recipe.title}</h2>
                <p className="text-gray-600">{recipe.summary}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
