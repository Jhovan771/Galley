import axios from "axios";

const API_URL = import.meta.env.VITE_SERVER_LINK;

export const saveStudentProfileAndImages = async (formData) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/upload-images`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error saving student profile and images:", error);
    throw error;
  }
};
