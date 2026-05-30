import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import GlobalSection from './components/GlobalSection';
import SilenceSection from './components/SilenceSection';
import ConsequencesSection from './components/ConsequencesSection';
import VietnamSection from './components/VietnamSection';
import AcademicSection from './components/AcademicSection';
import PolicyGapSection from './components/PolicyGapSection';
import LawSection from './components/LawSection';
import YouthSection from './components/YouthSection';
import ToolsSection from './components/ToolsSection';
import ConclusionSection from './components/ConclusionSection';
import Footer from './components/Footer';
import { presentationData } from './data/presentationData';

function App() {
  return (
    <div className="bg-soviet-offwhite min-h-screen relative">
      <Navbar />

      <main>
        <HeroSection data={presentationData.hero} />
        <IntroSection data={presentationData.intro} />
        <GlobalSection data={presentationData.global} />
        <SilenceSection data={presentationData.silence} />
        <ConsequencesSection data={presentationData.consequences} />
        <VietnamSection data={presentationData.vietnam} />
        <AcademicSection data={presentationData.academic} />
        <PolicyGapSection data={presentationData.policyGap} />
        <LawSection data={presentationData.law} />
        <YouthSection data={presentationData.youth} />
        <ToolsSection data={presentationData.tools} />
        <ConclusionSection data={presentationData.conclusion} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
