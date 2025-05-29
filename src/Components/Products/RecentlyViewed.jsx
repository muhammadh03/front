import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';

import { getRecentlyViewed } from '../../Utils/recentlyViewed';
import { Link } from 'react-router-dom';


// import mobile from "../../assets/products/mobile.png";
// import laptop from "../../assets/products/laptop.png";
// import pc from "../../assets/products/pc.png";
// import monitor from "../../assets/products/monitor.png";
// import gamingConsole from "../../assets/products/gaming-console.png";
// import camera from "../../assets/products/camera.png";
// import printer from "../../assets/products/printer.png";
// import threeDprinter from "../../assets/products/3D-printer.png";
// import scanner from "../../assets/products/scanner.png";
// import faxMachine from "../../assets/products/fax-machine.png";
// import gamingFurniture from "../../assets/products/gaming-furniture.png";
// import officeFurniture from "../../assets/products/office-furniture.png";
// import drone from "../assets/products/drone.png";
// import playstationFive from "../assets/products/spiderman-playstation-5.png";
// import racingWheel from "../assets/products/Thrustmaster-T598-Racing-Wheel.png";
// import graphicsCardOne from "../assets/products/Gainward-Graphics-Card.png";
// import graphicsCardTwo from "../assets/products/MSI-GeForce-Graphics-card.png";
// import smartWatchOne from "../assets/products/HUAWEI-Watch-GT-5-Pro-Smartwatch.png";
// import smartWatchTwo from "../assets/products/SAMSUNG-Galaxy-Watch-6-Classic-Smartwatch.png";
// import mobileTwo from "../assets/products/mobile-2.png";
// import latopTwo from "../assets/products/laptop-2.png";



// const categoryDetails = [
//     {
//         title: "mobile",
//         image: mobile,
//         // size: 
//     },
//     {
//         title: "laptop",
//         image: laptop,
//         // size: 
//     },
//     {
//         title: "pc",
//         image: pc,
//         // size: 
//     },
//     {
//         title: "monitor",
//         image: monitor,
//         // size: 
//     },
//     {
//         title: "gaming-console",
//         image: gamingConsole,
//         // size: 
//     },
//     {
//         title: "camera",
//         image: camera,
//         // size: 
//     },
//     {
//         title: "printer",
//         image: printer,
//         // size: 
//     },
//     {
//         title: "3D-printer",
//         image: threeDprinter,
//         // size: 
//     },
//     {
//         title: "scanner",
//         image: scanner,
//         // size: 
//     },
//     {
//         title: "fax-machine",
//         image: faxMachine,
//         // size: 
//     },
//     {
//         title: "gaming-furniture",
//         image: gamingFurniture,
//         // size: 
//     },
//     {
//         title: "office-furniture",
//         image: officeFurniture,
//         // size: 
//     },
// ];


const RecentlyViewed = () => {

    const [recentProducts, setRecentProducts] = useState([]);

    useEffect(() => {
        const data = getRecentlyViewed();
        setRecentProducts(data);
    }, []);

    return (
        <div className='container mx-auto bg-gray-700'>
            <div className='px-2'>
                <h1 className='text-base md:text-2xl font-bold text-white'>
                    Recently Viewed Products
                </h1>
            </div>

            <div className='relative'>
                <Swiper
                    className="mySwiper"
                    slidesPerView={6}
                    spaceBetween={15}
                    loop={true}
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    navigation={{
                        prevEl: ".custom-prev-btn",
                        nextEl: ".custom-next-btn",
                    }}
                    breakpoints={{
                        // When the screen width is >= 640px (small screens)
                        375: {
                            slidesPerView: 2, // Show 2 cards
                            spaceBetween: 10,
                        },
                        // When the screen width is >= 768px (medium screens)
                        768: {
                            slidesPerView: 4, // Show 3 cards
                            spaceBetween: 10,
                        },
                        // When the screen width is >= 1024px (large screens)
                        1024: {
                            slidesPerView: 7, // Show 4 cards
                            spaceBetween: 20,
                        },
                        // When the screen width is >= 1280px
                        1280: {
                            slidesPerView: 7, // Show 5 cards
                            spaceBetween: 20,
                        },
                    }}
                >
                    {recentProducts.map(({ product }) => (
                        <SwiperSlide>
                            <Link
                                key={product._id}
                                to={`/product/${product._id}`}
                            >
                                <div className='pt-6 pb-10 px-2'>
                                    <div className="bg-white w-[9.5rem] md:w-[9.5rem] lg:w-[8.7rem] rounded-md border-2 border-gray-300 hover:border-blue-200 shadow-md hover:shadow-black hover:shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
                                        <div className="flex items-center justify-center h-48 p-4">
                                            <img src={product.image} alt="recently_viewed_image" className="w-24 md:w-28 h-auto" />
                                        </div>
                                    </div>
                                    {/* <RecentlyViewed image={image} /> */}
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full z-10'>
                    <button className='custom-prev-btn bg-gray-400/50 hover:bg-gray-400 rounded-full py-1 px-1 md:py-2 md:px-2 text-white'>
                        <HiOutlineChevronLeft className='w-5 lg:w-6 h-5 lg:h-6' />
                    </button>
                    <button className='custom-next-btn bg-gray-400/50 hover:bg-gray-400 rounded-full py-1 px-1 md:py-2 md:px-2 text-white'>
                        <HiOutlineChevronRight className='w-5 lg:w-6 h-5 lg:h-6' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RecentlyViewed;
