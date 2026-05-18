import React, { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: "Real Estate Reel",
    tags: "9:16 Social",
    videoSrc: "/videos/project1.mp4", 
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070" 
  },
  {
    id: 2,
    title: "Modern Suburban Walkthrough",
    tags: "Cinematic • Color Graded",
    videoSrc: "/videos/project2.mp4", 
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070"
  },
  {
    id: 3,
    title: "Realtor",
    tags: "Narrative",
    videoSrc: "/videos/project3.mp4",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
  },
  {
    id: 4,
    title: "Aerial Property Tour",
    tags: "Footage • Slow Paced",
    videoSrc: "/videos/project4.mp4",
    thumbnail: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2070"
  }
];

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [showContactOptions, setShowContactOptions] = useState(false);

  const whatsappNumber = "639304253236"; 
  const emailAddress = "xrpa.personal@gmail.com";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#ff5722] scroll-smooth">
      
      {/* --- STICKY NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 md:px-24 py-6 backdrop-blur-xl bg-black/40 border-b border-white/5">
        <div 
          className="text-xl font-black tracking-tighter uppercase cursor-pointer" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          P<span className="text-[#ff5722]">.</span>L<span className="text-[#ff5722]"> </span>MEDIA
        </div>
        
        <ul className="hidden md:flex gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 items-center">
          <li><a href="#home" className="text-white hover:text-[#ff5722] transition-colors">Home</a></li>
          <li><a href="#projects" className="hover:text-[#ff5722] transition-colors">Projects</a></li>
          <li><a href="#services" className="hover:text-[#ff5722] transition-colors">Services</a></li>
          
          <li className="relative group">
            <button 
              onMouseEnter={() => setShowContactOptions(true)}
              className="hover:text-[#ff5722] transition-colors uppercase"
            >
              Contact
            </button>
            <div 
              onMouseLeave={() => setShowContactOptions(false)}
              className={`absolute top-full left-0 mt-4 bg-[#111] border border-white/10 p-4 flex flex-col gap-4 min-w-[150px] transition-all duration-300 ${showContactOptions ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
            >
              <a href={`mailto:${emailAddress}`} className="hover:text-[#ff5722] whitespace-nowrap">Email Me</a>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5722] whitespace-nowrap">WhatsApp</a>
            </div>
          </li>
        </ul>

        <a 
          href={`https://wa.me/${whatsappNumber}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#ff5722] px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
        >
          Let's Talk
        </a>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative min-h-screen md:h-screen flex items-center px-6 md:px-24 pt-32 md:pt-0 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070" alt="Background" className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full flex flex-col md:flex-row items-center md:items-center justify-between gap-10 md:gap-12">
          <div className="flex-1 mt-10 md:mt-0 text-center md:text-left">
            <span className="text-[#ff5722] font-bold tracking-[0.5em] text-[10px] uppercase mb-6 block">Professional Video Editor</span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.9] md:leading-[0.85] tracking-tighter mb-6 md:mb-8">
              Ryan Paul <br /> <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Albrando</span>
            </h1>

            <div className="max-w-xl">
              <p className="text-lg md:text-xl font-medium leading-relaxed mb-6">
                Hi, call me <span className="text-white font-black underline decoration-[#ff5722] decoration-4 underline-offset-4">Pol,</span> one of the owner of PL Media based in the Philippines, with 3 years of experience in RE Video Editing. 
                <span className="block mt-4 text-white font-bold">I understand that a listing video has one job: to make a viewer stop scrolling and book a viewing. I don’t just "cut" clips; I craft a narrative flow that highlights the property’s best features within the first 3 seconds.</span>
              </p>
            </div>
            
            <div className="flex gap-6 justify-center md:justify-start">
              <a href="#projects" className="bg-[#ff5722] text-white px-8 py-4 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-black transition-all">View My Work</a>
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-white/20 px-8 py-4 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-black transition-all"
              >
                Book a Project
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end relative">
            <div className="relative group p-2">
              <div className="absolute inset-0 border-2 border-[#ff5722]/50 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-700 opacity-50"></div>
              <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-[#111]">
                <img src="/profile.jpg" alt="Ryan Paul Albrando" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
                <div className="absolute bottom-4 right-4 flex flex-col items-end">
                  <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-white/50">Meet Pol</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black text-[#ff5722]">Your Editor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-32 px-10 md:px-24 bg-[#0a0a0a]">
        <div className="mb-20">
          <span className="text-[#ff5722] font-bold text-[10px] uppercase tracking-[0.5em]">Selected Works</span>
          <h2 className="text-5xl font-black uppercase mt-4 tracking-tighter">Featured Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group cursor-pointer" onClick={() => setActiveProject(project)}>
              <div className="aspect-video bg-[#111] overflow-hidden relative border border-white/5 rounded-lg">
                <video src={project.videoSrc} poster={project.thumbnail} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-700" muted loop onMouseOver={(e) => project.videoSrc && e.target.play()} onMouseOut={(e) => { e.target.pause(); e.target.currentTime = 0; }} />
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:text-[#ff5722]">{project.title}</h3>
                <p className="text-gray-500 text-[10px] uppercase mt-3 font-bold">{project.tags}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 px-10 md:px-24 bg-[#0d0d0d] border-y border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="flex flex-col gap-4">
            <span className="text-[#ff5722] font-black text-2xl italic">01</span>
            <h3 className="text-xl font-bold uppercase tracking-tight">Cinematic Narrative</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              I restructure the walkthrough to flow logically, ensuring the "money shots" are front-loaded.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[#ff5722] font-black text-2xl italic">02</span>
            <h3 className="text-xl font-bold uppercase tracking-tight">Color Mastery</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Expert handling of **D-Log M** and **C-Log 3** in DaVinci Resolve or Final Cut Pro for vibrant property looks.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[#ff5722] font-black text-2xl italic">03</span>
            <h3 className="text-xl font-bold uppercase tracking-tight">Rhythmic Pacing</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Custom sound design and surgical speed ramping synced to the beat for a premium experience.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[#ff5722] font-black text-2xl italic">04</span>
            <h3 className="text-xl font-bold uppercase tracking-tight">Tools I Use</h3>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="/fcp-icon.png" alt="FCP" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">Final Cut Pro</span>
                  <span className="text-[8px] uppercase text-gray-600">Primary Editor</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="/dr-icon.png" alt="Resolve" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">DaVinci Resolve</span>
                  <span className="text-[8px] uppercase text-gray-600">Color Grading</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <span className="text-[#ff5722] font-black text-2xl italic">05</span>
            <h3 className="text-xl font-bold uppercase tracking-tight">Front-End Development</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              I build responsive, high-performance landing pages using **React, Tailwind CSS, and Vite** to showcase your property videos professionally.
            </p>
          </div>
        </div>
      </section>

      {/* --- MODAL --- */}
      {activeProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4">
          <button onClick={() => setActiveProject(null)} className="absolute top-10 right-10 text-white uppercase text-[10px] font-bold">Close [×]</button>
          <div className="w-full max-w-5xl aspect-video relative">
            <video src={activeProject.videoSrc} className="w-full h-full object-contain" controls autoPlay muted={false} />
          </div>
          <div className="absolute inset-0 z-[-1]" onClick={() => setActiveProject(null)}></div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <footer className="py-20 border-t border-white/5 text-center flex flex-col items-center gap-6">
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
          <a href={`mailto:${emailAddress}`} className="hover:text-[#ff5722]">Email Me</a>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5722]">WhatsApp</a>
        </div>
        <p className="text-gray-600 text-[9px] uppercase tracking-[0.5em]">© 2026 PL Media — All Rights Reserved</p>
      </footer>
    </div>
  );
}