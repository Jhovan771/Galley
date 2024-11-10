import React from "react";
import Background from "../../assets/a sunset in the swamp.png";

const Home = () => {
  return (
    <div className='flex justify-center items-center h-[90vh] mt-2 bg-gray-200'>
      <div
        style={{
          backgroundImage: `url(${Background})`,
        }}
        className='w-[70%] h-[76%] bg-center bg-cover rounded-md drop-shadow-lg shadow-xl'>
        <div className='flex flex-col justify-center items-center w-full h-full backdrop-blur-md bg-white/30 rounded-lg font-mono p-4'>
          <h3 className='text-[#005582] text-[16px] lg:text-[22px] text-center'>
            Discover captivating art from diverse creators
          </h3>
          <h3 className='text-[52px] lg:text-[96px] border-y-2'>Inspiration</h3>
          <h3 className='text-[#005582] text-[16px] lg:text-[22px] text-center'>
            Explore stunning visuals that inspire and delight
          </h3>
          <div className='flex justify-between w-[55%] my-6 rounded-md'>
            <h3 className=' w-full text-center'>
              Secure your memories today – upload and save your images now to
              keep them safe and easily accessible anytime!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
