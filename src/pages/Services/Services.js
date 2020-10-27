import React from "react";
import Pricing from "../../components/Pricing/Pricing";
import InfoSection from "../../components/InfoSection/InfoSection";
import { homeObjOne, homeObjThree } from "./Data";

function Services() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Services;
