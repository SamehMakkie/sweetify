import axios from "axios";

interface IParams {
  idToken: string;
  recipeID: string;
}

const likeUnlikeRecipe = async ({ idToken, recipeID }: IParams) => {
  const response = await axios.post(
    process.env.NEXT_PUBLIC_BACKEND_API_URL + "/likeUnlikeRecipe",
    { recipeID },
    {
      headers: {
        Authorization: idToken,
      },
    }
  );
  return response;
};

export default likeUnlikeRecipe;
