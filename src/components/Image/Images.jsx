import React, { useState, useEffect } from "react";
import { fetchImages } from "./services/imageServices";
import { Link } from "react-router-dom";

const Images = ({ searchLabel, dateFilter }) => {
  const [itemsData, setItemsData] = useState([]);
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getImages = async () => {
      try {
        const data = await fetchImages();
        console.log("Fetched Data:", data);
        setItemsData(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    getImages();
  }, []);

  const filteredItems = itemsData.filter((item) => {
    const matchesLabel = searchLabel
      ? item.label && item.label.startsWith(searchLabel)
      : true;

    const matchesDate = dateFilter
      ? item.timestamp && item.timestamp.split("T")[0] === dateFilter
      : true;

    return matchesLabel && matchesDate;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredItems.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='my-4 h-[27rem]'>
      <div className='grid grid-cols-4 gap-4 h-[100%]'>
        {currentItems.map((item, index) => (
          <div
            key={index}
            className='border p-4 flex flex-col justify-center items-center'>
            <h3>{item.label}</h3>
            <p>{item.desc}</p>
            <Link
              to={`/profile/${item.fk_student_id}`}
              className='mt-2 px-4 py-2 border rounded bg-blue-500 text-white'>
              View Images
            </Link>
          </div>
        ))}
      </div>

      <div className='flex justify-center mt-4'>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`mx-2 px-4 py-2 border rounded ${
              currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Images;
