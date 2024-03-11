import axios from "axios";

interface IRecipeID {
  id: string;
}

const getRecipeByID = async ({ id }: IRecipeID) => {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_API_URL + "/getRecipeByID",
      { id }
    );
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error(error);
    return { data: null, status: "error" };
  }
};

export default getRecipeByID;
