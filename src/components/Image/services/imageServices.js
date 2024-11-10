import axios from "axios";

const fetchImages = async () => {
  try {
    // Use Vite's import.meta.env for accessing environment variables
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_LINK}/api/images`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

export { fetchImages };
