// import React, { useContext, useEffect } from 'react'
// import "./Verify.css"
// import { useNavigate, useSearchParams } from 'react-router-dom'
// import { StoreContext } from '../../context/StoreContext';
// import axios from 'axios';

// const Verify = () => {

//   const [searchParams, setSearchParams] = useSearchParams();
//   const success = searchParams.get("success")
//   const orderId= searchParams.get("orderId")
//   const {url} = useContext(StoreContext)
//   const navigate = useNavigate();
  
//   const verifyPayment = async () => {
//     const response = await axios.post(url+"/api/order/verify",{success,orderId});
//     if (response.data.success) {
//       navigate("/myorders");
//     }
//     else {
//       navigate("/")
//     }
//   }
//   useEffect(()=>{
//     verifyPayment();
//   },[])

//   return (
//     <div className='verify'>
//       <div className="spinner"></div>
//     </div>
//   )
// }

// export default Verify



import React, { useContext, useEffect } from 'react';
import "./Verify.css";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();
  
  const verifyPayment = async () => {
    try {
      const response = await axios.post(`${url}/api/order/verify`, { success, orderId });
      if (response.data.success) {
        navigate("/myorders");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Payment verification failed:", error);
      navigate("/");  // Redirect to home on error
    }
  };

  useEffect(() => {
    verifyPayment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);  // Empty dependency array, so it runs only once after mount

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
