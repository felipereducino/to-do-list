import axios from "axios";

const API_URL = "https://api.restful-api.dev/objects";

export const getObjects = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
