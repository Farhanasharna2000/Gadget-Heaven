import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Title from "../Components/Title";

const Home = () => {
    const categories = useLoaderData();
    
   
    return (
        <div>
          <Banner /> 
          <Title/>
          <div className="flex ">

<div className="w-1/5">
<Categories categories={categories}  />
</div>    
<div>
<Outlet/>
    </div>  
          </div>
        </div>
    );
};

export default Home;