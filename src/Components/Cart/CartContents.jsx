import { MdDelete } from 'react-icons/md';
import { IoMdHeart } from 'react-icons/io';

import laptop from "../../assets/products/laptop.png";
import playstationFive from "../../assets/products/spiderman-playstation-5.png";


const CartContents = () => {

    const cartProducts = [
        {
            productId: 1,
            name: "Lenovo LOQ 15IAX9 Gaming Laptop",
            // size: "M",
            // color: "Red",
            quantity: 1,
            price: 650.00,
            image: laptop
        },
        {
            productId: 2,
            name: "PlayStation 5 Marvel's Spider-Man 2 Limited Edition",
            // size: "M",
            // color: "Blue",
            quantity: 1,
            price: 560.00,
            image: playstationFive
        }
    ]

    return (
        <div>
            {cartProducts.map((product, index) => (
                <div key={index} className='py-2 border-b'>
                    <div className="flex items-center">
                        <img src={product.image} alt={product.name} className='w-20 h-auto mr-4 rounded' />

                        <div className="flex flex-col items-start lg:items-center gap-2">
                            <div>
                                <h3 className='line-clamp-2 text-xs md:text-sm'>{product.name}</h3>
                            </div>

                            {/* <p className='text-sm text-gray-500'>
                                size: {product.size} | color: {product.color}
                            </p> */}

                            <div className='flex flex-col items-start lg:flex-row lg:items-center gap-2 md:gap-4'>
                                <div className='flex items-center gap-2 py-0.5 md:py-1 px-1 md:px-2 border-2 border-gray-300 w-fit'>
                                    <button>-</button>
                                    <span className='text-gray-300'>|</span>
                                    <span className='text-sm'>{product.quantity}</span>
                                    <span className='text-gray-300'>|</span>
                                    <button>+</button>
                                </div>

                                <div className='flex items-center gap-1'>
                                    {/* <span>$</span> */}
                                    <p className='text-blue-600 font-semibold tracking-wide text-sm md:text-[17px] leading-none'>${product.price.toLocaleString()}</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-4'>
                                <button className='flex items-end justify-start gap-1'>
                                    <MdDelete className='h-5 w-5 mt-2 text-red-600' />
                                    <span className='text-xs'>Del</span>
                                </button>
                                <button className='flex items-end gap-1'>
                                    <IoMdHeart className='h-5 w-5 mt-2 text-gray-500' />
                                    <span className='text-xs'>Fav</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartContents;
