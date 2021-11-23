import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import Close from "assets/svg/close.svg";

const MenuSliderWrapper = styled.div`
  .slider {
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(25px);
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0px;
    z-index: 999;
    transition: all 0.3s ease-in-out 0s;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    opacity: 1;
    top: 0%;
  }

  .close {
    opacity: 0;
    top: -100%;
  }

  .close-icon {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1em 4vw;
    font-size: 1.8rem;
    cursor: pointer;
  }

  h2 {
    cursor: pointer;
    font-size: 1.7rem;
  }

  a {
    color: black;
  }
`;

interface MenuSliderProps {
  openMenu: boolean;
  setOpenMenu: (flag: boolean) => void;
}

const MenuSlider: FC<MenuSliderProps> = (props) => {
  const { openMenu, setOpenMenu } = props;
  const scrollDuration = 200;

  return (
    <MenuSliderWrapper>
      <div className={openMenu ? "slider" : "slider close"}>
        <div className="close-icon" onClick={() => setOpenMenu(false)}>
          <Close />
        </div>
        <h2>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={100}
            onClick={() => setOpenMenu(false)}
          >
            About
          </Link>
        </h2>
        <h2>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            duration={scrollDuration}
            onClick={() => setOpenMenu(false)}
          >
            Experience
          </Link>
        </h2>
        <h2>
          <Link
            to="contract"
            spy={true}
            smooth={true}
            duration={scrollDuration}
            onClick={() => setOpenMenu(false)}
          >
            Contract
          </Link>
        </h2>
      </div>
    </MenuSliderWrapper>
  );
};

export default MenuSlider;
