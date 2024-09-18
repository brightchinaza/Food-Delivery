import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to="/">
            <h1>BiteExpress</h1>{" "}
          </Link>
          {/* <img src={assets.logo} alt="" /> */}
          <p>
            We bring the best flavors and dishes from every corner of your city
            right to your doorstep, making it easier than ever to explore and
            enjoy all the delicious options available to you.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/myorders">
              <li>Delivery</li>
            </Link>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>
              <a href="tel:+2349074869141">+234-907-486-9141</a>
            </li>
            <li>
              <a href="mailto:brightochinaza96@gmail.com">contact@BiteExpress.com</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; Tomato.com All Right Reserved{" "}
      </p>
    </div>
  );
};

export default Footer;
