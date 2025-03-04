"use client"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useEffect, useState, useContext } from 'react';
import { DiscordLogoIcon, LinkedInLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons';
import Link from "next/link";
import MyContext from '@/components/MyContext';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const context = useContext(MyContext);
  if(!context){
    throw new Error("useMyContext must be used within a MyContextProvider")
  }
  const { loaded, setLoaded } = context;

  useEffect(() => {
    // Loading screen animation
    const loadingInterval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + 1;
        if (newProgress >= 100) {
          clearInterval(loadingInterval);
          // Add a small delay after reaching 100% before hiding the loading screen
          setTimeout(() => {
            setLoading(false)
            setLoaded(true)
          }, 200);
          return 100;
        }
        return newProgress;
      });
    }, 30); // 30ms * 100 steps = ~3 seconds

    // Animation for elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    const slideElements = document.querySelectorAll('.slide-in');
    const scaleElements = document.querySelectorAll('.scale-in');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    // Only observe elements when loading is complete
    if (!loading || loaded) {
      fadeElements.forEach(el => observer.observe(el));
      slideElements.forEach(el => observer.observe(el));
      scaleElements.forEach(el => observer.observe(el));
    }
    
    return () => {
      clearInterval(loadingInterval);
      fadeElements.forEach(el => observer.unobserve(el));
      slideElements.forEach(el => observer.unobserve(el));
      scaleElements.forEach(el => observer.unobserve(el));
    };
  }, [loading]);
  
  if (loading && !loaded) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
        <div className="w-64 h-64 flex items-center justify-center">
          <img 
            src="/aiai.png" 
            alt="AI Club Logo" 
            className="w-48 h-48 object-contain" 
          />
        </div>
        <div className="w-64 h-2 bg-gray-200 rounded-full mt-4 overflow-hidden">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
        <p className="mt-2 text-blue-600 font-bold">{loadingProgress}%</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white overflow-x-hidden font-['Space_Mono']">
      {/* Header Section */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm py-4 px-6 flex justify-between items-center z-50">
        <div className="text-blue-600 font-bold text-xl hover:scale-105 transition-transform">
        <span className="inline-block hover:rotate-3 transition-transform">U</span>
        <span className="inline-block hover:rotate-3 transition-transform">W</span>
        <span className="inline-block hover:rotate-3 transition-transform">I</span>
        <span className="inline-block hover:rotate-3 transition-transform">N</span>
        <span className="inline-block hover:rotate-3 transition-transform">D</span>
        <span className="inline-block hover:rotate-3 transition-transform">S</span>
        <span className="inline-block hover:rotate-3 transition-transform">O</span>
        <span className="inline-block hover:rotate-3 transition-transform">R</span>
          <span className="inline-block hover:rotate-3 transition-transform ml-1">A</span>
          <span className="inline-block hover:rotate-3 transition-transform">I</span>
          <span className="inline-block hover:-rotate-3 transition-transform ml-1">C</span>
          <span className="inline-block hover:-rotate-3 transition-transform">L</span>
          <span className="inline-block hover:-rotate-3 transition-transform">U</span>
          <span className="inline-block hover:-rotate-3 transition-transform">B</span>
        </div>
        <div className="flex space-x-4">
          <a href="https://discord.gg/UYMWjsq6ea" className="text-blue-500 hover:text-blue-700 hover:scale-125 transition-all">
            <DiscordLogoIcon className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/uwindsor.ai.club/" className="text-blue-500 hover:text-blue-700 hover:scale-125 transition-all">
            <InstagramLogoIcon className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/company/uwindsor-ai-club/posts/?feedView=all" className="text-blue-500 hover:text-blue-700 hover:scale-125 transition-all">
            <LinkedInLogoIcon className="w-6 h-6" />
          </a>
        </div>
      </header>

      {/* Welcome Section */}
      {/* Welcome Section */}
      {/* Welcome Section with Polygon Network Background */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-white overflow-hidden relative">
        {/* Animated Network Background */}
        <div className="absolute inset-0 overflow-hidden">
          <svg 
            className="absolute w-full h-full opacity-50" 
            id="network-bg" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feComposite in="SourceGraphic" in2="coloredBlur" operator="over"/>
              </filter>
            </defs>
      
            {/* Dots (Nodes) */}
            <g className="nodes">
              <circle cx="10%" cy="20%" r="3" fill="#3B82F6" className="animate-pulse"/>
              <circle cx="25%" cy="15%" r="2" fill="#3B82F6" className="animate-pulse"/>
              <circle cx="40%" cy="30%" r="4" fill="#3B82F6" className="animate-pulse"/>
              <circle cx="50%" cy="10%" r="3" fill="#3B82F6" className="animate-pulse"/>
              <circle cx="65%" cy="25%" r="2" fill="#3B82F6" className="animate-pulse"/>
              <circle cx="75%" cy="15%" r="3" fill="#3B82F6" className="animate-pulse"/>
              <circle cx="90%" cy="30%" r="2" fill="#3B82F6" className="animate-pulse"/>
        
              <circle cx="15%" cy="60%" r="2" fill="#3B82F6" className="animate-pulse"/>
              <circle cx="30%" cy="50%" r="3" fill="#3B82F6" className="animate-pulse"/>
              <circle cx="45%" cy="75%" r="2" fill="#3B82F6" className="animate-pulse"/>
              <circle cx="60%" cy="65%" r="4" fill="#3B82F6" className="animate-pulse"/>
              <circle cx="70%" cy="80%" r="3" fill="#3B82F6" className="animate-pulse"/>
              <circle cx="85%" cy="70%" r="2" fill="#3B82F6" className="animate-pulse"/>
            </g>
      
            {/* Lines (Connections) */}
            <g className="connections" stroke="#3B82F6" strokeWidth="1">
              <line x1="10%" y1="20%" x2="25%" y2="15%" className="animate-dash"/>
              <line x1="25%" y1="15%" x2="40%" y2="30%" className="animate-dash"/>
              <line x1="40%" y1="30%" x2="50%" y2="10%" className="animate-dash"/>
              <line x1="50%" y1="10%" x2="65%" y2="25%" className="animate-dash"/>
              <line x1="65%" y1="25%" x2="75%" y2="15%" className="animate-dash"/>
              <line x1="75%" y1="15%" x2="90%" y2="30%" className="animate-dash"/>
        
              <line x1="15%" y1="60%" x2="30%" y2="50%" className="animate-dash"/>
              <line x1="30%" y1="50%" x2="45%" y2="75%" className="animate-dash"/>
              <line x1="45%" y1="75%" x2="60%" y2="65%" className="animate-dash"/>
              <line x1="60%" y1="65%" x2="70%" y2="80%" className="animate-dash"/>
              <line x1="70%" y1="80%" x2="85%" y2="70%" className="animate-dash"/>
        
              <line x1="25%" y1="15%" x2="15%" y2="60%" className="animate-dash"/>
              <line x1="40%" y1="30%" x2="30%" y2="50%" className="animate-dash"/>
              <line x1="50%" y1="10%" x2="45%" y2="75%" className="animate-dash"/>
              <line x1="65%" y1="25%" x2="60%" y2="65%" className="animate-dash"/>
              <line x1="75%" y1="15%" x2="70%" y2="80%" className="animate-dash"/>
            </g>
          </svg>
        </div>
  
        {/* Content */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="md:mr-12 slide-in opacity-0 transition-all duration-700 delay-300 ease-out">
            <h1 className="text-5xl md:text-7xl font-bold text-blue-600 mb-4 group relative inline-block">
              <span>WELCOME</span>
              <span className="absolute bottom-0 left-0 w-0 h-2 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Join our community of over 500 AI enthusiasts and practitioners. We explore cutting-edge technologies,
              share knowledge, and build the future together.
            </p>
          </div>
          <div className="w-64 h-64 bg-blue-100 rounded-full flex items-center justify-center mb-8 md:mb-0 slide-in opacity-0 transition-all duration-700 ease-out">
            <img 
              src="/aiai.png" 
              alt="aiai" 
              className="w-48 h-48 object-contain" 
            />
          </div>
        </div>
      </section>


      {/* What We Offer Section */}
      <section className="py-20 px-6 relative overflow-hidden bg-white">
        {/* Animated Background Waves */}
        <div className="absolute inset-0 z-0">
          <svg 
            className="absolute w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1440 800"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              className="wave wave1"
              fill="rgba(59, 130, 246, 0.05)"
              d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,229.3C672,235,768,213,864,197.3C960,181,1056,171,1152,186.7C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
            <path 
              className="wave wave2"
              fill="rgba(59, 130, 246, 0.1)"
              d="M0,96L60,117.3C120,139,240,181,360,192C480,203,600,181,720,186.7C840,192,960,224,1080,218.7C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
            <path 
              className="wave wave3"
              fill="rgba(59, 130, 246, 0.03)"
              d="M0,32L48,53.3C96,75,192,117,288,122.7C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,240C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-12 fade-in opacity-0 transition-opacity duration-700">What We Offer</h2>
    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 scale-in opacity-0 scale-90 transition-all duration-500 delay-100 backdrop-blur-sm bg-opacity-90">
              <div className="h-40 bg-blue-200 flex items-center justify-center group">
                <svg className="w-16 h-16 text-blue-600 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Projects</h3>
                  <p className="text-gray-600">Hands-on sessions to build practical AI skills and projects.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 scale-in opacity-0 scale-90 transition-all duration-500 delay-200 backdrop-blur-sm bg-opacity-90">
                <div className="h-40 bg-blue-200 flex items-center justify-center group">
                  <svg className="w-16 h-16 text-blue-600 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Networking</h3>
                  <p className="text-gray-600">Connect with like-minded students in the AI field.</p>
                </div>
              </div>

              {/* Card 3 - UPDATED RESEARCH ICON */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 scale-in opacity-0 scale-90 transition-all duration-500 delay-300 backdrop-blur-sm bg-opacity-90">
                <div className="h-40 bg-blue-200 flex items-center justify-center group">
                  <svg className="w-16 h-16 text-blue-600 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Research</h3>
                  <p className="text-gray-600">Access to research and collaboration opportunities.</p>
                </div>
              </div>

              {/* Card 4 - UPDATED KNOWLEDGE ICON */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 scale-in opacity-0 scale-90 transition-all duration-500 delay-400 backdrop-blur-sm bg-opacity-90">
                <div className="h-40 bg-blue-200 flex items-center justify-center group">
                  <svg className="w-16 h-16 text-blue-600 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Events</h3>
                  <p className="text-gray-600">Enhance AI knowledge with variety of monthly events.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


      {/* Monthly Events Section with Enhanced Effects */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-white relative overflow-hidden">
        {/* Background Effects - expanded to cover entire section */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {/* Abstract Code Pattern - increased size and coverage */}
          <div className="absolute top-0 left-0 w-full h-full text-blue-600 opacity-20 text-xs whitespace-pre font-mono rotate-12" style={{fontSize: '10px'}}>
            {Array.from({length: 50}).map((_, i) => (
              <div key={i} className="my-2">
                {`import tensorflow as tf
      model = tf.keras.Sequential([
        tf.keras.layers.Dense(128, activation='relu'),
        tf.keras.layers.Dense(10, activation='softmax')
      ])`.repeat(5)}
              </div>
            ))}
          </div>

          {/* Floating Particles - more particles, spread across the section */}
          <div className="absolute w-4 h-4 bg-blue-600 rounded-full top-1/4 left-1/2 animate-pulse" style={{animationDuration: '2s'}}></div>
          <div className="absolute w-6 h-6 bg-blue-400 rounded-full bottom-1/3 left-1/4 animate-pulse" style={{animationDuration: '3s'}}></div>
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full bottom-1/4 right-1/4 animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute w-5 h-5 bg-blue-300 rounded-full top-1/3 right-1/3 animate-pulse" style={{animationDuration: '3.5s'}}></div>
          <div className="absolute w-4 h-4 bg-blue-500 rounded-full top-1/2 left-1/3 animate-pulse" style={{animationDuration: '2.5s'}}></div>
          <div className="absolute w-7 h-7 bg-blue-200 rounded-full bottom-1/2 right-1/2 animate-pulse" style={{animationDuration: '4.5s'}}></div>

          {/* Geometric Shapes - more shapes, larger and spread across */}
          <div className="absolute w-80 h-80 border-4 border-blue-200 rounded-full top-20 right-20 opacity-40"></div>
          <div className="absolute w-96 h-96 border-2 border-blue-300 rounded-full -bottom-20 -left-20 opacity-30"></div>
          <div className="absolute w-40 h-40 border-8 border-blue-100 rotate-45 top-1/3 right-1/3 opacity-50"></div>
          <div className="absolute w-64 h-64 border-4 border-blue-200 rounded-full -top-10 -left-10 opacity-30"></div>
          <div className="absolute w-52 h-52 border-2 border-blue-300 rotate-12 bottom-10 right-10 opacity-40"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Title without animated underline */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4 inline-block animate-fadeIn">Monthly Events</h2>
            {/* Removed the underline animation div */}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Event Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scaleIn" style={{animationDelay: '0.1s'}}>
              <div className="h-36 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group relative overflow-hidden">
                {/* Card glow effect */}
                <div className="absolute w-20 h-20 bg-blue-400 rounded-full blur-xl opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
                <svg className="w-16 h-16 text-blue-600 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Kahoots</h3>
                <p className="text-gray-600">Monthly Kahoots on the latest AI topics for cash prizes!</p>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scaleIn" style={{animationDelay: '0.2s'}}>
              <div className="h-36 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group relative overflow-hidden">
                <div className="absolute w-20 h-20 bg-blue-400 rounded-full blur-xl opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
                <svg className="w-16 h-16 text-blue-600 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Research Articles</h3>
                <p className="text-gray-600">Discuss and break down the latest AI research papers with peers and professors.</p>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scaleIn" style={{animationDelay: '0.3s'}}>
              <div className="h-36 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group relative overflow-hidden">
                <div className="absolute w-20 h-20 bg-blue-400 rounded-full blur-xl opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
                <svg className="w-16 h-16 text-blue-600 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Workshops</h3>
                <p className="text-gray-600">Enhance your skills with hands-on workshops on machine learning frameworks and tools!</p>
              </div>
            </div>

            {/* Event Card 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scaleIn" style={{animationDelay: '0.4s'}}>
              <div className="h-36 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group relative overflow-hidden">
                <div className="absolute w-20 h-20 bg-blue-400 rounded-full blur-xl opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
                <svg className="w-16 h-16 text-blue-600 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15h8m-4-4v8" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Infographics</h3>
                <p className="text-gray-600">Read up on engaging infographics to simplify complex AI concepts.</p>
              </div>
            </div>

            {/* Event Card 5 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scaleIn" style={{animationDelay: '0.5s'}}>
              <div className="h-36 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group relative overflow-hidden">
                <div className="absolute w-20 h-20 bg-blue-400 rounded-full blur-xl opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
                <svg className="w-16 h-16 text-blue-600 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">AI Project Showcase</h3>
                <p className="text-gray-600">Present your AI projects and get feedback from peers and mentors.</p>
              </div>
            </div>

            {/* Event Card 6 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scaleIn" style={{animationDelay: '0.6s'}}>
              <div className="h-36 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group relative overflow-hidden">
                <div className="absolute w-20 h-20 bg-blue-400 rounded-full blur-xl opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
                <svg className="w-16 h-16 text-blue-600 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">AI Thesis Presentations</h3>
                <p className="text-gray-600">Explore the ethical implications and societal impact of artificial intelligence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-12 fade-in opacity-0 transition-opacity duration-700">Latest News</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 fade-in opacity-0 transition-all duration-700 delay-100">
              <div className="h-48 bg-blue-200 relative overflow-hidden group">
                <img src="/ai2.png" alt="ai2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Research Board</h3>
                <p className="text-gray-600 mb-4">Join our exclusive AI Club research board to gain real-world experience and work on innovative AI projects.</p>
                <a href="#" className="text-blue-600 font-medium hover:underline group inline-flex items-center">
                <Link href="/research">Read more</Link> 
                <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 fade-in opacity-0 transition-all duration-700 delay-200">
              <div className="h-48 bg-blue-200 relative overflow-hidden group">
                <img src="/ai1.png" alt="ai1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Workshop Series</h3>
                <p className="text-gray-600 mb-4">We're launching a new series of hands-on workshops focused on exploring the exciting world of generative AI.</p>
                <a href="#" className="text-blue-600 font-medium hover:underline group inline-flex items-center">
                  <Link href="/workshop">Read more</Link> 
                <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* News Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 fade-in opacity-0 transition-all duration-700 delay-300">
              <div className="h-48 bg-blue-200 relative overflow-hidden group">
                <img src="/aii3.png" alt="aii3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">AI Club Merch</h3>
                <p className="text-gray-600 mb-4">AI Club announces its first-ever merch lineup, featuring stylish crewnecks and cool stickers for all members.</p>
                <a href="#" className="text-blue-600 font-medium hover:underline group inline-flex items-center">
                <Link href="/merch">Read more</Link> 
                   
                  <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Now Section with Animated Background */}
      <section className="py-20 px-6 relative overflow-hidden bg-blue-600 text-white text-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 w-full h-full opacity-20">
          {/* Floating Circles */}
          <div className="absolute w-64 h-64 bg-white rounded-full -top-20 -left-20 animate-pulse opacity-20"></div>
          <div className="absolute w-96 h-96 bg-white rounded-full -bottom-40 -right-20 animate-pulse opacity-20" style={{animationDuration: '2s'}}></div>
           
          {/* Diagonal Lines */}
          <div className="absolute right-0 top-0 h-full w-1/3 overflow-hidden">
            <div className="w-full h-full border-l-4 border-blue-300 transform rotate-12 origin-bottom-left opacity-30"></div>
            <div className="w-full h-full border-l-2 border-blue-200 transform rotate-24 origin-bottom-left opacity-20 mt-10"></div>
          </div>
    
          {/* Floating Particles */}
          <div className="absolute w-10 h-10 bg-white border border-gray-300 rounded-full shadow-xl shadow-gray-400 drop-shadow-2xl top-1/3 left-1/4 animate-ping" style={{ animationDuration: '1s' }}></div>
          <div className="absolute w-15 h-15 bg-white border border-gray-300 rounded-full shadow-xl shadow-gray-400 drop-shadow-2xl top-2/3 left-1/3 animate-ping" style={{ animationDuration: '2.5s' }}></div>
          <div className="absolute w-20 h-20 bg-white border border-gray-300 rounded-full shadow-xl shadow-gray-400 drop-shadow-2xl bottom-1/4 right-1/3 animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute w-25 h-25 bg-white border border-gray-300 rounded-full shadow-xl shadow-gray-400 drop-shadow-2xl bottom-3/4 right-1/3 animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute w-30 h-30 bg-white border border-gray-300 rounded-full shadow-xl shadow-gray-400 drop-shadow-2xl bottom-4/4 right-2/3 animate-ping" style={{ animationDuration: '3s' }}></div>

        </div>

        {/* Bouncing Circle with Image - Moved outside the opacity container and with higher z-index */}
        <div className="absolute w-40 h-40 bg-white rounded-full top-1/4 right-10 animate-bounce overflow-hidden flex items-center justify-center shadow-lg z-10 opacity-70" style={{animationDuration: '3s'}}>
          {/* Replace the src with your actual image URL */}
          <div className="w-4/5 h-4/5 overflow-hidden rounded-full">
            <img 
              src="/aiai.png" 
              alt="aiai" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
  
        {/* Wave Pattern at Bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="none" className="w-full h-16 text-blue-500 opacity-30">
            <path fill="currentColor" d="M0,96L60,85.3C120,75,240,53,360,53.3C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path>
          </svg>
        </div>
  
        {/* Content with improved animations */}
        <div className="max-w-4xl mx-auto relative z-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in opacity-0 transition-opacity duration-700 animate-fadeIn">
            Join Our Community Today!
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto fade-in opacity-0 transition-opacity duration-700 delay-200 animate-fadeIn" style={{animationDelay: '0.2s'}}>
            Become part of a thriving community of AI enthusiasts, researchers, and innovators. Connect, learn, and build the future with us!
          </p>
          <a
            href="https://discord.gg/UYMWjsq6ea"
            className="inline-flex items-center justify-center bg-white text-blue-600 font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300 shadow-lg scale-in opacity-0 scale-90 transition-all duration-500 delay-300 animate-scaleIn relative overflow-hidden group"
            style={{animationDelay: '0.3s'}}
          >
            {/* Button shine effect */}
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -translate-x-full skew-x-12 transition-transform duration-1000 group-hover:translate-x-full"></span>
            <DiscordLogoIcon className="w-6 h-6 mr-2" />
            Join Our Discord
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-bold text-xl hover:scale-105 transition-transform">AI CLUB</div>
            <div className="text-blue-100 mt-1">Building the future of AI together</div>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://discord.gg/UYMWjsq6ea" className="text-white hover:text-blue-200 hover:scale-125 transition-all">
              <DiscordLogoIcon className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/uwindsor.ai.club/" className="text-white hover:text-blue-200 hover:scale-125 transition-all">
              <InstagramLogoIcon className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/company/uwindsor-ai-club/posts/?feedView=all" className="text-white hover:text-blue-200 hover:scale-125 transition-all">
              <LinkedInLogoIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-6 text-center text-blue-100 text-sm">
          © {new Date().getFullYear()} AI Club. All rights reserved.
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        
        body {
          font-family: 'Space Mono', monospace;
        }
        
        .fade-in.show {
          opacity: 1;
        }
        .slide-in.show {
          transform: translateX(0);
          opacity: 1;
        }
        .slide-in {
          transform: translateY(20px);
        }
        .scale-in.show {
          opacity: 1;
          transform: scale(1);
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </main>
  );
}
