import './App.scss';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Products from './pages/products/Products';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ForgotPassword from './pages/forgotpassword/ForgotPassword';
import Cart from './pages/cart/Cart';
import Wishlist from './pages/wishlist/Wishlist';
import Layout from './components/layout/Layout';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ]

  }
]);
function App() {  
  return (
    <div className="app">
       <RouterProvider router={router} />      
    </div>

  );
}

export default App;
