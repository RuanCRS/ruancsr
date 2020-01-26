import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 1200px;

  @media screen and (max-width: 1201px) {
    width: 90%;
  }
`;

export const Content = styled.div`
  display: inline-block;
  width: 100%;
  float: left;
  margin-top: 90px;
  margin-bottom: 120px;

  h1 {
    font-size: 30px;
  }

  .content-block {
    background-color: #fff;
    display: inline-block;
    width: 32%;
    float: left;
    margin-bottom: 35px;
    cursor: pointer;
    padding-bottom: 20px;
  }

  .mb {
    margin-right: 1%;
  }

  /* .mb:nth-child(3n) {
    margin-right: 0px;
  } */

  .content-block:hover {
    cursor: pointer;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  }

  .content-block img {
    width: 100%;
  }
  .text {
    background-color: #fff;
    padding: 15px 10px;
  }

  .text h2 {
    font-size: 19px;
    margin-bottom: 5px;
  }

  .mb .text p {
    font-size: 16px;
  }

  .top {
    display: inline-block;
    width: 100%;
  }
  .first {
    width: 60%;
  }

  .sn {
    width: 40%;
    float: left;
    padding-left: 40px;
  }

  .sb {
    width: 100%;
  }

  @media screen and (max-width: 991px) {
    .content-block {
      width: 49%;
      margin-right: 0px;
    }
    .mb:nth-child(2n) {
      margin-left: 2%;
    }
  }

  @media screen and (max-width: 600px) {
    .content-block {
      width: 100%;
    }
    .mb:nth-child(2n) {
      margin-left: 0%;
    }
  }
`;
