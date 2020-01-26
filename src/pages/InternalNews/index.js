import React, { useEffect } from "react";
import WOW from "wowjs";

import Top from "../../components/Top";
import InternalNews from "../../components/InternalNews";

export default function InternalNewsComponent() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <>
      <Top />
      <InternalNews />
    </>
  );
}
