import React from 'react'
import Breadcrumbs from '../Common/BreadCrumbs';
import laptop from "../../assets/products/laptop.png";
import playstationFive from "../../assets/products/spiderman-playstation-5.png";


const orderProducts = [
    {
        productId: 1,
        name: "Lenovo LOQ 15IAX9 Gaming Laptop",
        // size: "M",
        color: "Gray",
        quantity: 1,
        price: 650.00,
        image: laptop
    },
    {
        productId: 2,
        name: "PlayStation 5 Marvel's Spider-Man 2 Limited Edition",
        // size: "M",
        color: "Red",
        quantity: 1,
        price: 560.00,
        image: playstationFive
    }
]

const Checkout = () => {
    return (
        <div>
            {/* BreadCrumbs */}
            <div className='bg-blue-100'>
                <div className='max-w-screen mx-auto py-2 md:py-2 px-4 sm:px-6 md:px-8'>
                    <Breadcrumbs />
                </div>
            </div>

            {/* Header */}
            <div className='bg-blue-100 py-2 px-4 mt-12 flex items-center justify-center'>
                <h1 className='text-4xl font-bold tracking-wide'>CHECKOUT</h1>
            </div>
            <div className='container mx-auto'>
                <div className='flex flex-col-reverse lg:flex-row gap-4 mt-8'>
                    <div className='w-full lg:w-1/2'>
                        <div>
                            <div>
                                <h3 className='text-lg font-semibold'>Contact Details</h3>
                            </div>
                            <div className='mt-2'>
                                <label htmlFor="Email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder='user@example.com'
                                    className='w-full focus:outline-none border-1 border-gray-300 rounded-sm py-1 px-2'
                                />
                            </div>
                        </div>

                        <div className='mt-4'>
                            <div>
                                <h3 className='text-lg font-semibold'>Shipping Details</h3>
                            </div>
                            <div className='mt-2 flex flex-col gap-4'>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div>
                                        <label htmlFor="firstName">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            className='w-full focus:outline-none border-1 border-gray-300 rounded-sm py-1 px-2'
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            className='w-full focus:outline-none border-1 border-gray-300 rounded-sm py-1 px-2'
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="address">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        className='w-full focus:outline-none border-1 border-gray-300 rounded-sm py-1 px-2'
                                    />
                                </div>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div>
                                        <label htmlFor="city">City</label>
                                        <input
                                            type="tel"
                                            name="city"
                                            id="city"
                                            className='w-full focus:outline-none border-1 border-gray-300 rounded-sm py-1 px-2'
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="postalCode">Postal Code</label>
                                        <input
                                            type="number"
                                            name="postalCode"
                                            id="postalCode"
                                            className='w-full focus:outline-none border-1 border-gray-300 rounded-sm py-1 px-2'
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div>
                                        <label htmlFor="country">Country</label>
                                        <input
                                            type="text"
                                            name="country"
                                            id="country"
                                            className='w-full focus:outline-none border-1 border-gray-300 rounded-sm py-1 px-2'
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            className='w-full focus:outline-none border-1 border-gray-300 rounded-sm py-1 px-2'
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        className='w-full focus:outline-none border-1 border-gray-300 rounded-sm py-2 px-2'
                                    ></textarea>
                                </div>
                                <div className=''>
                                    <button className='w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-sm'>
                                        <span className='text-lg font-semibold'>Continue to payment</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 bg-blue-100/50 rounded-sm py-2 px-4'>
                        <div>
                            <div>
                                <h3 className='text-lg font-semibold'>Order Summary</h3>
                            </div>
                            <div className='border-2 border-blue-500'>
                            </div>
                            <div className='mt-6'>
                                {orderProducts.map((product, index) => (
                                    <div key={index} className='flex items-start justify-between py-4 border-b-4 border-white'>
                                        <img
                                            src={product.image}
                                            alt="order_image"
                                            className='w-32 h-auto'
                                        />
                                        <div className=''>
                                            <h1 className='text-lg font-semibold'>
                                                {product.name}
                                            </h1>
                                            <p className='text-sm text-gray-500'>
                                                Quantity: {product.quantity}
                                            </p>
                                            <p className='text-sm text-gray-500'>
                                                Color: {product.color}
                                            </p>
                                        </div>
                                        <div>
                                            <h1 className='text-lg font-semibold'>
                                                ${product.price}
                                            </h1>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className='flex justify-between py-4 border-b-4 border-white'>
                                    <h1 className='text-lg font-semibold'>Subtotal</h1>
                                    <h1 className='text-lg font-semibold'>$1400</h1>
                                </div>
                                <div className='flex justify-between py-4 border-b-4 border-white'>
                                    <h1 className='text-lg font-semibold'>Shipping</h1>
                                    <h1 className='text-lg font-semibold'>Free</h1>
                                </div>
                                <div className='flex justify-between py-4'>
                                    <h1 className='text-lg font-semibold'>Total</h1>
                                    <h1 className='text-lg font-semibold'>$1400</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;
