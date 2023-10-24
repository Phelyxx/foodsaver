import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Landingpage from './components/landingpage/Landingpage';
import OrderCategory from './components/OrderCategory';
import Page_end from './components/Page_end';
import Header from './components/Header';
import { useState } from "react";


function App() {

  var user = localStorage.getItem("nombre_usuario")
  var picture = localStorage.getItem("perfil_usuario")
  var usuario = JSON.parse(localStorage.getItem("usuario_edit"));

  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header username={user} profile_photo={picture} cart={cart} setCart={setCart} />

        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/order" element={<OrderCategory />} />
        </Routes>
        <Page_end />
      </BrowserRouter>


    </div>

  );
  // return (
  //   <div className="App">
  //       <Tiendas />
  //       <TiendaDetail/>
  //       <Search/>
  //       <Order/>
  //       <CreateWishlist />
  //       <GiftDetail/>
  //       <WishlistDetail name="Navidad"/>
  //       <Category/>
  //       <Cart />
  //       <DropdownCart/>
  //       <OrderCategory/>
  //       <Wishlists/>
  //       <Resenaproducto/>
  //       <SignIn/>
  //       <SignUp/>
  //       <Profile/>
  //       <EditProfile/> */}

  //       <Routes>
  //         <Route path='/' element= {<Landingpage/>}/>
  //         <Route path='/signin' element= {<SignIn/>}/>
  //         <Route path='/signup' element= {<SignUp/>}/>
  //       </Routes>


  //   </div>

  // );  

}

export default App;
