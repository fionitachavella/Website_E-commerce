import React, {Component} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banneer from './Components/Assets/banner_kids.png'
import CartItems from './Components/CartItems/CartItems';
import NewCollections from './Components/NewCollections/NewCollections';
import NewsLetter from './Components/NewsLetter/NewsLetter';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner ={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner ={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner ={kid_banneer} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        
        </Route>
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path="/new-collection" element={<NewCollections />} />
        <Route path="/newsletter" element={<NewsLetter />} />
        
       
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
