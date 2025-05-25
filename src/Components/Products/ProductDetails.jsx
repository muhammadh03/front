import React, { useEffect, useState } from 'react'
import BreadCrumbs from '../Common/BreadCrumbs';

import laptop from "../../assets/products/laptop.png";
import lenovoTwo from "../../assets/products/lenovo-2.png"
import lenovoThree from "../../assets/products/lenovo-3.png"
import lenovoFour from "../../assets/products/lenovo-4.png"
import lenovoFive from "../../assets/products/lenovo-5.png"
import lenovoSix from "../../assets/products/lenovo-6.png"
import lenovoSeven from "../../assets/products/lenovo-7.png"
import lenovoEight from "../../assets/products/lenovo-8.png"
import lenovoNine from "../../assets/products/lenovo-9.png"
import lenovoTen from "../../assets/products/lenovo-10.png"
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { HiOutlineHeart, HiOutlineScale } from 'react-icons/hi2';


const selectedProduct = {
    _id: 2,
    brand: "Lenovo",
    title: "Lenovo LOQ 15IAX9 Gaming Laptop",
    seller: "Tek city",
    price: 650.00,
    available: 15,
    sold: 5,
    rating: "4.8",
    reviews: 3,
    images: [
        {
            image: laptop,
            altText: "image_1"
        },
        {
            image: lenovoTwo,
            altText: "image_2"
        },
        {
            image: lenovoThree,
            altText: "image_3"
        },
        {
            image: lenovoFour,
            altText: "image_4"
        },
        {
            image: lenovoFive,
            altText: "image_5"
        },
        {
            image: lenovoSix,
            altText: "image_6"
        },
        {
            image: lenovoSeven,
            altText: "image_7"
        },
        {
            image: lenovoEight,
            altText: "image_8"
        },
        {
            image: lenovoNine,
            altText: "image_9"
        },
        {
            image: lenovoTen,
            altText: "image_10"
        },
    ],
};

const ProductDetails = () => {

    const [mainImage, setMainImage] = useState("null");

    useEffect(() => {
        if (selectedProduct?.images?.length > 0) {
            setMainImage(selectedProduct.images[0].image);
        }
    }, [selectedProduct]);

    return (
        <div>
            <div className='bg-blue-100'>
                <div className='max-w-screen mx-auto py-2 md:py-2 px-4 sm:px-6 md:px-8'>
                    <BreadCrumbs />
                </div>
            </div>
            <div className='container mx-auto w-full mt-6'>
                <div className='flex flex-col lg:flex-row gap-4'>
                    <div className='w-full lg:w-2/5 flex flex-row items-center gap-5'>
                        {/* Left Thumbnails */}
                        <div className='sticky overflow-y-scroll custom-scrollbar hide-scrollbar h-80 md:h-[34rem] lg:h-[32rem]'>
                            {selectedProduct.images.map((image, index) => (
                                <div className={`w-20 md:w-32 lg:w-24 h-24 md:h-36 lg:h-[7.2rem] border  hover:border-2 rounded-md flex flex-col items-center justify-center p-2 mb-4 cursor-pointer ${mainImage === image.image ? "border-2 border-blue-200" : "border-gray-400"}`}>
                                    <img
                                        key={index}
                                        src={image.image}
                                        alt={image.altText || `Thumbnail ${index}`}
                                        className="w-full h-auto object-cover"
                                        onClick={() => setMainImage(image.image)}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="w-60 md:w-[35rem] lg:w-3/4 h-[20rem] md:h-[34rem] lg:h-[32rem] px-4 border-2 border-blue-200 rounded-md flex items-center">
                            <img
                                src={mainImage}
                                alt="Main"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                    <div className='w-full lg:w-3/5'>
                        <div className='flex flex-col gap-4'>
                            {/* Title */}
                            <div>
                                <h1 className='text-2xl font-semibold'>Lenovo LOQ 15IAX9 Gaming Laptop, 15.6", English (UK) Keyboard, FreeDOS, 83GS00KFPS</h1>
                            </div>

                            {/* Seller & Rating */}
                            <div>
                                <div>
                                    by <span className='text-sm font-semibold text-gray-700'>Tek City</span>
                                </div>
                                <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-2'>
                                    <div className="flex items-center mt-1">
                                        <span className="flex gap-1 md:gap-2">
                                            <FaStar className="text-yellow-400" />
                                            <FaStar className="text-yellow-400" />
                                            <FaStar className="text-yellow-400" />
                                            <FaStar className="text-yellow-400" />
                                            <FaStarHalfAlt className="text-yellow-400" />
                                            <span className="text-sm text-gray-500">
                                                4.8
                                            </span>
                                        </span>
                                    </div>

                                    <div className='flex gap-4 md:gap-6'>
                                        <button className='text-gray-400 hover:text-blue-600 flex items-center gap-2'>
                                            <HiOutlineHeart className='w-8 h-8 lg:w-8 lg:h-8' />
                                            <span>Add to wishlist</span>
                                        </button>
                                        <button className='text-gray-400 hover:text-blue-600 flex items-center gap-2'>
                                            <HiOutlineScale className='w-8 h-8 lg:w-8 lg:h-8' />
                                            <span>Compare</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Price */}
                            <div>
                                <h1 className='font-semibold text-gray-700'>
                                    <span className='text-2xl'>$</span> <span className='text-xl font-bold'>650.00</span>
                                </h1>
                            </div>

                            {/* Description */}
                            <div>
                                <div className='text-gray-500 text-sm'>
                                    <ul className='leading-7'>
                                        <li>
                                            <span className='font-semibold text-gray-700'>Brand: </span>
                                            <span>Lenovo</span>
                                        </li>
                                        <li>
                                            <span className='font-semibold text-gray-700'>Model: </span>
                                            <span>LOQ 15IAX9</span>
                                        </li>
                                        <li>
                                            <span className='font-semibold text-gray-700'>Display: </span>
                                            <span>15.6" FHD (1920x1080) IPS 300nits Anti-glare, 100% sRGB, 144Hz, G-SYNC®</span>
                                        </li>
                                        <li>
                                            <span className='font-semibold text-gray-700'>Processor: </span>
                                            <span>Intel® Core™ i5-12600HX, 12C (4P + 8E) / 16T, P-core up to 4.6GHz, E-core up to 3.3GHz, 18MB</span>
                                        </li>
                                        <li>
                                            <span className='font-semibold text-gray-700'>RAM: </span>
                                            <span>12GB SO-DIMM DDR5-4800</span>
                                        </li>
                                        <li>
                                            <span className='font-semibold text-gray-700'>Storage: </span>
                                            <span>512GB SSD M.2 2242 PCIe® 4.0x4 NVMe®</span>
                                        </li>
                                        <li>
                                            <span className='font-semibold text-gray-700'>Graphics Card: </span>
                                            <span>NVIDIA® GeForce RTX™ 3050 6GB GDDR6</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Color */}
                            <div>
                                <div className='text-gray-500'>
                                    <span className='font-semibold text-gray-700'>Color: </span>
                                    <span>Luna Grey</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='w-12 h-12  rounded-md border-2 border-dashed border-blue-300 flex items-center justify-center p-0.5'>
                                        <img src={mainImage} alt="" className='opacity-50' />
                                    </div>
                                    <div className='w-12 h-12 rounded-md border-2 border-blue-300 flex items-center justify-center p-0.5'>
                                        <img src={mainImage} alt="" />
                                    </div>
                                    <div className='w-12 h-12 rounded-md border-2 border-dashed border-blue-300 flex items-center justify-center p-0.5'>
                                        <img src={mainImage} alt="" className='opacity-50' />
                                    </div>
                                </div>
                            </div>

                            {/* Customize Button */}
                            <div className='flex items-center gap-2 text-gray-500'>
                                <span className='font-semibold text-gray-700'>Customize: </span>
                                <button className='bg-gray-500 text-white text-sm py-1 px-4 rounded-sm hover:bg-gray-700'>
                                    Customize
                                </button>
                            </div>

                            <div className='flex flex-col md:flex-row items-start lg:items-center gap-4 justify-between mt-4'>
                                {/* Quantity */}
                                <div className='flex items-center gap-2 text-gray-500'>
                                    <span className='font-semibold text-gray-700'>Quantity: </span>
                                    <div className='flex items-center gap-2'>
                                        <button className='bg-gray-300 text-white text-sm py-1 px-2 rounded-sm hover:bg-gray-500'>
                                            -
                                        </button>
                                        <span className='font-semibold text-gray-700'>1</span>
                                        <button className='bg-gray-300 text-white text-sm py-1 px-2 rounded-sm hover:bg-gray-500'>
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className='flex items-center justify-around gap-4'>
                                    <button className='bg-gray-500 text-white text-sm font-semibold py-2 px-[2.2rem] md:px-16 rounded-sm hover:bg-gray-700'>
                                        ADD TO CART
                                    </button>
                                    <button className='bg-gray-500 text-white text-sm font-semibold py-2 px-12 md:px-16 rounded-sm hover:bg-gray-700'>
                                        BUY NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductDetails;
