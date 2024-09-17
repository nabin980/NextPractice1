import RecipeDetailsItem from "@/components/recipe-details";

async function fetchRecipeDetails(currentId){
    try {
        const response = await fetch (`https://dummyjson.com/recipes/${currentId}`);
        const result = await response.json();

        return result;
        
    } catch (error) {
        throw new Error (error)
    }
}


export default async function RecipeDetails({params}){
    const recipeDetail = await fetchRecipeDetails(params.details);
    return (
        <RecipeDetailsItem recipeDetail={recipeDetail}/>
    )
   
}