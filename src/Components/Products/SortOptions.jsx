import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';

const SortOptions = () => {
    return (
        <div className='relative border-1 border-gray-300 bg-white rounded-sm w-24 md:w-40 flex items-center justify-between'>
            <select
                name="sort"
                id="sort"
                className='text-xs cursor-pointer appearance-none py-0.5 px-1 md:py-1 md:px-2 focus:outline-none'
            >
                <option value="default" className='text-xs cursor-pointer'>Default</option>
                <option value="priceAsc" className='text-xs cursor-pointer'>Price: Low to High</option>
                <option value="priceDesc" className='text-xs cursor-pointer'>Price: High to Low</option>
                <option value="popularity" className='text-xs cursor-pointer'>Popularity</option>
            </select>
            <div className='absolute right-2'>
                <IoIosArrowDown className='text-sm cursor-pointer' />
            </div>
        </div>
    )
}

export default SortOptions;
