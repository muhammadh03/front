import React, { useState } from 'react'
import Breadcrumbs from '../Common/BreadCrumbs';
import laptop from "../../assets/products/laptop.png";
import playstationFive from "../../assets/products/spiderman-playstation-5.png";
import PaypalButton from './PaypalButton';
import { useNavigate } from 'react-router-dom';


const orderProducts = {
    products: [
        {
            productId: 1,
            name: "Lenovo LOQ 15IAX9 Gaming Laptop",
            color: "Gray",
            quantity: 1,
            price: 650.00,
            image: laptop
        },
        {
            productId: 2,
            name: "PlayStation 5 Marvel's Spider-Man 2 Limited Edition",
            color: "Red",
            quantity: 1,
            price: 560.00,
            image: playstationFive
        }
    ],
    totalPrice: 1210.00,
}

const Checkout = () => {

    const navigate = useNavigate();
    const [checkoutId, setCheckoutId] = useState(null);
    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        phone: "",
        message: ""
    });

    const handleCreateCheckout = (e) => {
        e.preventDefault();
        setCheckoutId(123);
    };


    const handlePaymentSuccess = (details) => {
        console.log("Payment successful", details);

        // Perform any additional actions

        // Redirect to the order details page
        navigate(`/order-confirmation`);
    }

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
                            <form onSubmit={handleCreateCheckout} className='mt-2 flex flex-col gap-4'>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div>
                                        <label htmlFor="firstName">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            value={shippingAddress.firstName}
                                            onChange={(e) => setShippingAddress({ ...shippingAddress, firstName: e.target.value })}
                                            className='w-full focus:outline-none border-1 border-gray-300 rounded-sm py-1 px-2'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            value={shippingAddress.lastName}
                                            onChange={(e) => setShippingAddress({ ...shippingAddress, lastName: e.target.value })}
                                            className='w-full focus:outline-none border-1 border-gray-300 rounded-sm py-1 px-2'
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="address">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        value={shippingAddress.address}
                                        onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
                                        className='w-full focus:outline-none border-1 border-gray-300 rounded-sm py-1 px-2'
                                        required
                                    />
                                </div>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div>
                                        <label htmlFor="city">City</label>
                                        <input
                                            type="tel"
                                            name="city"
                                            id="city"
                                            value={shippingAddress.city}
                                            onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                                            className='w-full focus:outline-none border-1 border-gray-300 rounded-sm py-1 px-2'
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="postalCode">Postal Code</label>
                                        <input
                                            type="number"
                                            name="postalCode"
                                            id="postalCode"
                                            value={shippingAddress.postalCode}
                                            onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
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
                                            value={shippingAddress.country}
                                            onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
                                            className='w-full focus:outline-none border-1 border-gray-300 rounded-sm py-1 px-2'
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            value={shippingAddress.phone}
                                            onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
                                            className='w-full focus:outline-none border-1 border-gray-300 rounded-sm py-1 px-2'
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        value={shippingAddress.message}
                                        onChange={(e) => setShippingAddress({ ...shippingAddress, message: e.target.value })}
                                        className='w-full focus:outline-none border-1 border-gray-300 rounded-sm py-2 px-2'
                                    ></textarea>
                                </div>
                                <div className=''>
                                    {!checkoutId ? (
                                        <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-sm cursor-pointer'>
                                            <span className='text-lg font-semibold'>Continue to payment</span>
                                        </button>
                                    ) : (
                                        <div>
                                            <h3 className='text-lg font-semibold'>
                                                Pay with Paypal
                                            </h3>

                                            {/* Paypal Component */}
                                            <PaypalButton
                                                amount={100}
                                                onSuccess={handlePaymentSuccess}
                                                onError={(error) => alert("Payment failed. Please try again")}
                                            />
                                        </div>
                                    )}
                                </div>
                            </form>
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
                                {orderProducts.products.map((product, index) => (
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
                                    <h1 className='text-lg font-semibold tracking-wider'>Subtotal</h1>
                                    <p className='text-lg font-semibold tracking-wider'> ${orderProducts.totalPrice?.toLocaleString()} </p>
                                </div>
                                <div className='flex justify-between py-4 border-b-4 border-white'>
                                    <h1 className='text-lg font-semibold tracking-wider'>Shipping</h1>
                                    <p className='text-lg font-semibold tracking-wider'>Free</p>
                                </div>
                                <div className='flex justify-between py-4'>
                                    <h1 className='text-lg font-semibold tracking-wider'>Total</h1>
                                    <p className='text-lg font-semibold tracking-wider'>${orderProducts.totalPrice?.toLocaleString()}</p>
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
