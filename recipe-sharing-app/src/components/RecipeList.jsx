// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import useRecipeStore from '../components/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const { recipes, filteredRecipes, filterRecipes } = useRecipeStore(state => ({
    recipes: state.recipes,
    filteredRecipes: state.filteredRecipes,
    filterRecipes: state.filterRecipes
  }));

  useEffect(() => {
    filterRecipes(); // Filter recipes whenever the search term changes
  }, [filterRecipes]);

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;
