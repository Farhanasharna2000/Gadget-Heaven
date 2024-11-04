import { useLoaderData} from "react-router-dom";
import Product from "../Components/Product";
import { useState } from "react";

const Products = () => {
    const data=useLoaderData();
    const [products, setProducts] = useState(data)

    const handleSort=sortBy=>{
        if (sortBy == 'price') {
            // sort by popularity
            const sorted = [...data].sort((a, b) =>  a.price - b.price)
            setProducts(sorted)
          } else if (sortBy == 'rating') {
            // asc sort by rating
            const sorted = [...data].sort((a, b) => a.rating - b.rating)
            setProducts(sorted)
          }
    }
    
    return (
        <>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-3xl font-bold my-5'>
            Sort Product&apos;s by price & Rating
          </h1>
        </div>
        <div className='space-x-4'>
          <button
            onClick={() => handleSort('price')}
            className='btn btn-warning'
          >
            Sort By Price
          </button>
          <button
            onClick={() => handleSort('rating')}
           
            className='btn btn-warning'
          >
            Sort By Rating 
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
        {products.map((product,idx) => (
          <Product key={idx} product={product} />
        ))}
      </div>
    </>
    )
};

export default Products;