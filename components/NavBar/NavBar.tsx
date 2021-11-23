import React, { FC, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import NavbarIcon from "assets/svg/navbar_icon.svg";
import Hamburgur from "assets/svg/hamburgur.svg";
import { Row, Col } from "components/GlobalStyleComponent";

interface NavBarProps {
  isTop: boolean;
  fontColor: string;
  backgroundColor: string;
}

const NavBarWrapper = styled.div<NavBarProps>`
  width: 100%;
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  backdrop-filter: blur(1px);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: ${(props) =>
    props.isTop
      ? "unset;"
      : "0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);"}

  padding-right: 4vw;
  padding-left: 4vw;
  position: fixed;
  z-index: 999;
    

  h1 {
    margin-bottom: 0;
    font-size: 1.6em;
    color: ${(props) => props.fontColor};
  }

  .nav {
    width: 100%;
    height: 100%;
    min-width: 200px;
    font-size: 1.2rem;
  }

  .menu {
    display: flex;
    justify-content: space-around;
    min-width: 350px;
    font-weight: bold;

    div {
      cursor: pointer;
    }
  }
  
  a{
      color: ${(props) => props.fontColor};
    }

  .sub-menu:hover {
  }

  .mobile-menu {
    display: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.4em;
  }

  @media (max-width: 767px) {
    .menu {
      display: none;
    }

    .mobile-menu {
      display: flex;
    }
  }
`;

interface IconProps {
  color: string;
}

const HamburgurColor = styled(Hamburgur)<IconProps>`
  path {
    stroke: ${(props) => props.color};
  }
`;

const NavBarIconColor = styled(NavbarIcon)<IconProps>`
  height: 1.2em;
  width: auto;
  margin-top: 0.5em;

  path {
    stroke: ${(props) => props.color};
    fill: ${(props) => props.color};
  }
`;

const NavBarRow = styled(Row)`
  padding: 0.5em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
  min-width: 200px;
  font-size: 1.2rem;
`;

interface MenuSliderProps {
  setOpenMenu: (flag: boolean) => void;
}

const NavBar: FC<MenuSliderProps> = (props) => {
  const { setOpenMenu } = props;
  const [isTop, setIsTop] = useState<boolean>(true);
  const [fontColor, setFontColor] = useState<string>("white");
  const [backgroundColor, setBackgroundColor] = useState<string>("#221b47");
  const scrollDuration = 120;

  if (typeof window !== "undefined") {
    window.onscroll = function () {
      if (window.pageYOffset <= 50) {
        setIsTop(true);
        setFontColor("white");
        setBackgroundColor("transparent");
      } else {
        if (isTop) {
          setIsTop(false);
          setFontColor("black");
          setBackgroundColor("white");
        }
      }
    };
  }

  return (
    <NavBarWrapper
      isTop={isTop}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
    >
      <NavBarRow>
        <Col>
          <Link to="intro" spy={true} smooth={true} duration={scrollDuration}>
            <NavBarIconColor color={fontColor} />
          </Link>
        </Col>
        <Col>
          <div className="menu">
            <Link to="about" spy={true} smooth={true} duration={scrollDuration}>
              <div className="sub-menu">About</div>
            </Link>

            <Link
              to="experience"
              spy={true}
              smooth={true}
              duration={scrollDuration}
            >
              <div className="sub-menu">Experience</div>
            </Link>

            <Link
              to="contract"
              spy={true}
              smooth={true}
              duration={scrollDuration}
            >
              <div className="sub-menu">Contract</div>
            </Link>
          </div>
          <div className="mobile-menu" onClick={() => setOpenMenu(true)}>
            <HamburgurColor color={fontColor} />
          </div>
        </Col>
      </NavBarRow>
    </NavBarWrapper>
  );
};

export default NavBar;
