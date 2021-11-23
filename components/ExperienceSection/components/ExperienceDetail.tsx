import React, { FC } from "react";
import styled from "styled-components";
import FadeInContainer from "components/FadeInContainer/FadeInContainer";
import { ExperienceDetailType } from "utils/ExperienceList";
import { ReactComponent as RightArrow } from "assets/svg/right_arrow.svg";
import { IconSpace } from "components/GlobalStyleComponent";

const ExperienceDetailContainer = styled.div`
  margin-top: 2rem;

  .detail {
    padding-bottom: 1.5em;
  }
`;

const RightArrowColor = styled(RightArrow)`
  height: 20px;
  width: 30px;

  path {
    stroke: #50fa7b;
    fill: #50fa7b;
  }
`;

const Title = styled.div`
  color: #50fa7b;
  color: white;
  line-height: 1.25;
  font-weight: 600;
  font-size: 20px;
`;

const Text = styled.div`
  color: #a4a7c1;
  overflow-wrap: break-word;
  margin-left: 1.4em;
  padding-top: 0.5em;

  @media (min-width: 768px) {
    margin-left: 1.5em;
    padding-top: 0em;
  }
`;

interface ExperienceDetailProps {
  experienceList: ExperienceDetailType[];
}

const ExperienceDetail: FC<ExperienceDetailProps> = (props) => {
  const { experienceList } = props;
  return (
    <ExperienceDetailContainer>
      {experienceList.map((item: ExperienceDetailType, index: number) => {
        return (
          <div className="detail" key={index}>
            <FadeInContainer>
              <Title>
                <IconSpace>
                  <RightArrowColor />
                  {item.title}
                </IconSpace>
              </Title>
              <div className="description">
                <Text>{item.description}</Text>
              </div>
            </FadeInContainer>
          </div>
        );
      })}
    </ExperienceDetailContainer>
  );
};

export default ExperienceDetail;
