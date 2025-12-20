import pandas as pd
import os

def calculate_roi(tuition_fee, expected_salary):
    """Calculate ROI (Return on Investment) for tuition fee vs expected salary"""
    if tuition_fee == 0:
        return 0
    return round(expected_salary / tuition_fee, 2)

def analyze_total_cost(tuition_fee, country, duration_years=2):
    """Calculate total cost including living expenses by country"""
    living_costs = {
        "France": 900,
        "Germany": 800,
        "Netherlands": 1200,
        "Belgium": 1000,
        "Finland": 1100,
        "Italy": 700,
        "Spain": 800,
        "Austria": 950,
        "UK": 1400,
        "USA": 1500,
        "Canada": 1300,
        "Australia": 1400,
        "China": 600,
        "India": 400,
        "Japan": 1100
    }
    
    if country not in living_costs:
        # Default to 1000 if country not found
        print(f"Warning: Country '{country}' not in living costs database. Using default of 1000 EUR/month")
        monthly_cost = 1000
    else:
        monthly_cost = living_costs[country]
    
    yearly_living = monthly_cost * 12
    total_cost = (tuition_fee + yearly_living) * duration_years
    
    return {
        "tuition_fee": tuition_fee,
        "country": country,
        "duration_years": duration_years,
        "monthly_living_cost": monthly_cost,
        "yearly_living_cost": yearly_living,
        "total_cost": round(total_cost, 2),
        "total_cost_per_month": round(total_cost / (duration_years * 12), 2)
    }

def find_affordable_universities(profile, max_budget):
    """Find universities within budget"""
    if not max_budget:
        return {"error": "Budget is required"}
    
    csv_path = "backend/data/universities.csv"
    if not os.path.exists(csv_path):
        csv_path = "data/universities.csv"
    
    if not os.path.exists(csv_path):
        return {"error": f"Universities data file not found at {csv_path}"}
    
    try:
        df = pd.read_csv(csv_path)
        
        # Validate required columns
        required_cols = ["university", "country", "average_fees_eur"]
        missing_cols = [col for col in required_cols if col not in df.columns]
        if missing_cols:
            return {"error": f"Missing columns in CSV: {missing_cols}"}
        
        affordable = df[df["average_fees_eur"] <= max_budget]
        
        return {
            "total_universities": len(df),
            "affordable_universities": len(affordable),
            "percentage_affordable": round((len(affordable) / len(df)) * 100, 2) if len(df) > 0 else 0,
            "cheapest_university": affordable.loc[affordable["average_fees_eur"].idxmin()].to_dict() if len(affordable) > 0 else None,
            "average_fee_in_budget": round(affordable["average_fees_eur"].mean(), 2) if len(affordable) > 0 else 0
        }
    except Exception as e:
        return {"error": f"Error reading universities data: {str(e)}"}

def match_scholarships(profile, country):
    """Match scholarships based on student profile and country"""
    csv_path = "backend/data/scholarships.csv"
    if not os.path.exists(csv_path):
        csv_path = "data/scholarships.csv"
    
    if not os.path.exists(csv_path):
        return []
    
    try:
        df = pd.read_csv(csv_path)
        
        # Validate required columns
        required_cols = ["scholarship_name", "country", "coverage", "amount_eur", "eligibility"]
        missing_cols = [col for col in required_cols if col not in df.columns]
        if missing_cols:
            return []
        
        # Filter scholarships by country
        scholarships = df[df["country"] == country]
        
        results = []
        for _, row in scholarships.iterrows():
            results.append({
                "name": row["scholarship_name"],
                "country": row["country"],
                "coverage": row["coverage"],
                "amount_eur": row["amount_eur"],
                "eligibility": row["eligibility"]
            })
        
        return results
    except Exception as e:
        print(f"Error reading scholarships data: {str(e)}")
        return []

