import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import { Layout } from './Components/Layout';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { OurStore } from './Pages/OurStore';
import { Blogs } from './Pages/Blogs';
import { CompareProducts } from './Pages/CompareProducts';
import { WishList } from './Pages/WishList';
import { Login1 } from './Pages/Login1';
import { Signup } from './Pages/Signup';
function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}></Route> 
          <Route path='about' element={<About/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
          <Route path='store' element={<OurStore/>}></Route>
          <Route path='blogs' element={<Blogs/>}></Route>
          <Route path='compareproducts' element={<CompareProducts/>}></Route>
          <Route path='wishlist' element={<WishList/>}></Route>
          <Route path='login' element={<Login1/>}></Route>
          <Route path='signup' element={<Signup/>}></Route>


        </Route>
       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
