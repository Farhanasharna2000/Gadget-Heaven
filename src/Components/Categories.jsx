import {  NavLink} from "react-router-dom";

const Categories = ({ categories }) => { 
    
    return (
        <div>
                 
           <div className="lg:flex gap-6 ">
           <div className=" p-7 rounded-xl shadow-xl">
           <div  className="flex flex-col gap-6">
            <NavLink to={'/'} className='btn rounded-3xl'>All products</NavLink>
            {categories.map(category => (
                    <NavLink to={`/category/${category.category}`}
                        key={category.category_id}
                        
                        className='btn rounded-3xl'
                    >
                        {category.category}
                    </NavLink>
                ))}
            </div>
          
           </div>
          
           </div>
        </div>
    );
};

export default Categories;
