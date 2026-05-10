import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="grid">
          <div className="hero-content fu">
            <h1>Scale your business, <strong>not your headcount.</strong></h1>
            <p className="hero-sub">I combine expert-level growth marketing with custom AI Agent workflows to automate your Marketing, Customer Experience, and Business Operations.</p>
            <div className="hero-ctas">
              <a href="#contact" className="btn-primary">Book an Automation Audit <span>→</span></a>
              <a href="#services" className="btn-ghost">How It Works</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
