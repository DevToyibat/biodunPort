import React, { useState } from "react";
import styled from "styled-components";
import HeaderBar from "./headerBar";
import HeroSection from "./heroSection";
import ServiceSection from "./serviceSection";
import VideoSection from "./videoSection";
import ContactSection from "./contactSection";
import FooterSection from "./footerSection";
import SubFooterSection from "./subFooterSection";

const Homepage = () => {
  const [toggle, setToggle] = useState(false);

  const handleScroll = () => {
    const scrollInfo = window.scrollY;

    if (scrollInfo >= 80) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <Container>
      <Wrapper>
        <HeaderBar bg={toggle ? "bg" : ""} cl={toggle ? "cl" : ""} />
        <HeroSection />
        <ServiceSection />
        <ContactSection />
        <VideoSection />
        <SubFooterSection />
        <FooterSection />
      </Wrapper>
    </Container>
  );
};

export default Homepage;

const Container = styled.div``;
const Wrapper = styled.div``;
