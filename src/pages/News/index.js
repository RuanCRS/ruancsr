import React, { useEffect } from "react";
import WOW from "wowjs";

import Top from "../../components/Top";
import InternalPage from "../../components/InternalPage";
import Footer from "../../components/Footer";

export default function News() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <>
      <Top />
      <InternalPage />
      <Footer />
    </>
  );
}
