import axios from "axios";

const getHomePageContent = async () => {
    const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_API_URL + "/getHomepageContent");
    return response.data;
}

export default getHomePageContent