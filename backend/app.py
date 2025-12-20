from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
from modules.admission_prediction import predict_admission
from modules.recommendation_engine import recommend_universities
from modules.nlp_query_handler import answer_query

app = FastAPI()

# ✅ CORS (THIS IS REQUIRED)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------- Data Model ----------
class StudentProfile(BaseModel):
    gpa: float = None
    ielts: float = None
    budget: float = None
    country: str = None
    field: str = None

class QueryRequest(BaseModel):
    query: str

# ---------- Routes ----------
@app.get("/")
def root():
    return {"message": "AI University Decision Support System is running"}

@app.post("/predict")
def predict(profile: StudentProfile):
    try:
        admission_chance = predict_admission(profile)
        return {
            "status": "success",
            "admission_chance": admission_chance
        }
    except Exception as e:
        return {"status": "error", "message": str(e)}

@app.post("/recommend")
def recommend(profile: StudentProfile):
    try:
        recommendations = recommend_universities(profile)
        return {
            "status": "success",
            "recommendations": recommendations
        }
    except Exception as e:
        return {"status": "error", "message": str(e)}

@app.post("/query")
def query_handler(request: QueryRequest):
    try:
        answer = answer_query(request.query)
        return {
            "status": "success",
            "answer": answer
        }
    except Exception as e:
        return {"status": "error", "message": str(e)}
