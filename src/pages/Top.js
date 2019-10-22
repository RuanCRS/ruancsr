import React, { Component } from "react";
import Styled from "styled-components";

import ImageProfile from "../assets/profile.png";
import ImageBackground from "../assets/banners/banner_code.jpg";

import api from "../services/api";

const Container = Styled.div`
  display:flex;
  flex-direction: column;
  margin: auto;
  width:1200px;
`;

const Menu = Styled.div`

  ul {
    display:inline-block;
    align-items: left;
    width:100%;
  }

  li{
    display:flex;
    float: left;
  }

  a {
    font-family: 'Barlow', sans-serif;
    color: #fff;
    text-decoration:none;
    font-size: 30px;
    padding: 10px;
    display:block;
    list-style-type: none;
    cursor:pointer;
  }

  a:hover{
    background: white;
    color:#000;
  }

`;

const Profile = Styled.div`

  padding-top: 50px;
  text-align: center;
  padding-bottom: 60px;

   img{
     border-radius: 50%;
     width:450px;
     border: 8px solid;
     border-color: #000;
     float:left;
   }

`;

const BackgroundImage = Styled.div`

 /* background-image: url(${ImageBackground});*/
  background-size: 100% 100%;
  background-repeat: no-repeat;

`;

const BottomDescription = Styled.div`
  background: linear-gradient(to right,#ff8a00,#e52e71);
  padding: 100px;
  margin-top: -200px;
  overflow: hidden;

  p {
    font-size: 25px;

    }

`;

class Top extends Component {
  componentDidMount() {
    this.getUsers();
  }
  getUsers = async () => {
    try {
      const response = await api.get(`/repos/RuanCRS/ruancsr`);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <BackgroundImage>
        <Container>
          <Menu>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/sobre">Sobre</a>
              </li>

              <li>
                <a href="/contato">Contato</a>
              </li>
            </ul>
          </Menu>

          <Profile>
            <img src={ImageProfile} />
          </Profile>
        </Container>

        <BottomDescription></BottomDescription>
      </BackgroundImage>
    );
  }
}

export default Top;
