import { createContext, useContext, useState, useEffect } from 'react';
import { getCartCount, getFavoriteCount } from '../Utilitis';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [favCount, setFavCount] = useState(0);

    useEffect(() => {
        const count = getCartCount() ; 
        const countFav = getFavoriteCount() ; 
        console.log(countFav);
        
        setCartCount(count);
        setFavCount(countFav); 
    }, []);

    const updateCartCount = (newCount) => {
        const validCartCount = Number(newCount) ;
        setCartCount(validCartCount);
        localStorage.setItem('cartCount', validCartCount);
    };

    const updatefavCount = (newCount) => {
        const validFavCount = Number(newCount) ;
        setFavCount(validFavCount);
        localStorage.setItem('favCount', validFavCount);
    };

    return (
        <CartContext.Provider value={{ cartCount, updateCartCount, favCount, updatefavCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
