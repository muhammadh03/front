import React from 'react'
import BreadCrumbs from '../Components/Common/BreadCrumbs';
import userProfile from "../assets/default-profile.png"
import { CgProfile } from 'react-icons/cg';
import { BsBoxSeam } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { GoCodeReview } from 'react-icons/go';
import { LuBriefcaseBusiness } from 'react-icons/lu';
import { GiMoneyStack } from 'react-icons/gi';
import { Link, Outlet } from 'react-router-dom';

const Account = () => {
    return (
        <div>
            <div className='bg-blue-100'>
                <div className='max-w-screen mx-auto py-2 md:py-2 px-4 sm:px-6 md:px-8'>
                    <BreadCrumbs />
                </div>
            </div>

            <div className='container mx-auto mt-8 flex flex-col lg:flex-row justify-between gap-6'>
                <div className='w-full lg:w-1/4'>
                    <div className='bg-blue-100 rounded-md flex flex-col items-center'>
                        <div className='flex flex-col items-center gap-4 p-4'>
                            <img src={userProfile} alt="profile_image" className='w-32' />
                            <div>
                                <h1 className='font-semibold text-2xl'>Abdullah</h1>
                            </div>
                        </div>
                        {/* <div className='flex flex-row lg:flex-col gap-10 py-0 lg:py-4 px-8 text-gray-600'> */}
                        <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-1 gap-10 py-0 lg:py-4 px-8 text-gray-600'>
                            <Link to="profile" className='flex flex-col lg:flex-row items-center gap-3 hover:text-blue-500 cursor-pointer'>
                                <CgProfile className='w-6 h-6' />
                                <h1 className='font-semibold text-base tracking-wide'>Profile</h1>
                            </Link>
                            <Link to="orders" className='flex flex-col lg:flex-row items-center gap-3 hover:text-blue-500 cursor-pointer'>
                                <BsBoxSeam className='w-6 h-6' />
                                <h1 className='font-semibold text-base tracking-wide'>Orders</h1>
                            </Link>
                            <Link to="wishlist" className='flex flex-col lg:flex-row items-center gap-3 hover:text-blue-500 cursor-pointer'>
                                <FaRegHeart className='w-6 h-6' />
                                <h1 className='font-semibold text-base tracking-wide'>Wishlist</h1>
                            </Link>
                            <Link to="reviews" className='flex flex-col lg:flex-row items-center gap-3 hover:text-blue-500 cursor-pointer'>
                                <GoCodeReview className='w-6 h-6' />
                                <h1 className='font-semibold text-base tracking-wide'>Reviews</h1>
                            </Link>
                            <Link to="business" className='flex flex-col lg:flex-row items-center gap-3 hover:text-blue-500 cursor-pointer'>
                                <LuBriefcaseBusiness className='w-6 h-6' />
                                <h1 className='font-semibold text-base tracking-wide'>Business</h1>
                            </Link>
                            <Link to="payment" className='flex flex-col lg:flex-row items-center gap-3 hover:text-blue-500 cursor-pointer'>
                                <GiMoneyStack className='w-6 h-6' />
                                <h1 className='font-semibold text-base tracking-wide'>Payment</h1>
                            </Link>
                        </div>
                        <div className='py-4'>
                            <button className='w-full bg-blue-500 hover:bg-blue-700 py-2 px-14 cursor-pointer rounded-sm'>
                                <h1 className='font-semibold text-white text-lg tracking-wide'>Logout</h1>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-3/4'>
                    <Outlet />
                </div>
            </div>
            <div className='bg-black w-full h-20 mt-20'>
            </div>
        </div>
    )
}

export default Account;
