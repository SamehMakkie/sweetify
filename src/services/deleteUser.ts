import axios from "axios";

interface IParams {
  idToken: string;
  uid: string;
}

const deleteUser = async ({ idToken, uid }: IParams) => {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_API_URL + "/deleteUser",
      { uid },
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
        "An error occurred while deleting user. Please try again later.",
    };
  }
};

export default deleteUser;
