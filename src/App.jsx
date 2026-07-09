import React, { useState, useEffect } from 'react';
import IntroScreen from './components/IntroScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education'; // 1. Import your component
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './layout/Footer';

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (!hasEntered) {
    return <IntroScreen onEnter={() => setHasEntered(true)} />;
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-[#030712] dark:bg-white text-slate-100 dark:text-black flex flex-col relative font-sans selection:bg-cyan-500 selection:text-slate-950 animate-fadeIn transition-colors duration-500">
        
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[rgba(6,182,212,0.06)] blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <Navbar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
        />

        <main className="flex-grow max-w-[1126px] w-full mx-auto px-6 py-12 md:py-20 relative z-10 box-border pt-24">
          {activeTab === 'home' && <Hero setActiveTab={setActiveTab} />}
          {activeTab === 'about' && <About />}
          {activeTab === 'skills' && <Skills />}
          {activeTab === 'experience' && <Experience />}
          {activeTab === 'education' && <Education />} {/* 2. Add the conditional render */}
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'contact' && <Contact />}
        </main>

        <Footer setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

export default App;