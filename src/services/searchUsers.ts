import axios from "axios";

interface ISearchParams {
  idToken: string;
  searchString: string;
  pageNum: number;
}

const searchUsers = async ({
  idToken,
  searchString,
  pageNum,
}: ISearchParams) => {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_API_URL + "/searchUsers",
      { searchString, pageNum },
      {
        headers: {
          Authorization: idToken,
        },
      }
    );
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error(error);
    return { data: null, status: "error" };
  }
};

export default searchUsers;
