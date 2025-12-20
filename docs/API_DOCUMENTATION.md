# API Documentation - Enhanced Endpoints

## New Endpoints

### Advanced Recommendations

#### `POST /recommend/advanced`
Get advanced university recommendations with hybrid ML + rule-based ranking.

**Request:**
```json
{
  "gpa": 3.8,
  "ielts": 7.5,
  "budget": 40000,
  "country": "Germany",
  "field": "Engineering",
  "min_ranking": 1,
  "max_ranking": 200,
  "scholarship_required": false,
  "min_acceptance_chance": 50.0,
  "sort_by": "match_score"
}
```

**Response:**
```json
[
  {
    "university_id": "mit_001",
    "name": "Massachusetts Institute of Technology",
    "country": "USA",
    "ranking": 1,
    "match_score": 0.92,
    "acceptance_chance": 82.0,
    "cost_fit_score": 0.75,
    "scholarship_available": true,
    "explanation": {
      "factors": ["Strong academic profile", "Cost alignment", "Program fit"]
    }
  }
]
```

**Parameters:**
- `gpa` (float, optional): Student GPA (0-4.0)
- `ielts` (float, optional): IELTS score (0-9.0)
- `budget` (float, optional): Budget in EUR
- `country` (string, optional): Preferred country
- `field` (string, required): Field of study
- `min_ranking` (int, optional): Minimum ranking
- `max_ranking` (int, optional): Maximum ranking
- `scholarship_required` (bool): Filter by scholarship availability
- `min_acceptance_chance` (float): Minimum acceptance probability (0-100)
- `sort_by` (string): Sort criterion (match_score, ranking, cost, acceptance)

**Status Codes:**
- 200: Success
- 400: Invalid parameters
- 422: Validation error

---

#### `GET /recommend/advanced/explain/{university_id}`
Explain why a university was recommended.

**Query Parameters:**
```
?student_profile={...}  # Student profile JSON
```

**Response:**
```json
{
  "recommendation_factors": [
    {
      "factor": "Academic Profile Match",
      "score": 0.85,
      "description": "Your GPA and test scores align well"
    }
  ],
  "risks": [],
  "opportunities": ["Scholarship opportunity available"]
}
```

---

### Analytics

#### `GET /analytics/summary`
Get overall system analytics.

**Query Parameters:**
```
?time_period=7d  # 1d, 7d, 30d, all
```

**Response:**
```json
{
  "total_students_analyzed": 150,
  "average_admission_chance": 72.5,
  "top_recommended_universities": [
    {
      "name": "University Name",
      "recommendation_count": 45,
      "average_match_score": 0.85
    }
  ],
  "cost_statistics": {
    "min": 10000,
    "max": 80000,
    "average": 35000,
    "median": 32000
  },
  "field_distribution": {
    "Engineering": 45,
    "Business": 30,
    "Science": 25
  },
  "country_distribution": {
    "Germany": 60,
    "Netherlands": 40,
    "UK": 50
  }
}
```

**Status Codes:**
- 200: Success
- 400: Invalid time period

---

#### `GET /analytics/recommendations/trends`
Get trends in recommendations over time.

**Query Parameters:**
```
?field=Engineering  # Optional filter
?country=Germany    # Optional filter
```

**Response:**
```json
{
  "daily_recommendations": [
    {
      "date": "2024-12-20",
      "count": 25,
      "average_match_score": 0.78
    }
  ],
  "popular_universities": [
    {
      "name": "Top University",
      "recommendation_count": 45
    }
  ],
  "acceptance_rate_trends": [],
  "cost_trends": []
}
```

---

#### `GET /analytics/predictions/accuracy`
Get prediction accuracy metrics.

**Query Parameters:**
```
?time_period=30d  # Time period for analysis
```

**Response:**
```json
{
  "overall_accuracy": 0.78,
  "precision_at_k": {
    "1": 0.92,
    "5": 0.85,
    "10": 0.79
  },
  "ndcg_score": 0.81,
  "calibration_score": 0.76,
  "confusion_matrix": {
    "true_positives": 120,
    "true_negatives": 200,
    "false_positives": 15,
    "false_negatives": 30
  }
}
```

---

#### `GET /analytics/user/insights/{student_id}`
Get personalized insights for a student.

**Response:**
```json
{
  "profile_strength": 0.82,
  "admission_opportunities": [
    {
      "university": "Top University",
      "probability": 0.95,
      "reason": "Excellent profile match"
    }
  ],
  "cost_analysis": {
    "average_cost": 35000,
    "budget": 40000,
    "affordable_options": 45
  },
  "recommendations_summary": {
    "total_matches": 125,
    "strong_matches": 45,
    "reachable_schools": 50,
    "reach_schools": 30
  },
  "next_steps": [
    "Prepare application materials",
    "Consider IELTS preparation",
    "Explore scholarship opportunities"
  ]
}
```

---

## Utility Endpoints (Internal)

### Logging
Logs are automatically generated at: `backend/logs/YYYY-MM-DD.log`

### Caching
Cache data is stored at: `backend/cache/`

### Validation
Use in request handlers:
```python
from utils.validation_service import StudentProfileValidator

result = StudentProfileValidator.validate(profile)
if result.is_valid:
    # Process
else:
    return {"errors": result.errors}
```

---

## Error Responses

All error responses follow this format:

```json
{
  "detail": "Error message",
  "validation_errors": [
    {
      "field": "gpa",
      "message": "GPA must be between 0 and 4.0"
    }
  ]
}
```

**Common Status Codes:**
- 400: Bad Request
- 422: Unprocessable Entity (validation error)
- 500: Internal Server Error

---

## Rate Limiting

Current system has no rate limiting. Consider adding for production:
```python
from slowapi import Limiter
from slowapi.util import get_remote_address

limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter

@app.get("/analytics/summary")
@limiter.limit("100/minute")
def get_summary():
    pass
```

---

## Authentication

Current system has no authentication. For production, consider:
```python
from fastapi.security import HTTPBearer

security = HTTPBearer()

@app.get("/analytics/summary")
def get_summary(credentials: HTTPAuthCredentials = Depends(security)):
    # Verify token
    pass
```

---

## Caching Strategy

The system automatically caches:
- Recommendation results (1 hour TTL)
- Analytics summaries (1 hour TTL)
- Student predictions (permanent, invalidate on profile change)

Clear cache:
```python
from utils.caching_service import memory_cache, FileCache

memory_cache.clear()  # Clear memory cache
FileCache.clear()     # Clear file cache
```

---

## Performance Metrics

Track endpoint performance:
```python
import time

start = time.time()
result = get_recommendations()
duration = time.time() - start
log_info(f"Recommendations retrieved in {duration:.3f}s")
```

---

## Example Integration

```python
# app.py
from fastapi import FastAPI
from routes.advanced_recommendations import router as rec_router
from routes.analytics import router as analytics_router

app = FastAPI()

# Include routers
app.include_router(rec_router, prefix="/api")
app.include_router(analytics_router, prefix="/api")

# Available endpoints:
# POST /api/recommend/advanced
# GET /api/recommend/advanced/explain/{id}
# GET /api/analytics/summary
# GET /api/analytics/recommendations/trends
# GET /api/analytics/predictions/accuracy
# GET /api/analytics/user/insights/{id}
```

---

## Testing Endpoints

```bash
# Advanced Recommendations
curl -X POST "http://localhost:8000/recommend/advanced" \
  -H "Content-Type: application/json" \
  -d '{
    "gpa": 3.8,
    "ielts": 7.5,
    "budget": 40000,
    "field": "Engineering",
    "sort_by": "match_score"
  }'

# Analytics Summary
curl "http://localhost:8000/analytics/summary?time_period=7d"

# User Insights
curl "http://localhost:8000/analytics/user/insights/student_123"
```

---

## Deprecation Policy

Existing endpoints (`/predict`, `/recommend`, `/query`, etc.) are permanent and will not be deprecated. New endpoints are additions only.

---

## Versioning

Current API version: v1 (compatible)  
Next major version may include:
- API v2 with improved structure
- GraphQL support
- WebSocket for real-time updates
