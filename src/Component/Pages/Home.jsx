import React, { useEffect } from "react";
import Imge1 from "../../asset/img/Home/Hero-Banner-Ghee.png";
import Imge2 from "../../asset/img/Home/Hero Banner-two.png";
import Imge3 from "../../asset/img/Home/Hero-Banner-three.png";
import Imge from "../../asset/img/Home/Hero.png";
// import Imge4 from "../../asset/img/Home/Hero-Banner-one.png";
import Imgeeres1 from "../../asset/img/Home/Hero-Banner-Ghee-mobile.png";
import Imgeeres2 from "../../asset/img/Responsive/Mobile_screen-two.png";
import Imgeeres3 from "../../asset/img/Responsive/Mobile  Gauswran Screen Banner 1.jpg";
// import Imgeeres4 from "../../asset/img/Responsive/Mobile_screen-one.png";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Home = () => {
  useEffect(() => {
    const carousel = document.querySelector("#carouselExampleControls");
    if (carousel) {
      new window.bootstrap.Carousel(carousel, {
        interval: 3500, // Adjust the interval if needed
        ride: "carousel",
      });
    }
  }, []);
  return (
    <>
      <div className="home">
        <div className="row">
          <div
            id="carouselExampleControls"
            className="carousel slide carousel-fade header-carousel"
            data-bs-ride="carousel"
            // data-bs-interval="3000"
            data-bs-pause="false" // Set this to false to avoid pausing
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <picture>
                  <source media="(max-width: 768px)" srcSet={Imge} />
                  <source media="(max-width: 1024px)" srcSet={Imge} />
                  <img
                    src={Imge}
                    className="d-block w-100 fade-in-img"
                    alt="Slide 1"
                  />
                </picture>
              </div>
              <div className="carousel-item">
                <picture>
                  <source media="(max-width: 768px)" srcSet={Imge} />
                  <source media="(max-width: 1024px)" srcSet={Imge} />
                  <img
                    src={Imge}
                    className="d-block w-100 fade-in-img"
                    alt="Slide 1"
                  />
                </picture>
              </div>
              <div className="carousel-item">
                <picture>
                  <source media="(max-width: 768px)" srcSet={Imge} />
                  <source media="(max-width: 1024px)" srcSet={Imge} />
                  <img
                    src={Imge}
                    className="d-block w-100 fade-in-img"
                    alt="Slide 1"
                  />
                </picture>
              </div>
              {/* <div className="carousel-item">
                <picture>
                  <source media="(max-width: 768px)" srcSet={Imgeeres4} />
                  <source media="(max-width: 1024px)" srcSet={Imgeeres4} />
                  <img  src={Imge4} className="d-block w-100 fade-in-img" alt="Slide 1" />
                </picture>
              </div> */}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              {/* <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              >
              </span> */}
              <BsChevronLeft className="text-dark fs-1" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              {/* <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span> */}
              <BsChevronRight className="text-dark fs-1" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
