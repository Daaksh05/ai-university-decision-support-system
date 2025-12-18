import React, { useState } from "react";
import api from "../services/api";
import EligibilityResult from "./EligibilityResult";
import UniversityList from "./UniversityList";

function StudentProfileForm() {
  const [profile, setProfile] = useState({
    gpa: "",
    ielts: "",
    budget: "",
    country: "",
    field: "",
  });

  const [result, setResult] = useState("");
  const [universities, setUniversities] = useState([]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const submitProfile = async () => {
    const predict = await api.post("/predict", profile);
    setResult(predict.data.admission_chance);

    const recommend = await api.post("/recommend", profile);
    setUniversities(recommend.data.recommendations);
  };

  return (
    <div>
      <h3>Student Profile</h3>

      <input name="gpa" placeholder="GPA" onChange={handleChange} />
      <input name="ielts" placeholder="IELTS" onChange={handleChange} />
      <input name="budget" placeholder="Budget (€)" onChange={handleChange} />
      <input name="country" placeholder="Preferred Country" onChange={handleChange} />
      <input name="field" placeholder="Field of Study" onChange={handleChange} />

      <button onClick={submitProfile}>Submit</button>

      {result && <EligibilityResult result={result} />}
      {universities.length > 0 && <UniversityList universities={universities} />}
    </div>
  );
}

export default StudentProfileForm;
