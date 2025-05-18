import { FaStar, FaStarHalfAlt } from "react-icons/fa";
// import gamingConsole from "../../assets/products/gaming-console.png";

const FlashDeals = ({ brand, title, price, image, available, sold, rating }) => {
    return (
        <div className="w-[10.5rem] md:w-56 lg:w-[17.4rem] h-auto border-2 border-gray-200 hover:border-blue-200 rounded-md shadow-md hover:shadow-blue-300 hover:shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="flex flex-col items-center pt-4 px-2">
                {/* Image */}
                <div>
                    <img src={image} alt="" className="h-[5rem] md:h-[10rem]" />
                </div>

                {/* Countdown */}
                <div className="w-full md:w-auto flex items-center gap-2 bg-yellow-400/95 text-white text-xs md:text-base rounded-full py-1 px-4 md:px-5 lg:px-8 mt-4">
                    <span className="flex flex-col">
                        <span className="font-medium">00</span>
                        <span className="text-[0.5rem] md:text-xs -mt-[0.1rem] md:-mt-1">Day</span>
                    </span>
                    <span className="-mt-4 font-semibold">:</span>
                    <span className="flex flex-col items-center">
                        <span className="font-medium">00</span>
                        <span className="text-[0.5rem] md:text-xs -mt-[0.1rem] md:-mt-1">Hour</span>
                    </span>
                    <span className="-mt-4 font-semibold">:</span>
                    <span className="flex flex-col items-center">
                        <span className="font-medium">00</span>
                        <span className="text-[0.5rem] md:text-xs -mt-[0.1rem] md:-mt-1">Min</span>
                    </span>
                    <span className="-mt-4 font-semibold">:</span>
                    <span className="flex flex-col items-center">
                        <span className="font-medium">00</span>
                        <span className="text-[0.5rem] md:text-xs -mt-[0.1rem] md:-mt-1">Sec</span>
                    </span>
                </div>
            </div>

            <div className="flex flex-col pt-2 pb-4 px-4">
                {/* Product Brand */}
                <div>
                    <h1 className="text-xs text-gray-500">
                        {brand}
                    </h1>
                </div>
                {/* Product Title */}
                <div className="h-14 md:h-20 lg:h-14">
                    <h1 className="text-xs md:text-base font-semibold text-gray-500">
                        {title}
                    </h1>
                </div>

                {/* Product Rating */}
                <div className="flex items-center mt-1">
                    <span className="flex gap-1 md:gap-2">
                        <FaStar className="text-yellow-400" />
                        <FaStar className="text-yellow-400" />
                        <FaStar className="text-yellow-400" />
                        <FaStar className="text-yellow-400" />
                        <FaStarHalfAlt className="text-yellow-400" />
                        <span className="text-sm text-gray-500">
                            {rating}
                        </span>
                    </span>
                </div>

                {/* Product Price */}
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-base md:text-lg font-semibold text-gray-500">
                        ${price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                        $1550.00
                    </span>
                </div>

                {/* Availability Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    {/* Filled Progress */}
                    <div className="bg-yellow-400 h-2 rounded-full w-[70%]"></div>

                    {/* Dot */}
                    {/* <div className="absolute top-1/2 -translate-y-1/2 bg-green-700 w-6 h-6 rounded-full border-2 border-white left-[calc(75%-0.75rem)]"></div> */}
                </div>

                {/* Product Quantity */}
                <div className="flex items-center justify-between gap-2 mt-1">
                    <span className="text-xs font-semibold text-gray-400">
                        Available:
                        <span className="text-base font-semibold text-gray-600">
                            {available}
                        </span>
                    </span>
                    <span className="text-xs font-semibold text-gray-400">
                        Sold:
                        <span className="text-base font-semibold text-gray-600">
                            {sold}
                        </span>
                    </span>
                </div>

                {/* Shipping Method */}
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-semibold text-gray-400">
                        Shipping:
                    </span>
                    <span className="text-xs font-semibold text-gray-600">
                        Free
                    </span>
                </div>

                {/* Product Button */}
                <div className='w-full flex flex-col gap-2 mt-2'>
                    <button className='w-full text-xs md:text-sm font-semibold text-white bg-gray-300 hover:bg-blue-500 px-2 py-1 rounded-md'>
                        Buy Now
                    </button>
                    <button className='w-full text-xs md:text-sm font-semibold text-white bg-yellow-300 hover:bg-yellow-500 px-2 py-1 rounded-md'>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FlashDeals;
