import React, { useRef } from "react";
import VideoSource from "../../asset/new-img/Video/gauswarn.mp4"; // Adjust the path to your video

const Video = () => {
  const videoRef = useRef(null);

  return (
    <>
      <div className="video-head">
        <div className="video-container text-center">
          <video
            ref={videoRef}
            style={{ borderRadius: "10px" }}
            src={VideoSource}
            type="video/mp4"
            controls
            // autoPlay
            loop
          />
        </div>
      </div>
    </>
  );
};

export default Video;
