import axios from "axios";

interface ISearchParams {
  searchString: string;
  prepTime: number;
  pageNum: number;
}

const searchRecipes = async ({
  searchString,
  prepTime,
  pageNum,
}: ISearchParams) => {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_API_URL + "/searchRecipes",
      {
        searchString,
        prepTime,
        pageNum,
      }
    );
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error(error);
    return { data: null, status: "error" };
  }
};

export default searchRecipes;
