
import { useState } from 'react';
import './App.css';
import {Routes,Route, Router } from 'react-router-dom'
import Navbar from './Layout/Navbar';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import AboutUs from './Pages/Account/AboutUs'
import Footer from './Layout/Footer';
import ContactUs from './Pages/Contact/ContactUs';
import Form from "./Pages/Form";
import ProductDetails from './Pages/Products/ProductDetails';
import product from './Pages/Products/product';
import SingleProduct from './Pages/Functions/SingleProduct';
import { Shop } from './Pages/Shop';
import Login from './Pages/Login';
import SignUp from './Pages/Signup';
import AllUsers from './Pages/Functions/AllUsers';
import UpdateProduct from './Pages/Functions/UpdateProduct';
import PrivateRoutes from './Layout/PrivateRoutes';

function App() {

  return (
    <div className="App">
      <Navbar /> 
      <Routes>
      <Route element={<PrivateRoutes/>}> 
      <Route path="/allusers" element={<AllUsers/>}></Route> 
      <Route path="/editproduct/:id" element={<UpdateProduct/>}></Route>
      <Route path="/" element={<Shop/>}></Route> 
      <Route exact path="/home" element={<Home /> }></Route>
      <Route exact path="/about" element={<AboutUs /> }></Route>
      <Route exact path="/products" element={<Products /> }></Route>
      <Route path="/detail/:id" element={<SingleProduct />}></Route> 
      <Route exact path="/contact-us" element={<ContactUs/> }></Route>
      <Route  exact path='/productsdetail/:id' element={<ProductDetails product={product}/>}></Route>
      <Route path="/add" element={ <Form />}></Route>
      </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
