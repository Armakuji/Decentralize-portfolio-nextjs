import React from "react";

import styled from "styled-components";
import SkillDetail from "./SkillDetail";
import {
  languageList,
  libraryList,
  databaseList,
  toolList,
} from "utils/SkillList";
import FadeInContainer from "components/FadeInContainer/FadeInContainer";

const SkillContainer = styled.div``;

const SkillDetailContainer = styled.div`
  margin-top: 1em;
`;
const Title = styled.h2`
  color: #454894;
  margin-bottom: 0.5em;
  font-weight: 600;
  font-size: 30px;
  line-height: 1.35;
`;

const Skills = () => {
  return (
    <SkillContainer id="skills">
      <FadeInContainer>
        <Title>Skills</Title>
      </FadeInContainer>
      <SkillDetailContainer>
        <SkillDetail title="Programming Languages" skillList={languageList} />
        <SkillDetail title="Library and Frameworks" skillList={libraryList} />
        <SkillDetail title="Database" skillList={databaseList} />
        <SkillDetail title="Tools" skillList={toolList} />
      </SkillDetailContainer>
    </SkillContainer>
  );
};

export default Skills;
