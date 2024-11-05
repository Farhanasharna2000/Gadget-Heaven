import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const GadgetCards = () => {
  const allProducts = useLoaderData();
  const { category } = useParams(); 

  const filteredProducts = category
    ? allProducts.filter(product => product.category === category)
    : allProducts;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(card => <Card key={card.product_id} card={card} />)
      ) : (
        <h2 className="text-4xl text-purple-600 font-bold text-center">No Data Found.</h2>
      )}
    </div>
  );
};

export default GadgetCards;
