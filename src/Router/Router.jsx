import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Notfound from "../Pages/Notfound";
import Profile from "../Pages/Profile";
import Shop from "../Pages/Shop";
import ShopProductDetails from "../Pages/ShopProductDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "home",
                element: <Home />
            },
            {
                path: "shop",
                element: <Shop />
            },

            // {
            //     path: "shopProductDetails",
            //     element: <ShopProductDetails />
            // },

            {
                path: "shopProductDetails/:id",
                element: <ShopProductDetails />
            },

            {
                path: "profileDetails",
                element: <Profile />
            },

            {
                path: "profileDetails/:id",
                element: <Profile />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "*",
                element: <Notfound />
            },

        ],
    },


]);