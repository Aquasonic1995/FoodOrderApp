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
import LayoutAuth from "./Layout/Auth/LayoutAuth.tsx";
import Login from "./pages/Login/Login.tsx";
import Register from "./pages/Register/Register.tsx";
import RequireAuth from "./helpers/RequireAuth.tsx";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";

const router = createBrowserRouter([
    {
        path: '/',
        element:<RequireAuth><LayoutMenu/></RequireAuth> ,
        children: [
            {
                path: '/',
                element: <Menu/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/product/:id',
                element: <Product/>,
                errorElement: <>Ошибка</>,
                loader: async ({params}) => {
                    const {data} = await axios.get(`${BASE_URL}/products/${params.id}`);
                    return data;
                }
            }

        ]
    },
    {
        path: '/auth/',
        element: <LayoutAuth/>,
        children: [
            {
                path: '/auth/login',
                element: <Login/>
            },
            {
                path: '/auth/register',
                element: <Register/>
            },
        ]
    },
    {
        path: '*',
        element: <Error/>
    }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
<Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
    </React.StrictMode>,
);
