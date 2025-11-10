import React from "react";
import Footer2 from "../Common/Footer/index2";
import Image1 from "../../asset/img/lab report/labreport.png";

const Lab = () => {
  return (
    <>
      <div className="lab">
        <div className="row">
          <div className="col-lg-12 w-100">
            <div className="lab-heading py-1">
              <p className="fs-1  text-center text-light text-uppercase">
                lab report
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center py-3 px-4">
            <div className="report-img  ">
              <img src={Image1} alt="" className="w-100 h-100" />
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default Lab;
