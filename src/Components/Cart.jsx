import PropTypes from 'prop-types';
import { RxCrossCircled } from "react-icons/rx";

const Cart = ({ cart }) => {
    const { description, product_title, price, product_image } = cart || {};

    return (
        <div className="relative bg-base-200 my-8 rounded-xl p-6">
            <div className="absolute top-4 right-4 text-rose-600 text-3xl cursor-pointer">
                <RxCrossCircled />
            </div>

            <div className="flex gap-3">
                <img
                    src={product_image}
                    alt="Product"
                    className="w-52 h-36 rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-xl font-bold">{product_title}</h1>
                    <p className="py-6">{description}</p>
                    <p>Price: $ {price}</p>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object, 
};

export default Cart;
