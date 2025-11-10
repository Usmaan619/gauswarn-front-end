// import React, { useState } from "react";
// import Terrible from "../../asset/img/Icons/terrible.gif";
// import Okay from "../../asset/img/Icons/okay-2.gif";
// import Good from "../../asset/img/Icons/Good.gif";
// import Amazing from "../../asset/img/Icons/Amazing.gif";

// const FeedbackForm = ({ onSubmit }) => {
//   const feedbackOptions = [
//     { title: "Terrible", img: Terrible, stars: 1 },
//     { title: "Okay", img: Okay, stars: 2 },
//     { title: "Good", img: Good, stars: 3 },
//     { title: "Great", img: Good, stars: 4 },
//     { title: "Amazing", img: Amazing, stars: 5 },
//   ];

//   const [rating, setRating] = useState("");
//   const [thoughts, setThoughts] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const selectedOption = feedbackOptions.find(
//       (option) => option.title === rating
//     );
//     const feedbackData = {
//       rating,
//       stars: selectedOption ? selectedOption.stars : 0,
//       thoughts,
//       img: selectedOption ? selectedOption.img : null,
//     };

//     console.log("Submitting feedback: ", feedbackData);

//     onSubmit(feedbackData);

//     setRating("");
//     setThoughts("");
//   };

//   const selectedOption = feedbackOptions.find(
//     (option) => option.title === rating
//   );

//   return (
//     <>
//       <div className="container">
//         <div className="feedback-container p-4 background-color-eggshell">
//           <h2 className="fs-5 fw-bold">GIVE YOUR VIEW</h2>
//           <p className="mt-1 text-color-pullman-green">
//             What do you think about GAUSWARN A2 GIR COW GHEE?
//           </p>

//           <div className="emoji-rating d-flex justify-content-between">
//             {feedbackOptions.map((option, index) => (
//               <div
//                 key={index}
//                 className={`emoji-option border-0 w-25 ${
//                   rating === option.title ? "selected" : ""
//                 }`}
//                 onClick={() => setRating(option.title)}
//                 style={{ cursor: "pointer", textAlign: "center" }}
//               >
//                 <img
//                   src={option.img}
//                   alt={option.title}
//                   style={{ width: "40px", height: "40px" }}
//                 />
//                 <p>{option.title}</p>
//               </div>
//             ))}
//           </div>
//           <div className="star-rating">
//             {selectedOption && "★".repeat(selectedOption.stars)}
//           </div>

//           <form onSubmit={handleSubmit}>
//             <label htmlFor="thoughts" className="mt-1">
//               Your Thoughts
//             </label>
//             <textarea
//               id="thoughts"
//               value={thoughts}
//               onChange={(e) => setThoughts(e.target.value)}
//               placeholder="Share your feedback..."
//               required
//               className="mt-2 feedback-input"
//             />

//             <div className="buttons mt-3">
//               <button type="submit" className="submit-btn me-2">
//                 Submit
//               </button>
//               <button
//                 type="button"
//                 className="cancel-btn background-color-eggshell"
//                 onClick={() => {
//                   setRating("");
//                   setThoughts("");
//                 }}
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FeedbackForm;

// import React, { useState } from "react";

// const FeedbackForm = ({ onSubmit }) => {
//   const feedbackOptions = [1, 2, 3, 4, 5]; // Star ratings from 1 to 5

//   const [rating, setRating] = useState(0);
//   const [thoughts, setThoughts] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!rating) {
//       alert("Please select a star rating before submitting.");
//       return;
//     }

//     const feedbackData = {
//       rating,
//       stars: rating,
//       thoughts,
//     };

//     console.log("Submitting feedback: ", feedbackData);

//     if (onSubmit) {
//       onSubmit(feedbackData);
//     }

//     setRating(0);
//     setThoughts("");
//   };

//   return (
//     <div className="row background-color-eggshell d-flex justify-content-center">
//       <div className="col-lg-6">
//         <div className="feedback-container p-4">
//           <h2 className="fs-5 fw-bold text-center">GIVE YOUR VIEW</h2>
//           {/* <p className="mt-1 text-color-pullman-green">
//             What do you think about GAUSWARN A2 GIR COW GHEE?
//           </p> */}

//           {/* Star Rating */}
//           <div className="star-rating d-flex justify-content-center mt-3">
//             {feedbackOptions.map((star) => (
//               <span
//                 key={star}
//                 onClick={() => setRating(star)}
//                 style={{
//                   cursor: "pointer",
//                   fontSize: "24px",
//                   color: star <= rating ? "gold" : "gray",
//                   margin: "0 5px",
//                 }}
//                 aria-label={`Rate ${star} stars`}
//               >
//                 ★
//               </span>
//             ))}
//           </div>

//           <form onSubmit={handleSubmit} className="mt-4 text-center">

//             <textarea
//               id="thoughts"
//               value={thoughts}
//               onChange={(e) => setThoughts(e.target.value)}
//               placeholder="Share your feedback..."
//               required
//               className="mt-2 feedback-input w-75 text-center"
//             />

//             <div className="buttons mt-3">
//               <button type="submit" className="submit-btn me-2">
//                 Submit
//               </button>
//               <button
//                 type="button"
//                 className="cancel-btn background-color-eggshell"
//                 onClick={() => {
//                   setRating(0);
//                   setThoughts("");
//                 }}
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeedbackForm;

import React from "react";
import { useForm } from "react-hook-form";

const FeedbackForm = ({ onSubmit }) => {
  const feedbackOptions = [1, 2, 3, 4, 5]; // Star ratings from 1 to 5

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const rating = watch("rating", 0); // Watch the rating field for changes

  const handleCancel = () => {
    reset(); // Resets all form fields
  };

  const submitFeedback = (data) => {
    if (!data.rating) {
      alert("Please select a star rating before submitting.");
      return;
    }

    const feedbackData = {
      name: data.name,
      rating: data.rating,
      stars: data.rating,
      feedback: data.thoughts,
      email: data.email,
    };

    console.log("Submitting feedback: ", feedbackData);

    if (onSubmit) {
      onSubmit(feedbackData);
    }

    reset(); // Clear form after submission
  };

  return (
    <div className="row border d-flex justify-content-center">
      <div className="col-lg-6">
        <div className="feedback-container p-4">
          <h2 className="fs-5 fw-bold text-center">GIVE YOUR VIEW</h2>

          {/* Star Rating */}
          <div className="star-rating d-flex justify-content-center mt-3">
            {feedbackOptions.map((star) => (
              <span
                key={star}
                onClick={() => setValue("rating", star)}
                style={{
                  cursor: "pointer",
                  fontSize: "24px",
                  color: star <= rating ? "gold" : "gray",
                  margin: "0 5px",
                }}
                aria-label={`Rate ${star} stars`}
              >
                ★
              </span>
            ))}
          </div>
          {errors.rating && (
            <p className="text-danger mt-2">Please select a star rating.</p>
          )}

          <form
            onSubmit={handleSubmit(submitFeedback)}
            className=" text-center"
          >
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
              className=" feedback-input py-1 rounded-1 border w-75 text-center"
            />
            {errors.name && (
              <p className="text-danger mt-2">{errors.name.message}</p>
            )}

            <textarea
              id="thoughts"
              {...register("thoughts", { required: "Feedback is required" })}
              placeholder="Share your feedback..."
              className="mt-2 feedback-input w-75 text-center"
            />
            {errors.thoughts && (
              <p className="text-danger mt-2">{errors.thoughts.message}</p>
            )}

            <input
              type="email"
              placeholder="Email"
              className=" feedback-input py-1 mt-1 rounded-1 border w-75 text-center"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}

            <div className="buttons mt-3">
              <button type="submit" className="submit-btn me-2">
                Submit
              </button>
              <button
                type="button"
                className="cancel-btn background-color-eggshell"
                onClick={handleCancel}
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;

// import React, { useState } from "react"; // Import useNavigate

// const StarRatingForm = () => {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);
//   const [feedback, setFeedback] = useState("");
//   const [name, setName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(
//       `You submitted a rating of ${rating} stars with feedback: "${feedback}" and name: "${name}"`
//     );
//     // Reset the form
//     setRating(0);
//     setFeedback("");
//     setName("");
//   };

//   return (
//     <>
//       <div className="container py-4">
//         <div className="row">
//           <div className="col-lg-6 m-auto">
//             <div className="star-rating-form text-center">
//               <h2>Write a review</h2>
//               <form onSubmit={handleSubmit}>
//                 <p className="mb-0">Rating</p>
//                 <div className="star-rating">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <span
//                       key={star}
//                       className={`star ${
//                         star <= (hover || rating) ? "filled" : ""
//                       }`}
//                       onClick={() => setRating(star)}
//                       onMouseEnter={() => setHover(star)}
//                       onMouseLeave={() => setHover(0)}
//                     >
//                       ★
//                     </span>
//                   ))}
//                 </div>
//                 <div>
//                   <input
//                     type="text"
//                     placeholder="Enter your name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     style={{
//                       width: "100%",
//                       padding: "10px",
//                       marginTop: "10px",
//                       borderRadius: "4px",
//                       border: "1px solid #ccc",
//                     }}
//                   />
//                 </div>
//                 <h5>Review</h5>
//                 <textarea
//                   placeholder="Leave your feedback here..."
//                   className="text-center"
//                   value={feedback}
//                   onChange={(e) => setFeedback(e.target.value)}
//                   rows="4"
//                   style={{ width: "100%", marginTop: "10px" }}
//                 />
//                 <div style={{ marginTop: "10px" }}>
//                   <button
//                     type="submit"
//                     style={{
//                       marginRight: "10px",
//                       padding: "10px 15px",
//                       backgroundColor: "#007bff",
//                       color: "white",
//                       border: "none",
//                       borderRadius: "4px",
//                       cursor: "pointer",
//                     }}
//                   >
//                     Submit
//                   </button>
//                   <button
//                     type="button"
//                     style={{
//                       padding: "10px 15px",
//                       backgroundColor: "#dc3545",
//                       color: "white",
//                       border: "none",
//                       borderRadius: "4px",
//                       cursor: "pointer",
//                     }}
//                   >
//                     Back
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default StarRatingForm;
