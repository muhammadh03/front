import { useState } from 'react'
import { BiSolidOffer } from 'react-icons/bi'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className='max-w-screen mx-auto px-4 sm:px-6 md:px-8 bg-black/85'>
            <div className='text-white text-xs md:text-sm flex items-center justify-between'>
                <div className='relative bg-yellow-300/95 text-black hover:text-white transition-all duration-300 md:py-3 md:px-4 py-1 px-2  flex items-center gap-2 cursor-pointer'>
                    <HiBars3BottomLeft className='h-6 w-6' />
                    <p onClick={toggleMenu} className='md:text-base'>All Categories</p>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className='lg:hidden absolute top-[12rem] md:top-[10.8rem] left-4.7 md:left-8'>
                        <div className='flex flex-col gap-6 bg-white p-4 '>
                            <Link to="#" className='text-black hover:text-yellow-400/95'>Computers & Laptops</Link>
                            <Link to="#" className='text-black hover:text-yellow-400/95'>Mobiles & Tablets</Link>
                            <Link to="#" className='text-black hover:text-yellow-400/95'>Office & Networking</Link>
                            <Link to="#" className='text-black hover:text-yellow-400/95'>Video Games & Consoles</Link>
                        </div>
                    </div>
                )}

                <div className='hidden lg:flex gap-6'>
                    <Link to="#" className='nav-link'>Computers & Laptops</Link>
                    <Link to="#" className='nav-link'>Mobiles & Tablets</Link>
                    <Link to="#" className='nav-link'>Office & Networking</Link>
                    <Link to="#" className='nav-link'>Video Games & Consoles</Link>
                </div>

                <div className='bg-yellow-300/95 text-black hover:text-white transition-all duration-300 md:py-3 md:px-4 py-1 px-2  flex items-center gap-2 cursor-pointer'>
                    <BiSolidOffer className='h-6 w-6' />
                    <Link to="#" className='md:text-base'>Offers</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
