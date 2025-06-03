import { HiMagnifyingGlass, HiOutlineHeart, HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi2';
import Logo from '../../assets/logo.png';
import CartDrawer from '../Layout/CartDrawer';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const accountRef = useRef(null);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
    setIsAccountOpen(false);
  };

  const toggleAccount = () => {
    setIsAccountOpen(!isAccountOpen);
    setDrawerOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (accountRef.current && !accountRef.current.contains(event.target)) {
        setIsAccountOpen(false);
      }
    };

    if (isAccountOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, [isAccountOpen]);

  return (
    <div className="bg-blue-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 lg:gap-32">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="" className="h-12 w-h-12" />
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-black ml-2">TEKCITY</h1>
          </div>

          {/* Icons for mobile screens */}
          <div className="md:hidden flex items-center gap-6">
            {/* Account */}
            <div className=" flex items-center" >
              <button onClick={toggleAccount} className='text-gray-600 hover:text-black'>
                <HiOutlineUser className="h-6 w-6 cursor-pointer" />
              </button>
            </div>

            {/* Wishlist */}
            <div className="flex items-center">
              <button className='text-gray-600 hover:text-black'>
                <HiOutlineHeart className="h-6 w-6 cursor-pointer" />
              </button>
            </div>

            {/* Cart */}
            <div className="flex items-center">
              <button onClick={toggleCartDrawer} className='relative text-gray-600 hover:text-black'>
                <HiOutlineShoppingBag className="h-6 w-6 cursor-pointer" />
                <span className='absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full'>
                  2
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search"
            className="w-[22rem] md:w-[25rem] lg:w-[40rem] py-1 px-2 md:py-2 md:px-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button className='absolute right-1 bg-blue-500 hover:bg-blue-600 text-white py-0.5 px-2 md:py-1.5 md:px-4  rounded-md cursor-pointer'>
            <HiMagnifyingGlass className="h-5 w-5" />
          </button>
        </div>

        {/* Icons for medium and large screens */}
        <div className="hidden md:flex items-center gap-6">
          {/* Account */}
          <div className=" flex items-center" >
            <button onClick={toggleAccount} className='text-gray-600 hover:text-black'>
              <HiOutlineUser className="h-6 w-6 cursor-pointer" />
            </button>
          </div>

          {/* Wishlist */}
          <div className="flex items-center">
            <button className='text-gray-600 hover:text-black'>
              <HiOutlineHeart className="h-6 w-6 cursor-pointer" />
            </button>
          </div>

          {/* Cart */}
          <div className="flex items-center">
            <button onClick={toggleCartDrawer} className='relative text-gray-600 hover:text-black'>
              <HiOutlineShoppingBag className="h-6 w-6 cursor-pointer" />
              <span className='absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full'>
                2
              </span>
            </button>
          </div>
        </div>
      </div>
      {isAccountOpen && (
        <div ref={accountRef} className='absolute top-24 right-0 w-36 md:w-40 bg-blue-100 text-gray-500 text-sm flex flex-col gap-2 p-4 z-50 rounded-md'>
          <Link
            to="/login"
            className='hover:text-blue-700'
            onClick={() => setIsAccountOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/register"
            className='hover:text-blue-700'
            onClick={() => setIsAccountOpen(false)}
          >
            Register
          </Link>
        </div>
      )}

      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
    </div>
  );
};

export default SearchBar;
