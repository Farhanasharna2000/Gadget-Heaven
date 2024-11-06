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
        <title>Gadget Heaven</title> {/* Default title */}
      </Helmet>
          <Navbar  />  
        <Outlet/> 
        <Footer/>
        </CartProvider>
        </div>
    );
};

export default MainLayOut;