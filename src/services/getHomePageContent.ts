import axios from "axios";

const getHomePageContent = async () => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BACKEND_API_URL + "/getHomepageContent"
    );
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error(error);
    return { data: [], status: "error" };
  }
};

export default getHomePageContent;
