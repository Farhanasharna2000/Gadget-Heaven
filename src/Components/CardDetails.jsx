import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
const CardDetails = () => {
    const { cardId } = useParams();
    const data = useLoaderData();
    const [products, setProducts] = useState({});
    useEffect(() => {
        const singleData = data.find(product => product.product_id === cardId);
        setProducts(singleData);
    }, [cardId, data])
    const { product_image, product_title, description, category, price, specification, rating } = products;
    return (
            <div className="hero bg-base-200 w-8/12 mx-auto rounded-xl ">
                <div className="hero-content flex-col lg:flex-row ">
                    <img
                        src={product_image}
                        className="max-w-sm h-[350px] rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-xl font-bold">{product_title}</h1>
                        <p className="font-medium text-gray-700">price : ${price}</p>
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
                        <div className="navbar-end flex gap-4">
                            <button className="btn bg-[#9538E2] text-white">Add To Card <IoCartOutline /></button>

                            <a className="btn bg-white border px-3 rounded-full text-xl"><FaRegHeart /></a>

                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CardDetails;