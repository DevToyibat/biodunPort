import React from "react";
import styled from "styled-components";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineGithub,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";

const FooterSection = () => {
  return (
    <Container>
      <Wrapper>
        <Socials>
          <Link
            // target="_blank will open the socials in a new tab"
            href="https://www.linkedin.com/in/idowu-abiodun-34611ba1"
            target="_blank"
          >
            <AiOutlineLinkedin />
          </Link>

          <Link href="https://m.facebook.com/Abiodun.idowu.372" target="_blank">
            <AiFillFacebook />
          </Link>

          <Link href="https://twitter.com/abbeyvivn?s=11" target="_blank">
            <AiFillTwitterCircle />
          </Link>

          <Link href="https://m.facebook.com/Abiodun.idowu.372" target="_blank">
            <AiOutlineGithub />
          </Link>

          <Link href="mailto: abbeyvivn@gmail.com" target="_target">
            <AiOutlineMail />
          </Link>
        </Socials>
        <Copyright>©2021 Taibat Adebakin. All rights reserved.</Copyright>
      </Wrapper>
    </Container>
  );
};

export default FooterSection;

const Container = styled.div`
  width: 100%;
  height: 50%;
  min-height: 15vh;
  background: #18434c;
  color: green;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Socials = styled.div`
  display: flex;
`;

const Link = styled.a`
  margin: 0 20px 10px 20px;
  font-size: 25px;
  color: #c99b61;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    cursor: pointer;
    background: transparent;
    transform: scale(1.09);
  }
`;

const Copyright = styled.div`
  font-size: 12px;
  margin: 10px;
  color: #c99b61;
`;
