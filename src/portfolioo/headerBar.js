import React, { useState } from "react";
import styled from "styled-components";
import Log from "../logo.svg";
import HomeIcon from "@mui/icons-material/Home";
import HomeRepairServiceRoundedIcon from "@mui/icons-material/HomeRepairServiceRounded";
import VideoCameraFrontRoundedIcon from "@mui/icons-material/VideoCameraFrontRounded";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import NavigationOutlinedIcon from "@mui/icons-material/NavigationOutlined";
import { animateScroll as Scroll } from "react-scroll";
import { Link } from "react-scroll";

const toTop = () => {
  Scroll.scrollToTop();
};

const HeaderBar = ({ bg, cl }) => {
  // Implementing a state to hid and show scroll to top of header
  const [appear, setAppear] = useState(false);

  const showScroll = () => {
    const heightOfScreen = window.scrollY;

    if (heightOfScreen >= 400) {
      setAppear(true);
    } else {
      setAppear(false);
    }

    // console.log(window.scrollY)
  };

  window.addEventListener("scroll", showScroll);

  return (
    <Container background={bg} color={cl}>
      <Wrapper>
        <Logo src={Log} />
        <Navigation>
          <Nav
            to="hero"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <HomeIcon />
            <span>Home</span>
          </Nav>
          <Nav
            to="service"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <HomeRepairServiceRoundedIcon />
            <span>Services</span>
          </Nav>
          <Nav
            to="video"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <VideoCameraFrontRoundedIcon />
            <span>Video</span>
          </Nav>
          <Nav
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <ContactPhoneOutlinedIcon />
            <span>Contact</span>
          </Nav>
        </Navigation>
        <Button op={appear ? "op" : ""} onClick={toTop}>
          <NavigationOutlinedIcon />
        </Button>
      </Wrapper>
    </Container>
  );
};

export default HeaderBar;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background: ${({ background }) => (background ? "white" : "#18434f")};
  color: ${({ color }) => (color ? "#011834" : "#c99b61")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 180px;
  height: 50px;
  object-fit: contain;
  margin: 0 25px;
`;

const Navigation = styled.div`
  display: flex;
`;

const Nav = styled(Link)`
  margin: 0 10px;
  display: flex;
  align-items: center;

  span {
    font-weight: bold;
    text-transform: upperCase;
    position: relative;

    :after {
      content: "";
      height: 3px;
      width: 100%;
      background: white;
      position: absolute;
      left: 0;
      bottom: -2px;
      opacity: 0;
      transition: all 400ms;
      transform: scale(0);
      transform-origin: center;
    }
  }

  :hover {
    cursor: pointer;
    span {
      :after {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`;

const Button = styled.div`
  width: 80px;
  height: 80px;

  background: #c99b61;
  color: #18434c;
  border-radius: 50%;
  position: fixed;
  top: 80%;
  right: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ op }) => (op ? "1" : "0")};
  transition: all 750ms;
  transform: scale(1);

  .MuiSvgIcon-root {
    font-size: 30px;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.05);
    background-color: #18434c;
    color: #c99b61;
  }
`;
