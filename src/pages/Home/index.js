import React, { useEffect } from "react";
import WOW from "wowjs";

import Top from "../../components/Top";
// import Profile from "../../components/Profile";
// import Code from "../../components/Code";
import Bottom from "../../components/Bottom";

export default function Home() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <>
      <Top />
      <Bottom />
    </>
  );
}
