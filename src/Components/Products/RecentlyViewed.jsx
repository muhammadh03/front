
const RecentlyViewed = ({ image }) => {
    return (
        <div className="bg-white w-[9.5rem] md:w-[9.5rem] lg:w-[8.7rem] rounded-md border-2 border-gray-300 hover:border-blue-200 shadow-md hover:shadow-black hover:shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="flex items-center justify-center h-48 p-4">
                <img src={image} alt="recently_viewed_image" className="w-24 md:w-28 h-auto" />
            </div>
        </div>
    )
}

export default RecentlyViewed;
