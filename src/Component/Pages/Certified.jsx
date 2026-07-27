import FssaiLogo from "../../asset/new-img/certified/FSSAI.webp";
import IndiaOrganicLogo from "../../asset/new-img/certified/Natural-icon.webp";
import Usda from "../../asset/new-img/certified/Orignal-icon.webp";
import Apeda from "../../asset/new-img/certified/apeda-seeklogo.com.webp";
import Nabl from "../../asset/new-img/certified/nabl.webp";

const Certified = () => {
  return (
    <>
      <h2 className="sr-only">
        Our Certifications – FSSAI, USDA Organic, India Organic & APEDA
      </h2>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-around my-4 my-sm-3 my-md-4 my-xl-4 flex-nowrap overflow-auto gap-3 pb-2 no-scrollbar">
              {[
                {
                  src: FssaiLogo,
                  alt: "FSSAI certified A2 Cow ghee by Gauswarn India",
                },
                {
                  src: IndiaOrganicLogo,
                  alt: "India Organic certified A2 Cow ghee",
                },
                {
                  src: Usda,
                  alt: "USDA Organic certified bilona made A2 ghee",
                },
                {
                  src: Apeda,
                  alt: "APEDA certified Indian ghee exporter Gauswarn India",
                },
                {
                  src: Nabl,
                  alt: "NABL certified Indian ghee exporter Gauswarn India",
                },
              ].map((logo, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-center mb-3 certified-logo flex-shrink-0"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    decoding="async"
                    className="img-fluid"
                    width="90"
                    height="50"
                    style={{ maxHeight: "50px", objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certified;
