import React from "react";

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Pricing from "../../components/Pricing/Pricing";
import InfoSection from "../../components/InfoSection/InfoSection";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
