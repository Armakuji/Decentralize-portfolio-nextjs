import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const Col = styled.div`
  position: relative;
  max-width: 100%;
  min-height: 1 px;
}
`;

export const Text = styled.span`
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const Card = styled.div`
  margin: 0.5em 0.25rem;
  width: 95%;
  border-radius: 15px;

  box-sizing: border-box;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: "tnum", "tnum";
  position: relative;
  background: #fff;
`;

export const CardBody = styled.div`
  font-size: 1.4em;
  position: sticky;
  margin: 1rem 1rem;
  padding: 24px;

  @media (min-width: 440px) {
    margin: 1rem 3rem;
  }
`;

export const Divider = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: 'tnum', "tnum";
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    display: flex;
    clear: both;
    width: 100%;
    min-width: 100%;
}
`;

export const IconSpace = styled.div`
  align-items: center;
  display: inline-flex;

  svg {
    padding-right: 0.5em;
  }
`;
