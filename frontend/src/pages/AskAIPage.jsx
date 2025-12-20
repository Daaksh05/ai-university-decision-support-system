import React from "react";
import QueryBox from "../components/QueryBox";
import "./AskAIPage.css";

function AskAIPage() {
  return (
    <div className="ask-ai-page">
      <div className="ask-ai-header">
        <h1>Ask Our AI Assistant</h1>
        <p>Have questions about universities, applications, or scholarships? Get instant answers from our intelligent assistant.</p>
      </div>

      <div className="ask-ai-container">
        <div className="query-wrapper">
          <QueryBox />
        </div>

        <aside className="ask-ai-faq">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-items">
            <div className="faq-item">
              <h4>What documents do I need for university applications?</h4>
            </div>
            <div className="faq-item">
              <h4>How long does the visa application process take?</h4>
            </div>
            <div className="faq-item">
              <h4>What IELTS score do I need for top universities?</h4>
            </div>
            <div className="faq-item">
              <h4>Which countries offer scholarships for international students?</h4>
            </div>
            <div className="faq-item">
              <h4>How can I maximize my chances of admission?</h4>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default AskAIPage;
