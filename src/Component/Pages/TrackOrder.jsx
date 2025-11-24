import React from "react";
import { useForm } from "react-hook-form";
import TrackImg from "../../asset/img/TrackOrder/TrackOrder.jpg";
import Footer2 from "../Common/Footer/index2";

const TrackingOrder = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="container tracking-order">
        <div className="row my-4">
          <div className="col-lg-6 col-md-12">
            <img
              src={TrackImg}
              className="d-block w-100"
              alt="Tracking-image"
            />
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="text-center h-100 track-formsd shadow px-4 py-4">
              <h1 className="my-3 fw-bold track-text mb-3">Track Your Order</h1>

              <div className="d-flex justify-content-center mt-5">
                <a
                  target="_"
                  href="https://panel.shipmozo.com/track-order/LBYfQgGFRljv1A249H87"
                >
                  <button
                    type="submit"
                    className="track-button text-white px-5 py-2 border-0"
                  >
                    Track Order
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default TrackingOrder;
