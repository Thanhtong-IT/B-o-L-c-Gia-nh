import React from 'react';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import GlobalSection from '../components/GlobalSection';
import SilenceSection from '../components/SilenceSection';
import ConsequencesSection from '../components/ConsequencesSection';
import VietnamSection from '../components/VietnamSection';
import AcademicSection from '../components/AcademicSection';
import LawSection from '../components/LawSection';
import YouthSection from '../components/YouthSection';
import ConclusionSection from '../components/ConclusionSection';
import Footer from '../components/Footer';
import { presentationData } from '../data/presentationData';

const HomePage = () => {
  return (
    <>
      <HeroSection data={presentationData.hero} />
      <IntroSection data={presentationData.intro} />
      <GlobalSection data={presentationData.global} />
      <SilenceSection data={presentationData.silence} />
      <ConsequencesSection data={presentationData.consequences} />
      <VietnamSection data={presentationData.vietnam} />
      <AcademicSection data={presentationData.academic} />
      <LawSection data={presentationData.law} />
      <YouthSection data={presentationData.youth} />
      <ConclusionSection data={presentationData.conclusion} />
      <Footer />
    </>
  );
};

export default HomePage;
