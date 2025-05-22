import { HiMagnifyingGlass, HiOutlineHeart, HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi2';
import Logo from '../../assets/logo.png';
import CartDrawer from '../Layout/CartDrawer';
import { useState } from 'react';

const SearchBar = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <div className="bg-blue-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 lg:gap-32">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="" className="h-12 w-h-12" />
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-black ml-2">TEKCITY</h1>
          </div>

          <div className="md:hidden flex items-center gap-6">
            {/* Account */}
            <div className="flex items-center">
              <button className='text-gray-600 hover:text-black'>
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

        <div className="hidden md:flex items-center gap-6">

          {/* Account */}
          <div className="flex items-center">
            <button className='text-gray-600 hover:text-black'>
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

      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
    </div>
  );
};

export default SearchBar;
