import styled from "styled-components";

export const SocialNetworks = styled.div`
  width: 100%;
  display: inline-block;
  margin: auto;
  margin-bottom: 30px;
  text-align: center;
  position: relative;

  a {
    display: inline-block;
  }

  p {
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
  }

  .social-network {
    display: inline-block;
    width: 80%;
    margin: auto;
    background-image: linear-gradient(#8206c9, #4a09b5);
    border-radius: 10px;
    padding: 10px;
  }

  .social-links {
    position: relative;
    z-index: 2;
    top: 36px;
    /* margin-top: -8px; */
    margin-top: ${props => props.marginTop};
  }
  .social-links a {
    margin: 0px 5px;
    cursor: pointer;
  }

  @media screen and (max-width: 1025px) {
    .social-network {
      width: 90%;
    }
    p {
      font-size: 18px;
    }

    img {
      width: 38px;
    }
  }

  @media screen and (max-width: 769px) {
    padding: 8px;

    .social-network {
      width: 100%;
    }
    p {
      font-size: 16px;
    }

    img {
      width: 36px;
    }
  }
`;
