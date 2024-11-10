import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import Images from "./Images";

const Gallery2 = () => {
  const [labelFilter, setLabelFilter] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [searchLabel, setSearchLabel] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const resetFilters = () => {
    setSearchLabel("");
    setDateFilter("");
    setMonth("");
    setDay("");
    setYear("");
  };

  const handleSearch = () => {
    setSearchLabel(labelFilter);
  };

  const handleLabelChange = (e) => {
    setLabelFilter(e.target.value);
    if (e.target.value === "") {
      setSearchLabel("");
    }
  };

  const handleDateSearch = () => {
    const monthFormatted = month ? month.padStart(2, "0") : "";
    const dayFormatted = day ? day.padStart(2, "0") : "";
    const formattedDate = `${year}-${monthFormatted}-${dayFormatted}`;
    console.log("Formatted Date:", formattedDate);
    setDateFilter(formattedDate);
  };

  return (
    <div className='flex justify-center items-center h-[90vh] mt-2 bg-gray-200'>
      <div className='w-full lg:w-[60%] h-full lg:h-[80%] bg-white p-4 rounded-lg font-mono shadow-xl m-4 lg:m-0 my-4 lg:my-0'>
        <div
          id='navbar'
          className='lg:flex justify-between bg-red-950 rounded-md text-white p-2'>
          <div className='relative flex items-center py-2 lg:py-0'>
            <FcSearch className='absolute left-2 text-[22px]' />
            <input
              className='h-[32px] w-full lg:w-auto pl-10 border border-[#005582] rounded text-black'
              type='text'
              placeholder='Search Label'
              value={labelFilter}
              onChange={handleLabelChange}
            />
            <button
              onClick={handleSearch}
              className='ml-2 bg-blue-800 p-1 px-3 rounded-md hover:bg-blue-700'>
              Search
            </button>
          </div>
          <div className='flex py-1'>
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className='h-[32px] w-full text-center border border-[#005582] rounded text-[#005582]'>
              <option value=''>Month</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className='ml-4 h-[32px] border border-[#005582] rounded text-[#005582] px-2'>
              <option value=''>Day</option>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className='ml-4 h-[32px] border border-[#005582] rounded text-[#005582] px-2'>
              <option value=''>Year</option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={2020 + i} value={2020 + i}>
                  {2020 + i}
                </option>
              ))}
            </select>
            <button
              onClick={handleDateSearch}
              className='ml-2 bg-blue-800 p-1 px-3 rounded-md hover:bg-blue-700'>
              Search
            </button>
            <button
              onClick={resetFilters}
              className='ml-2 bg-red-800 p-1 px-3 rounded-md hover:bg-red-700'>
              Reset
            </button>
          </div>
        </div>
        <div>
          <Images searchLabel={searchLabel} dateFilter={dateFilter} />
        </div>
      </div>
    </div>
  );
};

export default Gallery2;
