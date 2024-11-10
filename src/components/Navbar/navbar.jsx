import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger, CiLogin } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { GrGallery } from "react-icons/gr";
import { TiUploadOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import LoginModal from "../../Mod/navbar/Login";
import Login from "./mod/Login";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [openLogin, setOpenLogin] = useState(false);

  const content = (
    <>
      <div className='lg:hidden block absolute bg-[#daf8e3] top-10 w-full left-0 right-0 transition'>
        <ul className='text-center text-xl p-20'>
          <li className='my-4 py-4 border-b border-[#005582] text-[#005582] hover:border-[#0086ad] hover:rounded font-serif'>
            <Link
              className='flex items-center justify-center'
              to='/'
              onClick={handleClick}>
              <IoMdHome className='pr-1 text-[22px]' />
              HOME
            </Link>
          </li>
          <li className='my-4 py-4 border-b border-[#005582] text-[#005582] hover:border-[#0086ad] hover:rounded  font-serif'>
            <Link
              className='flex items-center justify-center'
              to='/gallery'
              onClick={handleClick}>
              <GrGallery className='pr-2 text-[22px]' />
              GALLERY
            </Link>
          </li>
          <li className='my-4 py-4 border-b border-[#005582] text-[#005582] hover:border-[#0086ad] hover:rounded  font-serif'>
            <Link
              className='flex items-center justify-center'
              to='/upload'
              onClick={handleClick}>
              <TiUploadOutline className='pr-2 text-[28px]' />
              UPLOAD
            </Link>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <nav className='fixed top-0 z-50 w-full bg-[#daf8e3]  drop-shadow-md'>
      <div className='h-16 flex justify-between items-center px-16 text-primary lg:py-5'>
        <h3 className='flex flex-col text-[18px] text-[#005582] font-mono p-2'>
          <span className='border-b-2'>
            <span className='font-serif font-bold'>G</span>alley
          </span>
          <span className='text-center text-[12px]'>Inventory</span>
        </h3>
        <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
          <div className='flex-10'>
            <ul className='flex gap-8 mr-16 text-[18px]'>
              <li className='hover:text-[#0086ad] transition border-b-2 border-[#005582] text-[#005582] hover:border-[#0086ad] cursor-pointer  font-mono'>
                <Link className='flex items-center justify-center' to='/'>
                  <IoMdHome className='pr-1 text-[22px]' />
                  HOME
                </Link>
              </li>
              <li className='hover:text-[#0086ad] transition border-b-2 border-[#005582] text-[#005582] hover:border-[#0086ad] cursor-pointer  font-mono'>
                <Link
                  className='flex items-center justify-center'
                  to='/gallery'>
                  <GrGallery className='pr-2 text-[22px]' />
                  GALLERY
                </Link>
              </li>
              <li className='hover:text-[#0086ad] transition border-b-2 border-[#005582] text-[#005582] hover:border-[#0086ad] cursor-pointer  font-mono'>
                <Link to='/upload' className='flex items-center justify-center'>
                  <TiUploadOutline className='pr-2 text-[28px]' />
                  UPLOAD
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button
          className='block sm:hidden transition text-[#005582]'
          onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuBurger />}
        </button>

        <LoginModal open={openLogin} onClose={() => setOpenLogin(false)}>
          <Login onClose={() => setOpenLogin(false)} />
        </LoginModal>
      </div>
    </nav>
  );
};

export default Navbar;
