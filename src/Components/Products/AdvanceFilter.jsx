import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';
import StarRating from '../Common/StarRating';


const AdvanceFilter = ({ isFilterOpen, toggleFilter }) => {


    const brands = [
        {
            name: "Apple",
            stock: 50
        },
        {
            name: "Dell",
            stock: 40
        },
        {
            name: "Lenovo",
            stock: 45
        },
        {
            name: "MSI",
            stock: 30
        },
        {
            name: "Hp",
            stock: 35
        },
    ];

    const processors = [
        {
            name: "Intel Core i9",
            stock: 20
        },
        {
            name: "Intel Core i7",
            stock: 25
        },
        {
            name: "Intel Core i5",
            stock: 30
        },
        {
            name: "Intel Core i3",
            stock: 15
        },
    ];

    const rams = [
        {
            size: "32GB",
            stock: 20
        },
        {
            size: "24GB",
            stock: 15
        },
        {
            size: "16GB",
            stock: 30
        },
        {
            size: "8GB",
            stock: 25
        },
        {
            size: "4GB",
            stock: 10
        },
    ];

    const graphicCards = [
        {
            name: "RTX 4090",
            stock: 10
        },
        {
            name: "RTX 4080",
            stock: 8
        },
        {
            name: "RTX 4070",
            stock: 15
        },
        {
            name: "RTX 4060",
            stock: 12
        },
        {
            name: "RTX 4050",
            stock: 5
        },
        {
            name: "RTX 3080 Ti",
            stock: 7
        },
        {
            name: "RTX 3080",
            stock: 9
        },
        {
            name: "RTX 3070 Ti",
            stock: 6
        },
        {
            name: "RTX 3070",
            stock: 11
        },
        {
            name: "RTX 3060",
            stock: 14
        },
        {
            name: "RTX 3050 Ti",
            stock: 4
        },
        {
            name: "RTX 3050",
            stock: 13
        },
    ];

    const ratingData = [
        {
            rating: "5",
            stock: 10
        },
        {
            rating: "4",
            stock: 8
        },
        {
            rating: "3",
            stock: 15
        },
        {
            rating: "2",
            stock: 12
        },
        {
            rating: "1",
            stock: 5
        },
    ]

    // {
    //     rating.map((rate, index) => {
    //         const stars = [];
    //         const fullStars = parseInt(rate.rating); // Convert "5" to 5
    //         const emptyStars = 5 - fullStars;

    //         // Create full stars
    //         for (let i = 0; i < fullStars; i++) {
    //             stars.push(<FaStar key={`full-${index}-${i}`} className='text-yellow-400' />)
    //         }

    //         // Create empty stars
    //         for (let i = 0; i < emptyStars; i++) {
    //             stars.push(<FaRegStar key={`empty-${index}-${i}`} className='text-yellow-400' />)
    //         }
    //     })
    // }

    return (
        <div className='w-[85%] h-[85%] fixed flex flex-col justify-between bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-sm shadow-md shadow-gray-600 transform transition-transform duration-300 z-10'>
            <div className='bg-blue-100 py-1 md:py-2 lg:py-3 px-4 border-b-2 border-gray-300 flex items-center justify-between'>
                <div>
                    <h1 className='font-semibold'>Advance Filter</h1>
                </div>
                <button onClick={toggleFilter}>
                    <IoMdCloseCircle className='h-5 w-5 md:h-6 md:w-6 text-blue-400 hover:text-blue-600' />
                </button>
            </div>

            <div className={`flex flex-col transform transition-transform duration-300 overflow-y-auto hide-scrollbar ${isFilterOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className='py-2 px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8'>
                    {/* BRANDS */}
                    <div>
                        <label
                            htmlFor="Manufacturer"
                            className='text-sm lg:text-base text-gray-700 font-semibold tracking-wide'
                        >
                            Brand
                        </label>
                        {brands.map((brand, index) => (
                            <div key={index} className='mt-2 text-xs lg:text-sm flex items-center justify-between'>
                                <div>
                                    <input
                                        type="checkbox"
                                        name="Manufacturer"
                                        id="manufacturer"
                                        className='w-2.5 h-2.5 lg:w-3 lg:h-3'
                                    />
                                    <span className='ml-2'> {brand.name} </span>
                                </div>
                                <div className='ml-3'>
                                    <span> {brand.stock} </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* PROCESSOR */}
                    <div>
                        <label
                            htmlFor="Manufacturer"
                            className='text-sm lg:text-base text-gray-700 font-semibold tracking-wide'
                        >
                            Processor
                        </label>
                        {processors.map((processor, index) => (
                            <div key={index} className='mt-2 text-xs lg:text-sm flex items-center justify-between'>
                                <div>
                                    <input
                                        type="checkbox"
                                        name="Manufacturer"
                                        id="manufacturer"
                                        className='w-2.5 h-2.5 lg:w-3 lg:h-3'
                                    />
                                    <span className='ml-2'> {processor.name} </span>
                                </div>
                                <div className='ml-3'>
                                    <span> {processor.stock} </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RAM */}
                    <div>
                        <label
                            htmlFor="Manufacturer"
                            className='text-sm lg:text-base text-gray-700 font-semibold tracking-wide'
                        >
                            Ram
                        </label>
                        {rams.map((ram, index) => (
                            <div key={index} className='mt-2 text-xs lg:text-sm flex items-center justify-between'>
                                <div>
                                    <input
                                        type="checkbox"
                                        name="Manufacturer"
                                        id="manufacturer"
                                        className='w-2.5 h-2.5 lg:w-3 lg:h-3'
                                    />
                                    <span className='ml-2'> {ram.size} </span>
                                </div>
                                <div className='ml-3'>
                                    <span> {ram.stock} </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* GRAPHICS CARD */}
                    <div>
                        <label
                            htmlFor="Manufacturer"
                            className='text-sm lg:text-base text-gray-700 font-semibold tracking-wide'
                        >
                            Graphics Card
                        </label>
                        {graphicCards.map((card, index) => (
                            <div key={index} className='mt-2 text-xs lg:text-sm flex items-center justify-between'>
                                <div>
                                    <input
                                        type="checkbox"
                                        name="Manufacturer"
                                        id="manufacturer"
                                        className='w-2.5 h-2.5 lg:w-3 lg:h-3'
                                    />
                                    <span className='ml-2'> {card.name} </span>
                                </div>
                                <div className='ml-3'>
                                    <span> {card.stock} </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Product Rate */}
                    <div className='flex flex-col'>
                        <label
                            htmlFor="Manufacturer"
                            className='text-sm lg:text-base text-gray-700 font-semibold tracking-wide'
                        >
                            Rating
                        </label>
                        {ratingData.map((rate, index) => (
                            <StarRating key={index} rates={rate} />
                        ))}
                    </div>

                    {/* GRAPHICS CARD */}
                    <div>
                        <label
                            htmlFor="Manufacturer"
                            className='text-sm lg:text-base text-gray-700 font-semibold tracking-wide'
                        >
                            Screen Size
                        </label>
                        {graphicCards.map((card, index) => (
                            <div key={index} className='mt-2 text-xs lg:text-sm flex items-center justify-between'>
                                <div>
                                    <input
                                        type="checkbox"
                                        name="Manufacturer"
                                        id="manufacturer"
                                        className='w-2.5 h-2.5 lg:w-3 lg:h-3'
                                    />
                                    <span className='ml-2'> {card.name} </span>
                                </div>
                                <div className='ml-3'>
                                    <span> {card.stock} </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='bg-blue-100 py-1 lg:py-2 px-4 border-t-2 border-gray-300 flex items-center gap-2'>
                <div>
                    <button className='text-sm lg:text-base font-semibold bg-white md:py-0.5 lg:py-1 px-4 rounded-sm cursor-pointer border-2 border-gray-200 hover:bg-blue-500 hover:text-white'>
                        <span>Apply</span>
                    </button>
                </div>
                <button className='text-sm lg:text-base font-semibold bg-white md:py-0.5 lg:py-1 px-4 rounded-sm cursor-pointer border-2 border-gray-200 hover:bg-blue-500 hover:text-white'>
                    <span>Reset</span>
                </button>
            </div>
        </div>
    )
}

export default AdvanceFilter;
