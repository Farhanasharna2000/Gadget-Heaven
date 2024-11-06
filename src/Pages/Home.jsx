import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Title from "../Components/Title";
import { Helmet } from "react-helmet";

const Home = () => {
    const categories = useLoaderData();
    
   
    return (
        <div className="w-11/12 mx-auto">
                <Helmet>
        <title>Gadgets | Gadget Heaven</title>
      </Helmet>
          <Banner /> 
          <Title/>
          <div className="flex gap-6">

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