import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 flex items-center justify-center">
      <div className="max-w-2xl text-center">
        <h1 className="text-9xl font-bold text-amber-eco mb-4">404</h1>
        <h2 className="text-4xl font-bold text-forest-900 mb-4">Page Not Found</h2>
        <p className="text-lg text-forest-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-8 py-3.5 bg-amber-eco text-forest-900 font-semibold hover:bg-amber-light transition-all duration-300 hover:shadow-lg hover:shadow-amber-eco/40 border border-amber-eco"
          style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
