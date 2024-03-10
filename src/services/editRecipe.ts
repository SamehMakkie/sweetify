import axios from "axios";

interface IFormData {
  recipeTitle: string;
  prepTime: string;
  ingredients: string[];
  steps: string[];
}

interface IParams {
  idToken: string;
  id: string;
  formData: IFormData;
  imgURL: string;
}

const editRecipe = async ({ idToken, id, formData, imgURL }: IParams) => {
  try {
    const { recipeTitle, prepTime, ingredients, steps } = formData;
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_API_URL + "/editRecipe",
      { id, recipeTitle, imgURL, prepTime, ingredients, steps },
      {
        headers: {
          Authorization: idToken,
        },
      }
    );
    return {data: response.data};
  } catch (error) {
    console.error(error);
    return {data: null, errMessage: "An error occurred while editing recipe. Please try again later."};
  }
};

export default editRecipe;