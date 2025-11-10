// import React from "react";
// import Gallery1 from "../../asset/img/Gallery/gallery1.png";
// import Gallery2 from "../../asset/img/Gallery/gallery2.png";
// import Gallery3 from "../../asset/img/Gallery/gallery3.png";
// import Gallery4 from "../../asset/img/Gallery/gallery4.png";
// import Gallery5 from "../../asset/img/Gallery/gallery5.png";
// import Gallery6 from "../../asset/img/Gallery/gallery6.png";
// import Gallery7 from "../../asset/img/Gallery/gallery7.png";
// import Gallery8 from "../../asset/img/Gallery/gallery8.png";


// const Gallery = () => {

//     const images = [
//         {
//             img: Gallery1,
//         },
//         {
//             img: Gallery2,
//         },
//         {
//             img: Gallery3,
//         },
//         {
//             img: Gallery4,
//         },
//         {
//             img: Gallery5,
//         },
//         {
//             img: Gallery6,
//         },
//         {
//             img: Gallery7,
//         },
//         {
//             img: Gallery8,
//         },
//     ]

//     return (
//         <>
//             <section className="gallery py-lg-5">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="gallery-heading text-center pb-lg-5 pb-3">
//                                 <p className="mb-0 gallery-head">Our Gallery</p>
//                                 <p className="mb-0 gallery-head2">Discover the journey of our ghee  from farm-fresh milk to rich, golden goodness.</p>
//                             </div>
//                         </div>

//                         <div className="col-lg-12">
//                             <div className="gallery-box p-4 rounded">
//                                 <p className="gallery-box-head1 mb-0">Our Ghee Collection</p>
//                                 <p className="gallery-box-para1 mb-4">
//                                     Take a closer look at the purity, color, and texture of our handcrafted ghee.
//                                 </p>

//                                 <div className="row g-4">
//                                     {images.map((img, index) => (
//                                         <div key={index} className="col-lg-3 col-md-6">
//                                             <div className="gallery-box-img">
//                                                 <img src={img.img} alt={`Ghee ${index + 1}`} className="img-fluid rounded shadow-sm" />
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Gallery;



import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Footer2 from "../Common/Footer/index2";


import Gallery1 from "../../asset/img/Gallery/gallery1.png";
import Gallery2 from "../../asset/img/Gallery/gallery2.png";
import Gallery3 from "../../asset/img/Gallery/gallery3.png";
import Gallery4 from "../../asset/img/Gallery/gallery4.png";
import Gallery5 from "../../asset/img/Gallery/gallery5.png";
import Gallery6 from "../../asset/img/Gallery/gallery6.png";
import Gallery7 from "../../asset/img/Gallery/gallery7.png";
import Gallery8 from "../../asset/img/Gallery/gallery8.png";

import Festive1 from "../../asset/img/Gallery/ghee-festiv1.png";
import Festive2 from "../../asset/img/Gallery/ghee-festiv2.png";
import Festive3 from "../../asset/img/Gallery/ghee-festiv3.png";
import Festive4 from "../../asset/img/Gallery/ghee-festiv4.png";

import Galfood1 from "../../asset/img/Gallery/gal-food1.png";
import Galfood2 from "../../asset/img/Gallery/gal-food2.png";
import Galfood3 from "../../asset/img/Gallery/gal-food3.png";
import Galfood4 from "../../asset/img/Gallery/gal-food4.png";




import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 580);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const images = [
        { img: Gallery1 },
        { img: Gallery2 },
        { img: Gallery3 },
        { img: Gallery4 },
        { img: Gallery5 },
        { img: Gallery6 },
        { img: Gallery7 },
        { img: Gallery8 },
    ];

    const festive = [
        { image: Festive1 },
        { image: Festive2 },
        { image: Festive3 },
        { image: Festive4 },
    ];

    const food = [
        { img: Galfood1 },
        { img: Galfood2 },
        { img: Galfood3 },
        { img: Galfood4 },

    ];





    const sliderSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className="gallery pt-3 pb-5">
                <div className="container">
                    <div className="gallery-heading text-center pb-lg-5 pb-3">
                        <p className="mb-0 gallery-head">Our Gallery</p>
                        <p className="mb-0 gallery-head2">
                            Discover the journey of our ghee from farm-fresh milk to rich, golden goodness.
                        </p>
                    </div>

                    <div className="gallery-box p-4 rounded-4">
                        <p className="gallery-box-head1 mb-0">Our Ghee Collection</p>
                        <p className="gallery-box-para1 mb-4">
                            Take a closer look at the purity, color, and texture of our handcrafted ghee.
                        </p>

                        {isMobile ? (
                            <Slider {...sliderSettings} className="gallery-slider">
                                {images.map((img, index) => (
                                    <div key={index} className="text-center">
                                        <div className="gallery-box-img">
                                            <img
                                                src={img.img}
                                                alt={`Ghee ${index + 1}`}
                                                className="img-fluid rounded shadow-sm mx-auto"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            <div className="row g-4">
                                {images.map((img, index) => (
                                    <div key={index} className="col-lg-3 col-md-6">
                                        <div className="gallery-box-img">
                                            <img
                                                src={img.img}
                                                alt={`Ghee ${index + 1}`}
                                                className="img-fluid rounded shadow-sm"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="gallery-box p-4 rounded-4 mt-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <div>
                                    <p className="gallery-box-head1 mb-0">Celebrate Sweet  Everyday</p>
                                    <p className="gallery-box-para1 mb-4">
                                        Celebrate festivals with goodness of pure ghee.
                                    </p>
                                    <div className="row g-4">
                                        {festive.map((img, index) => (
                                            <div key={index} className="col-6">
                                                <div className="festive-img">
                                                    <img src={img.image} alt={`Ghee ${index + 1}`} className="img-fluid rounded shadow-sm" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-6 mt-lg-0 mt-5">
                                <div>
                                    <p className="gallery-box-head1 mb-0">Ghee in Food</p>
                                    <p className="gallery-box-para1 mb-4">
                                        Our ghee adds rich flavor to everyday dishes
                                    </p>
                                    <div className="row g-4">
                                        {food.map((img, index) => (
                                            <div key={index} className="col-6">
                                                <div className="festive-img">
                                                    <img src={img.img} alt={`Ghee ${index + 1}`} className="img-fluid rounded shadow-sm" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer2 />
        </>
    );
};

export default Gallery;
