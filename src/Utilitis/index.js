import toast from "react-hot-toast";

const getAllFavorites = () => {
    const all = localStorage.getItem('favorites');
    return all ? JSON.parse(all) : [];
};

const getAllCarts = () => {
    const all = localStorage.getItem('carts'); 
    return all ? JSON.parse(all) : [];
};


const getCartCount = () => {
    const carts = localStorage.getItem('carts');
    return carts ? JSON.parse(carts).length : 0;
};

const getFavoriteCount = () => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites).length : 0;
};

const addFavorite = product => {
    const favorites = getAllFavorites();
    const isExist = favorites.find(item => item.product_id === product.product_id);
    if (isExist) {
        return toast.error('Already in wishlist!');
    }
    favorites.push(product);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    return toast.success('Adding item to wishlist');
};
const addCart = product => {
    const carts = getAllCarts();
    const isExist = carts.find(item => item.product_id === product.product_id);
    if (isExist) {
         toast.error('Already in cart!');
         throw new Error('already exist');
    }
    carts.push(product);
    localStorage.setItem('carts', JSON.stringify(carts));
    return toast.success('Adding item to cart');
};





export {addFavorite, getAllFavorites,addCart,  getAllCarts ,getCartCount,getFavoriteCount};
