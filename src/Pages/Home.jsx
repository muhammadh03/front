import { Link } from 'react-router-dom';

import Hero from '../Components/Layout/Hero';
import Brands from '../Components/Products/Brands';
import CategoryCard from '../Components/Products/CategoryCard';
import FlashDeals from '../Components/Products/FlashDeals';

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

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 mt-6'>
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
        </div>
    )
}

export default Home;
