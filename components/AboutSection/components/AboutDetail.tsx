import React from "react";
import FadeInContainer from "components/FadeInContainer/FadeInContainer";
import styled from "styled-components";
import { Row, Col } from "components/GlobalStyleComponent";

const AboutDetailContainer = styled.div`
  display: grid;
  justify-content: center;

  .title {
    color: #454894;
  }

  .sub-title {
    color: #454894;
  }

  .text-center {
    text-align: center;
  }

  .bold {
    font-weight: bold;
  }

  .about {
    @media (max-width: 768px) {
      gap: 40px;
      margin-top: 2.5em;
    }
  }
`;

const ProfileImageContainer = styled.div`
  background-image: url("/profile_image.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0 1rem 2rem hsl(0 0% 0% / 20%);
  width: 250px;
  height: 250px;
  border-radius: 0.25em;
`;

const AboutRow = styled(Row)`
  display: flex;
  align-items: center;
  margin-bottom: 1em;

  width: 100%;
  height: 100%;
  min-width: 200px;
  font-size: 1.2rem;

  @media (min-width: 1100px) {
    padding: 1em 2em;
    max-width: 940px;
  }
`;

const AboutCol = styled(Col)`
  display: flex;
  justify-content: center;
  display: block;
  flex: 0 0 100%;
  max-width: 100%;

  @media (min-width: 768px) {
    display: block;
    flex: 0 0 50%;
    max-width: 50%;
  }

  .fade-in-section {
    display: flex;
    justify-content: center;
  }
`;

const Experience = () => {
  return (
    <AboutDetailContainer>
      <FadeInContainer>
        <div className="text-center title">
          <h1 className="title">About Me</h1>
        </div>
      </FadeInContainer>

      <AboutRow>
        <AboutCol>
          <FadeInContainer>
            <ProfileImageContainer />
          </FadeInContainer>
        </AboutCol>
        <AboutCol>
          <FadeInContainer>
            <div className="about">
              <div>
                &ldquo; My name is{" "}
                <label className="bold sub-title">Nitipon Chingthongchai</label>{" "}
                I&apos;m a software engineer specializing in{" "}
                <strong>Golang</strong>, <strong>TypeScript</strong>, and{" "}
                <strong>Solidity</strong>. I build full-stack applications with
                React-Native, Next.js, and NestJS.
              </div>
              <br />
              <div>
                I have professional experience at <strong>TokenX</strong> and{" "}
                <strong>Siam Commercial Bank</strong>. I&apos;m passionate about
                Web3, DeFi, and creating beautiful digital experiences. &rdquo;
              </div>
            </div>
          </FadeInContainer>
        </AboutCol>
      </AboutRow>
    </AboutDetailContainer>
  );
};

export default Experience;
