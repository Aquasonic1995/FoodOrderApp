import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Menu from "./pages/Menu/Menu.tsx";
import Cart from "./pages/Cart/Cart.tsx";
import Error from "./pages/Error/Error.tsx";
import LayoutMenu from "./Layout/Menu/LayoutMenu.tsx";
import Product from "./Components/Product/Product.tsx";
import axios from "axios";
import {BASE_URL} from "./helpers/API.ts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutMenu />,
        children: [
            {
                path: '/',
                element: <Menu />
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path:'/product/:id',
                element:<Product/>,
                errorElement:<>Ошибка</>,
                loader: async ({params})=>{
                    const {data} = await axios.get(`${BASE_URL}/products/${params.id}`);
                    return data;
                }
            }

        ]
    },
    {
        path: '*',
        element: <Error/>
    }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>

        <RouterProvider router={router}/>

    </React.StrictMode>,
);
