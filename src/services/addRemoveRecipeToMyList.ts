import axios from "axios";

interface IFormData {
  recipeTitle: string;
  prepTime: string;
  ingredients: string[];
  steps: string[];
}

interface IParams {
  idToken: string;
  recipeID: string;
}

const addRemoveRecipeToMyList = async ({ idToken, recipeID }: IParams) => {
  const response = await axios.post(
    process.env.NEXT_PUBLIC_BACKEND_API_URL + "/addRemoveRecipeToMyList",
    { recipeID },
    {
      headers: {
        Authorization: idToken,
      },
    }
  );
  return response;
};

export default addRemoveRecipeToMyList;
