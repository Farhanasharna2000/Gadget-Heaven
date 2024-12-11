import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import  { Toaster } from 'react-hot-toast';

import { CartProvider } from "../Utilitis/CartProvider ";
import { Helmet } from "react-helmet";
const MainLayOut = () => {
    
    return (
        <div >
            <CartProvider>
             <Toaster />
             <Helmet>
        <title>Gadget Heaven</title> 
      </Helmet>
          <Navbar  />  
        <div className="min-h-[calc(100vh-475px)]">
        <Outlet/>
        </div> 
        <Footer/>
        </CartProvider>
        </div>
    );
};

export default MainLayOut;