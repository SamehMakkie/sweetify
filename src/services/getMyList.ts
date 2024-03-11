import axios from "axios";

interface IIDToken {
  idToken: string;
}

const getMyList = async ({ idToken }: IIDToken) => {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_API_URL + "/getMyList",
      {},
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

export default getMyList;
