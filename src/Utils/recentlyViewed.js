export const updateRecentlyViewed = (product) => {
    let viewed = JSON.parse(localStorage.getItem("recentlyViewed")) || [];

    // Remove if already exists
    viewed = viewed.filter((item) => item.id !== product.id);

    // Add to beginning
    viewed.unshift(product);

    // Limit to 10 items
    if (viewed.length > 10) {
        viewed = viewed.slice(0, 10);
    }

    localStorage.setItem("recentlyViewed", JSON.stringify(viewed));
};

export const getRecentlyViewed = () => {
    return JSON.parse(localStorage.getItem("recentlyViewed")) || [];
};