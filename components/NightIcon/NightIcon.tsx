import React from "react";
import styled from "styled-components";

const NightIconWrapper = styled.div`
  .night {
    width: 175px;
    height: 175px;
    border-radius: 40%;
    z-index: 120;
    position: sticky;
    background: linear-gradient(to bottom right, #0b1f53 0%, #336bff 70%);
    box-shadow: 1px 1px 30px #0b1f53;
  }
  .moon {
    position: absolute;
    top: -10%;
    left: 65%;
    width: 82px;
    height: 82px;
    border-radius: 100%;
    background: rgba(255, 241, 118, 1);
    box-shadow: 1px 1px 30px rgba(224, 224, 224, 1);
  }
  .spot1 {
    position: absolute;
    top: 0%;
    left: 85%;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #777;
  }
  .spot2 {
    position: absolute;
    top: 30%;
    left: 75%;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    background-color: #777;
  }

  .night div {
    position: absolute;
    list-style: none;
    width: 3px;
    height: 3px;
    border-radius: 100%;
    background-color: #fff;

    transform: rotate(45deg);
  }

  .night div:nth-child(1) {
    top: 0%;
    left: 65%;
  }

  .night div:nth-child(2) {
    top: 35%;
    left: 53%;
  }

  .night div:nth-child(3) {
    opacity: 0;
    top: 20%;
    left: 75%;
    width: 2px;
    height: 2px;
    animation: meteor 1.5s infinite linear;
    animation-delay: 0.6s;
  }

  .night div:nth-child(4) {
    top: 5%;
    left: 50%;
  }

  .night div:nth-child(5) {
    opacity: 0;
    top: 20%;
    left: 55%;
    width: 1px;
    height: 15px;
    animation: meteor 1.5s infinite linear;
  }

  .night div:nth-child(6) {
    top: 20%;
    left: 40%;
  }

  .night div:nth-child(7) {
    top: 10%;
    left: 25%;
  }

  @keyframes meteor {
    10% {
      opacity: 1;
    }
    80% {
      left: 10%;
      top: 75%;
      opacity: 0;
    }
  }

  @media screen and (max-width: 760px) {
    .night {
      width: 140px;
      height: 140px;
      min-height: 115px;
      min-width: 115px;
    }

    .moon {
      width: 68px;
      height: 68px;
    }
  }
`;

const NightIcon = () => {
  return (
    <NightIconWrapper>
      <div className="night">
        <span className="moon"></span>
        <span className="spot1"></span>
        <span className="spot2"></span>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </NightIconWrapper>
  );
};

export default NightIcon;
