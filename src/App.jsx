import React, { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './layout/Footer';

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  // If intro has not been clicked, show the Intro Gateway screen
  if (!hasEntered) {
    return <IntroScreen onEnter={() => setHasEntered(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col relative font-sans selection:bg-cyan-500 selection:text-slate-950 animate-fadeIn">

      {/* Premium Ambient Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[rgba(6,182,212,0.06)] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow max-w-[1126px] w-full mx-auto px-6 py-12 md:py-20 relative z-10 box-border">
        {activeTab === 'home' && <Hero setActiveTab={setActiveTab} />}
        {activeTab === 'about' && <About />}
        {activeTab === 'skills' && <Skills />}
        {activeTab === 'experience' && <Experience />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'contact' && <Contact />}
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;