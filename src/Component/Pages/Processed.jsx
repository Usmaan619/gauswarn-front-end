import React from "react";
import Processe from "../../asset/img/Processed/Shop Now Image.png";
import { Link } from "react-router-dom";
import Button from "../Common/Button/index"

const Processed = () => {
  return (
    <div id="process" className="py-5 background-color-white d-flex align-items-center">
      <div className="container">
        <div className="row d-flex align-items-center">
        
          <div className="col-lg-6 col-sm-12">
            <img
              src={Processe}
              alt="Man"
              className="img-fluid man-image  d-flex justify-content-center"
            />
          </div>
          <div className="col-lg-6 col-sm-12">
            <div>
              <div className="p-3">
                <div className="text-color-brown font-size-18 fw-bold mt-1">
                  USING BILONA METHOD
                </div>
                <h2 className="text-color-pullman-green fw-bold mt-2">
                  NATURALY PROCESSED GIR COW GHEE
                </h2>

                <p className="text-color-brown mt-3">
                 Gir cow ghee is a premium, nutrient-rich clarified ghee
                  made from the milk of Gir cows, known for its purity and
                  health benefits.
                </p>

                <div className="py-3">
                  <Link to="/singleproduct" >
                  <Button title="SHOP NOW"/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Processed;
