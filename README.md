# Ecovation — React Frontend

## Stack
- React 18
- Tailwind CSS (via CDN in index.html)
- Font Awesome 6 (via CDN)
- Google Fonts: Bebas Neue, DM Sans, DM Serif Display

## Design Theme
- **Palette**: Deep forest green (#0a1a0f) + Amber gold (#c8922a) + Cream (#f8f4e8)
- **Typography**: Bebas Neue (display/headings) + DM Sans (body)
- **Aesthetic**: Industrial-editorial, square edges, grid textures, bold typographic hierarchy

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Structure

```
ecovation/
├── public/
│   └── index.html          # Tailwind CDN, Google Fonts, custom CSS
├── src/
│   ├── index.js            # Entry point
│   ├── App.jsx             # Tab routing + scroll observer
│   ├── components/
│   │   ├── Navbar.jsx      # Fixed nav with mobile drawer
│   │   └── Footer.jsx      # 4-column footer
│   └── pages/
│       ├── HomePage.jsx    # Hero, About, Services, Projects, Clients, CTA
│       ├── WorkspacesPage.jsx  # Solutions grid, process steps
│       ├── AcousticPage.jsx    # Panel types, color picker, specs table
│       └── ContactPage.jsx     # Form with validation, info panel, map
```

## Features
- Scroll reveal animations (Intersection Observer)
- Animated stat counters
- Infinite client marquee
- Interactive color picker (73 colors)
- Clickable spec table rows
- Contact form with validation
- Responsive mobile nav drawer
- Hover transitions on all interactive elements
