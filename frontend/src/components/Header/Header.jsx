import React, { useState } from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
import { Link } from "react-router-dom";



const Header = () => {

  const [setMeun] = useState("menu")

  return (
    <div className='header'>
 
 
          <div className='video'>
            <video autoPlay loop muted>
              <source src={assets.video} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

        <div className="header-contents">
          {/* <video src={assets.video} autoPlay loop /> */}

          

            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crsfted with the finest ingredients and culinary expertise. our mission is to satisfy your craving and elevate
                your dining experience, one delicious meal at a time. </p>
             <Link to="/menu"><button >View Menu</button></Link>


        </div>

    </div>
  )
}

export default Header