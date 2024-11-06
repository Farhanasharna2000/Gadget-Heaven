import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import  { Toaster } from 'react-hot-toast';

import { CartProvider } from "../Utilitis/CartProvider ";
const MainLayOut = () => {
    
    return (
        <div >
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