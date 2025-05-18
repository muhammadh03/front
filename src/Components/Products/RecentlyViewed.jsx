
const RecentlyViewed = ({ image }) => {
    return (
        <div className="bg-white w-40 md:w-40 lg:w-36 rounded-md border-2 border-gray-300 hover:border-blue-200 shadow-md hover:shadow-black hover:shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="flex items-center justify-center h-48 p-4">
                <img src={image} alt="recently_viewed_image" className="w-24 md:w-28 lg:w-32 h-auto" />
            </div>
        </div>
    )
}

export default RecentlyViewed;
