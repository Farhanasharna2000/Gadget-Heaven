import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Error from "../Components/Error";
import CardDetails from "../Components/CardDetails";
import GadgetCards from "../Components/GadgetCards";
import Products from "../Pages/Products";
import ProductDetails from "../Components/ProductDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('../Category.json'),
        children: [
          {
            path: "/",
            element: <GadgetCards />,
            loader: () => fetch('../Gadgets.json'),
          },
          {
            path: "/category/:category",
            element: <GadgetCards />,
            loader: () => fetch('../Gadgets.json'), 
          },
          
        ],
      },
      {
        path: "cards/:cardId",
        element: <CardDetails />,
        loader: () => fetch('../Gadgets.json'),
      },
      {
        path:"/card-details/:cardId",
         element:<CardDetails />,
        loader: () => fetch('../Gadgets.json'),

      },
      {
        path: "/category/:category/cards/:cardId",
        element: <CardDetails />,
        loader: () => fetch('../Gadgets.json'),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        
      },
      {
        path: "/products",
        element: <Products />,
        loader: () => fetch('../Gadgets.json'),
      },
      {
        path: "/products/cards/:productId",
        element: <ProductDetails />,
        loader: () => fetch('../Gadgets.json'),
      },
    ],
  },
]);

export default router;
