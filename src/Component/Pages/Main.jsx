import React from "react";
import Home from "./Home";
import Processed from "./Processed";
import GheeComparison from "./GheeComparison";
import WhatSetsUsApart from "./WhatSetsUsApart";
import Client from "./Client";
import Certified from "./Certified";
import Footer from "../Common/Footer/index";
import GirCowInfo from "./GirCowInfo";
import Benefit from "../Pages/Gheebenefit";
import Video from "../Pages/Video";
import Process from "./Process";
import Purity from "./Purity";
// import Payment from "./PaymentDone";
// import PaymentFail from "./PaymentFail";

const Main = () => {
  return (
    <div>
      <Home />
      <Processed />
      {/* <Payment /> */}
      {/* <PaymentFail /> */}
      <GirCowInfo />
      {/* <GheeLabel /> */}
      <Video />
      <Purity/>
      <Benefit />
      <Process />
      <GheeComparison />
      <WhatSetsUsApart />
      <Client />
      <Certified />
      <Footer />
    </div>
  );
};

export default Main;
