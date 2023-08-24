import { recipes } from "./Data";

export default function ListOfRecipes() {
  return (
    <>
      <h1 className="text-center font-semibold">RECIPES</h1>

      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>

          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.toLocaleUpperCase()}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
