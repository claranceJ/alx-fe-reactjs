import React, { useState } from "react";

const AddRecipeForm = () => {
  // State to manage form inputs and errors
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // State to hold validation errors

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({});

    // Validation
    const newErrors = {};
    if (!title) newErrors.title = "Recipe title is required.";
    if (!ingredients) newErrors.ingredients = "Ingredients are required.";
    if (!steps) newErrors.steps = "Preparation steps are required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set errors if any validation fails
      return;
    }

    // Clear errors and log form data (for now)
    const newRecipe = { title, ingredients, steps };
    console.log("New Recipe:", newRecipe);

    // Clear form after submission
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
        Add a New Recipe
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6"
      >
        {/* Recipe Title Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter the recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients Textarea */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="List the ingredients"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps Textarea */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="steps">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.steps ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="List the preparation steps"
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
