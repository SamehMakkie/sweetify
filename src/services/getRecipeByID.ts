import axios from "axios";

interface IRecipeID {
  id: string;
}

const getRecipeByID = async ({ id }: IRecipeID) => {
  const response = await axios.post(
    process.env.NEXT_PUBLIC_BACKEND_API_URL + "/getRecipeByID", { id }
  );

  return response.data;
};

export default getRecipeByID;
