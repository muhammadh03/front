import { IoFilter } from 'react-icons/io5';
import BreadCrumbs from '../Components/Common/BreadCrumbs';
import FilterSidebar from '../Components/Products/FilterSidebar';
import ProductGrid from '../Components/Products/ProductGrid';
import SortOptions from '../Components/Products/SortOptions';


import appleOne from "../assets/products/laptops/apple-1.png";
import appleTwo from "../assets/products/laptops/apple-2.png";
import appleThree from "../assets/products/laptops/apple-3.png";
import dellOne from "../assets/products/laptops/dell-1.png";
import dellTwo from "../assets/products/laptops/dell-2.png";
import dellThree from "../assets/products/laptops/dell-3.png";
import dellFour from "../assets/products/laptops/dell-4.png";
import hpOne from "../assets/products/laptops/hp-1.png";
import hpTwo from "../assets/products/laptops/hp-2.png";
import hpThree from "../assets/products/laptops/hp-3.png";
import lenovoOne from "../assets/products/laptops/lenovo-1.png";
import lenovoTwo from "../assets/products/laptops/lenovo-2.png";
import lenovoThree from "../assets/products/laptops/lenovo-3.png";
import lenovoFour from "../assets/products/laptops/lenovo-4.png";
import msiOne from "../assets/products/laptops/msi-1.png";
import msiTwo from "../assets/products/laptops/msi-2.png";
import msiThree from "../assets/products/laptops/msi-3.png";
import msiFour from "../assets/products/laptops/msi-4.png";
import { useState } from 'react';
import AdvanceFilter from '../Components/Products/AdvanceFilter';


const laptopDetails = [
    {
        _id: 1,
        brand: "Apple",
        title: "PlayStation 5 Marvel's Spider-Man 2 Limited Edition",
        price: "560.00",
        image: appleOne,
        available: "38",
        sold: "12",
        rating: "4.5",
        reviews: "12"
    },
    {
        _id: 2,
        brand: "Apple",
        title: "Lenovo LOQ 15IAX9 Gaming Laptop",
        price: "650.00",
        image: appleTwo,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    },
    {
        _id: 3,
        brand: "Apple",
        title: "DJI Avatar Fly Smart Combo w/ FPV Goggles V2",
        price: "970.00",
        image: appleThree,
        available: "8",
        sold: "4",
        rating: "4.8",
        reviews: "4"
    },
    {
        _id: 4,
        brand: "Dell",
        title: "Gaming PC - Intel Core i7-14700KF 20 Cores 28 Threads",
        price: "3300.00",
        image: dellOne,
        available: "22",
        sold: "12",
        rating: "4.9",
        reviews: "10"
    },
    {
        _id: 5,
        brand: "Dell",
        title: "Hurakan Klipper 3D Printer, Dual-Tone Colors & Mechanical Style",
        price: "650.00",
        image: dellTwo,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    },
    {
        _id: 6,
        brand: "Dell",
        title: "Hurakan Klipper 3D Printer, Dual-Tone Colors & Mechanical Style",
        price: "650.00",
        image: dellThree,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    },
    {
        _id: 7,
        brand: "Dell",
        title: "Hurakan Klipper 3D Printer, Dual-Tone Colors & Mechanical Style",
        price: "650.00",
        image: dellFour,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    },
    {
        _id: 8,
        brand: "HP",
        title: "Battlefield Blaze Gaming Setup",
        price: "650.00",
        image: hpOne,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    },
    {
        _id: 9,
        brand: "HP",
        title: "Thrustmaster T598 Racing Wheel",
        price: "550.00",
        image: hpTwo,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    },
    {
        _id: 10,
        brand: "HP",
        title: "Gainward GeForce RTX 3070 Phoenix V1 Edition",
        price: "514.00",
        image: hpThree,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    },
    {
        _id: 11,
        brand: "Lenovo",
        title: "MSI GeForce RTX 4090 VENTUS 3X OC Graphics Card",
        price: "4857.00",
        image: lenovoOne,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    },
    {
        _id: 12,
        brand: "Lenovo",
        title: "HUAWEI Watch GT 5 Pro 46mm Smartwatch",
        price: "264.00",
        image: lenovoTwo,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    },
    {
        _id: 13,
        brand: "Lenovo",
        title: "SAMSUNG Galaxy Watch 6 Classic 43mm Smartwatch",
        price: "264.00",
        image: lenovoThree,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    },
    {
        _id: 14,
        brand: "Lenovo",
        title: "SAMSUNG Galaxy Watch 6 Classic 43mm Smartwatch",
        price: "264.00",
        image: lenovoFour,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    },
    {
        _id: 15,
        brand: "MSI",
        title: "SAMSUNG Galaxy Watch 6 Classic 43mm Smartwatch",
        price: "264.00",
        image: msiOne,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    },
    {
        _id: 16,
        brand: "MSI",
        title: "SAMSUNG Galaxy Watch 6 Classic 43mm Smartwatch",
        price: "264.00",
        image: msiTwo,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    },
    {
        _id: 17,
        brand: "MSI",
        title: "SAMSUNG Galaxy Watch 6 Classic 43mm Smartwatch",
        price: "264.00",
        image: msiThree,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    },
    {
        _id: 18,
        brand: "MSI",
        title: "SAMSUNG Galaxy Watch 6 Classic 43mm Smartwatch",
        price: "264.00",
        image: msiFour,
        available: "15",
        sold: "5",
        rating: "4.8",
        reviews: "3"
    }
];

const Collection = () => {

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    }

    return (
        <div>
            <div className='bg-blue-100'>
                <div className='max-w-screen mx-auto py-2 md:py-2 px-4 sm:px-6 md:px-8'>
                    <BreadCrumbs />
                </div>
            </div>

            <div className='container mx-auto w-full flex items-start gap-6 lg:gap-10 mt-4'>
                {/* Filter Sidebar */}
                <div className='hidden md:block md:w-[25%] lg:w-[20%]'>
                    <FilterSidebar />
                </div>
                {/* Product Grid */}
                <div className='w-full md:w-[75%] lg:w-[80%]'>
                    <div className='flex items-center justify-between text-gray-700 border-2 border-gray-200 py-1.5 px-3 lg:px-4 bg-blue-100 rounded-sm'>
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
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mt-6'>
                        {laptopDetails.map((product) => (
                            <ProductGrid key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Collection;
