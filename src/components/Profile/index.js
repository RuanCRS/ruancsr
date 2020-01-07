import React from "react";

import { Container, Profile, BottomDescription } from "./styles";
import ImageProfile from "../../assets/profile.png";

export default function ComponentProfile() {
  return (
    <>
      <Container>
        <Profile className="wow fadeInDown" data-wow-delay="500ms">
          <img src={ImageProfile} />
        </Profile>
      </Container>

      <BottomDescription className="wow bounceInRight" data-wow-delay="10ms" />
    </>
  );
}
