import React, { useEffect } from 'react'
import Footer2 from '../Common/Footer/index2'
import { useCartContext } from '../Context/UserContext';

const PaymentFailed = () => {
  const { setCart } = useCartContext();

  useEffect(() => {
    // Clear data from localStorage when this component loads
    localStorage.removeItem("cart");
    console.log("Cart data cleared from localStorage.");
    setCart([]);
    
  }, []); // Empty dependency array ensures this runs only once when the component mounts


  return (
    <div>
      <div className="payment-fail d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div class="check_mark">
                <div class="sa-icon sa-error animate">
                  <span class="sa-line sa-tip animateErrorTip"></span>
                  <span class="sa-line sa-long animateErrorLong"></span>
                  <div class="sa-placeholder"></div>
                  <div class="sa-fix"></div>
                </div>
              </div>
              <div className="text-center py-2">
                <p className="fs-2 fw-bold">Payment Failed</p>
                <button className="px-5 py-2 fw-bold border rounded-pill bg-danger text-light">Try Again</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2/>
    </div>
  )
}

export default PaymentFailed
