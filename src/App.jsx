import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import WorkspacesPage from './pages/WorkspacesPage';
import AcousticPage from './pages/AcousticPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(el => {
          if (el.isIntersecting) {
            el.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab]);

  // Counter animation
  useEffect(() => {
    const counters = document.querySelectorAll('[data-count]');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count'));
      let current = 0;
      const step = Math.ceil(target / 60);
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        counter.textContent = current;
        if (current >= target) clearInterval(timer);
      }, 30);
    });
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
      <main>
        {activeTab === 'home' && <HomePage onTabChange={handleTabChange} />}
        {activeTab === 'workspaces' && <WorkspacesPage onTabChange={handleTabChange} />}
        {activeTab === 'acoustic' && <AcousticPage onTabChange={handleTabChange} />}
        {activeTab === 'contact' && <ContactPage />}
      </main>
      <Footer onTabChange={handleTabChange} />
    </div>
  );
}
