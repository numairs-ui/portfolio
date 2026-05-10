import React from 'react';
import './TargetAudience.css';

const TargetAudience = () => {
  return (
    <section className="audience" id="who">
      <div className="container">
        <div className="grid">
          <div className="audience-header fu">
            <div className="sec-label">05 — Who I Help</div>
            <div className="audience-hl">Who <strong>I help.</strong></div>
          </div>
          
          <div className="carousel-wrap aud-carousel-wrap">
            <div className="aud-cards fu" id="who-carousel">
              
              <div className="aud-card">
                <span className="aud-tag">Profile 01</span>
                <div className="aud-title">Early-Stage Startups</div>
                <p className="aud-body">Need to set your strategic bearings and build an efficient growth engine from day one? I help founders bypass the manual grind by implementing scalable AI workflows early — before bad habits calcify.</p>
              </div>

              <div className="aud-card">
                <span className="aud-tag">Profile 02</span>
                <div className="aud-title">Scaling Businesses</div>
                <p className="aud-body">Hitting operational friction as you grow? I audit your current processes and deploy agents to handle the repetitive tasks, freeing your team to focus on high-leverage strategy and execution.</p>
              </div>

            </div>
            <div className="c-dots" id="dots-who-carousel"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
