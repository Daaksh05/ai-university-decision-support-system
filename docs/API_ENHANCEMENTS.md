# API ENHANCEMENTS DOCUMENTATION

## Overview

This document describes the NEW optional API enhancements for the AI University Decision Support System.

**Important**: All existing endpoints (`/predict`, `/recommend`, `/query`, etc.) remain **unchanged and fully functional**.

---

## New Endpoints (v2)

### Base URL
```
/api/v2
```

### 1. Analytics Summary

**Endpoint**: `POST /api/v2/analytics/summary`

**Purpose**: Generate comprehensive analytics for a set of universities

**Request**:
```json
{
  "universities": [
    {
      "id": 1,
      "name": "MIT",
      "country": "USA",
      "city": "Cambridge",
      "ranking": 1,
      "tuition_fee": 60000,
      "acceptance_rate": 3.2,
      "programs_count": 200,
      "scholarship_available": true,
      "top_programs": ["Computer Science", "Engineering"]
    },
    ...
  ]
}
```

**Response**:
```json
{
  "status": "success",
  "data": {
    "generated_at": "2025-12-20T10:30:00",
    "total_universities": 10,
    "cost_analysis": {
      "average": 45000,
      "median": 42000,
      "min": 20000,
      "max": 65000,
      "std_dev": 12500
    },
    "ranking_analysis": {
      "average": 150.5,
      "median": 145,
      "best": 1,
      "worst": 500
    },
    "scholarship_stats": {
      "total_universities": 10,
      "with_scholarships": 7,
      "percentage": 70.0
    },
    "program_stats": {
      "total_programs": 1200,
      "average_per_university": 120
    },
    "country_distribution": {
      "USA": 3,
      "UK": 2,
      "Germany": 3,
      "Netherlands": 2
    }
  }
}
```

---

### 2. Recommendation Metrics

**Endpoint**: `POST /api/v2/analytics/recommendations`

**Purpose**: Analyze quality of recommendations

**Request**:
```json
{
  "universities": [...],
  "recommendations": [
    {
      "id": 1,
      "name": "MIT",
      "matchPercentage": 92
    },
    {
      "id": 2,
      "name": "Stanford",
      "matchPercentage": 88
    }
  ]
}
```

**Response**:
```json
{
  "status": "success",
  "metrics": {
    "total_recommendations": 10,
    "average_match_score": 82.5,
    "median_match_score": 85,
    "high_quality_matches": 8,
    "quality_distribution": {
      "excellent": 4,
      "very_good": 3,
      "good": 2,
      "acceptable": 1
    }
  }
}
```

---

### 3. Performance Metrics

**Endpoint**: `GET /api/v2/analytics/performance`

**Purpose**: Get system performance and health metrics

**Response**:
```json
{
  "status": "success",
  "metrics": {
    "api_status": "operational",
    "timestamp": "2025-12-20T10:30:00",
    "models": {
      "recommendation": {
        "status": "active"
      },
      "prediction": {
        "status": "active"
      }
    }
  }
}
```

---

### 4. University Comparison

**Endpoint**: `POST /api/v2/analytics/compare`

**Purpose**: Compare multiple universities across key metrics

**Request**:
```json
{
  "universities": [
    {"id": 1, "name": "MIT", "ranking": 1, "tuition_fee": 60000},
    {"id": 2, "name": "Stanford", "ranking": 2, "tuition_fee": 62000}
  ]
}
```

**Response**:
```json
{
  "status": "success",
  "universities_compared": 2,
  "metrics": {
    "cost_range": {
      "min": 60000,
      "max": 62000
    },
    "rankings": [1, 2]
  }
}
```

---

## Integration Guide

### Step 1: Enable Analytics Routes

In `backend/app.py`, add:

```python
from routes.advanced_analytics import router as analytics_router

# Add this line after existing routes
app.include_router(analytics_router, prefix="/api/v2")
```

### Step 2: Test the Endpoints

```bash
# Test analytics summary
curl -X POST http://localhost:8000/api/v2/analytics/summary \
  -H "Content-Type: application/json" \
  -d '{
    "universities": [
      {"name": "MIT", "country": "USA", "city": "Cambridge", "ranking": 1}
    ]
  }'

# Test performance metrics
curl -X GET http://localhost:8000/api/v2/analytics/performance
```

### Step 3: Use in Frontend

```javascript
// frontend/src/services/advancedApiService.js
const API_BASE = "http://localhost:8000/api/v2";

export const getAnalyticsSummary = async (universities) => {
  const response = await fetch(`${API_BASE}/analytics/summary`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ universities }),
  });
  return response.json();
};

export const getPerformanceMetrics = async () => {
  const response = await fetch(`${API_BASE}/analytics/performance`);
  return response.json();
};

// Usage in components
import { getAnalyticsSummary } from "../services/advancedApiService";

const handleAnalyze = async () => {
  const metrics = await getAnalyticsSummary(universities);
  console.log(metrics);
};
```

---

## Backward Compatibility

✅ **100% Backward Compatible**

- All existing routes work unchanged
- New endpoints are optional
- No database changes required
- No modifications to existing data models
- Can be enabled/disabled by including/excluding router

---

## Error Handling

All endpoints return standard error responses:

```json
{
  "detail": "Error message describing what went wrong"
}
```

HTTP Status Codes:
- `200` - Success
- `400` - Bad Request (validation error)
- `500` - Server Error

---

## Performance Considerations

- Analytics endpoints are optimized for small to medium datasets
- Large university lists (1000+) may take a few seconds
- Consider caching results for frequently analyzed datasets

---

## Future Enhancements

Planned additions:
- Advanced ML-based explainability (`/v2/explain/recommendation`)
- A/B testing metrics (`/v2/experiments/compare`)
- Real-time monitoring (`/v2/monitoring/live`)
- Custom report generation (`/v2/reports/generate`)

---

## Support

For issues or questions:
1. Check existing endpoint documentation
2. Review error messages
3. Test with sample data from documentation
4. Verify CORS configuration in FastAPI app

Last Updated: December 2025
