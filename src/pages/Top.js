import React, { Component } from "react";
import Styled from "styled-components";

import ImageProfile from "../assets/profile.png";
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

   img{
     border-radius: 50%;
     width:550px;
     border: 10px solid #85e085;
   }

`;

class Top extends Component {
  componentDidMount() {
    this.getUsers();
  }
  getUsers = async () => {
    try {
      const response = await api.get(`/repos/vuejs/vue`);
      console.log(response.data);
      console.log(response.data.onTimeBilling.valor);
    } catch (err) {
      console.log(false);
      console.log(err);
    }
  };

  render() {
    return (
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
    );
  }
}

export default Top;
