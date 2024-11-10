import axios from "axios";

// Service to fetch student data and images from the backend
const fetchStudentData = async (studentId) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_LINK}/api/student/${studentId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching student data:", error);
    throw error;
  }
};

export default fetchStudentData;
