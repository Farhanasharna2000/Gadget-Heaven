import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayOut = () => {
    return (
        <div className=" container mx-auto">
          <Navbar/> 
         <Outlet/> 
          <Footer/>
        </div>
    );
};

export default MainLayOut;