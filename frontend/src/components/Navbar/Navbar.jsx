import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
 

const Navbar = ({setShowLogin}) => {

  const [menu,setMeun] = useState("home")

  const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

  const navigate = useNavigate();
  const logout = ()=> {
    localStorage.removeItem("token")
    setToken("");
    navigate("/");
  } 

  return (  
    <div className='nav'>
      <div className='navbar'>
        {/* <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link> */}
        <Link className="logo" to='/'><h1>BiteExpress</h1> </Link>
        <ul className="navbar-menu">
          <Link to='/'  onClick={()=>setMeun ("home")}  className={menu==="home"?"active":""} >home</Link>
          {/* <a href='#explore-menu'  onClick={()=>setMeun ("menu")}  className={menu==="menu"?"active":""}>menu</a> */}
          <Link to='/menu' onClick={()=>setMeun ("menu")} className={menu==="menu"?"active":""}>menu</Link>
          <Link to='/about' onClick={()=>setMeun ("about")} className={menu==="about"?"active":""}>about</Link>
          <a href='#footer' onClick={()=>setMeun ("contact us")}  className={menu==="contact us"?"active":""}>contact us</a>
        </ul> 
        <div className="navbar-right">
          {/* <img src={assets.search_icon} alt="" /> */}
          <div className="navbar-search-icon">
            <Link to='/cart' ><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
          </div>
          {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>
          :<div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt=""  /><p>Logout</p></li>
            </ul>
          </div>
          }
          
        </div>
 
      </div>
    </div>
  )
}

export default Navbar