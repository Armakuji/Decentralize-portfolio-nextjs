import React from "react";
import styled from "styled-components";
import ExperienceDetail from "./components/ExperienceDetail";
import { experienceList, awardList } from "utils/ExperienceList";
import FadeInContainer from "components/FadeInContainer/FadeInContainer";
import { Card, CardBody } from "components/GlobalStyleComponent";

const ExperienceSectionContainer = styled.div`
  background: #221b47;

  min-height: 400px;
  display: flex;
  justify-content: center;
  letter-spacing: 0.05em;
  word-wrap: break-word;
  padding: 4rem 0.5rem 0.5rem;
`;

const ExperienceCard = styled(Card)`
  width: 95%;
  height: 100%;
  border-radius: 15px;
  background: #282a36 !important;
  box-shadow: 1px 1px 15px #282a36;
  border: none;
`;

const ExperienceCardBody = styled(CardBody)`
  font-size: 1.4em;
  position: sticky;
`;

const Title = styled.h2`
  color: #50fa7b;
  margin-bottom: 0.5em;
  font-weight: 600;
  font-size: 30px;
  line-height: 1.35;
`;

const ExperienceSection = () => {
  return (
    <ExperienceSectionContainer id="experience">
      <ExperienceCard>
        <ExperienceCardBody>
          <FadeInContainer>
            <Title>Experience</Title>
          </FadeInContainer>
          <ExperienceDetail experienceList={experienceList} />
          <FadeInContainer>
            <Title>{`Honors & Awards`}</Title>
          </FadeInContainer>
          <ExperienceDetail experienceList={awardList} />
        </ExperienceCardBody>
      </ExperienceCard>
    </ExperienceSectionContainer>
  );
};

export default ExperienceSection;
