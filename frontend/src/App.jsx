import React, { useState } from "react";

import Map from "./components/Map";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Main from "./components/Main";

export default () => {
  const [currentState, setCurrentState] = useState("");

  return (
    <>
      <Map currentState={currentState} />

      <Header />
      <Carousel />
      <Main setCurrentState={setCurrentState} />
    </>
  )
}