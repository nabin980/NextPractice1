import RecipeList from "@/components/recipe-list";


async function fetchListOfRecipe() {
    try {
        const response = await fetch('https://dummyjson.com/recipes')
        const result = await response.json();

        return result.recipes;
        
    } catch (error) {
        throw new Error(error);
    }
}

export default async function Recipes() {

    const recipeList = await fetchListOfRecipe();
    
  return <RecipeList recipeList={recipeList}/>;
}
