import Hero from '../Components/Layout/Hero';
import Brands from '../Components/Products/Brands';
import CategoryCard from '../Components/Products/CategoryCard';

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
]

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
        </div>
    )
}

export default Home;
