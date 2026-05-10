import React from 'react';
import './ValueProposition.css';

const ValueProposition = () => {
  return (
    <section className="why" id="why">
      <div className="container">
        <div className="grid">
          <div className="why-header">
            <div className="sec-label fu">02 — Why Me</div>
            <div className="why-hl fu">The Startup Playbook, <strong>upgraded for the AI era.</strong></div>
          </div>
          <div className="why-content">
            <div className="why-text-grid">
              <p className="why-body fu">Most AI consultants don't understand business growth, and most growth marketers don't know how to build autonomous systems. I've spent years in the trenches with early-stage startups, helping them set their bearings and scale.</p>
              <p className="why-body fu delay-1">Now, I translate those proven growth strategies into custom, automated AI workflows. I don't just give you a chatbot — I build systems that actually do the work.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
