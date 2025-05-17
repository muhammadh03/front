import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { HiOutlineEye, HiOutlineHeart, HiOutlineScale } from 'react-icons/hi2';

// import gamingConsole from "../../assets/products/gaming-console.png";

const DailyOffers = ({ brand, title, price, image, reviews }) => {
    return (
        <div className="w-[10rem] md:w-[13.2rem] h-auto border-2 border-gray-200 hover:border-blue-200 rounded-md shadow-md hover:shadow-blue-300 hover:shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105">
            <div className='p-4'>
                <div className='h-40 relative flex items-center justify-center'>
                    <div className="">
                        <img src={image} alt="offer_image" className="w-24 md:w-28 lg:w-32 h-auto" />
                    </div>

                    <div className='absolute top-0 right-0 flex flex-col items-center gap-2'>
                        <button>
                            <HiOutlineHeart className='w-4 h-4 lg:w-6 lg:h-6' />
                        </button>
                        <button>
                            <HiOutlineEye className='w-4 h-4 lg:w-6 lg:h-6' />
                        </button>
                        <button>
                            <HiOutlineScale className='w-4 h-4 lg:w-6 lg:h-6' />
                        </button>
                    </div>
                </div>

                <div className="mt-2">
                    {/* Product Brand */}
                    <div>
                        <h1 className="text-xs text-gray-500">
                            {brand}
                        </h1>
                    </div>

                    {/* Product Title */}
                    <div className='h-9'>
                        <h1 className="text-xs md:text-base font-semibold text-gray-700 line-clamp-2">
                            {title}
                        </h1>
                    </div>

                    {/* Product Rate */}
                    <div className="flex items-center mt-1">
                        <span className="flex gap-1 md:gap-2">
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStarHalfAlt className="text-yellow-400" />
                            <span className="text-sm text-gray-500">
                                {reviews}
                            </span>
                        </span>
                    </div>

                    {/* Product Price */}
                    <div className="flex flex-col md:items-center md:gap-2 mt-1">
                        <span className="text-base md:text-lg font-semibold text-gray-500">
                            ${price}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                            $550.00
                        </span>
                    </div>

                    {/* Product Button */}
                    <div className='w-full flex flex-col gap-2 mt-2'>
                        <button className='w-full text-xs md:text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded-md'>
                            Buy Now
                        </button>
                        <button className='w-full text-xs md:text-sm font-semibold text-white bg-yellow-400 hover:bg-yellow-500 px-2 py-1 rounded-md'>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyOffers;
