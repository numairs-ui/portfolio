import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <section className="cta-sec" id="contact">
        <div className="container">
          <div className="grid">
            <div className="cta-content fu">
              <div className="sec-label">06 — Contact</div>
              <h2 className="cta-hl">Ready to build your <strong>Agentic Layer?</strong></h2>
              <p className="cta-sub">Let's discuss your biggest operational bottlenecks and how custom AI workflows can solve them.</p>
              <a href="https://www.linkedin.com/in/numairshahzada/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Schedule a Strategy Call <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <footer>
        <div className="container footer-container">
          <span className="f-mark">© 2026 Numair Shahzada</span>
          <ul className="f-links">
            <li><a href="https://www.linkedin.com/in/numairshahzada/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
