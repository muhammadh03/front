import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import BreadCrumbs from '../Components/Common/BreadCrumbs';

import laptop from "../assets/products/laptop.png";
// import playstationFive from "../assets/products/spiderman-playstation-5.png"

import { FaDownload, FaShareAlt } from 'react-icons/fa';
import { IoIosPrint } from 'react-icons/io';

const OrderDetails = () => {

    const { id } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // simulate fetching orders
        const mockOrderDetails = {
            _id: 324214,
            orderItems: {
                productId: 1,
                name: "Lenovo LOQ 15IAX9 Gaming Laptop",
                quantity: 1,
                image: laptop
            },
            createdAt: new Date(),
            contactInfo: {
                name: "John Doe",
                email: "V6k4M@example.com",
                phone: "+123-456-7890"
            },
            shippingInfo: {
                shippingMethod: "Standard",
                street: "123 Main St",
                city: "New York",
                country: "United States",
                zip: "10001"
            },
            totalPrice: 650.00,
            isPaid: true,
            isDelivered: true,
            paymentMethod: "PayPal",
        };

        setOrderDetails(mockOrderDetails);
    }, [id]);


    const handleBackToOrders = () => {
        navigate("/account/orders")
    };

    return (
        <div>
            <div className='bg-blue-100'>
                <div className='max-w-screen mx-auto py-2 md:py-2 px-4 sm:px-6 md:px-8'>
                    <BreadCrumbs />
                </div>
            </div>

            <div className='bg-blue-100 mt-8'>
                <div className='py-2 px-8'>
                    <h1 className='font-semibold text-2xl'>Order Details</h1>
                </div>
            </div>

            <div className='container mx-auto mt-8'>
                <div className='flex items-center justify-between pr-8'>
                    <div>
                        <button onClick={handleBackToOrders} className='py-1 px-2 text-sm md:text-base bg-blue-500 text-white hover:bg-blue-600 rounded-sm cursor-pointer'>
                            Back to Orders
                        </button>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className="relative group inline-block cursor-pointer">
                            <FaDownload className='w-4 md:w-6 h-4 md:h-6 text-gray-500 hover:text-blue-500' />
                            <div
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max 
                                    bg-gray-800 text-white text-sm px-2 py-1 rounded 
                                    opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-300 whitespace-nowrap z-10"
                            >
                                Download
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                            </div>
                        </div>
                        <div className="relative group inline-block cursor-pointer">
                            <FaShareAlt className='w-4 md:w-6 h-4 md:h-6 text-gray-500 hover:text-blue-500' />
                            <div
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max 
                                    bg-gray-800 text-white text-sm px-2 py-1 rounded 
                                    opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-300 whitespace-nowrap z-10"
                            >
                                Share
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                            </div>
                        </div>
                        <div className="relative group inline-block cursor-pointer">
                            <IoIosPrint className='w-4 md:w-6 h-4 md:h-6 text-gray-500 hover:text-blue-500' />
                            <div
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max 
                                    bg-gray-800 text-white text-sm px-2 py-1 rounded 
                                    opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-300 whitespace-nowrap z-10"
                            >
                                Print
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {!orderDetails ? (
                    <p>No order details found</p>
                ) : (
                    <div className='shadow-md shadow-black py-6 px-4 md:px-6 text-gray-500 mt-4'>
                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center gap-2'>
                                    <h1 className='font-semibold text-sm md:text-base lg:text-lg text-gray-700'>Order ID:</h1>
                                    <span># {orderDetails._id}</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <h1 className='font-semibold text-sm md:text-base lg:text-lg text-gray-700'>Order Date:</h1>
                                    <span> {new Date(orderDetails.createdAt).toLocaleDateString()} </span>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div>
                                    <h1 className='font-semibold text-sm md:text-base lg:text-lg text-green-500'>
                                        {orderDetails.isPaid ? "Approved" : "Pending"}
                                    </h1>
                                </div>
                                <div>
                                    <h1 className='font-semibold text-sm md:text-base lg:text-lg text-blue-400'>
                                        {orderDetails.isDelivered ? "Delivered" : "Pending Delivery"}
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div className='border-2 border-gray-300 my-4'></div>

                        <div className='flex flex-col md:flex-row justify-between gap-4 md:gap-0'>
                            <div>
                                <div>
                                    <h1 className='font-semibold text-sm md:text-base lg:text-lg text-gray-700'>Contact Info</h1>
                                </div>

                                <div className='md:mt-4 text-xs md:text-sm lg:text-base'>
                                    <h3 className='font-semibold'> {orderDetails.contactInfo.name} </h3>
                                    <p>Phone: {orderDetails.contactInfo.phone}</p>
                                    <p>Email: {orderDetails.contactInfo.email}</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <h1 className='font-semibold text-sm md:text-base lg:text-lg text-gray-700'>Shipping Info</h1>
                                </div>

                                <div className='md:mt-4 text-xs md:text-sm lg:text-base'>
                                    <p>Shipping Method: {orderDetails.shippingInfo.shippingMethod} </p>
                                    <p> {orderDetails.shippingInfo.street} </p>
                                    <p> {orderDetails.shippingInfo.city}, {orderDetails.shippingInfo.zip} </p>
                                    <p> {orderDetails.shippingInfo.country} </p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <h1 className='font-semibold text-sm md:text-base lg:text-lg text-gray-700'>Payment Info</h1>
                                </div>

                                <div className='md:mt-4 text-xs md:text-sm lg:text-base'>
                                    <p>Payment Method: {orderDetails.paymentMethod} </p>
                                    <p>Status: {orderDetails.isPaid ? "Paid" : "Pending"} </p>
                                </div>
                            </div>
                        </div>

                        <div className='border-2 border-gray-300 my-4'></div>

                        <div>
                            <table className='table-auto w-full'>
                                <thead>
                                    <tr className='bg-blue-500 text-white'>
                                        <th className="py2 px-4 md:py-3 text-xs md:text-sm text-start">Image</th>
                                        <th className="py2 px-4 md:py-3 text-xs md:text-sm text-start">Name</th>
                                        <th className="py2 px-4 md:py-3 text-xs md:text-sm text-start">Qty</th>
                                        <th className="py2 px-4 md:py-3 text-xs md:text-sm text-start">Total</th>
                                    </tr>
                                </thead>
                                <tbody className='text-gray-500'>
                                    <tr
                                        key={orderDetails.orderItems.productId}
                                        className='border-b border-blue-400 hover:bg-blue-50 cursor-pointer'
                                    >
                                        <td className='py-2 px-2 md:px-4 sm:py-3 text-sm flex items-center justify-center'>
                                            <img src={orderDetails.orderItems.image} alt={orderDetails.orderItems.image} className='w-24 h-auto rounded-md' />
                                        </td>
                                        <td className='py-2 px-2 md:px-4 sm:py-3 text-xs md:text-sm'>
                                            <p> {orderDetails.orderItems.name} </p>
                                        </td>
                                        <td className='py-2 px-2 md:px-4 sm:py-3 text-xs md:text-sm'>
                                            <p> {orderDetails.orderItems.quantity} </p>
                                        </td>
                                        <td className='py-2 px-2 md:px-4 sm:py-3 text-xs md:text-sm'>
                                            <p>$ {orderDetails.totalPrice} </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default OrderDetails;




// {
//                 _id: 2,
//                 orderItems: [
//                     {
//                         name: "PlayStation 5 Marvel's Spider-Man 2 Limited Edition",
//                         quantity: 1,
//                         image: playstationFive
//                     }
//                 ],
//                 createdAt: new Date(),
//                 contactInfo: {
//                     name: "John Cena",
//                     email: "V6k4dsf@example.com",
//                     phone: "+123-456-7890"
//                 },
//                 shippingAddress: {
//                     city: "New York",
//                     country: "United States",
//                     street: "123 Main St",
//                     zip: "10001"
//                 },
//                 totalPrice: 560.00,
//                 isPaid: false,
//             }




{/* <tbody className='text-gray-500'>
                                    {orderDetails.map((order) => (
                                    <tr
                                        key={orderDetails.orderItems.productId}
                                        // onClick={() => handleRowClick(order._id)}
                                        className='border-b border-blue-400 hover:bg-blue-50 cursor-pointer'
                                    >
                                        <td className='py-2 px-4 sm:py-3 text-sm flex items-center justify-center'>
                                            <img src={orderDetails.orderItems.image} alt={orderDetails.orderItems.image} className='w-24 h-auto rounded-md' />
                                        </td>
                                        <td className='py-2 px-4 sm:py-3 text-sm'>
                                            <p> {order._id} </p>
                                        </td>
                                        <td className='py-2 px-4 sm:py-3 text-sm'>
                                            <p>
                                                {new Date(order.createdAt).toLocaleDateString()}
                                                {" "}
                                                {new Date(order.createdAt).toLocaleTimeString()}
                                            </p>
                                        </td>
                                        <td className='py-2 px-4 sm:py-3 text-sm'>
                                            <p>
                                                {order.shippingAddress ? `${order.shippingAddress.city}, 
                                        ${order.shippingAddress.country}` : "N/A"}
                                            </p>
                                        </td>
                                        <td className='py-2 px-4 sm:py-3 text-xs md:text-sm'>
                                            <p> {orderDetails.orderItems.name} </p>
                                        </td>
                                        <td className='py-2 px-4 sm:py-3 text-xs md:text-sm'>
                                            <p> {orderDetails.orderItems.quantity} </p>
                                        </td>
                                        <td className='py-2 px-4 sm:py-3 text-xs md:text-sm'>
                                            <p>$ {orderDetails.totalPrice} </p>
                                        </td>
                                        <td className='py-2 px-4 sm:py-3 text-sm'>
                                            <p className={`${order.isPaid ? "bg-green-100 text-white" : "bg-red-500 text-white"} bg-green-500 text-white font-semibold py-1 px-2 rounded-sm text-center`}>
                                                {order.isPaid ? "Paid" : "Pending"}
                                            </p>
                                        </td>
                                    </tr>
                                    ))}
                                    ) : (
                                    <tr>
                                        <td colSpan={7} className='py-4 px-4 text-center text-gray-500'>
                                            <p>No orders found</p>
                                        </td>
                                    </tr>
                                )}
                                </tbody> */}
