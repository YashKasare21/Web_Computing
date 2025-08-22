import React, { useState } from "react";

function RecipeApp() {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const addRecipe = () => {
    setRecipes([...recipes, { title, ingredients, instructions }]);
    setTitle(""); setIngredients(""); setInstructions("");
  };

  return (
    <div>
      <h3>Recipe Manager</h3>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Ingredients" value={ingredients} onChange={e => setIngredients(e.target.value)} />
      <textarea placeholder="Instructions" value={instructions} onChange={e => setInstructions(e.target.value)} />
      <button onClick={addRecipe}>Add</button>
      {recipes.map((r, i) => (
        <div key={i}>
          <h4>{r.title}</h4>
          <p>{r.ingredients}</p>
          <p>{r.instructions}</p>
        </div>
      ))}
    </div>
  );
}
export default RecipeApp;
