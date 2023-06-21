import React from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './pages/auth/Register';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';

 const router = createBrowserRouter([
   {
     path: "/",
     element: <Home />,
   },
   {
    path:'cart',
    element:<Cart/>
   },
   {
    path:'checkout',
    element:<CheckOut/>
   },
   {
     path: "login",
     element: <Login />,
   },
   {
     path: "register",
     element: <Register />,
   },
 ]);

function App() {
 
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
