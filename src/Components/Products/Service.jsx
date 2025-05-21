import React from 'react'
import { FaPhoneVolume } from 'react-icons/fa';
import { FaTruckFast } from 'react-icons/fa6';
import { GiPayMoney } from 'react-icons/gi';
import { MdPhoneInTalk } from 'react-icons/md';
import { RiDiscountPercentFill } from 'react-icons/ri';

const Service = () => {
    return (
        <div className='bg-yellow-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-6 lg:py-6 px-16 text-center'>
            <div className='flex flex-col items-center gap-2'>
                <div className='text-white'>
                    <FaTruckFast className='w-8 lg:w-10 h-8 lg:h-10' />
                </div>
                <div className=''>
                    <h1 className='font-semibold lg:text-xl'>Free Shipping</h1>
                    <p className='text-sm lg:text-[15px] '>Fast and reliable shipping</p>
                </div>
            </div>

            <div className='flex flex-col items-center gap-2'>
                <div className='text-white'>
                    <GiPayMoney className='w-8 lg:w-10 h-8 lg:h-10' />
                </div>
                <div>
                    <h1 className='font-semibold lg:text-xl'>Money Guarantee</h1>
                    <p className='text-sm lg:text-[15px] '>30 days money back guarantee</p>
                </div>
            </div>

            <div className='flex flex-col items-center gap-2'>
                <div className='text-white'>
                    <RiDiscountPercentFill className='w-8 lg:w-10 h-8 lg:h-10' />
                </div>
                <div>
                    <h1 className='font-semibold lg:text-xl'>Member Discount</h1>
                    <p className='text-sm lg:text-[15px] '>On every order over $100</p>
                </div>
            </div>

            <div className='flex flex-col items-center gap-2'>
                <div className='text-white'>
                    <MdPhoneInTalk className='w-8 lg:w-10 h-8 lg:h-10' />
                </div>
                <div>
                    <h1 className='font-semibold lg:text-xl'>Online Support</h1>
                    <p className='text-sm lg:text-[15px] '>We support online 24/7 on day</p>
                </div>
            </div>
        </div>
    )
}

export default Service;
