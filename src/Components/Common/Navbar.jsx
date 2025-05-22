import { useState } from 'react'
import { BiSolidOffer } from 'react-icons/bi'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { IoMdArrowDropdown } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [activeMobileMenu, setActiveMobileMenu] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const toggleMobileMenu = (menuName) => {
        if (activeMobileMenu === menuName) {
            setActiveMobileMenu(null);
        } else {
            setActiveMobileMenu(menuName);
        }
    }

    return (
        <nav className='max-w-screen mx-auto px-4 sm:px-6 md:px-8 bg-black/85'>
            <div className='text-white text-xs md:text-sm flex items-center justify-between'>
                <div onClick={toggleMenu} className='relative bg-yellow-300/95 text-black hover:text-white transition-all duration-300 md:py-3 md:px-4 py-1 px-2  flex items-center gap-2 cursor-pointer'>
                    <HiBars3BottomLeft className='h-6 w-6' />
                    <p className='md:text-base'>All Categories</p>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className='bg-blue-100 w-[15rem] z-50 lg:hidden absolute top-[11.5rem] md:top-[10.8rem] left-4.7 md:left-8 rounded-md'>
                        <div className='flex flex-col gap-6 p-4 '>

                            <div className='flex justify-between group'>
                                <Link to="#" onClick={() => toggleMobileMenu('Computers & Laptops')} className=' text-black hover:text-yellow-400/95'>
                                    Computers & Laptops
                                    {activeMobileMenu === 'Computers & Laptops' && (
                                        <div className='bg-blue-100 text-black flex flex-col gap-2 py-2 px-4 rounded-md'>
                                            <Link>Home1</Link>
                                            <Link>Home1</Link>
                                            <Link>Home1</Link>
                                            <Link>Home1</Link>
                                            <Link>Home1</Link>
                                            <Link>Home1</Link>
                                        </div>
                                    )}
                                </Link>
                                <span className='text-black group-hover:text-yellow-400/95'>
                                    <IoMdArrowDropdown className='h-4 w-4' />
                                </span>
                            </div>

                            <div className='flex justify-between group'>
                                <Link to="#" onClick={() => toggleMobileMenu('Mobiles & Tablets')} className=' text-black hover:text-yellow-400/95'>
                                    Mobiles & Tablets
                                    {activeMobileMenu === 'Mobiles & Tablets' && (
                                        <div className='bg-blue-100 text-black flex flex-col gap-2 py-2 px-4 rounded-md'>
                                            <Link>Home1</Link>
                                            <Link>Home1</Link>
                                            <Link>Home1</Link>
                                            <Link>Home1</Link>
                                            <Link>Home1</Link>
                                            <Link>Home1</Link>
                                        </div>
                                    )}
                                </Link>
                                <span className='text-black group-hover:text-yellow-400/95'>
                                    <IoMdArrowDropdown className='h-4 w-4' />
                                </span>
                            </div>

                            <div className='flex justify-between group'>
                                <Link to="#" onClick={() => toggleMobileMenu('Office & Networking')} className=' text-black hover:text-yellow-400/95'>
                                    Office & Networking
                                    {activeMobileMenu === 'Office & Networking' && (
                                        <div className='bg-blue-100 text-black flex flex-col gap-2 py-2 px-4 rounded-md'>
                                            <Link>Home1</Link>
                                            <Link>Home1</Link>
                                            <Link>Home1</Link>
                                            <Link>Home1</Link>
                                            <Link>Home1</Link>
                                            <Link>Home1</Link>
                                        </div>
                                    )}
                                </Link>
                                <span className='text-black group-hover:text-yellow-400/95'>
                                    <IoMdArrowDropdown className='h-4 w-4' />
                                </span>
                            </div>

                            <div className='flex justify-between group'>
                                <Link to="#" onClick={() => toggleMobileMenu('Video Games & Consoles')} className=' text-black hover:text-yellow-400/95'>
                                    Video Games & Consoles
                                    {activeMobileMenu === 'Video Games & Consoles' && (
                                        <div className='bg-blue-100 text-black flex flex-col gap-2 py-2 px-4 rounded-md'>
                                            <Link>Home1</Link>
                                            <Link>Home1</Link>
                                            <Link>Home1</Link>
                                            <Link>Home1</Link>
                                            <Link>Home1</Link>
                                            <Link>Home1</Link>
                                        </div>
                                    )}
                                </Link>
                                <span className='text-black group-hover:text-yellow-400/95'>
                                    <IoMdArrowDropdown className='h-4 w-4' />
                                </span>
                            </div>
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
