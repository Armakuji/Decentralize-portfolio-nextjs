import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { useEffect, useState } from "react";

import NavBar from "components/NavBar/NavBar";
import MenuSlider from "components/NavBar/MenuSlider";
import IntroSection from "components/IntroSection/IntroSection";
import AboutSection from "components/AboutSection/AboutSection";
import ExperienceSection from "components/ExperienceSection/ExperienceSection";
import ContractSection from "components/ContractSection/ContractSection";

const HomePageWrapper = styled.div`
  -webkit-font-smoothing: auto;
  font-family: sans-serif;

  .fade-in-section {
    opacity: 1;
  }

  .fade-in-section.is-active {
    animation: fade-in-bottom 1.25s;
  }

  @keyframes fade-in-bottom {
    0% {
      -webkit-transform: translateY(40px);
      transform: translateY(40px);
      opacity: 0.5;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Home: NextPage = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.screen.width;
      if (screenWidth >= 760) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <HomePageWrapper>
      <Head>
        <link rel="shortcut icon" href="/NE.svg" />
      </Head>
      <NavBar setOpenMenu={setOpenMenu} />
      <MenuSlider openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <IntroSection />
      <AboutSection />
      <ExperienceSection />
      <ContractSection />
    </HomePageWrapper>
  );
};

export default Home;
