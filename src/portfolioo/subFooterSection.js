import React from "react";
import styled from "styled-components";

const subFooterSection = () => {
  return (
    <Container id="contact">
      <Wrapper>
        <Get>Get in Touch</Get>
        <Awesome>Let's make something awesome together</Awesome>
        <Forward>
          I'm here to help and answer any question you might have. I am looking
          forward to start a project with you.
        </Forward>
        <Button href="mailto: abbeyvivn@gmail.com" target="_blank">
          CONTACT ME
        </Button>
      </Wrapper>
    </Container>
  );
};

export default subFooterSection;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #2c5364,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: black;
  font-family: poppins;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 80vh;
  flex-direction: column;
`;

const Get = styled.h1`
  color: white;
`;

const Awesome = styled.h2`
  color: white;
`;

const Forward = styled.h3`
  color: lightgray;
  width: 50%;
  text-align: center;
`;

const Button = styled.a`
  padding: 15px 30px;
  background: #c99b61;
  border-radius: 10px;
  text-decoration: none;
  color: #18434c;
  margin-top: 30px;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    cursor: pointer;
    color: #c99b61;
    background: #18434c;
    transform: scale(1.05);
  }
`;
