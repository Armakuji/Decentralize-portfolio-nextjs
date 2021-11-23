import styled from "styled-components";
import { Row, Col } from "components/GlobalStyleComponent";

export const IntroContrainer = styled.div`
  background: #221b47;
  width: fit-content;

  @media (min-width: 365px) {
    width: auto;
    padding-top: 2em;
  }
`;

export const ContentWrapper = styled.div`
  background-color: transparent;
  min-height: 450px;
  min-width: 375px;
  letter-spacing: 0.04em;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  padding: 0 2em;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100vw;
  min-width: 360px;

  .title {
    color: #7b79f7;
  }

  h1 {
    color: white;
    opacity: 0.98;
    font-weight: bold;
    margin-bottom: 0;
    font-size: 2.4rem;
  }

  h2 {
    font-weight: bold;
    color: white;
    margin-bottom: 0;
    font-size: 2rem;
    margin-top: 0;
  }

  .sub-detail {
    font-size: 1.4rem;
  }

  .sub-detail {
    color: white;
  }

  @media (max-width: 1030px) {
    text-align: center;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 2rem;
    max-width: 560px;

    h1 {
      padding-bottom: 10px;
    }

    h2 {
      padding-bottom: 10px;
    }
  }

  @media (max-width: 780px) {
    text-align: center;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 2rem;
    max-width: 560px;

    h1 {
      padding-bottom: 10px;
    }

    h2 {
      padding-bottom: 10px;
    }
  }

  @media (min-width: 385px) {
    h1 {
      font-size: 2.2rem;
    }

    h2 {
      font-size: 2rem;
    }

    .sub-detail {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 820px) {
    h1 {
      font-size: 2.4rem;
    }

    h2 {
      font-size: 2em;
    }

    .sub-detail {
      max-width: 460px;
      font-size: 1.4em;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1030px) {
    margin-top: 5rem;
  }

  @media (max-width: 767) {
    margin-top: 3rem;
  }
`;

export const IntroRow = styled(Row)`
  padding: 0.5em 0;
  display: flex;
  align-items: center;
  row-gap: 20px;

  width: 100%;
  height: 100%;
  min-width: 200px;
  font-size: 1.2rem;

  @media (min-width: 1000px) {
    min-width: unset;
    width: 860px;
  }
`;

export const LeftCol = styled(Col)`
  display: block;
  flex: 0 0 100%;
  max-width: 100%;

  @media (min-width: 1030px) {
    display: block;
    flex: 0 0 58.33333333%;
    max-width: 58.33333333%;
  }
`;

export const RightCol = styled(Col)`
  display: block;
  flex: 0 0 100%;
  max-width: 100%;

  @media (min-width: 1030px) {
    display: block;
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%;
  }
`;
