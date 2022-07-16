import React from "react";
import styled from "styled-components";
// import vid from "portfolioImg/vidIdowu.MP4";

const VideoSection = () => {
  // const url = "portfolioImg/filmo2.mov";
  const url = "portfolioImg/greenVid.mp4";

  return (
    <Container id="video">
      <Wrapper>
        {/* src={} controls loops autoplay muted are for video */}

        {/* loops allow auto-repeat, autoplay allows auto-playing from start, muted auto mutes sound from start */}
        <Video src={url} controls />
      </Wrapper>
    </Container>
  );
};

export default VideoSection;

const Container = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fffaf3;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  width: 100%;
  margin: 0 20px;
  object-fit: cover;
`;

const Video = styled.video`
  padding: 0 20px;
`;
