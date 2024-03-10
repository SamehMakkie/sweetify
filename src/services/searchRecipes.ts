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
  const response = await axios.post(
    process.env.NEXT_PUBLIC_BACKEND_API_URL + "/searchRecipes",
    {
      searchString,
      prepTime,
      pageNum,
    }
  );

  return response.data;
};

export default searchRecipes;
