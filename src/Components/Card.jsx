import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const Card = ({card}) => {
    console.log(card);
    const{product_id,product_title,price,product_image}=card ||{}
    return (
        <div className="card bg-base-100  shadow-xl">
        <figure className="px-10 pt-10">
          <img 
            src={product_image}
            alt=""
            className="rounded-xl h-48 w-full" />
        </figure>
        <div className="card-body items-start ">
          <h2 className="text-lg font-bold">{product_title}</h2>
          <p className="text-gray-500">price:${price}</p>
          <div className="card-actions">
            <Link to={`cards/${product_id}`} className="rounded-3xl btn btn-outline border-[#9538E2] text-[#9538E2]">View Details</Link>
          </div>
        </div>
      </div>
    );
};
Card.propTypes = {
  
  card: PropTypes.array,}
  
export default Card;