import React from "react";

import { SocialNetworks } from "./styles";

import IconeFacebook from "../../assets/icons/facebook.png";
import IconeInstagram from "../../assets/icons/instagram.png";
import IconeTwitter from "../../assets/icons/twitter.png";

export default function NewsComponent() {
  return (
    <SocialNetworks>
      <div className="social-network">
        <div className="title-sn">
          <p>Siga-me os bons</p>
        </div>
        <div className="social-links">
          <a>
            <img src={IconeFacebook} alt="Facebook" title="Facebook" />
          </a>
          <a>
            <img src={IconeTwitter} alt="Twitter" title="Twitter" />
          </a>
          <a>
            <img src={IconeInstagram} alt="Instagram" title="Instagram" />
          </a>
        </div>
      </div>
    </SocialNetworks>
  );
}
