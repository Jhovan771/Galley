import React from "react";
import Navbar from "../Navbar/navbar";

const Gallery_Layout = ({ children }) => {
  return (
    <div className='pt-36 lg:pt-16'>
      <Navbar />
      {children}
    </div>
  );
};

export default Gallery_Layout;
