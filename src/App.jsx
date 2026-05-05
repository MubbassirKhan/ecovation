import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import WorkspacesPage from './pages/WorkspacesPage';
import AcousticPage from './pages/AcousticPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Trigger page animation
    const main = document.querySelector('main');
    if (main) {
      main.style.animation = 'none';
      setTimeout(() => {
        main.style.animation = 'pageEnter 0.5s cubic-bezier(0.2, 0.5, 0.3, 1) forwards';
      }, 10);
    }
  }, [location.pathname]);

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
  }, [location.pathname]);

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
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workspaces" element={<WorkspacesPage />} />
          <Route path="/acoustic" element={<AcousticPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
