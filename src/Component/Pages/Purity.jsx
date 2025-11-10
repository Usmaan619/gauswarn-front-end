import React from "react";
// import Purityimg from "../../asset/img/Purity/purityimg.svg"
import Image1 from "../../asset/img/Purity/Cart-one.svg";
import Image2 from "../../asset/img/Purity/Cart-two.svg";
import Image3 from "../../asset/img/Purity/Cart-Three.svg";



const Purity = () => {
    return (
        <>
            <div className="purity py-5">
                <div className="container">
                    <div className="row d-flex justify-content-between gap-3">
                        <div className="col-lg-3">
                            <div className="purity-content1">
                                <div className="purity-img">
                                    <img src={Image1} alt="" />
                                </div>
                                {/* <p className="purity-heading font-size-18 fw-bold mb-0">Purity of Nutrition</p> */}
                                {/* <p className="font-size-18 text-white">Golden, aromatic, and full of wellness—Gauswarn Bilona Ghee delivers pure nourishment in every drop.</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="purity-content1">
                                <div className="purity-img">
                                    <img src={Image2} alt="" />
                                </div>
                                {/* <p className="purity-heading font-size-18 fw-bold mb-0">Purity of Goodness</p> */}
                                {/* <p className="font-size-18 text-white">More than a product, it's our promise—Gauswarn stands for health, harmony, and holistic living.</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="purity-content1">
                               <div className="purity-img">
                                    <img src={Image3} alt="" />
                                </div>
                                {/* <p className="purity-heading font-size-18 fw-bold mb-0">Purity of Heritage</p> */}
                                {/* <p className="font-size-18 text-white">Golden, aromatic, and full of wellness—Gauswarn Bilona Ghee delivers pure nourishment in every drop.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Purity;