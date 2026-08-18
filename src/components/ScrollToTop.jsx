import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 w-12 h-12 bg-amber-eco text-forest-900 border border-amber-eco flex items-center justify-center font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber-eco/30 hover:-translate-y-1 group ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <i className="fas fa-arrow-up text-sm group-hover:animate-bounce"></i>
    </button>
  );
}
