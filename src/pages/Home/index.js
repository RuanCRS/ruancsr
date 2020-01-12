import React, { useEffect } from "react";
import WOW from "wowjs";

import Top from "../../components/Top";

import News from "../../components/News";
import Bottom from "../../components/Bottom";

export default function Home() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <>
      <Top />
      <News />
      {/* <Bottom /> */}
    </>
  );
}
