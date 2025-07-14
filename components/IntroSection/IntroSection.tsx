import React from "react";

import FadeInContainer from "components/FadeInContainer/FadeInContainer";
import { Text } from "components/GlobalStyleComponent";

import NightIcon from "components/NightIcon/NightIcon";
import {
  IntroContrainer,
  ContentWrapper,
  Content,
  IconWrapper,
  IntroRow,
  LeftCol,
  RightCol,
} from "./IntroSection.styled";

const IntroSection = () => {
  return (
    <IntroContrainer id="intro" className="intro">
      <ContentWrapper>
        <Content>
          <FadeInContainer>
            <IntroRow>
              <LeftCol>
                <h1>
                  Hi there. I&apos;m <span className="title">Nitipon</span>
                </h1>
                <h2>Software Engineer 🧑‍💻</h2>
                <Text className="sub-detail">
                  Full stack developer passionate about web3 • Building with
                  heart • Fueled by coffee ☕
                </Text>
              </LeftCol>
              <RightCol>
                <IconWrapper>
                  <NightIcon />
                </IconWrapper>
              </RightCol>
            </IntroRow>
          </FadeInContainer>
        </Content>
      </ContentWrapper>
    </IntroContrainer>
  );
};

export default IntroSection;
