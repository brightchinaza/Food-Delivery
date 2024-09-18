import React from "react";
import "./About.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import Accordion from "../../components/accordion/accordion";

const About = () => {
  return (
    <div className="about">
      <section className="intro">
        <h1>Bite Express</h1>
        <p>Savor paradise with the touch of your fingers.</p>
      </section>
      <section className="about-section">
        <div className="image">
          <img src={assets.image_1} alt="" />
        </div>
        <div className="right">
          <h1>Bite Express</h1>
          <p>
            Bite Express is a dynamic food delivery platform that connects
            hungry customers, local restaurants, and dedicated couriers with the
            power of cutting-edge technology. As a rapidly expanding company, we
            are reshaping the food delivery landscape across Europe, Western
            Asia, and Africa. <span className="one">Our mission goes beyond just delivering meals; we
            aim to enhance the dining experience by providing fast, reliable,
            and sustainable solutions that benefit our communities and the
            environment. At Bite Express, we believe in using innovation to make
            every bite count, driving positive change in how the world eats.</span> 
          </p>
        </div>
      </section>

      <section className="achievement">
        <div className="achievement-row">
          <div className="achievement-col">
            <div className="number">
              <h1>23</h1>
              <p>Countries</p>
            </div>
            <div className="number">
              <h1>61K</h1>
              <p>Monthly couriers</p>
            </div>
            
            <div className="number">
              <h1>4.2K</h1>
              <p>Employees</p>
            </div>
          </div>
        </div>
      </section>
      <section className="makeorder">
        <div className="left">
          <h1>
            Place Your Order In Seconds
            <span className="orderIcon">
              <svg
                className="windIcon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#fff"
              >
                <path d="M460-160q-32 0-59.5-16T356-220q-11-20-.5-40t32.5-20q13 0 23 8t18 18q5 7 13.5 10.5T460-240q17 0 28.5-11.5T500-280q0-17-11.5-28.5T460-320H120q-17 0-28.5-11.5T80-360q0-17 11.5-28.5T120-400h340q50 0 85 35t35 85q0 50-35 85t-85 35ZM120-560q-17 0-28.5-11.5T80-600q0-17 11.5-28.5T120-640h500q25 0 42.5-17.5T680-700q0-25-17.5-42.5T620-760q-16 0-30 7.5T568-731q-7 12-17 21.5t-24 9.5q-20 0-32.5-15t-6.5-32q14-42 50.5-67.5T620-840q58 0 99 41t41 99q0 58-41 99t-99 41H120Zm678 308q-20 9-39-2.5T740-288q0-14 9.5-23.5T771-328q14-8 21.5-22t7.5-30q0-25-17.5-42.5T740-440H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h620q58 0 99 41t41 99q0 42-22 76.5T798-252Z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#fff"
              >
                <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68-39.5t-2-78.5l54-98-144-304H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h65q11 0 21 6t15 17l27 57Zm134 280h280-280Z" />
              </svg>
            </span>
          </h1>

          <span>
            <Link to="/">Order Now</Link>
          </span>
          {/* <img src={assets.deliveryman} alt="" /> */}
          <div className="delivery-image">
            {/* <div className="deliveryman"></div>    */}
            {/* <div className='trees'></div> */}
          </div>
        </div>
        <div className="right">
          <img src={assets.image} alt="" />
        </div>
      </section>
      <section className="achievement">
        <div className="achievement-row">
          <div className="achievement-col">
            <div className="number">
              <h1>2.4M</h1>
              <p>Solidarity Orders</p>
            </div>
            <div className="number">
              <h1>8,854TN</h1>
              <p>CO2 Emissions Reduced</p>
            </div>
            <div className="number">
              <h1>1,124TN</h1>
              <p>Food Waste Avoided</p>
            </div>
            {/* <div className="number1">
            <h1>6M</h1>
            <p>Units Sustainable Packaging Sold</p>
          </div> */}
          </div>
        </div>
      </section>
      <section className="Story-section">
        <h1>Our Story</h1>
        <p>
          Bite Express started with a simple idea: to make food delivery faster,
          smarter, and more enjoyable. Founded in a small kitchen by a group of
          friends passionate about food and technology, we noticed a gap in the
          market—a need for a seamless, reliable way to connect people with
          their favorite meals. What began as a local project quickly grew into
          a movement, driven by our desire to revolutionize the dining
          experience.
          <span>
            As we expanded across Africa, Europe and Western Asia, we remained
            true to our core values: using technology to solve everyday problems
            and making a positive impact on our communities. We built a platform
            that empowers local businesses, supports couriers, and delights
            customers with every order. Our growth is fueled by a commitment to
            innovation and a relentless pursuit of excellence. Today, Bite
            Express isn’t just about food delivery—it’s about bringing people
            together, creating opportunities, and fostering a sustainable
            future. From the first bite to the last mile, we’re dedicated to
            making every delivery a step toward a better world.
          </span>
        </p>
      </section>
      <section className="mission-section">
        <h1>Our Mission</h1>
        <p>
          Our vision is to give everyone easy access to anything in their city{" "}
        </p>
      </section>
      <section className="team-section">
        <h1 className="team-section-col" >Meet the Team</h1>
        <Accordion />
      </section>
    </div>
  );
};

export default About;
