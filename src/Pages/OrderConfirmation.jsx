import React from 'react'
import laptop from "../assets/products/laptop.png";
import playstationFive from "../assets/products/spiderman-playstation-5.png"

import { SiTicktick } from 'react-icons/si';


const checkoutProducts = {
    _id: "43443",
    orderPlacedAt: new Date(),
    checkoutItems: [
        {
            productId: "1",
            name: "Lenovo LOQ 15IAX9 Gaming Laptop",
            color: "Gray",
            quantity: 1,
            price: 650.00,
            image: laptop
        },
        {
            productId: "2",
            name: "PlayStation 5 Marvel's Spider-Man 2 Limited Edition",
            color: "Red",
            quantity: 1,
            price: 560.00,
            image: playstationFive
        },
    ],
    shippingAddress: {
        street: "123 Main St",
        city: "New York",
        country: "United States",
        zip: "10001"
    },
    paymentMethod: "Paypal",
    shippingMethod: "FedEx",
    shippingCost: 10.00,
    tax: 5.00,
    totalCost: 1210.00
};

const OrderConfirmation = () => {

    const calculateEstimatedDelivery = (orderPlacedAt) => {
        const orderDate = new Date(orderPlacedAt);
        orderDate.setDate(orderDate.getDate() + 10);
        return orderDate.toLocaleDateString();
    };

    return (
        <div className='bg-blue-100 container mx-auto'>
            <div className='mb-28'>
                <div className='flex flex-col items-center gap-4 py-8'>
                    <SiTicktick className='w-16 h-16 text-green-500' />
                    <h1 className='font-semibold text-xl md:text-4xl'>Thank you for your order</h1>
                    <button className='border-2 border-white hover:bg-blue-500 text-blue-600 hover:text-white font-semibold py-2 px-4 rounded cursor-pointer'>
                        Continue Shopping
                    </button>
                </div>

                <div>
                    {checkoutProducts && (
                        <div className='bg-blue-500/85 rounded-r-md rounded-l-md'>
                            <div className='flex justify-between text-white p-4'>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-sm md:text-lg font-semibold tracking-wide'>Order ID : #{checkoutProducts._id}</p>
                                    <p className='text-sm md:text-base'>Order Date : {new Date(checkoutProducts.orderPlacedAt).toDateString()}</p>
                                </div>
                                <div className='flex text-end'>
                                    <p className='text-sm md:text-base'>Estimated Delivery Date : {calculateEstimatedDelivery(checkoutProducts.orderPlacedAt)} </p>
                                </div>
                            </div>

                            <div className='bg-white rounded-r-md rounded-l-md'>
                                {checkoutProducts.checkoutItems.map((item) => (
                                    <div key={item.productId}>
                                        <div className='py-4 px-6 flex flex-col md:flex-row justify-between text-gray-700'>
                                            <div className='flex items-start md:items-start gap-4'>
                                                <img src={item.image} alt="order_image" className='w-20 md:w-28' />

                                                <div className='text-xs md:text-base lg:text-lg'>
                                                    <p className='font-semibold tracking-wide'>{item.name}</p>
                                                    {/* <p className='text-gray-500 tracking-wide'>Qty: <span className='font-semibold text-gray-700'> {item.quantity} </span></p> */}
                                                    <p className='text-gray-500 tracking-wide'>Color: <span className='font-semibold text-gray-700'> {item.color} </span></p>
                                                </div>
                                            </div>

                                            <div className='flex flex-col items-end justify-start text-xs md:text-base lg:text-lg'>
                                                <p className='font-semibold tracking-wide'>$ {item.price}</p>
                                                <p className='text-gray-500 tracking-wide'>Qty: <span className='font-semibold text-gray-700'> {item.quantity} </span></p>
                                            </div>
                                        </div>

                                        <div className='mx-6 border border-gray-300'></div>
                                    </div>
                                ))}

                                <div className='py-4 px-6 flex flex-col md:flex-row justify-between gap-2 md:gap-0'>
                                    <div>
                                        <p className='text-sm md:text-base lg:text-lg font-semibold tracking-wide'>Payment Method</p>
                                        <p className='text-sm lg:text-base tracking-wide text-gray-500'>{checkoutProducts.paymentMethod}</p>
                                    </div>

                                    <div>
                                        <p className='text-sm md:text-base lg:text-lg font-semibold tracking-wide'>Address</p>
                                        <p className='text-sm lg:text-base tracking-wide text-gray-500'>123 Main St, Anytown, USA</p>
                                    </div>

                                    <div>
                                        <p className='text-sm md:text-base lg:text-lg font-semibold tracking-wide'>Delivery Method</p>
                                        <p className='text-sm lg:text-base tracking-wide text-gray-500'> {checkoutProducts.shippingMethod} <span className='text-xs'>2-3 business days</span></p>
                                    </div>
                                </div>

                                <div className='mx-6 border border-gray-300'></div>

                                <div className='py-4 px-6 flex flex-col md:flex-row justify-between gap-6 md:gap-0 text-xs md:text-sm lg:text-base text-gray-500 tracking-wide'>
                                    <div className='md:w-2/3 lg:w-3/4 flex flex-col'>
                                        <p className='text-black'>Need Help?</p>
                                        <p>customercare@.example.com</p>
                                        <p>+1 234 567 890</p>
                                    </div>
                                    <div className='md:w-1/3 lg:w-1/4 flex flex-col gap-2'>
                                        <div className='flex items-center justify-between'>
                                            <p>Item cost</p>
                                            <p>$ {checkoutProducts.totalCost} </p>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <p>Shipping cost</p>
                                            <p>$ 10.00</p>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <p>Tax</p>
                                            <p>$ {checkoutProducts.tax} </p>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <p>Coupon</p>
                                            <p>-$ 15.00</p>
                                        </div>

                                        <div className='border border-gray-200'></div>

                                        <div>
                                            <div className='flex items-center justify-between'>
                                                <p className='font-semibold tracking-wide'>Total Cost</p>
                                                <p className='font-semibold tracking-wide text-gray-700'>$ {checkoutProducts.totalCost} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default OrderConfirmation;
