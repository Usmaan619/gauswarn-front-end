import React from "react";
import Image1 from "../../asset/new-img/lap-report/labreport.webp";

const LabReportMain = () => {
  return (
    <>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
        {/* Center Heading */}
        <h4
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "20px",
            textTransform: "uppercase",
          }}
        >
          Lab Report
        </h4>

        {/* Wrapper */}
        <div
          style={{
            position: "relative",
            width: "100%",
          }}
          onContextMenu={(e) => e.preventDefault()}
        >
          {/* Image - NO pointerEvents (to avoid blur) */}
          <img
            src={Image1}
            alt="Lab Report"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              userSelect: "none",
            }}
            draggable="false"
          />

          {/* Invisible protection layer */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "transparent",
            }}
            onContextMenu={(e) => e.preventDefault()}
          ></div>
        </div>
      </div>
    </>
  );
};

export default LabReportMain;
