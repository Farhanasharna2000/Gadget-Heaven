import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addCart, addFavorite, getAllFavorites } from "../Utilitis";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useCart } from "../Utilitis/CartProvider ";
const CardDetails = () => {
    const { cardId } = useParams();
    const data = useLoaderData();
    const [products, setProducts] = useState({});
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const singleData = data.find(product => product.product_id === cardId);
        setProducts(singleData);
        const favorites = getAllFavorites();
        const isExist = favorites.find(item => item.product_id === singleData.product_id);
        if (isExist) {
            setIsFavorite(true)

        }
    }, [cardId, data])
    const { product_image, product_title, description, price, specification, rating } = products;

    const { updatefavCount } = useCart();
    const { favCount } = useCart();

    const handleFavorite = product => {
        addFavorite(product)
        setIsFavorite(true)
        updatefavCount(favCount  + 1);

    }


    const { updateCartCount } = useCart();
    const { cartCount } = useCart();

   

    const handleCart = product => {
        addCart(product);
        updateCartCount(cartCount + 1);
    };
    return (
        <>
            <div className="bg-[#9538E2] text-white text-center mt-3 pt-10 pb-44 mb-96 relative">
                <h1 className="text-3xl font-bold mb-3">Product Details</h1>
                <p className="w-3/5 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="hero bg-base-200 w-8/12 mx-auto rounded-xl absolute top-[45%] left-[50%] translate-x-[-50%]">
                <div className="hero-content flex-col lg:flex-row ">
                    <img
                        src={product_image}
                        className="lg:max-w-sm lg:h-[420px] rounded-lg shadow-2xl " />
                    <div>
                        <h1 className="text-xl font-bold pb-3">{product_title}</h1>
                        <p className="font-medium text-gray-700 mb-3">price : ${price}</p>
                        <a className="px-2  rounded-3xl  bg-[#2f9c08ab] text-white">In stock</a>
                        <p className="py-6 text-gray-400">
                            {description}
                        </p>
                        <h1 className='text-lg font-bold'>Specification:</h1>
                        <ul className='text-gray-400 ml-12'>
                            {specification &&
                                specification.map((item, idx) => (
                                    <li className='list-disc' key={idx}>
                                        {item}
                                    </li>
                                ))}
                        </ul>
                        <h1 className='text-lg font-bold'>Rating:</h1>
                        <div className="flex items-center gap-5">
                            <div className="rating ">
                                <input type="radio" name="rating-2" className="mask mask-star-2  bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p className="btn rounded-full">{rating}</p>
                        </div>
                        <div className="flex gap-2">
                            <button onClick={() => handleCart(products)} className="btn bg-[#9538E2] text-white">Add To Card <IoCartOutline /></button>

                            <button disabled={isFavorite} onClick={() => handleFavorite(products)} className="btn bg-white border px-3 rounded-full text-xl"><FaRegHeart /></button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardDetails;
