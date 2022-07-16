import React from "react";
import styled from "styled-components";

const ContactSection = () => {
  return (
    <Container id="newsletter">
      <Wrapper>
        <MainTitle>
          <Title>
            <Sub1>Subscribe to our newsletter</Sub1>
            <Sub2>
              Join now for your Cloud Computing trending articles, top expert
              advice and personal consultancy delivered straight to your inbox
              every morning.
            </Sub2>
          </Title>
          <Holder>
            <Sign>Sign up now!</Sign>
            <Input placeholder="Enter Email" />
            <Button href="mailto: abbeyvivn@gmail.com" target="_blank">
              SUBSCRIBE
            </Button>
          </Holder>
        </MainTitle>
      </Wrapper>
    </Container>
  );
};

export default ContactSection;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  background: #fffaf3;
  color: white;
  font-family: poppins;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  width: 100%;
`;

const MainTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Holder = styled.div`
  text-align: center;
`;

const Sign = styled.h3`
  color: #18434c;
`;

const Input = styled.input`
  border-radius: 10px 0 0 10px;
  width: 270px;
  height: 39px;
  border: 2px solid #18434c;
`;

const Button = styled.a`
  padding: 14px 5px 13px 0;
  border-radius: 0 15px 15px 0;
  text-align: center;
  font-size: 12px;
  transition: all 350ms;
  transform: scale(1);
  color: white;
  background: #18434c;
  text-decoration: none;
  border: 2px solid #18434c;

  :hover {
    cursor: pointer;
    transform: scale(1.03);
    color: #18434c;
    background: #fffaf3;
    border: 1px solid;
  }
`;

const Title = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: #18434c;
`;

const Sub1 = styled.h1``;

const Sub2 = styled.h3``;
