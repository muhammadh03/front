// import image from "../../assets/products/laptop.png"

const CategoryCard = ({ title, image }) => {
    return (
        <div className="w-24 md:w-40 lg:w-44 h-auto border-2 border-gray-200 hover:border-blue-200 rounded-md shadow-md hover:shadow-blue-300 hover:shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="flex flex-col items-center py-4 px-2">
                <div className="h-20 md:h-40 flex items-center justify-center">
                    <img src={image} alt="" className="w-15 md:w-24 h-auto" />
                </div>

                <div className="pt-2 text-center">
                    <h1 className="text-xs md:text-base font-semibold text-gray-500">
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard;
