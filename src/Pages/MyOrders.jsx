import React, { useEffect, useState } from 'react'
import laptop from "../assets/products/laptop.png"
import playstationFive from "../assets/products/spiderman-playstation-5.png"
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // simulate fetching orders
        setTimeout(() => {
            const mockOrders = [
                {
                    _id: 1,
                    orderItems: [
                        {
                            name: "Lenovo LOQ 15IAX9 Gaming Laptop",
                            quantity: 1,
                            image: laptop
                        }
                    ],
                    createdAt: new Date(),
                    shippingAddress: {
                        city: "New York",
                        country: "United States",
                        street: "123 Main St",
                        zip: "10001"
                    },
                    totalPrice: 650.00,
                    isPaid: true,
                },
                {
                    _id: 2,
                    orderItems: [
                        {
                            name: "PlayStation 5 Marvel's Spider-Man 2 Limited Edition",
                            quantity: 1,
                            image: playstationFive
                        }
                    ],
                    createdAt: new Date(),
                    shippingAddress: {
                        city: "New York",
                        country: "United States",
                        street: "123 Main St",
                        zip: "10001"
                    },
                    totalPrice: 560.00,
                    isPaid: false,
                }
            ];
            setOrders(mockOrders);
        }, 1000);
    });


    const handleRowClick = (orderId) => {
        navigate(`/order/${orderId}`);
    };


    return (
        <div className='shadow-md shadow-blue-300 rounded-md py-4 px-4'>
            <div className='pb-4'>
                <h1 className='text-2xl font-semibold text-gray-700'>My Orders</h1>
            </div>
            <div className='overflow-x-auto'>
                <table className='table-auto min-w-full'>
                    <thead>
                        <tr className='bg-blue-500 text-white'>
                            <th className="py-1 md:py-2 px-4 text-xs md:text-sm text-start">Image</th>
                            <th className="py-1 md:py-2 px-4 text-xs md:text-sm text-start">Order ID</th>
                            <th className="py-1 md:py-2 px-4 text-xs md:text-sm text-start">Created</th>
                            <th className="py-1 md:py-2 px-4 text-xs md:text-sm text-start">Shipping Address</th>
                            <th className="py-1 md:py-2 px-4 text-xs md:text-sm text-start">Quantity</th>
                            <th className="py-1 md:py-2 px-4 text-xs md:text-sm text-start">Price</th>
                            <th className="py-1 md:py-2 px-4 text-xs md:text-sm text-start">Status</th>
                        </tr>
                    </thead>
                    <tbody className='text-gray-500'>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr
                                    key={order._id}
                                    onClick={() => handleRowClick(order._id)}
                                    className='border-b border-blue-400 hover:bg-blue-50 cursor-pointer'
                                >
                                    <td className='py-1 md:py-2 px-4 flex items-center justify-center'>
                                        <img src={order.orderItems[0].image} alt={order.orderItems[0].image} className='w-20 h-auto rounded-md' />
                                    </td>
                                    <td className='py-1 md:py-2 px-4 text-xs md:text-sm'>
                                        <p> {order._id} </p>
                                    </td>
                                    <td className='py-1 md:py-2 px-4 text-xs md:text-sm'>
                                        <p>
                                            {new Date(order.createdAt).toLocaleDateString()}
                                            {" "}
                                            {new Date(order.createdAt).toLocaleTimeString()}
                                        </p>
                                    </td>
                                    <td className='py-1 md:py-2 px-4 text-xs md:text-sm'>
                                        <p>
                                            {order.shippingAddress ? `${order.shippingAddress.city}, 
                                        ${order.shippingAddress.country}` : "N/A"}
                                        </p>
                                    </td>
                                    <td className='py-1 md:py-2 px-4 text-xs md:text-sm text-center'>
                                        <p> {order.orderItems[0].quantity} </p>
                                    </td>
                                    <td className='py-1 md:py-2 px-4 text-xs md:text-sm'>
                                        <p>$ {order.totalPrice} </p>
                                    </td>
                                    <td className='py-1 md:py-2 px-4 text-sm'>
                                        <p className={`${order.isPaid ? "bg-green-100 text-white" : "bg-red-500 text-white"} bg-green-500 text-white font-semibold py-1 px-2 rounded-sm text-center`}>
                                            {order.isPaid ? "Paid" : "Pending"}
                                        </p>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={7} className='py-4 px-4 text-center text-gray-500'>
                                    <p>No orders found</p>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyOrders;
