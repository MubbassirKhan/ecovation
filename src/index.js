import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

const container = document.getElementById('root');

if (container && container.hasChildNodes()) {
	hydrateRoot(container, <React.StrictMode><App /></React.StrictMode>);
} else if (container) {
	const root = createRoot(container);
	root.render(<React.StrictMode><App /></React.StrictMode>);
}
