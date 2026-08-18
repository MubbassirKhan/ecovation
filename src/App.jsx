import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import WorkspacesPage from './pages/WorkspacesPage';
import ResidencyPage from './pages/ResidencyPage';
import AcousticPage from './pages/AcousticPage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

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

  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workspaces" element={<WorkspacesPage />} />
          <Route path="/residency" element={<ResidencyPage />} />
          <Route path="/acoustic" element={<AcousticPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <ScrollToTop />
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
