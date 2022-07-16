import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// import profile from "/portfolioImg/profile.JPG";

const HeroSection = () => {
   const url = "portfolioImg/profile.JPG";
  return (
    <Container id="hero">
      <Wrapper>
        <Image src={url} />
        <Content>
          <Title>IDOWU ABIODUN</Title>
          <Desc>
            I'm a graduate of Agricultural and Mechanical Engineering from the
            Polytechnic of Ibadan, Nigeria. I currently work as a Server
            Administrator, Network Administrator and Cloud Administrator.
            Regardless of my discipline, my job experience can be described as
            Information Technology.
          </Desc>

          <Div>
            <Button>View CV</Button>

            <Link
              to="contact"
              activeClass="true"
              offset={-50}
              duration={500}
              spy={true}
              smooth={true}
            >
              <Button>Contact</Button>
            </Link>
          </Div>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default HeroSection;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  background: #18434c;
  color: white;
  padding-top: 10vh;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 40px;
  align-items: center;
  padding-bottom: 10px;
  background-image: #18434c;
`;

const Image = styled.img`
  width: 400px;
  height: 500px;
  background: white;
  object-fit: cover;
  margin: 0 20px;
  border-radius: 40% 0 40% 0;
`;

const Content = styled.div`
  width: 350px;
  font-family: poppins;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin: 10px 0;
`;

const Desc = styled.div`
  margin-bottom: 20px;
  line-height: 1.2;
`;

const Div = styled.div`
  margin-top: 80px;
`;

const Button = styled.button`
  width: 130px;
  height: 40px;
  margin: 0 10px;
  border: 2px solid #c99b61;
  border-radius: 10px;
  transition: all 350ms;
  transform: scale(1);
  background: transparent;

  outline: none;
  color: #c99b61;
  font-weight: bold;
  font-size: 15px;

  :hover {
    cursor: pointer;
    background: #c99b61;
    transform: scale(1.09);
    color: #18434c;
    border: 2px solid #18434c;
  }
`;
