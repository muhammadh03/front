import React, { useState } from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { HiOutlineEye, HiOutlineHeart, HiOutlineScale } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const ProductGrid = ({ product, addToCart }) => {

    // const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [disabledButtons, setDisabledButtons] = useState({});

    const handleAddToCart = (e, productId) => {
        e.preventDefault();
        e.stopPropagation();

        addToCart(product);

        setDisabledButtons((prev) => ({
            ...prev,
            [productId]: true
        }));

        setTimeout(() => {
            toast.success("Product added to cart", {
                duration: 1000,
            });

            setDisabledButtons(false);
        }, 500);
    }

    return (
        <Link to={`/product/${product._id}`}>
            <div className="w-[10rem] md:w-[9.8rem] lg:w-[13.2rem] h-auto border-2 border-gray-200 hover:border-blue-200 rounded-md shadow-md hover:shadow-blue-300 hover:shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105">
                <div className='p-4'>
                    <div className='h-24 md:h-40 relative flex items-center justify-center'>
                        <div className="cursor-pointer">
                            <img src={product.image} alt="offer_image" className="w-28 md:w-28 lg:w-32 h-auto" />
                        </div>

                        <div className='absolute top-0 -right-2 md:-right-2.5 lg:right-0 flex flex-col items-center gap-2'>
                            <button className='text-gray-400 hover:text-blue-600'>
                                <HiOutlineHeart className='w-4 h-4 lg:w-6 lg:h-6' />
                            </button>
                            <button className='text-gray-400 hover:text-blue-600'>
                                <HiOutlineEye className='w-4 h-4 lg:w-6 lg:h-6' />
                            </button>
                            <button className='text-gray-400 hover:text-blue-600'>
                                <HiOutlineScale className='w-4 h-4 lg:w-6 lg:h-6' />
                            </button>
                        </div>
                    </div>

                    <div className="mt-2">
                        {/* Product Brand */}
                        <div>
                            <h1 className="text-xs text-gray-500">
                                {product.brand}
                            </h1>
                        </div>

                        {/* Product Title */}
                        <div className='h-9 md:h-12 cursor-pointer'>
                            <h1 className="text-xs md:text-base font-semibold text-gray-700 line-clamp-2">
                                {product.title}
                            </h1>
                        </div>

                        {/* Product Rate */}
                        <div className="flex items-center mt-1">
                            <span className="flex gap-1">
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStarHalfAlt className="text-yellow-400" />
                                <span className="text-sm text-gray-500 ml-1">
                                    {product.reviews}
                                </span>
                            </span>
                        </div>

                        {/* Product Price */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-2 mt-1">
                            <span className="text-base md:text-lg font-semibold text-gray-500">
                                ${product.price}
                            </span>
                            <span className="text-sm text-gray-500 line-through">
                                $550.00
                            </span>
                        </div>

                        {/* Product Button */}
                        <div className='w-full flex flex-col gap-2 mt-2'>
                            {/* <button className='w-full text-xs md:text-sm font-semibold text-white bg-gray-300 hover:bg-blue-400 px-2 py-1 rounded-md'>
                                    Buy Now
                                </button> */}
                            {/* <button
                                disabled={isButtonDisabled}
                                onClick={handleAddToCart}
                                className={`w-full text-xs md:text-sm font-semibold text-white bg-gray-700 px-2 py-1 cursor-pointer rounded-md ${isButtonDisabled ? "cursor-not-allowed opacity-50" : "hover:bg-gray-600"}`}>
                                {isButtonDisabled ? "Adding..." : "Add to Cart"}
                            </button> */}
                            <button
                                disabled={disabledButtons[product._id] === true}
                                onClick={(e) => handleAddToCart(e, product._id, product)}
                                className={`w-full text-xs md:text-sm font-semibold text-white bg-gray-700  px-2 py-1 cursor-pointer rounded-md ${disabledButtons[product._id] ? "cursor-not-allowed opacity-50" : "hover:bg-gray-600"}`}
                            >
                                {disabledButtons[product._id] === true ? 'Adding...' : 'Add to Cart'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductGrid;
