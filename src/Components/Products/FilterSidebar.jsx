import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

const FilterSidebar = () => {

    // searchParams: to get values from the URL's query string.
    // setSearchParams: to update the query string.
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const [filters, setFilters] = useState({
        brand: [],
        processor: [],
        ram: [],
        graphicCards: [],
        minPrice: 0,
        maxPrice: 3000,
    });

    const [priceRange, setPriceRange] = useState([0, 3000]);


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

    useEffect(() => {
        /*Object.fromEntries converts the searchParams (which comes from the URL like ?name=Ali&age=25) into a plain JavaScript object.To easily work with URL query parameters as a normal object instead of calling get() or has() repeatedly on the URLSearchParams instance.*/
        const params = Object.fromEntries([...searchParams]);

        // default filters value
        setFilters({
            brand: params.brand ? params.brand.split(",") : [],
            processor: params.processor ? params.processor.split(",") : [],
            ram: params.ram ? params.ram.split(",") : [],
            graphicCards: params.graphicCards ? params.graphicCards.split(",") : [],
            // minPrice: params.minPrice ? params.minPrice : 0,
            // maxPrice: params.maxPrice ? params.maxPrice : 3000
            minPrice: params.minPrice || 0,
            maxPrice: params.maxPrice || 3000,
        })

        setPriceRange([0, params.maxPrice || 3000]);
        // setPriceRange([params.minPrice ? params.minPrice : 0, params.maxPrice ? params.maxPrice : 3000])
    }, [searchParams]);


    // HANDLE FILTER //
    const handleFilterChange = (e) => {
        const { name, value, checked, type } = e.target;

        // update the filters state
        let newFilters = { ...filters };

        if (type === "checkbox") {
            if (checked) {
                newFilters[name] = [...(newFilters[name] || []), value];
            } else {
                newFilters[name] = newFilters[name].filter((item) => item !== value);
            }
        } else {
            newFilters[name] = value;
        }

        setFilters(newFilters);
        updateURLParams(newFilters);
    };


    const updateURLParams = (newFilters) => {
        const params = new URLSearchParams();

        Object.keys(newFilters).forEach((key) => {
            if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
                params.append(key, newFilters[key].join(","));
            } else if (newFilters[key]) {
                params.append(key, newFilters[key]);
            }
        });

        setSearchParams(params);
        navigate(`?${params.toString()}`);
    };


    // HANDLE PRICE RANGE
    const handlePriceChange = (e) => {
        const newPrice = e.target.value;
        setPriceRange(newPrice);

        const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };
        setFilters(newFilters);
        updateURLParams(newFilters);
    };


    // HANDLE RESET FILTER //
    const handleResetFilters = () => {
        setFilters({ brand: [], processor: [], ram: [], graphicCards: [], minPrice: 0, maxPrice: 3000 });
        setPriceRange([0, 3000]);
        updateURLParams({ brand: [], processor: [], ram: [], graphicCards: [], minPrice: 0, maxPrice: 3000 });
    }


    // Simulate fetching filtered products with debounce to avoid making API requests on every tiny change.
    // const debouncedFetchFilteredProducts = useCallback(debounce(fetchFilteredProducts, 500), []);
    useEffect(() => {
        const debouncedFetch = debounce(() => {
            console.log("Fetching filters:", filters);
            // Replace with API call
        }, 500); // wait 500ms

        debouncedFetch();
        return () => debouncedFetch.cancel();
    }, [filters]);


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
                                    name="brand"
                                    id="brand"
                                    value={brand.name}
                                    onChange={handleFilterChange}
                                    checked={filters.brand.includes(brand.name)} // Retaining filters on a product page after a refresh
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
                                    name="processor"
                                    id="processor"
                                    value={processor.name}
                                    onChange={handleFilterChange}
                                    checked={filters.processor.includes(processor.name)} // Retaining filters on a product page after a refresh
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
                        Ram
                    </label>
                    {rams.map((ram, index) => (
                        <div key={index} className='mt-2 text-xs lg:text-sm flex items-center justify-between'>
                            <div>
                                <input
                                    type="checkbox"
                                    name="ram"
                                    id="ram"
                                    value={ram.size}
                                    onChange={handleFilterChange}
                                    checked={filters.ram.includes(ram.size)} // Retaining filters on a product page after a refresh
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
                                    name="graphicCards"
                                    id="graphicCards"
                                    value={card.name}
                                    onChange={handleFilterChange}
                                    checked={filters.graphicCards.includes(card.name)} // Retaining filters on a product page after a refresh
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

                {/* PRICE RANGE */}
                <div className='mt-4'>
                    <label
                        htmlFor="priceRange"
                        className='text-sm lg:text-base text-gray-700 font-semibold tracking-wide'
                    >
                        Price Range
                    </label>
                    <div className='mt-2 text-xs lg:text-sm'>
                        <div>
                            <input
                                type="range"
                                name="priceRange"
                                min="0"
                                max="3000"
                                id="priceRange"
                                value={priceRange[1]}
                                onChange={handlePriceChange}
                                className='w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer'
                            />
                            <div className='flex justify-between'>
                                <span>$0</span>
                                <span>$3000</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RESET FILTERS */}
                <div className='mt-4'>
                    <button
                        type="button"
                        onClick={handleResetFilters}
                        className='w-full bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-md text-white text-sm lg:text-base font-semibold tracking-wide cursor-pointer'
                    >
                        Reset Filters
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FilterSidebar;