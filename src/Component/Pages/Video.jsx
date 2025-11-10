// import React from "react";
// import VideoGhess from "../../asset/img/Video/Your paragraph text.mp4";
// import { TfiControlPlay } from "react-icons/tfi";

// const Video = () => {
//   return (
//     <div>

//       <div className="body-class">
//         <div class="video">
//           <div class="play-btn">
//             <TfiControlPlay name="play"></TfiControlPlay>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Video;

// import React, { useRef, useState } from "react";
// import VideoGhess from "../../asset/img/Video/Youtube Intro/Ghee.mp4";
// import { TfiControlPlay } from "react-icons/tfi";

// const Video = () => {
//   const videoRef = useRef(null); // Reference to the video element
//   const [isPlaying, setIsPlaying] = useState(false); // Track play state

//   const handlePlay = () => {
//     if (isPlaying) {
//       videoRef.current.pause(); // Pause if it's playing
//     } else {
//       videoRef.current.play(); // Play if it's paused
//     }
//     setIsPlaying(!isPlaying); // Toggle play state
//   };

//   return (
//     <div className="body-class">
//       <div className="video">
//         <video
//           ref={videoRef}
//           src={VideoGhess}
//           width="800"
//           height="450"
//           style={{ display: "block" }}
//         ></video>
//         <div className="play-btn" onClick={handlePlay}>
//           <TfiControlPlay />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Video;

// Razik sir

// import React, { useRef, useState } from "react";
// import VideoGhess from "../../asset/img/Video/Your paragraph text.mp4";
// import { TfiControlPlay } from "react-icons/tfi";
// import { TfiControlPause } from "react-icons/tfi"; // Import pause icon

// const Video = () => {
//   return (
//     <div className="py-3">
//       <div
//         className="background-color-eggshell d-flex align-items-center justify-content-center"
//         style={{ height: "100px" }}
//       >
//         <div className="fs-3 fw-bold text-color-pullman-green">Video</div>

//       </div>
//     </div>
//   );
// };

// export default Video;

// import React, { useRef, useState } from "react";
// import VideoSource from "../../asset/img/Video/Youtube Intro/Ghee.mp4"; // Adjust the path to your video
// import { TfiControlPlay } from "react-icons/tfi";
// import { TfiControlPause } from "react-icons/tfi";

// const Video = () => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const togglePlayPause = () => {
//     if (isPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="video-head py-3">
//       <div
//         className="background-color-eggshell d-flex align-items-center justify-content-center"
//         style={{ height: "100px" }}
//       >
//         <div className="fs-3 fw-bold text-color-pullman-green">Video</div>
//       </div>
//       <div className="video-container text-center py-3">
//         <video
//           ref={videoRef}
//           style={{ borderRadius: "10px" }}
//           src={VideoSource}
//           type="video/mp4"
//           className="w-50 h-75"
//         >

//         </video>
//         <div className="controls mt-2">
//           <button
//             onClick={togglePlayPause}
//             className="pause-btn btn rounded-circle btn-secondary m-auto d-flex align-items-center justify-content-center"

//           >
//             {isPlaying ? <TfiControlPause /> : <TfiControlPlay />}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Video;

import React, { useRef } from "react";
import VideoSource from "../../asset/img/Video/gauswarn.mp4"; // Adjust the path to your video

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
