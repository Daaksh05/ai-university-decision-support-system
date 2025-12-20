# Component Documentation

## Frontend Components

### 1. LandingPage Component

**File:** `frontend/src/components/LandingPage.jsx`  
**Styles:** `frontend/src/styles/LandingPage.css`

#### Overview
Modern professional landing page with all key information about the system.

#### Features
- Animated hero section
- Feature showcase
- Statistics display
- How-it-works guide
- Testimonials carousel
- Call-to-action sections
- Fully responsive

#### Props
None - works standalone

#### Usage
```jsx
import LandingPage from './components/LandingPage';
import { useNavigate } from 'react-router-dom';

// In App.js or Router component
<Route path="/" element={<LandingPage />} />

// The component uses useNavigate internally to redirect
```

#### Customization
Edit content in the component:
```jsx
const features = [
  {
    icon: "🎓",
    title: "Your Title",
    description: "Your description"
  },
  // ...
];

const testimonials = [
  {
    name: "Name",
    role: "Role",
    text: "Your testimonial",
    rating: 5
  }
];
```

#### Mobile Responsive
- ✓ Desktop (1200px+)
- ✓ Tablet (768px - 1199px)
- ✓ Mobile (< 768px)

#### Performance
- Smooth parallax scrolling
- Lazy-loaded animations
- Optimized for fast page loads

---

### 2. RecommendationCard Component

**File:** `frontend/src/components/RecommendationCard.jsx`  
**Styles:** `frontend/src/styles/RecommendationCard.css`

#### Overview
Enhanced university recommendation display with detailed metrics and actions.

#### Props
```typescript
interface Props {
  university: {
    id: string;
    name: string;
    country: string;
    city: string;
    tuition_fee?: number;
    ranking?: number;
    programs_count?: number;
    top_programs?: string[];
    scholarship_available?: boolean;
  };
  score?: {
    admission_chance: number;
  };
  matchPercentage: number; // 0-100
  onSaveClick?: (id: string, saved: boolean) => void;
  onViewClick?: (id: string) => void;
}
```

#### Usage
```jsx
import RecommendationCard from './components/RecommendationCard';

<RecommendationCard
  university={{
    id: "1",
    name: "MIT",
    country: "USA",
    city: "Cambridge",
    tuition_fee: 50000,
    ranking: 1,
    programs_count: 30,
    top_programs: ["Computer Science", "Engineering"],
    scholarship_available: true
  }}
  score={{ admission_chance: 85 }}
  matchPercentage={92}
  onSaveClick={(id, saved) => console.log(id, saved)}
  onViewClick={(id) => console.log("View", id)}
/>
```

#### Features
- Color-coded match badge (green/blue/amber/purple)
- Admission chance display
- Cost indicator
- Ranking display
- Program tags
- Scholarship badge
- Save button with toggle state
- Hover animations
- Detailed view button

#### Styling Variants
Match percentage colors:
- 90-100%: Green (#10B981) - Perfect Match
- 75-89%: Blue (#3B82F6) - Strong Match
- 60-74%: Amber (#F59E0B) - Good Match
- Below 60%: Purple (#8B5CF6) - Possible Match

---

### 3. FiltersPanel Component

**File:** `frontend/src/components/FiltersPanel.jsx`  
**Styles:** `frontend/src/styles/FiltersPanel.css`

#### Overview
Sliding sidebar panel with advanced filtering options.

#### Props
```typescript
interface Props {
  onFilterChange: (filters: FilterObject) => void;
  isOpen: boolean;
  onClose: () => void;
}

interface FilterObject {
  minRanking: number;
  maxRanking: number;
  minTuition: number;
  maxTuition: number;
  country: string;
  scholarshipAvailable: boolean;
  programType: string;
  admissionChance: number;
}
```

#### Usage
```jsx
import FiltersPanel from './components/FiltersPanel';
import { useState } from 'react';

export default function Dashboard() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const handleFilterChange = (filters) => {
    console.log("Applied filters:", filters);
    // Apply to university list
  };

  return (
    <>
      <button onClick={() => setFiltersOpen(true)}>
        🔧 Open Filters
      </button>
      
      <FiltersPanel
        onFilterChange={handleFilterChange}
        isOpen={filtersOpen}
        onClose={() => setFiltersOpen(false)}
      />
    </>
  );
}
```

#### Features
- Range sliders for ranking and tuition
- Dropdown selectors
- Checkbox options
- Real-time filter updates
- Reset functionality
- Fixed header when scrolling
- Mobile-responsive

#### Customization
```jsx
// Edit available options
const countries = ["Germany", "Netherlands", "UK", "Sweden"];
const programTypes = ["Engineering", "Business", "Medicine"];

// Adjust ranges
const defaults = {
  minRanking: 1,
  maxRanking: 500,
  minTuition: 0,
  maxTuition: 50000
};
```

---

### 4. ChartsDashboard Component

**File:** `frontend/src/components/ChartsDashboard.jsx`  
**Styles:** `frontend/src/styles/ChartsDashboard.css`

#### Overview
Interactive analytics dashboard with multiple visualization types.

#### Props
```typescript
interface Props {
  universities: UniversityData[];
  studentProfile: {
    gpa?: number;
    ielts?: number;
    budget?: number;
    field?: string;
  };
}
```

#### Usage
```jsx
import ChartsDashboard from './components/ChartsDashboard';

<ChartsDashboard
  universities={universityList}
  studentProfile={{
    gpa: 3.8,
    ielts: 7.5,
    budget: 40000,
    field: "Engineering"
  }}
/>
```

#### Charts Included

##### 1. Cost vs Ranking
- X-axis: University ranking
- Y-axis: Annual tuition cost
- Bubble color: Match percentage
- Interactive hover for details

##### 2. Acceptance Probability
- Bar chart of admission chances
- Color-coded bars
- Percentage display
- Sorted by probability

##### 3. ROI Analysis
- Return on investment visualization
- Time-to-breakeven indicator
- Expected salary comparison

#### Features
- Tab-based chart switching
- Key insights cards
- PDF export button
- Responsive design
- Interactive tooltips

#### Customization
```jsx
// Add custom chart
const generateCustomData = () => {
  return universities.map(uni => ({
    name: uni.name,
    value: calculateMetric(uni)
  }));
};

// Update insights
const insights = [
  "Most Affordable: ...",
  "Highest Ranked: ...",
  "Best ROI: ..."
];
```

---

### 5. LoadingSpinner Component

**File:** `frontend/src/components/LoadingSpinner.jsx`  
**Styles:** `frontend/src/styles/LoadingSpinner.css`

#### Overview
Reusable loading indicator with animated spinner.

#### Props
```typescript
interface Props {
  message?: string; // Default: "Loading..."
}
```

#### Usage
```jsx
import LoadingSpinner from './components/LoadingSpinner';
import { useState, useEffect } from 'react';

export default function UniversitySearch() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUniversities().then(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <LoadingSpinner message="Finding universities for you..." />;
  }

  return <div>Universities list</div>;
}
```

#### Features
- Smooth animated spinner
- Custom message support
- Centered layout
- Minimum height container

#### Variants
```jsx
// Default message
<LoadingSpinner />

// Custom message
<LoadingSpinner message="Calculating match scores..." />

// In different contexts
<LoadingSpinner message="Loading recommendations..." />
<LoadingSpinner message="Processing your profile..." />
```

---

### 6. Tooltip Component

**File:** `frontend/src/components/Tooltip.jsx`  
**Styles:** `frontend/src/styles/Tooltip.css`

#### Overview
Information tooltip with multiple position options.

#### Props
```typescript
interface Props {
  text: string; // Tooltip content
  children: React.ReactNode; // Element to attach tooltip to
  position?: 'top' | 'bottom' | 'left' | 'right'; // Default: 'top'
}
```

#### Usage
```jsx
import Tooltip from './components/Tooltip';

<Tooltip
  text="This university is ranked in top 100 globally"
  position="top"
>
  <span className="info-icon">ℹ️</span>
</Tooltip>

// Common usage
<div className="metric-row">
  <label>
    Admission Chance
    <Tooltip text="Probability based on your academic profile" position="right">
      <span>❓</span>
    </Tooltip>
  </label>
  <span>85%</span>
</div>
```

#### Features
- Four position options (top, bottom, left, right)
- Hover activation
- Smooth fade-in animation
- Arrow indicator
- Dark theme

#### Positioning
```jsx
// Top (default)
<Tooltip text="..." position="top">
  <button>Hover me</button>
</Tooltip>

// Bottom
<Tooltip text="..." position="bottom">
  <button>Hover me</button>
</Tooltip>

// Left
<Tooltip text="..." position="left">
  <button>Hover me</button>
</Tooltip>

// Right
<Tooltip text="..." position="right">
  <button>Hover me</button>
</Tooltip>
```

---

## Component Integration Example

```jsx
// Dashboard.jsx - Complete example
import React, { useState, useEffect } from 'react';
import LandingPage from '../components/LandingPage';
import RecommendationCard from '../components/RecommendationCard';
import FiltersPanel from '../components/FiltersPanel';
import ChartsDashboard from '../components/ChartsDashboard';
import LoadingSpinner from '../components/LoadingSpinner';
import Tooltip from '../components/Tooltip';

export default function Dashboard() {
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [studentProfile, setStudentProfile] = useState({});

  useEffect(() => {
    // Fetch universities
    fetchUniversities();
  }, []);

  const fetchUniversities = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/recommend');
      const data = await response.json();
      setUniversities(data);
      setFilteredUniversities(data);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (filters) => {
    const filtered = universities.filter(uni => {
      return (
        uni.ranking >= filters.minRanking &&
        uni.ranking <= filters.maxRanking &&
        uni.tuition_fee >= filters.minTuition &&
        uni.tuition_fee <= filters.maxTuition &&
        (!filters.country || uni.country === filters.country)
      );
    });
    setFilteredUniversities(filtered);
  };

  if (isLoading) {
    return <LoadingSpinner message="Analyzing universities..." />;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Your University Matches</h1>
        <Tooltip
          text="Universities ranked by match with your profile"
          position="right"
        >
          <span>ℹ️</span>
        </Tooltip>
        <button onClick={() => setFiltersOpen(true)}>
          🔧 Advanced Filters
        </button>
      </div>

      <FiltersPanel
        onFilterChange={handleFilterChange}
        isOpen={filtersOpen}
        onClose={() => setFiltersOpen(false)}
      />

      <ChartsDashboard
        universities={filteredUniversities}
        studentProfile={studentProfile}
      />

      <div className="recommendations-grid">
        {filteredUniversities.map((uni) => (
          <RecommendationCard
            key={uni.id}
            university={uni}
            matchPercentage={uni.match_percentage}
            score={{ admission_chance: uni.admission_chance }}
            onSaveClick={(id, saved) => console.log(id, saved)}
            onViewClick={(id) => console.log("View", id)}
          />
        ))}
      </div>
    </div>
  );
}
```

---

## Styling & Theming

All components use CSS variables for easy theming:

```css
/* In a theme CSS file */
:root {
  /* Colors */
  --color-primary: #667eea;
  --color-secondary: #764ba2;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  
  /* Fonts */
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto";
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
}
```

---

## Performance Tips

1. **Lazy Load Components:**
```jsx
const LandingPage = lazy(() => import('./components/LandingPage'));

<Suspense fallback={<LoadingSpinner />}>
  <LandingPage />
</Suspense>
```

2. **Memoize Components:**
```jsx
const MemoCard = React.memo(RecommendationCard);
```

3. **Optimize Renders:**
```jsx
const filteredUniversities = useMemo(
  () => universities.filter(uni => uni.ranking < 200),
  [universities]
);
```

---

## Accessibility

All components include:
- ✓ ARIA labels
- ✓ Keyboard navigation
- ✓ Screen reader support
- ✓ High contrast mode
- ✓ Focus indicators
