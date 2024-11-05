import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const Categories = ({ categories }) => {
  return (
    <div className="lg:flex gap-6">
      <div className="p-7 rounded-xl shadow-xl">
        <div className="flex flex-col gap-6">
          <NavLink 
            to={'/'}
            className={({ isActive }) =>
              `btn rounded-3xl font-bold ${isActive ? 'bg-[#9538E2] text-white' : 'hover:bg-gray-200'}`
            }>
            All products
          </NavLink>
          {categories.map(category => (
            <NavLink 
              to={`/category/${category.category}`} 
              key={category.category_id}
              className={({ isActive }) =>
                `btn rounded-3xl font-bold ${isActive ? 'bg-[#9538E2] text-white' : 'hover:bg-gray-200'}`
              }>
              {category.category}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
Categories.propTypes = {
  
    categories: PropTypes.array,}
export default Categories;
