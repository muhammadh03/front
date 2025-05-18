

const TopBrands = ({ image, logo }) => {
    return (
        <div className="bg-white w-full md:w-[21rem] lg:w-[17.5rem] p-3 rounded-md border-1 border-gray-300">
            <div className="flex items-start">
                <div>
                    <img src={image} alt="" className="w-44 md:w-40 lg:w-36 h-auto" />
                </div>

                <div className="flex flex-col px-2">
                    <div className="text-gray-500 pl-2">
                        <div>
                            <img src={logo} alt="" className="w-44 md:w-40 lg:w-36 h-10" />
                        </div>

                        <div>
                            <span className="text-xs">
                                PC, Laptops, Smart Watch, Gaming Gear
                            </span>
                        </div>
                    </div>
                    <div className="my-1 text-gray-500">
                        <hr />
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-yellow-400 text-2xl lg:text-xl font-bold cursor-pointer">
                            Up to 25% off
                        </span>
                        <span className="text-blue-500 text-sm cursor-pointer">
                            Shop Now
                        </span>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default TopBrands;
