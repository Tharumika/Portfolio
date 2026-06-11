import React from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Tools from './pages/Tools';
import Thoughts from './pages/Thoughts';
import Contact from './pages/Contact';
import ProfileCard from './components/ProfileCard';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#0A1128] text-[#FDFBF7] relative overflow-x-clip">
      {/* Background Glows for visual depth */}
      <div className="absolute top-0 left-0 w-[50vh] h-[50vh] bg-[#805AD5]/8 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-[40%] right-0 w-[40vh] h-[40vh] bg-[#B7791F]/6 rounded-full blur-[100px] pointer-events-none translate-x-1/3"></div>

      <Navigation />
      
      <div className="flex-1 w-full max-w-[1300px] mx-auto px-4 md:px-8 mt-32 lg:mt-40 flex flex-col lg:flex-row gap-12 lg:gap-12 pb-32 z-10 relative">
        {/* Left/Top Column: Profile Card */}
        <aside className="w-full lg:w-[320px] lg:shrink-0 lg:sticky lg:top-36 lg:self-start z-20">
          <ProfileCard />
        </aside>

        {/* Right/Bottom Column: Scrollable Content */}
        <main className="flex-1 space-y-32 md:space-y-48 min-w-0">
          <section id="home" className="scroll-mt-40">
            <Home />
          </section>
          <section id="experience" className="scroll-mt-40">
            <Experience />
          </section>
          <section id="projects" className="scroll-mt-40">
            <Projects />
          </section>
          <section id="tools" className="scroll-mt-40">
            <Tools />
          </section>
          <section id="thoughts" className="scroll-mt-40">
            <Thoughts />
          </section>
          <section id="contact" className="scroll-mt-40">
            <Contact />
          </section>
        </main>
      </div>

      <footer className="border-t border-white/15 py-10 mt-12 z-10 relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#CBD5E1] font-medium text-sm">
            © {new Date().getFullYear()} Vidun Tharumika Ariyawansha. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
