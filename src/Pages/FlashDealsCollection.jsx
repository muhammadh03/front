import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { IoFilter } from 'react-icons/io5';

// import { updateRecentlyViewed } from '../Utils/recentlyViewed';
import BreadCrumbs from '../Components/Common/BreadCrumbs';
import FlashDeals from '../Components/Products/FlashDeals';
import SortOptions from '../Components/Products/SortOptions';
import AdvanceFilter from '../Components/Products/AdvanceFilter';

// import mobile from "../assets/products/mobile.png";
import laptop from "../assets/products/laptop.png";
import pc from "../assets/products/pc.png";
// import monitor from "../assets/products/monitor.png";
// import gamingConsole from "../assets/products/gaming-console.png";
// import camera from "../assets/products/camera.png";
// import printer from "../assets/products/printer.png";
// import threeDprinter from "../assets/products/3D-printer.png";
// import scanner from "../assets/products/scanner.png";
// import faxMachine from "../assets/products/fax-machine.png";
// import gamingFurniture from "../assets/products/gaming-furniture.png";
// import officeFurniture from "../assets/products/office-furniture.png";
import drone from "../assets/products/drone.png";
import playstationFive from "../assets/products/spiderman-playstation-5.png";
import racingWheel from "../assets/products/Thrustmaster-T598-Racing-Wheel.png";
// import graphicsCardOne from "../assets/products/Gainward-Graphics-Card.png";
// import graphicsCardTwo from "../assets/products/MSI-GeForce-Graphics-card.png";
// import smartWatchOne from "../assets/products/HUAWEI-Watch-GT-5-Pro-Smartwatch.png";
// import smartWatchTwo from "../assets/products/SAMSUNG-Galaxy-Watch-6-Classic-Smartwatch.png";
// import mobileTwo from "../assets/products/mobile-2.png";
// import latopTwo from "../assets/products/laptop-2.png";


const flashDealsDetails = [
    {
        _id: 1,
        brand: "Sony",
        title: "PlayStation 5 Marvel's Spider-Man 2 Limited Edition",
        price: 560.00,
        image: playstationFive,
        available: 38,
        sold: 12,
        rating: "4.5",
        reviews: 12
    },
    {
        _id: 2,
        brand: "Lenovo",
        title: "Lenovo LOQ 15IAX9 Gaming Laptop",
        price: 650.00,
        image: laptop,
        available: 15,
        sold: 5,
        rating: "4.8",
        reviews: 3
    },
    {
        _id: 3,
        brand: "DJI",
        title: "DJI Avatar Fly Smart Combo w/ FPV Goggles V2",
        price: 970.00,
        image: drone,
        available: 8,
        sold: 4,
        rating: "4.8",
        reviews: 4
    },
    {
        _id: 4,
        brand: "Dominion",
        title: "Gaming PC - Intel Core i7-14700KF 20 Cores 28 Threads",
        price: 3300.00,
        image: pc,
        available: 22,
        sold: 12,
        rating: "4.9",
        reviews: 10
    },
    {
        _id: 5,
        brand: "Thrustmaster",
        title: "Thrustmaster Racing Wheel",
        price: 650.00,
        image: racingWheel,
        available: 15,
        sold: 5,
        rating: "4.8",
        reviews: 3
    }
];

const FlashDealsCollection = () => {

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    }

    const addToCart = (flashDeals, dailyOffers) => {
        console.log("Product added to cart:", flashDeals, dailyOffers);
    }

    return (
        <Link to={`/flash-deals/${flashDealsDetails._id}`}>
            <div>
                <div className='bg-blue-100'>
                    <div className='max-w-screen mx-auto py-2 md:py-2 px-4 sm:px-6 md:px-8'>
                        <BreadCrumbs />
                    </div>
                </div>

                <div className='container mx-auto mt-8'>
                    {/* Flash Deals */}
                    <div className='w-full'>
                        <div className='flex items-center justify-between text-gray-700 border-2 border-gray-200 py-1.5 lg:py-2 px-3 lg:px-4 bg-blue-100 rounded-sm'>
                            <div
                                onClick={toggleFilter}
                                className='relative flex items-center gap-2 border-1 border-gray-200 bg-white py-0.5 px-2 md:px-4 rounded-sm cursor-pointer'
                            >
                                <IoFilter className='h-4 w-4 md:h-5 md:w-5 text-gray-500 hover:text-blue-700' />
                                <span className='text-xs md:text-sm font-semibold'>All Filter</span>
                            </div>

                            {isFilterOpen && (
                                <div className='absolute bg-white'>
                                    <AdvanceFilter isFilterOpen={isFilterOpen} toggleFilter={toggleFilter} />
                                </div>
                            )}

                            <div className='flex items-center gap-2'>
                                <span className='text-xs md:text-sm font-semibold'>Sort By</span>
                                <SortOptions />
                            </div>
                        </div>
                        <div className='mt-6'>
                            <FlashDeals key={flashDealsDetails._id} flashDeals={flashDealsDetails} addToCart={addToCart} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default FlashDealsCollection;







// {/* <Link
//             to={`/product/${flashDealsDetails._id}`}
//             onClick={() => updateRecentlyViewed(flashDealsDetails)}
//             className="w-[10.5rem] md:w-56 lg:w-[17.4rem] h-auto border-2 border-gray-200 hover:border-blue-200 rounded-md shadow-md hover:shadow-blue-300 hover:shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105"
//         >
//             <div className="flex flex-col items-center pt-4 px-2">
//                 {/* Image */}
//                 <div>
//                     <img src={flashDealsDetails.image} alt="" className="h-[5rem] md:h-[10rem]" />
//                 </div>

//                 {/* Countdown */}
//                 <div className="w-full md:w-auto flex items-center gap-2 bg-blue-400 text-white text-xs md:text-base rounded-full py-1 px-4 md:px-5 lg:px-8 mt-4">
//                     <span className="flex flex-col">
//                         <span className="font-medium">00</span>
//                         <span className="text-[0.5rem] md:text-xs -mt-[0.1rem] md:-mt-1">Day</span>
//                     </span>
//                     <span className="-mt-4 font-semibold">:</span>
//                     <span className="flex flex-col items-center">
//                         <span className="font-medium">00</span>
//                         <span className="text-[0.5rem] md:text-xs -mt-[0.1rem] md:-mt-1">Hour</span>
//                     </span>
//                     <span className="-mt-4 font-semibold">:</span>
//                     <span className="flex flex-col items-center">
//                         <span className="font-medium">00</span>
//                         <span className="text-[0.5rem] md:text-xs -mt-[0.1rem] md:-mt-1">Min</span>
//                     </span>
//                     <span className="-mt-4 font-semibold">:</span>
//                     <span className="flex flex-col items-center">
//                         <span className="font-medium">00</span>
//                         <span className="text-[0.5rem] md:text-xs -mt-[0.1rem] md:-mt-1">Sec</span>
//                     </span>
//                 </div>
//             </div>

//             <div className="flex flex-col pt-2 pb-4 px-4">
//                 {/* Product Brand */}
//                 <div>
//                     <h1 className="text-xs text-gray-500">
//                         {flashDealsDetails.brand}
//                     </h1>
//                 </div>
//                 {/* Product Title */}
//                 <div className="h-14 md:h-20 lg:h-14">
//                     <h1 className="text-xs md:text-base font-semibold text-gray-500">
//                         {flashDealsDetails.title}
//                     </h1>
//                 </div>

//                 {/* Product Rating */}
//                 <div className="flex items-center mt-1">
//                     <span className="flex gap-1 md:gap-2">
//                         <FaStar className="text-yellow-400" />
//                         <FaStar className="text-yellow-400" />
//                         <FaStar className="text-yellow-400" />
//                         <FaStar className="text-yellow-400" />
//                         <FaStarHalfAlt className="text-yellow-400" />
//                         <span className="text-sm text-gray-500">
//                             {flashDealsDetails.rating}
//                         </span>
//                     </span>
//                 </div>

//                 {/* Product Price */}
//                 <div className="flex items-center gap-2 mt-1">
//                     <span className="text-base md:text-lg font-semibold text-gray-500">
//                         ${flashDealsDetails.price}
//                     </span>
//                     <span className="text-sm text-gray-500 line-through">
//                         $1550.00
//                     </span>
//                 </div>

//                 {/* Availability Progress Bar */}
//                 <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
//                     {/* Filled Progress */}
//                     <div className="bg-blue-400 h-2 rounded-full w-[70%]"></div>

//                     {/* Dot */}
//                     {/* <div className="absolute top-1/2 -translate-y-1/2 bg-green-700 w-6 h-6 rounded-full border-2 border-white left-[calc(75%-0.75rem)]"></div> */}
//                 </div>

//                 {/* Product Quantity */}
//                 <div className="flex items-center justify-between gap-2 mt-1">
//                     <span className="text-xs font-semibold text-gray-400">
//                         Available:
//                         <span className="text-base font-semibold text-gray-600">
//                             {flashDealsDetails.available}
//                         </span>
//                     </span>
//                     <span className="text-xs font-semibold text-gray-400">
//                         Sold:
//                         <span className="text-base font-semibold text-gray-600">
//                             {flashDealsDetails.sold}
//                         </span>
//                     </span>
//                 </div>

//                 {/* Shipping Method */}
//                 <div className="flex items-center gap-2 mt-1">
//                     <span className="text-xs font-semibold text-gray-400">
//                         Shipping:
//                     </span>
//                     <span className="text-xs font-semibold text-gray-600">
//                         Free
//                     </span>
//                 </div>

//                 {/* Product Button */}
//                 <div className='w-full flex flex-col gap-2 mt-2'>
//                     <button
//                         // onClick={handleBuyNow}
//                         className='w-full text-xs md:text-sm font-semibold text-white bg-gray-300 hover:bg-blue-400 px-2 py-1 rounded-md'
//                     >
//                         Buy Now
//                     </button>
//                     {/* <button
//                         disabled={isButtonDisabled}
//                         onClick={handleAddToCart}
//                         className={`w-full text-xs md:text-sm font-semibold text-white bg-gray-700  px-2 py-1 rounded-md ${isButtonDisabled ? "cursor-not-allowed opacity-50" : "hover:bg-gray-600"}`}
//                     >
//                         {isButtonDisabled ? 'Adding...' : 'Add to Cart'}
//                     </button> */}
//                 </div>
//             </div>
//         </Link> */}
