# 🎓 AI University Decision Support System - Multi-Page Frontend

A professional, multi-page SaaS website built with React for helping students find their perfect university with AI-powered recommendations.

## 🌟 Features

### 6 Dedicated Pages
- **Landing Page** (`/`) - Marketing homepage with features showcase
- **Profile Page** (`/profile`) - Student information form
- **Recommendations** (`/recommendations`) - AI-matched universities
- **Analytics** (`/analytics`) - Dashboard with insights
- **Scholarships** (`/scholarships`) - Funding opportunities
- **Ask AI** (`/ask-ai`) - AI assistant interface

### Professional UX/UI
- Modern SaaS design with gradients and glass effects
- Responsive mobile design with hamburger menu
- Smooth page transitions with React Router
- Persistent header and footer navigation
- Professional color system and typography

### Technology Stack
- **React 19.2.3** - Modern UI framework
- **React Router v6** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS3** - Modern styling with animations

## 📦 Quick Start

### Prerequisites
- Node.js 14+ installed
- npm 6+ installed
- Backend running on `http://localhost:8000`

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm start
```

The app opens automatically at `http://localhost:3000`

### Production Build

```bash
npm run build
```

Creates optimized production bundle in `build/` folder.

## 🗂️ Project Structure

```
frontend/src/
├── pages/                          # Page components (6 pages)
│   ├── LandingPage_New.jsx        # Landing page
│   ├── ProfilePage.jsx            # Student profile form
│   ├── RecommendationsPage.jsx    # University recommendations
│   ├── AnalyticsPage.jsx          # Dashboard & insights
│   ├── ScholarshipsPage.jsx       # Scholarship finder
│   └── AskAIPage.jsx              # AI assistant
│
├── components/                     # Reusable components
│   ├── Navigation.jsx             # Global navbar + footer
│   ├── StudentProfileForm.jsx     # Profile input form
│   ├── UniversityList.jsx         # University listings
│   ├── RecommendationCard.jsx     # University card
│   ├── ChartsDashboard.jsx        # Analytics charts
│   ├── CostAnalytics.jsx          # Cost analysis
│   ├── ScholarshipsMatcher.jsx    # Scholarship finder
│   ├── QueryBox.jsx               # AI query interface
│   ├── FiltersPanel.jsx           # Filters sidebar
│   └── [Other components...]
│
├── services/
│   └── api.js                     # API service
│
├── styles/                         # Global & component styles
│   └── [CSS files]
│
├── App.js                          # Main app with routing
├── App.css                         # Global styles
└── index.js                        # Entry point
```

## 🚀 Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | LandingPageNew | Marketing homepage |
| `/profile` | ProfilePage | Student input form |
| `/recommendations` | RecommendationsPage | University matches |
| `/analytics` | AnalyticsPage | Dashboard & insights |
| `/scholarships` | ScholarshipsPage | Funding finder |
| `/ask-ai` | AskAIPage | AI assistant |

## 🎨 Design System

### Colors
- **Primary Gradient**: Purple (#667eea) → Pink (#764ba2)
- **Accent**: Cyan (#00f2fe)
- **Text**: Dark Gray (#2d3748)
- **Background**: White (#ffffff)

### Components
- Border radius: 12-18px
- Box shadow: Multi-layered
- Animations: Smooth transitions (0.35s cubic-bezier)
- Effects: Glassmorphism, gradients, hover lifts

### Responsive Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🔌 API Integration

All API calls go through the backend at `http://localhost:8000`

### Key Endpoints
```javascript
POST /predict          // Get predictions
POST /recommend        // Get recommendations
POST /query            // AI queries
POST /analyze          // Cost analysis
```

### Environment Variables

Create `.env` file:
```
REACT_APP_API_BASE_URL=http://localhost:8000
REACT_APP_ENV=development
```

## 📱 Mobile Responsive

All pages are fully responsive:
- Hamburger menu for navigation on mobile
- Single-column layout on small screens
- Touch-friendly buttons and inputs
- Optimized typography for readability

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deployment Options
1. **Netlify** - Recommended for React apps
2. **Vercel** - Optimized for Next.js but works great
3. **GitHub Pages** - Free static hosting
4. **Traditional Server** - Node.js with Express

See [DEPLOYMENT_PRODUCTION_GUIDE.md](../DEPLOYMENT_PRODUCTION_GUIDE.md) for detailed instructions.

## 📚 Documentation

- **[MULTI_PAGE_WEBSITE_COMPLETE.md](../MULTI_PAGE_WEBSITE_COMPLETE.md)** - Overview & quick start
- **[MULTI_PAGE_ARCHITECTURE_GUIDE.md](../MULTI_PAGE_ARCHITECTURE_GUIDE.md)** - Technical details
- **[QUICK_NAVIGATION_GUIDE.md](../QUICK_NAVIGATION_GUIDE.md)** - User guide
- **[VISUAL_ARCHITECTURE_DIAGRAMS.md](../VISUAL_ARCHITECTURE_DIAGRAMS.md)** - Visual reference
- **[DEPLOYMENT_PRODUCTION_GUIDE.md](../DEPLOYMENT_PRODUCTION_GUIDE.md)** - Deployment

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm start

# Build production bundle
npm run build

# Run tests
npm test

# Eject configuration (⚠️ Not reversible)
npm run eject
```

### Component Development

Create new pages in `src/pages/`:
```javascript
import React from "react";
import "./PageName.css";

function PageName() {
  return (
    <div className="page-name">
      {/* Content */}
    </div>
  );
}

export default PageName;
```

Add route in `App.js`:
```javascript
import PageName from "./pages/PageName";

<Route path="/page-name" element={<PageName />} />
```

## 🐛 Troubleshooting

### Issue: Dependencies not installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Port 3000 already in use
```bash
# On Windows
netstat -ano | findstr :3000

# On Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Issue: Backend not connecting
- Verify backend is running on `http://localhost:8000`
- Check `REACT_APP_API_BASE_URL` in `.env`
- Check browser console for CORS errors

### Issue: Navigation not working
- Clear browser cache: `Ctrl+Shift+Delete`
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

## 📊 Performance

- **Page Load**: < 3 seconds
- **Navigation**: Instant (React Router)
- **Mobile**: Fully optimized
- **Accessibility**: WCAG compliant

## 🔐 Security

- Environment variables for sensitive data
- CORS properly configured
- No sensitive data in code
- HTTPS ready for production

## 📦 Dependencies

```json
{
  "react": "^19.2.3",
  "react-dom": "^19.2.3",
  "react-router-dom": "^6.24.1",
  "axios": "^1.13.2",
  "react-scripts": "5.0.1"
}
```

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request

## 📝 License

[Check LICENSE file in root directory]

## 🆘 Support

For questions or issues:
1. Check documentation files
2. Review browser console for errors
3. Check backend connectivity
4. See troubleshooting section

## 🎯 Next Steps

1. **Immediate**: Run `npm install && npm start`
2. **Short-term**: Test all pages and navigation
3. **Medium-term**: Deploy to staging environment
4. **Long-term**: Monitor and optimize

## 🌟 Features Coming Soon

- User authentication
- Saved favorites
- Comparison tools
- Application tracking
- Push notifications
- Mobile app

---

**Built with ❤️ for students finding their perfect university**

*Last Updated: 2024*
*Version: 1.0.0*

