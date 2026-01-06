import React from 'react'
import { Link } from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <nav className='bg-white py-4 w-full shadow fixed top-0 right-0 left-0 z-50 '>
        <div className=' flex justify-between items-center w-full container max-w-300 mx-auto '>
            {/* Logo */}
            <h2 className='text-2xl font-semibold text-gray-800/80'>Hum<span className='text-red-600/80'>Culture</span></h2>
            {/* Links */}
            <div className="links flex gap-6">
                <Link to="/">HOME</Link>
                <Link to="/dishes">DISHES</Link>
                <Link to="/contact">CONTACT</Link>
                <Link to="/useapp">USE APP</Link>
            </div>
            {/* Icons */}
            <div className='flex gap-4 items-center'>
                <FiShoppingCart size={21} className='text-gray-500' />
                <CiUser size={20 } />
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
