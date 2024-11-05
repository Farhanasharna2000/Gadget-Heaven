import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import  { Toaster } from 'react-hot-toast';

import { CartProvider } from "../Utilitis/CartProvider ";
const MainLayOut = () => {
    
    return (
        <div className="w-11/12 mx-auto">
            <CartProvider>
             <Toaster />
          <Navbar  />  
        <Outlet/> 
        <Footer/>
        </CartProvider>
        </div>
    );
};

export default MainLayOut;