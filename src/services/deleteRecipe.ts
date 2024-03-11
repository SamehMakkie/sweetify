import axios from "axios";

interface IParams {
  idToken: string;
  recipeId: string;
}

const deleteRecipe = async ({ idToken, recipeId }: IParams) => {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_API_URL + "/deleteRecipe",
      { recipeId },
      {
        headers: {
          Authorization: idToken,
        },
      }
    );
    return { data: response.data };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      errMessage:
        "An error occurred while deleting recipe. Please try again later.",
    };
  }
};

export default deleteRecipe;
