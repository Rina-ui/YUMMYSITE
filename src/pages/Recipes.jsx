import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Recipes.css";


function Recipes(){
    const [query, setQuery] = useState("chicken");
    const [recipes, setRecipes] = useState([]);

// utilisation de useEffect pour charger les donnees de l'API
  useEffect(() => {
    fetchRecipes();
  }, [query]);

// fonction pour recuperer les recettes
  const fetchRecipes = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      setRecipes(response.data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div className="recipe-container">
      <h2>🍽️ Recipe Finder</h2>

      {/* Barre de recherche */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={fetchRecipes}>Search</button>
      </div>

      {/* Affichage des recettes */}
      <div className="recipes-grid">
        {recipes.length > 0 ? (
          recipes.map((meal) => (
            <div key={meal.idMeal} className="recipe-card">
              <h3>{meal.strMeal}</h3>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <p>{meal.strCategory} - {meal.strArea}</p>
              <a href={meal.strSource} target="_blank" rel="noopener noreferrer">View Recipe</a>
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
}
export default Recipes;