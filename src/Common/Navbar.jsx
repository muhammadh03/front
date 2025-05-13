import React from 'react'
import { BiSolidOffer } from 'react-icons/bi'
import { HiBars3BottomLeft, HiOutlineBars3BottomLeft } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='max-w-screen mx-auto py-2 md:py-3 px-4 sm:px-6 md:px-8 bg-black/85'>
            <div className='text-white text-sm flex items-center justify-between'>
                <div className='bg-yellow-400/95 text-black hover:text-white transition-all duration-300 md:py-2 md:px-4 py-1 px-2 rounded-md flex items-center gap-2'>
                    {/* <HiBars3BottomLeft className='h-5 w-5' /> */}
                    <HiOutlineBars3BottomLeft className='h-6 w-6' />
                    <p>All Categories</p>
                </div>

                <div className='flex gap-6'>
                    <Link to="#" className='nav-link'>Computers & Laptops</Link>
                    <Link to="#" className='nav-link'>Mobiles & Tablets</Link>
                    <Link to="#" className='nav-link'>Office & Networking</Link>
                    <Link to="#" className='nav-link'>Video Games & Consoles</Link>
                </div>

                <div className='bg-yellow-400/95 text-black hover:text-white transition-all duration-300 md:py-2 md:px-4 py-1 px-2 rounded-md flex items-center gap-2'>
                    <BiSolidOffer className='h-6 w-6' />
                    <Link to="#">Offers</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
