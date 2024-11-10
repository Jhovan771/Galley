import React from "react";
import Input from "./Input";

const Upload2 = () => {
  return (
    <div className='flex justify-center items-center h-[90vh] mt-2 bg-gray-200'>
      <div className='flex flex-col lg:flex-row gap-3 w-full lg:w-[35%] min-h-[75%] max:h-[95%] bg-white p-4 rounded-lg font-mono shadow-xl m-4 lg:m-0'>
        <div id='container_1' className='w-full  max-h-[28rem] overflow-auto'>
          <Input />
        </div>
      </div>
    </div>
  );
};

export default Upload2;
