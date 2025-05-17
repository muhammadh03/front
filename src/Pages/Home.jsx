import { Link } from 'react-router-dom';

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

import Hero from '../Components/Layout/Hero';
import Brands from '../Components/Products/Brands';
import CategoryCard from '../Components/Products/CategoryCard';
import FlashDeals from '../Components/Products/FlashDeals';
import DailyOffers from '../Components/Products/DailyOffers';

import mobile from "../assets/products/mobile.png";
import laptop from "../assets/products/laptop.png";
import pc from "../assets/products/pc.png";
import monitor from "../assets/products/monitor.png";
import gamingConsole from "../assets/products/gaming-console.png";
import camera from "../assets/products/camera.png";
import printer from "../assets/products/printer.png";
import threeDprinter from "../assets/products/3D-printer.png";
import scanner from "../assets/products/scanner.png";
import faxMachine from "../assets/products/fax-machine.png";
import gamingFurniture from "../assets/products/gaming-furniture.png";
import officeFurniture from "../assets/products/office-furniture.png";
import drone from "../assets/products/drone.png";
import playstationFive from "../assets/products/spiderman-playstation-5.png";
import racingWheel from "../assets/products/Thrustmaster-T598-Racing-Wheel.png";
import graphicsCardOne from "../assets/products/Gainward-Graphics-Card.png";
import graphicsCardTwo from "../assets/products/MSI-GeForce-Graphics-card.png";
import smartWatchOne from "../assets/products/HUAWEI-Watch-GT-5-Pro-Smartwatch.png";
import smartWatchTwo from "../assets/products/SAMSUNG-Galaxy-Watch-6-Classic-Smartwatch.png";
import BestSellingProducts from '../Components/Products/BestSellingProducts';


const categoryDetails = [
    {
        title: "mobile",
        image: mobile,
        // size: 
    },
    {
        title: "laptop",
        image: laptop,
        // size: 
    },
    {
        title: "pc",
        image: pc,
        // size: 
    },
    {
        title: "monitor",
        image: monitor,
        // size: 
    },
    {
        title: "gaming-console",
        image: gamingConsole,
        // size: 
    },
    {
        title: "camera",
        image: camera,
        // size: 
    },
    {
        title: "printer",
        image: printer,
        // size: 
    },
    {
        title: "3D-printer",
        image: threeDprinter,
        // size: 
    },
    {
        title: "scanner",
        image: scanner,
        // size: 
    },
    {
        title: "fax-machine",
        image: faxMachine,
        // size: 
    },
    {
        title: "gaming-furniture",
        image: gamingFurniture,
        // size: 
    },
    {
        title: "office-furniture",
        image: officeFurniture,
        // size: 
    },
];


const flashDealsDetails = [
    {
        brand: "Sony",
        title: "PlayStation 5 Marvel's Spider-Man 2 Limited Edition",
        price: "560.00",
        image: playstationFive,
        available: "38",
        sold: "12",
        rating: "4.5",
        reviews: "12"
    },
    {
        brand: "Lenovo",
        title: "Lenovo LOQ 15IAX9 Gaming Laptop",
        price: "650.00",
        image: laptop,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    },
    {
        brand: "DJI",
        title: "DJI Avatar Fly Smart Combo w/ FPV Goggles V2",
        price: "970.00",
        image: drone,
        available: "8",
        sold: "4",
        rating: "4.8",
        reviews: "4"
    },
    {
        brand: "Dominion",
        title: "Gaming PC - Intel Core i7-14700KF 20 Cores 28 Threads",
        price: "3300.00",
        image: pc,
        available: "22",
        sold: "12",
        rating: "4.9",
        reviews: "10"
    },
];


const dailyOffersDetails = [
    {
        brand: "Sony",
        title: "PlayStation 5 Marvel's Spider-Man 2 Limited Edition",
        price: "560.00",
        image: playstationFive,
        available: "38",
        sold: "12",
        rating: "4.5",
        reviews: "12"
    },
    {
        brand: "LENOVO",
        title: "Lenovo LOQ 15IAX9 Gaming Laptop",
        price: "650.00",
        image: laptop,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    },
    {
        brand: "DJI",
        title: "DJI Avatar Fly Smart Combo w/ FPV Goggles V2",
        price: "970.00",
        image: drone,
        available: "8",
        sold: "4",
        rating: "4.8",
        reviews: "4"
    },
    {
        brand: "DOMINION",
        title: "Gaming PC - Intel Core i7-14700KF 20 Cores 28 Threads",
        price: "3300.00",
        image: pc,
        available: "22",
        sold: "12",
        rating: "4.9",
        reviews: "10"
    },
    {
        brand: "BIQU",
        title: "Hurakan Klipper 3D Printer, Dual-Tone Colors & Mechanical Style",
        price: "650.00",
        image: threeDprinter,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    },
    {
        brand: "COUGAR",
        title: "Battlefield Blaze Gaming Setup",
        price: "650.00",
        image: gamingFurniture,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    },
    {
        brand: "THRUSTMASTER",
        title: "Thrustmaster T598 Racing Wheel",
        price: "550.00",
        image: racingWheel,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    },
    {
        brand: "GAINWARD",
        title: "Gainward GeForce RTX 3070 Phoenix V1 Edition",
        price: "514.00",
        image: graphicsCardOne,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    },
    {
        brand: "MSI",
        title: "MSI GeForce RTX 4090 VENTUS 3X OC Graphics Card",
        price: "4857.00",
        image: graphicsCardTwo,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    },
    {
        brand: "HUAWEI",
        title: "HUAWEI Watch GT 5 Pro 46mm Smartwatch",
        price: "264.00",
        image: smartWatchOne,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    },
    {
        brand: "SAMSUNG",
        title: "SAMSUNG Galaxy Watch 6 Classic 43mm Smartwatch",
        price: "264.00",
        image: smartWatchTwo,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    }
];

const Home = () => {
    return (
        <div>
            <Hero />
            <Brands />
            <div className='container mx-auto mt-6'>
                <div>
                    <h1 className='text-base md:text-2xl font-bold text-blue-600'>
                        Featured Categories
                    </h1>
                    <p className='text-xs md:text-base text-gray-500'>
                        Choose your favorite product from this category
                    </p>
                </div>
                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6'>
                    {categoryDetails.map(({ title, image }) => (
                        <CategoryCard
                            key={title}
                            title={title}
                            image={image}
                        />
                    ))}
                </div>
            </div>

            {/* FLASH DEALS */}
            <div className='container mx-auto mt-6'>
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
                        <Link to="#" className='hover:text-blue-600'>All</Link>
                        <Link to="#" className='hover:text-blue-600 truncate'>BEST SELLERS</Link>
                        <Link to="#" className='hover:text-blue-600 truncate'>MOST VIEWED</Link>
                        <Link to="#" className='hover:text-blue-600 truncate'>TOP BRANDS</Link>
                    </div>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-6'>
                    {flashDealsDetails.map(({ brand, title, price, image, available, sold, rating, reviews }) => (
                        <FlashDeals
                            key={title}
                            brand={brand}
                            title={title}
                            price={price}
                            image={image}
                            available={available}
                            sold={sold}
                            rating={rating}
                            reviews={reviews}
                        />
                    ))}
                </div>
            </div>

            {/* DAILY OFFERS */}
            <div className='max-w-screen mx-auto py-2 md:py-4 px-4 sm:px-6 md:px-6 mt-6'>
                <div className='px-2'>
                    <h1 className='text-base md:text-2xl font-bold text-blue-600'>
                        Daily Offers
                    </h1>
                    <p className='text-xs md:text-base text-gray-500 '>
                        New discounts every day. Shop and save now
                    </p>
                </div>

                <div className='relative'>
                    <Swiper
                        className="mySwiper"
                        slidesPerView={5}
                        spaceBetween={15}
                        loop={true}
                        modules={[Navigation, Autoplay]}
                        // navigation={true}
                        // autoplay={{
                        //     delay: 2000,
                        //     disableOnInteraction: false
                        // }}
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
                                slidesPerView: 3, // Show 3 cards
                                spaceBetween: 10,
                            },
                            // When the screen width is >= 1024px (large screens)
                            1024: {
                                slidesPerView: 4, // Show 4 cards
                                spaceBetween: 20,
                            },
                            // When the screen width is >= 1280px
                            1280: {
                                slidesPerView: 5, // Show 5 cards
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {dailyOffersDetails.map(({ brand, title, price, image, rating, reviews }) => (
                            <SwiperSlide key={title}>
                                <div className='pt-6 pb-10 px-2'>
                                    <DailyOffers
                                        brand={brand}
                                        title={title}
                                        price={price}
                                        image={image}
                                        rating={rating}
                                        reviews={reviews}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full z-10'>
                        <button className='custom-prev-btn bg-blue-400/50 rounded-full py-1 px-1 md:py-2 md:px-2 text-white'>
                            <HiOutlineChevronLeft className='w-5 lg:w-6 h-5 lg:h-6' />
                        </button>
                        <button className='custom-next-btn bg-blue-400/50 rounded-full py-1 px-1 md:py-2 md:px-2 text-white'>
                            <HiOutlineChevronRight className='w-5 lg:w-6 h-5 lg:h-6' />
                        </button>
                    </div>
                    {/* {dailyOffersDetails.map(({ brand, title, price, image, rating, reviews }) => (
                        <SwiperSlide key={title}>
                            <DailyOffers
                                brand={brand}
                                title={title}
                                price={price}
                                image={image}
                                rating={rating}
                                reviews={reviews}
                            />
                        </SwiperSlide>
                    ))} */}
                </div>
            </div>

            <div>
                <BestSellingProducts />
            </div>
        </div>
    )
}

export default Home;
