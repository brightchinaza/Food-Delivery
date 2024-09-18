import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/myOrders/myOrders";
import About from "./pages/About/About";
import ExploreMenu from "./components/ExploreMenu/ExploreMenu";
import MenuItem from "./pages/MenuItem/MenuItem";

const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  
  return ( 
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuItem/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
          ExploreMenu

        </Routes>
      </div>
      <Footer />
    </>
  );
};
// GitHub problem - pushing only one side of the MERN stack application (unclickable folder with arrow)
export default App;
