import React, { useEffect, useState } from 'react'
import BreadCrumbs from '../Components/Common/BreadCrumbs';
import laptop from "../assets/products/laptop.png";

import { FaDownload, FaShareAlt } from 'react-icons/fa';
import { IoIosPrint } from 'react-icons/io';
// import { useParams } from 'react-router-dom';

const OrderDetails = () => {

    // const { id } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        // simulate fetching orders
        const mockOrderDetails = [
            {
                _id: 324214,
                orderItems: [
                    {
                        productId: 1,
                        name: "Lenovo LOQ 15IAX9 Gaming Laptop",
                        quantity: 1,
                        image: laptop
                    }
                ],
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
            },
            // {
            //     _id: 2,
            //     orderItems: [
            //         {
            //             name: "PlayStation 5 Marvel's Spider-Man 2 Limited Edition",
            //             quantity: 1,
            //             image: playstationFive
            //         }
            //     ],
            //     createdAt: new Date(),
            //     shippingAddress: {
            //         city: "New York",
            //         country: "United States",
            //         street: "123 Main St",
            //         zip: "10001"
            //     },
            //     totalPrice: 560.00,
            //     isPaid: false,
            // }
        ];
        setOrderDetails(mockOrderDetails);
    }, []);

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
                <div className='flex justify-end gap-4 px-8'>
                    <div class="relative group inline-block cursor-pointer">
                        <FaDownload className='w-6 h-6 text-gray-500 hover:text-blue-500' />
                        <div
                            class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max 
                                    bg-gray-800 text-white text-sm px-2 py-1 rounded 
                                    opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-300 whitespace-nowrap z-10"
                        >
                            Download
                            <div class="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                        </div>
                    </div>
                    <div class="relative group inline-block cursor-pointer">
                        <FaShareAlt className='w-6 h-6 text-gray-500 hover:text-blue-500' />
                        <div
                            class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max 
                                    bg-gray-800 text-white text-sm px-2 py-1 rounded 
                                    opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-300 whitespace-nowrap z-10"
                        >
                            Share
                            <div class="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                        </div>
                    </div>
                    <div class="relative group inline-block cursor-pointer">
                        <IoIosPrint className='w-6 h-6 text-gray-500 hover:text-blue-500' />
                        <div
                            class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max 
                                    bg-gray-800 text-white text-sm px-2 py-1 rounded 
                                    opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-300 whitespace-nowrap z-10"
                        >
                            Print
                            <div class="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                        </div>
                    </div>
                </div>

                {orderDetails ? (
                    <p>No order details found</p>
                ) : (
                    <div className='shadow-md shadow-black p-6 text-gray-500 mt-4'>
                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center gap-2'>
                                    <h1 className='font-semibold text-lg text-gray-700'>Order ID:</h1>
                                    <span># 34445 </span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <h1 className='font-semibold text-lg text-gray-700'>Order Date:</h1>
                                    <span> {orderDetails.createdAt} </span>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div>
                                    <h1 className='font-semibold text-green-500'>
                                        {orderDetails.isPaid ? "Approved" : "Pending"}
                                    </h1>
                                </div>
                                <div>
                                    <h1 className='font-semibold text-blue-400'>
                                        {orderDetails.isDelivered ? "Delivered" : "Pending Delivery"}
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div className='border-2 border-gray-300 my-4'></div>

                        <div className='flex justify-between'>
                            <div>
                                <div>
                                    <h1 className='font-semibold text-lg text-gray-700'>Contact Info</h1>
                                </div>

                                <div className='mt-4'>
                                    <h3 className='font-semibold'> {orderDetails.contactInfo.name} </h3>
                                    <p>Phone: {orderDetails.contactInfo.phone}</p>
                                    <p>Email: {orderDetails.contactInfo.email}</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <h1 className='font-semibold text-lg text-gray-700'>Shipping Info</h1>
                                </div>

                                <div className='mt-4'>
                                    <p>Shipping Method: {orderDetails.shippingInfo.shippingMethod} </p>
                                    <p> {orderDetails.shippingInfo.street} </p>
                                    <p> {orderDetails.shippingInfo.city}, {orderDetails.shippingInfo.zip} </p>
                                    <p> {orderDetails.shippingInfo.country} </p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <h1 className='font-semibold text-lg text-gray-700'>Payment Info</h1>
                                </div>

                                <div className='mt-4'>
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
                                        <th className="py2 px-4 sm:py-3 text-sm text-start">Image</th>
                                        <th className="py2 px-4 sm:py-3 text-sm text-start">Name</th>
                                        <th className="py2 px-4 sm:py-3 text-sm text-start">Quantity</th>
                                        <th className="py2 px-4 sm:py-3 text-sm text-start">Total</th>
                                    </tr>
                                </thead>
                                <tbody className='text-gray-500'>
                                    {orderDetails.orderItems.map((order) => (
                                        <tr
                                            key={orderDetails._id}
                                            // onClick={() => handleRowClick(order._id)}
                                            className='border-b border-blue-400 hover:bg-blue-50 cursor-pointer'
                                        >
                                            <td className='py-2 px-4 sm:py-3 text-sm flex items-center justify-center'>
                                                <img src={orderDetails.orderItems[0].image} alt={orderDetails.orderItems[0].image} className='w-16 h-14 rounded-md' />
                                            </td>
                                            {/* <td className='py-2 px-4 sm:py-3 text-sm'>
                                            <p> {order._id} </p>
                                        </td>
                                        <td className='py-2 px-4 sm:py-3 text-sm'>
                                            <p>
                                                {new Date(order.createdAt).toLocaleDateString()}
                                                {" "}
                                                {new Date(order.createdAt).toLocaleTimeString()}
                                            </p>
                                        </td> */}
                                            {/* <td className='py-2 px-4 sm:py-3 text-sm'>
                                            <p>
                                                {order.shippingAddress ? `${order.shippingAddress.city}, 
                                        ${order.shippingAddress.country}` : "N/A"}
                                            </p>
                                        </td> */}
                                            <td className='py-2 px-4 sm:py-3 text-sm text-center'>
                                                <p> {order.orderItems[0].quantity} </p>
                                            </td>
                                            <td className='py-2 px-4 sm:py-3 text-sm'>
                                                <p>$ {order.totalPrice} </p>
                                            </td>
                                            {/* <td className='py-2 px-4 sm:py-3 text-sm'>
                                            <p className={`${order.isPaid ? "bg-green-100 text-white" : "bg-red-500 text-white"} bg-green-500 text-white font-semibold py-1 px-2 rounded-sm text-center`}>
                                                {order.isPaid ? "Paid" : "Pending"}
                                            </p>
                                        </td> */}
                                        </tr>
                                    ))}
                                    {/* ) : (
                                    <tr>
                                        <td colSpan={7} className='py-4 px-4 text-center text-gray-500'>
                                            <p>No orders found</p>
                                        </td>
                                    </tr>
                                )} */}
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
