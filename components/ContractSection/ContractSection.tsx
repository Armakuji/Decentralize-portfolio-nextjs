import React from "react";
import styled from "styled-components";
import MailIcon from "assets/svg/mail.svg";
import GithubIcon from "assets/svg/github.svg";
import LinkinIcon from "assets/svg/linkin.svg";
import TwitterIcon from "assets/svg/twitter.svg";
import FadeInContainer from "components/FadeInContainer/FadeInContainer";
import { Row, Col, Card, CardBody } from "components/GlobalStyleComponent";

const ContractSectionContainer = styled.div`
  background: #221b47;

  display: flex;
  justify-content: center;
  letter-spacing: 0.05em;
  word-wrap: break-word;
  padding: 4rem 0.4rem 4rem;
  height: 380px;

  @media (max-width: 520px) {
    min-height: 450px;
  }

  .title {
    text-align: center;
  }
`;

const ContractDetail = styled.div`
  padding-top: 0.5em;

  display: flex;
  justify-content: center;

  a {
    color: #282a36;
  }

  @keyframes slide-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-100px);
      transform: translateY(-100px);
    }
  }

  svg {
    width: 3em;
    height: 3em;

    path,
    polyline {
      stroke: #50fa7b;
      fill: #50fa7b;
    }

    &:hover {
      animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

      @keyframes slide-top {
        0% {
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
        100% {
          -webkit-transform: translateY(-1em);
          transform: translateY(-1em);
        }
      }
    }
  }
`;

const ContractCard = styled(Card)`
  width: 95%;
  height: 100%;

  border-radius: 15px;
  background: #282a36;
  box-shadow: 1px 1px 10px #282a36;
  border: none;
`;

const ContractCardBody = styled(CardBody)`
  font-size: 1.4em;
  position: sticky;
  margin: 1rem 1rem;

  @media (min-width: 440px) {
    margin: 1rem 3rem;
  }
`;

const Title = styled.h2`
  color: #50fa7b;
  margin-bottom: 0.5em;
  font-weight: 600;
  font-size: 30px;
  line-height: 1.35;
`;

const ContractRow = styled(Row)`
  display: flex;
  justify-content: center;
`;

const ContractCol = styled(Col)`
  padding: 10px 20px;
`;

const ContractSection = () => {
  return (
    <ContractSectionContainer id="contract">
      <ContractCard>
        <ContractCardBody>
          <FadeInContainer>
            <div className="title">
              <Title>Get in touch!</Title>
            </div>
          </FadeInContainer>
          <FadeInContainer>
            <ContractDetail>
              <ContractRow>
                <ContractCol>
                  <a href="mailto: armakuji@hotmail.com" aria-label="email">
                    <MailIcon />
                  </a>
                </ContractCol>
                <ContractCol>
                  <a
                    href="https://github.com/Armakuji"
                    aria-label="github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GithubIcon />
                  </a>
                </ContractCol>
                <ContractCol>
                  <a
                    href="https://www.linkedin.com/in/nitipon-chingthongchai-162a2b214"
                    aria-label="linkedin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkinIcon />
                  </a>
                </ContractCol>
                <ContractCol>
                  <a
                    href="https://twitter.com/armakuji"
                    aria-label="twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TwitterIcon />
                  </a>
                </ContractCol>
              </ContractRow>
            </ContractDetail>
          </FadeInContainer>
        </ContractCardBody>
      </ContractCard>
    </ContractSectionContainer>
  );
};

export default ContractSection;
