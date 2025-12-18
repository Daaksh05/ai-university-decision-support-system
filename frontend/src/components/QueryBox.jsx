import React, { useState } from "react";
import api from "../services/api";

function QueryBox() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");

  const askQuery = async () => {
    if (!query) return;
    const res = await api.post("/query", { query });
    setAnswer(res.data.answer);
  };

  return (
    <div>
      <h3>Ask a Question</h3>
      <input
        placeholder="e.g. Scholarships for studying in France"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={askQuery}>Ask</button>

      {answer && <div className="result-box">{answer}</div>}
    </div>
  );
}

export default QueryBox;
