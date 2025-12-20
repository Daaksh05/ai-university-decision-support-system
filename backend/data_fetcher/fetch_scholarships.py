"""
Scholarship Data Fetcher Module
Provides utilities to fetch, validate, and manage scholarship data
"""

import pandas as pd
import os
from typing import List, Dict

def fetch_scholarships_by_country(country: str) -> List[Dict]:
    """
    Fetch scholarships available in a specific country
    
    Args:
        country (str): Country name to filter scholarships
        
    Returns:
        List[Dict]: List of scholarships available in that country
    """
    csv_path = "backend/data/scholarships.csv"
    if not os.path.exists(csv_path):
        csv_path = "data/scholarships.csv"
    
    if not os.path.exists(csv_path):
        return []
    
    try:
        df = pd.read_csv(csv_path)
        scholarships = df[df["country"] == country]
        return scholarships.to_dict(orient="records")
    except Exception as e:
        print(f"Error fetching scholarships for {country}: {str(e)}")
        return []


def fetch_all_scholarships() -> List[Dict]:
    """
    Fetch all available scholarships
    
    Returns:
        List[Dict]: List of all scholarships
    """
    csv_path = "backend/data/scholarships.csv"
    if not os.path.exists(csv_path):
        csv_path = "data/scholarships.csv"
    
    if not os.path.exists(csv_path):
        return []
    
    try:
        df = pd.read_csv(csv_path)
        return df.to_dict(orient="records")
    except Exception as e:
        print(f"Error fetching all scholarships: {str(e)}")
        return []


def fetch_scholarships_by_coverage(coverage_type: str) -> List[Dict]:
    """
    Fetch scholarships by coverage type (Full, Partial, etc.)
    
    Args:
        coverage_type (str): Type of coverage (e.g., "Full", "Partial")
        
    Returns:
        List[Dict]: List of scholarships matching the coverage type
    """
    csv_path = "backend/data/scholarships.csv"
    if not os.path.exists(csv_path):
        csv_path = "data/scholarships.csv"
    
    if not os.path.exists(csv_path):
        return []
    
    try:
        df = pd.read_csv(csv_path)
        scholarships = df[df["coverage"] == coverage_type]
        return scholarships.to_dict(orient="records")
    except Exception as e:
        print(f"Error fetching scholarships with coverage {coverage_type}: {str(e)}")
        return []


def fetch_scholarships_by_eligibility(eligibility: str) -> List[Dict]:
    """
    Fetch scholarships by eligibility criteria
    
    Args:
        eligibility (str): Eligibility criteria (e.g., "Merit-based", "Indian Students")
        
    Returns:
        List[Dict]: List of scholarships matching the eligibility
    """
    csv_path = "backend/data/scholarships.csv"
    if not os.path.exists(csv_path):
        csv_path = "data/scholarships.csv"
    
    if not os.path.exists(csv_path):
        return []
    
    try:
        df = pd.read_csv(csv_path)
        scholarships = df[df["eligibility"].str.contains(eligibility, case=False, na=False)]
        return scholarships.to_dict(orient="records")
    except Exception as e:
        print(f"Error fetching scholarships with eligibility {eligibility}: {str(e)}")
        return []


def get_scholarship_statistics() -> Dict:
    """
    Get statistics about available scholarships
    
    Returns:
        Dict: Statistics including count by country, coverage type, etc.
    """
    csv_path = "backend/data/scholarships.csv"
    if not os.path.exists(csv_path):
        csv_path = "data/scholarships.csv"
    
    if not os.path.exists(csv_path):
        return {"error": "Scholarships data file not found"}
    
    try:
        df = pd.read_csv(csv_path)
        
        return {
            "total_scholarships": len(df),
            "countries": df["country"].nunique(),
            "by_country": df["country"].value_counts().to_dict(),
            "by_coverage": df["coverage"].value_counts().to_dict(),
            "total_funding_available": df["amount_eur"].sum(),
            "average_scholarship_amount": round(df["amount_eur"].mean(), 2)
        }
    except Exception as e:
        print(f"Error generating scholarship statistics: {str(e)}")
        return {"error": str(e)}


def filter_scholarships(country=None, coverage=None, min_amount=None, max_amount=None) -> List[Dict]:
    """
    Advanced filtering for scholarships with multiple criteria
    
    Args:
        country (str, optional): Filter by country
        coverage (str, optional): Filter by coverage type
        min_amount (float, optional): Minimum scholarship amount
        max_amount (float, optional): Maximum scholarship amount
        
    Returns:
        List[Dict]: Filtered list of scholarships
    """
    csv_path = "backend/data/scholarships.csv"
    if not os.path.exists(csv_path):
        csv_path = "data/scholarships.csv"
    
    if not os.path.exists(csv_path):
        return []
    
    try:
        df = pd.read_csv(csv_path)
        
        # Apply filters
        if country:
            df = df[df["country"] == country]
        
        if coverage:
            df = df[df["coverage"] == coverage]
        
        if min_amount is not None:
            df = df[df["amount_eur"] >= min_amount]
        
        if max_amount is not None:
            df = df[df["amount_eur"] <= max_amount]
        
        return df.to_dict(orient="records")
    except Exception as e:
        print(f"Error filtering scholarships: {str(e)}")
        return []


if __name__ == "__main__":
    # Test the functions
    print("Testing Scholarship Fetcher...")
    print("\nAll scholarships:")
    print(fetch_all_scholarships())
    print("\nFrance scholarships:")
    print(fetch_scholarships_by_country("France"))
    print("\nStatistics:")
    print(get_scholarship_statistics())
