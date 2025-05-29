import React from 'react'

const FilterSidebar = () => {

    const brands = [
        {
            name: "Apple",
            stock: 50
        },
        {
            name: "Dell",
            stock: 40
        },
        {
            name: "Lenovo",
            stock: 45
        },
        {
            name: "MSI",
            stock: 30
        },
        {
            name: "Hp",
            stock: 35
        },
    ];

    const processors = [
        {
            name: "Intel Core i9",
            stock: 20
        },
        {
            name: "Intel Core i7",
            stock: 25
        },
        {
            name: "Intel Core i5",
            stock: 30
        },
        {
            name: "Intel Core i3",
            stock: 15
        },
    ];

    const rams = [
        {
            size: "32GB",
            stock: 20
        },
        {
            size: "24GB",
            stock: 15
        },
        {
            size: "16GB",
            stock: 30
        },
        {
            size: "8GB",
            stock: 25
        },
        {
            size: "4GB",
            stock: 10
        },
    ];

    const graphicCards = [
        {
            name: "RTX 4090",
            stock: 10
        },
        {
            name: "RTX 4080",
            stock: 8
        },
        {
            name: "RTX 4070",
            stock: 15
        },
        {
            name: "RTX 4060",
            stock: 12
        },
        {
            name: "RTX 4050",
            stock: 5
        },
        {
            name: "RTX 3080 Ti",
            stock: 7
        },
        {
            name: "RTX 3080",
            stock: 9
        },
        {
            name: "RTX 3070 Ti",
            stock: 6
        },
        {
            name: "RTX 3070",
            stock: 11
        },
        {
            name: "RTX 3060",
            stock: 14
        },
        {
            name: "RTX 3050 Ti",
            stock: 4
        },
        {
            name: "RTX 3050",
            stock: 13
        },
    ];


    return (
        <div className='w-full'>
            <div className='text-gray-700 border-2 border-gray-200 py-2 px-3 lg:px-4 bg-blue-100 rounded-sm'>
                <h1 className='text-sm lg:text-base font-semibold'>Filter Products By</h1>
            </div>

            <div className='text-gray-500 border-2 border-gray-200 py-3 px-4 mt-6 rounded-sm'>
                {/* BRAND */}
                <div>
                    <label
                        htmlFor="Manufacturer"
                        className='text-sm lg:text-base text-gray-700 font-semibold tracking-wide'
                    >
                        Brand
                    </label>
                    {brands.map((brand, index) => (
                        <div key={index} className='mt-2 text-xs lg:text-sm flex items-center justify-between'>
                            <div>
                                <input
                                    type="checkbox"
                                    name="Manufacturer"
                                    id="manufacturer"
                                    className='w-2.5 h-2.5 lg:w-3 lg:h-3'
                                />
                                <span className='ml-2'> {brand.name} </span>
                            </div>
                            <div>
                                <span> {brand.stock} </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* PROCESSOR */}
                <div className='mt-4'>
                    <label
                        htmlFor="Manufacturer"
                        className='text-sm lg:text-base text-gray-700 font-semibold tracking-wide'
                    >
                        Processor
                    </label>
                    {processors.map((processor, index) => (
                        <div key={index} className='mt-2 text-xs lg:text-sm flex items-center justify-between'>
                            <div>
                                <input
                                    type="checkbox"
                                    name="Manufacturer"
                                    id="manufacturer"
                                    className='w-2.5 h-2.5 lg:w-3 lg:h-3'
                                />
                                <span className='ml-2'> {processor.name} </span>
                            </div>
                            <div>
                                <span> {processor.stock} </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* RAM */}
                <div className='mt-4'>
                    <label
                        htmlFor="Manufacturer"
                        className='text-sm lg:text-base text-gray-700 font-semibold tracking-wide'
                    >
                        Processor
                    </label>
                    {rams.map((ram, index) => (
                        <div key={index} className='mt-2 text-xs lg:text-sm flex items-center justify-between'>
                            <div>
                                <input
                                    type="checkbox"
                                    name="Manufacturer"
                                    id="manufacturer"
                                    className='w-2.5 h-2.5 lg:w-3 lg:h-3'
                                />
                                <span className='ml-2'> {ram.size} </span>
                            </div>
                            <div>
                                <span> {ram.stock} </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* GRAPHICS CARD */}
                <div className='mt-4'>
                    <label
                        htmlFor="Manufacturer"
                        className='text-sm lg:text-base text-gray-700 font-semibold tracking-wide'
                    >
                        Graphics Card
                    </label>
                    {graphicCards.map((card, index) => (
                        <div key={index} className='mt-2 text-xs lg:text-sm flex items-center justify-between'>
                            <div>
                                <input
                                    type="checkbox"
                                    name="Manufacturer"
                                    id="manufacturer"
                                    className='w-2.5 h-2.5 lg:w-3 lg:h-3'
                                />
                                <span className='ml-2'> {card.name} </span>
                            </div>
                            <div>
                                <span> {card.stock} </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FilterSidebar;
