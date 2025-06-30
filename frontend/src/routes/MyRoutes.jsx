import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import LoginPage from "../components/LoginPage";
import RegisterPage from "../components/RegisterPage";
import Home from "../components/Home";

export let myRoutes=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children: [
            {
                index: true, 
                element:<RegisterPage/>
            },
             {
                path:"/Login",
                element:<LoginPage/>
            },
            {
                path:"/home",
                element:<Home/>
            }
        ],
    },
])