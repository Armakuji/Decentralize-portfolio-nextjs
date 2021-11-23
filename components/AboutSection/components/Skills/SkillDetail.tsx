import React, { FC } from "react";
import styled from "styled-components";
import FadeInContainer from "components/FadeInContainer/FadeInContainer";
import { ReactComponent as RightArrow } from "assets/svg/right_arrow.svg";
import { IconSpace, Divider, Row, Col } from "components/GlobalStyleComponent";

interface SkillDetailProps {
  title: string;
  skillList: string[];
}

const RightArrowColor = styled(RightArrow)`
  height: 20px;
  width: 30px;

  path {
    stroke: #454894;
    fill: #454894;
  }
`;

const Title = styled.div`
  overflow-wrap: break-word;
  color: #454894;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.4;
`;

const TextContainer = styled.div`
  margin-left: 1.4em;
  align-items: center;

  @media (max-width: 768px) {
    padding-top: 0.25em;
  }
`;

const Text = styled.span`
  color: rgba(0, 0, 0, 0.85);
  overflow-wrap: break-word;
`;

const SkillDivider = styled(Divider)`
  margin: 14px 0;
`;

const SkillDetalColLeft = styled(Col)`
  display: block;
  flex: 0 0 100%;
  max-width: 100%;

  @media (min-width: 768px) {
    display: block;
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
  }
`;

const SkillDetalColRight = styled(Col)`
  display: block;
  flex: 0 0 100%;
  max-width: 100%;

  @media (min-width: 768px) {
    display: block;
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%;
  }
`;

const SkillDetail: FC<SkillDetailProps> = (props) => {
  const { title, skillList } = props;
  return (
    <FadeInContainer>
      <Row>
        <SkillDetalColLeft>
          <Title>
            <IconSpace>
              <RightArrowColor />
              {title}
            </IconSpace>
          </Title>
        </SkillDetalColLeft>
        <SkillDetalColRight>
          <TextContainer>
            {skillList.map((item: string, index: number) => (
              <Text key={index}>
                {index !== skillList.length - 1 ? `${item}, ` : item}
              </Text>
            ))}
          </TextContainer>
        </SkillDetalColRight>
      </Row>
      <SkillDivider />
    </FadeInContainer>
  );
};

export default SkillDetail;
