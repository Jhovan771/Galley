import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchStudentData from "./services/studentService2";

const ShowData = () => {
  const { studentId } = useParams();
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const getStudentData = async () => {
      try {
        const data = await fetchStudentData(studentId);
        setStudentData(data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    getStudentData();
  }, [studentId]);

  if (!studentData) {
    return <p>Loading...</p>;
  }

  return (
    <div className='flex justify-center items-center h-[90vh] mt-2 bg-gray-200'>
      <div className='w-full lg:w-[60%] h-full lg:h-[80%] bg-white p-4 rounded-lg font-mono shadow-xl m-4 lg:m-0 my-4 lg:my-0'>
        <h2>Student Profile</h2>
        <p>
          First Name: {studentData[0].first_name}{" "}
          {studentData[0].middle_initial} {studentData[0].last_name}
        </p>
        <p>Sex: {studentData[0].sex}</p>
        <p>Age: {studentData[0].age}</p>
        <p>Program: {studentData[0].program}</p>
        <p>Status: {studentData[0].status}</p>
        <p>
          Address: {studentData[0].street}, {studentData[0].barangay},{" "}
          {studentData[0].city}, {studentData[0].province},{" "}
          {studentData[0].postal_code}
        </p>
        <p>Contact Number: {studentData[0].contact_number}</p>
        <p>Parent Name: {studentData[0].parent_name}</p>
        <p>Year Level: {studentData[0].year_level}</p>

        <h3 className='py-8'>Images:</h3>
        <div className='grid grid-cols-4 gap-4'>
          {studentData.map((image) => {
            const imageUrl = `http://localhost:3001/${image.image}`; // Adjust the path if necessary
            return (
              <div key={image.img_id}>
                <img src={imageUrl} alt={`Student Image ${image.img_id}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowData;
