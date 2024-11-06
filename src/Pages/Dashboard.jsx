import { useEffect, useState } from "react";
import { getAllFavorites, getAllCarts } from "../Utilitis";
import Cart from "../Components/Cart";
import Modal from "../Components/Modal";

const Dashboard = () => {
    const [carts, setCarts] = useState([]);
    const [view, setView] = useState('cart'); 
    const [totalAmount, setTotalAmount] = useState(0);
    const [showModal, setShowModal] = useState(false);
    
    useEffect(() => {
        if (view === 'cart') {
            const cartItems = getAllCarts();
            setCarts(cartItems);
            updateTotalAmount(cartItems);
        } else {
            const favoriteItems = getAllFavorites();
            setCarts(favoriteItems);
            updateTotalAmount(favoriteItems);
        }
    }, [view]);

    const updateTotalAmount = (items) => {
        const total = items.reduce((sum, item) => sum + item.price, 0);
        setTotalAmount(total);
    };

    const handleSortByPrice = () => {
        const sortedProducts = [...carts].sort((a, b) => b.price - a.price);
        setCarts(sortedProducts);
    };

    const handlePurchase = () => {
        console.log("Purchase clicked!"); 
        setShowModal(true); 
    };
    
    const handleCloseModal = () => {
        setShowModal(false);
        setTotalAmount(0);
        setCarts([]);
    
        localStorage.removeItem('carts');
        localStorage.removeItem('favorites');
    };

    return (
        <>
            <div className="bg-[#9538E2] text-white text-center py-8 mb-10 ">
                <h1 className="text-3xl font-bold mb-3">Dashboard</h1>
                <p className="w-3/5 mx-auto">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <div className="flex gap-2 justify-center pt-4">
                    <button
                        onClick={() => setView('cart')}
                        className={`btn rounded-3xl px-9 ${view === 'cart' ? 'bg-white text-[#9538E2] font-semibold' : 'bg-[#9538E2] text-white '}`}>
                        Cart
                    </button>
                    <button
                        onClick={() => setView('wishlist')}
                        className={`btn rounded-3xl px-7 ${view === 'wishlist' ? 'bg-white text-[#9538E2]font-semibold' : 'bg-[#9538E2] text-white'}`}>
                        Wishlist
                    </button>
                </div>
            </div>
            
            <div className="flex justify-between items-center w-11/12 mx-auto">
                <div>
                    <h1 className="font-bold">{view === 'cart' ? 'Cart' : 'Wishlist'}</h1>
                </div>
                <div className="flex items-center gap-3">
                    {view === 'cart' && (
                        <>
                            <h2>Total cost: ${totalAmount.toFixed(2)}</h2>
                            <button className="btn rounded-3xl" onClick={handleSortByPrice}>
                                Sort by Price
                            </button>
                            <button className="btn rounded-3xl" onClick={handlePurchase} disabled={totalAmount === 0}>
                                Purchase
                            </button>
                        </>
                    )}
                </div>
            </div>

            <div >
                {carts.map((cart, idx) => (
                    <Cart key={idx} cart={cart} />
                ))}
            </div>
            {showModal && <Modal onClose={handleCloseModal} totalCost={totalAmount} />}
        </>
    );
};

export default Dashboard;
