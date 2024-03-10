import axios from "axios";

interface IIDToken {
  idToken: string;
}

const getMyList = async ({ idToken }: IIDToken) => {
  const response = await axios.post(
    process.env.NEXT_PUBLIC_BACKEND_API_URL + "/getMyList",
    {},
    {
      headers: {
        Authorization: idToken,
      },
    }
  );
  return response.data;
};

export default getMyList;
