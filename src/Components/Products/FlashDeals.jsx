import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link, } from "react-router-dom";
import { toast } from "sonner";
import { updateRecentlyViewed } from "../../Utils/recentlyViewed";
// import gamingConsole from "../../assets/products/gaming-console.png";

const FlashDeals = ({ flashDeals, addToCart }) => {

    // const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [disabledButtons, setDisabledButtons] = useState({});

    // const navigate = useNavigate();

    const handleAddToCart = (e, flashDealsId, flashDeals) => {

        e.preventDefault();
        e.stopPropagation();

        addToCart(flashDeals);

        setDisabledButtons((prev) => ({
            ...prev,
            [flashDealsId]: true
        }));

        setTimeout(() => {
            toast.success("Product added to cart", {
                duration: 1000,
            });

            setDisabledButtons((prev) => ({
                ...prev,
                [flashDealsId]: false
            }));
        }, 500);
    };

    // const handleBuyNow = (e) => {
    //     e.preventDefault();
    //     e.stopPropagation();

    //     navigate(`/product/${FlashDeals._id}`);
    // }

    return (
        <div>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-base md:text-2xl font-bold text-blue-600'>
                        Flash Deals
                    </h1>
                    <p className='w-28 md:w-auto text-xs md:text-base text-gray-500 '>
                        Special products in this month
                    </p>
                </div>

                <div className='w-52 md:w-auto flex gap-2 md:gap-4 mt-10.5 md:mt-8 text-[10px] md:text-base text-gray-500'>
                    <Link to="/flash-deals/collections/all" className='hover:text-blue-600'>All</Link>
                    <Link to="/flash-deals/collections/all" className='hover:text-blue-600 truncate'>BEST SELLERS</Link>
                    <Link to="/flash-deals/collections/all" className='hover:text-blue-600 truncate'>MOST VIEWED</Link>
                    <Link to="/flash-deals/collections/all" className='hover:text-blue-600 truncate'>TOP BRANDS</Link>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-6'>
                {flashDeals.map((flashDeal) => (
                    <Link
                        to={`/product/${flashDeal._id}`}
                        onClick={() => updateRecentlyViewed(flashDeal)}
                        key={flashDeal._id}
                        className=" w-[10rem] md:w-56 lg:w-[17.4rem] h-auto border-2 border-gray-200 hover:border-blue-200 rounded-md shadow-md hover:shadow-blue-300 hover:shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105">
                        <div className="flex flex-col items-center pt-4 px-2">
                            {/* Image */}
                            <div>
                                <img src={flashDeal.image} alt="" className="h-[5rem] md:h-[10rem]" />
                            </div>

                            {/* Countdown */}
                            <div className="w-full md:w-auto flex items-center gap-2 bg-blue-400 text-white text-xs md:text-base rounded-full py-1 px-2 md:px-5 lg:px-8 mt-4">
                                <span className="flex flex-col">
                                    <span className="font-medium">00</span>
                                    <span className="text-[0.5rem] md:text-xs -mt-[0.1rem] md:-mt-1">Day</span>
                                </span>
                                <span className="-mt-3 md:-mt-4 font-semibold">:</span>
                                <span className="flex flex-col items-center">
                                    <span className="font-medium">00</span>
                                    <span className="text-[0.5rem] md:text-xs -mt-[0.1rem] md:-mt-1">Hour</span>
                                </span>
                                <span className="-mt-3 md:-mt-4 font-semibold">:</span>
                                <span className="flex flex-col items-center">
                                    <span className="font-medium">00</span>
                                    <span className="text-[0.5rem] md:text-xs -mt-[0.1rem] md:-mt-1">Min</span>
                                </span>
                                <span className="-mt-3 md:-mt-4 font-semibold">:</span>
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
                                    {flashDeal.brand}
                                </h1>
                            </div>
                            {/* Product Title */}
                            <div className="h-14 md:h-20 lg:h-14">
                                <h1 className="text-xs md:text-base font-semibold text-gray-500">
                                    {flashDeal.title}
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
                                        {flashDeal.rating}
                                    </span>
                                </span>
                            </div>

                            {/* Product Price */}
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-base md:text-lg font-semibold text-gray-500">
                                    ${flashDeal.price}
                                </span>
                                <span className="text-sm text-gray-500 line-through">
                                    $1550.00
                                </span>
                            </div>

                            {/* Availability Progress Bar */}
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                {/* Filled Progress */}
                                <div className="bg-blue-400 h-2 rounded-full w-[70%]"></div>

                                {/* Dot */}
                                {/* <div className="absolute top-1/2 -translate-y-1/2 bg-green-700 w-6 h-6 rounded-full border-2 border-white left-[calc(75%-0.75rem)]"></div> */}
                            </div>

                            {/* Product Quantity */}
                            <div className="flex items-center justify-between gap-2 mt-1">
                                <span className="text-xs font-semibold text-gray-400">
                                    Available:
                                    <span className="text-base font-semibold text-gray-600">
                                        {flashDeal.available}
                                    </span>
                                </span>
                                <span className="text-xs font-semibold text-gray-400">
                                    Sold:
                                    <span className="text-base font-semibold text-gray-600">
                                        {flashDeal.sold}
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
                                <button
                                    // onClick={handleBuyNow}
                                    className='w-full text-xs md:text-sm font-semibold text-white bg-gray-300 hover:bg-blue-400 px-2 py-1 cursor-pointer rounded-md'
                                >
                                    Buy Now
                                </button>
                                <button
                                    disabled={disabledButtons[flashDeal._id] === true}
                                    onClick={(e) => handleAddToCart(e, flashDeal._id, flashDeal)}
                                    className={`w-full text-xs md:text-sm font-semibold text-white bg-gray-700  px-2 py-1 cursor-pointer rounded-md ${disabledButtons[flashDeal._id] ? "cursor-not-allowed opacity-50" : "hover:bg-gray-600"}`}
                                >
                                    {disabledButtons[flashDeal._id] === true ? 'Adding...' : 'Add to Cart'}
                                </button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default FlashDeals;
