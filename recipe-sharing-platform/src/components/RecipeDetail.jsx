import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  // Use useParams to extract the recipe ID from the URL
  const { id } = useParams();
  
  // State to hold the recipe data
  const [recipe, setRecipe] = useState(null);

  // useEffect to fetch the recipe data from data.json
  useEffect(() => {
    // Fetch the data from the local data.json file
    fetch("./src/data.json")
      .then((response) => response.json())
      .then((data) => {
        // Find the recipe with the matching ID
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(selectedRecipe); // Set the selected recipe in the state
      });
  }, [id]);

  // If the recipe is not found, display a loading message
  if (!recipe) {
    return <div className="text-center text-lg font-semibold">Loading recipe details...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Recipe title */}
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">{recipe.title}</h1>

      {/* Recipe image */}
      <div className="flex justify-center">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-72 object-cover rounded-lg shadow-md md:w-2/3"
        />
      </div>

      {/* Ingredients Section */}
      <div className="mt-8 mb-6 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Ingredients</h2>
        <ul className="list-disc pl-6 text-lg text-gray-600">
          {/*To Replace this with real ingredients */}
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
      </div>

      {/* Cooking Instructions Section */}
      <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Cooking Instructions</h2>
        <ol className="list-decimal pl-6 text-lg text-gray-600">
          {/*To Replace this with real instructions */}
          <li>Step 1: Lorem ipsum dolor sit amet.</li>
          <li>Step 2: Consectetur adipiscing elit.</li>
          <li>Step 3: Ut enim ad minim veniam.</li>
        </ol>
      </div>

      {/* Button to go back to Home Page */}
      <div className="flex justify-center mt-8">
        <a
          href="/"
          className="inline-block px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded hover:bg-blue-600"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default RecipeDetail;
