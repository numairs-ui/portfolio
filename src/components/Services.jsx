import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="grid services-header fu">
          <div className="services-title-wrapper">
            <div className="sec-label">03 — Services</div>
            <div className="services-hl">Three pillars. <strong>One agentic layer.</strong></div>
          </div>
        </div>

        <div className="carousel-wrap">
          <div className="bento fu" id="services-carousel">
            
            {/* MARKETING */}
            <div className="card c-mktg">
              <div className="card-vis">
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="75" cy="75" r="18" stroke="#0A0A0A" strokeWidth="1.5" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="75" cy="75" r="36" stroke="#0A0A0A" strokeWidth="1" opacity="0.35">
                    <animate attributeName="r" values="36;38;36" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.35;0.55;0.35" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="75" cy="75" r="54" stroke="#0A0A0A" strokeWidth="0.75" opacity="0.18">
                    <animate attributeName="r" values="54;57;54" dur="2s" begin="0.3s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.18;0.3;0.18" dur="2s" begin="0.3s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="75" cy="75" r="8" fill="#0A0A0A" opacity="0.8"/>
                  <circle cx="75" cy="39" r="4" fill="#0A0A0A" opacity="0.5"/>
                  <circle cx="111" cy="75" r="4" fill="#0A0A0A" opacity="0.4"/>
                  <circle cx="75" cy="111" r="4" fill="#0A0A0A" opacity="0.3"/>
                  <circle cx="39" cy="75" r="4" fill="#0A0A0A" opacity="0.4"/>
                  <text x="75" y="26" textAnchor="middle" fontFamily="DepartureMono" fontSize="7" fill="#0A0A0A" opacity="0.45" letterSpacing="1">LEADS</text>
                  <text x="124" y="78" textAnchor="start" fontFamily="DepartureMono" fontSize="7" fill="#0A0A0A" opacity="0.45" letterSpacing="1">CONTENT</text>
                  <text x="75" y="126" textAnchor="middle" fontFamily="DepartureMono" fontSize="7" fill="#0A0A0A" opacity="0.45" letterSpacing="1">ANALYTICS</text>
                  <text x="0" y="78" textAnchor="start" fontFamily="DepartureMono" fontSize="7" fill="#0A0A0A" opacity="0.45" letterSpacing="1">OUTREACH</text>
                </svg>
              </div>
              <div className="card-foot">
                <div className="card-idx">Pillar 01</div>
                <div className="card-title">Autonomous Marketing Engines</div>
                <div className="card-cap">Stop relying on manual campaign execution. I build AI workflows that handle lead generation, personalised outreach at scale, content repurposing, and campaign analytics — turning your marketing strategy into an always-on engine.</div>
              </div>
            </div>

            {/* CX */}
            <div className="card c-cx">
              <div className="card-vis">
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="18" y="30" width="90" height="34" rx="6" stroke="#0A0A0A" strokeWidth="1.5" fill="none" opacity="0.6"/>
                  <line x1="32" y1="47" x2="94" y2="47" stroke="#0A0A0A" strokeWidth="1" opacity="0.2"/>
                  <line x1="32" y1="54" x2="72" y2="54" stroke="#0A0A0A" strokeWidth="1" opacity="0.2"/>
                  <polygon points="26,64 18,76 34,64" fill="#0A0A0A" opacity="0.3"/>
                  <rect x="42" y="80" width="90" height="34" rx="6" stroke="#0A0A0A" strokeWidth="1.5" fill="#0A0A0A" opacity="0.08"/>
                  <rect x="42" y="80" width="90" height="34" rx="6" stroke="#0A0A0A" strokeWidth="1.5" fill="none" opacity="0.55"/>
                  <line x1="56" y1="97" x2="118" y2="97" stroke="#0A0A0A" strokeWidth="1" opacity="0.2"/>
                  <line x1="56" y1="104" x2="96" y2="104" stroke="#0A0A0A" strokeWidth="1" opacity="0.2"/>
                  <polygon points="124,80 132,68 116,80" fill="#0A0A0A" opacity="0.3"/>
                  <rect x="100" y="24" width="34" height="18" rx="3" fill="#0A0A0A" opacity="0.75"/>
                  <text x="117" y="36" textAnchor="middle" fontFamily="DepartureMono" fontSize="8" fontWeight="500" fill="#FFF6E1" letterSpacing="0.5">24/7</text>
                  <circle cx="38" cy="42" r="3" fill="#0A0A0A" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;0.15;0.6" dur="1.4s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="50" cy="42" r="3" fill="#0A0A0A" opacity="0.4">
                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.4s" begin="0.25s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="62" cy="42" r="3" fill="#0A0A0A" opacity="0.2">
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.4s" begin="0.5s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>
              <div className="card-foot">
                <div className="card-idx">Pillar 02</div>
                <div className="card-title">Intelligent Customer Experience</div>
                <div className="card-cap">Deliver 24/7, high-quality support without expanding your team. I deploy specialised agents that handle onboarding, resolve complex queries, and route critical issues — ensuring customers feel heard instantly.</div>
              </div>
            </div>

            {/* OPS */}
            <div className="card c-ops">
              <div className="card-vis">
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="34" width="36" height="22" rx="3" stroke="#0A0A0A" strokeWidth="1.5" fill="none" opacity="0.55"/>
                  <text x="28" y="49" textAnchor="middle" fontFamily="DepartureMono" fontSize="7" fill="#0A0A0A" opacity="0.55" letterSpacing="0.5">INPUT</text>
                  <line x1="46" y1="45" x2="60" y2="45" stroke="#0A0A0A" strokeWidth="1" opacity="0.35"/>
                  <polygon points="58,41 64,45 58,49" fill="#0A0A0A" opacity="0.35"/>

                  <rect x="64" y="34" width="36" height="22" rx="3" fill="#0A0A0A" opacity="0.75"/>
                  <text x="82" y="49" textAnchor="middle" fontFamily="DepartureMono" fontSize="7" fontWeight="500" fill="#FFF6E1" letterSpacing="0.5">AGENT</text>

                  <line x1="100" y1="45" x2="114" y2="45" stroke="#0A0A0A" strokeWidth="1" opacity="0.35"/>
                  <polygon points="112,41 118,45 112,49" fill="#0A0A0A" opacity="0.35"/>
                  <rect x="118" y="34" width="24" height="22" rx="3" stroke="#0A0A0A" strokeWidth="1.5" fill="none" opacity="0.55"/>
                  <text x="130" y="49" textAnchor="middle" fontFamily="DepartureMono" fontSize="7" fill="#0A0A0A" opacity="0.55">OUT</text>

                  <line x1="82" y1="56" x2="82" y2="68" stroke="#0A0A0A" strokeWidth="1" opacity="0.2" strokeDasharray="2 2"/>

                  <rect x="14" y="68" width="50" height="20" rx="3" stroke="#0A0A0A" strokeWidth="1" fill="none" opacity="0.4"/>
                  <text x="39" y="82" textAnchor="middle" fontFamily="DepartureMono" fontSize="6.5" fill="#0A0A0A" opacity="0.45" letterSpacing="0.5">DATA ENTRY</text>

                  <rect x="86" y="68" width="50" height="20" rx="3" stroke="#0A0A0A" strokeWidth="1" fill="none" opacity="0.4"/>
                  <text x="111" y="82" textAnchor="middle" fontFamily="DepartureMono" fontSize="6.5" fill="#0A0A0A" opacity="0.45" letterSpacing="0.5">REPORTING</text>

                  <line x1="39" y1="68" x2="75" y2="68" stroke="#0A0A0A" strokeWidth="0.75" opacity="0.15"/>
                  <line x1="89" y1="68" x2="75" y2="68" stroke="#0A0A0A" strokeWidth="0.75" opacity="0.15"/>

                  <line x1="39" y1="88" x2="39" y2="100" stroke="#0A0A0A" strokeWidth="0.75" opacity="0.15" strokeDasharray="2 2"/>
                  <line x1="111" y1="88" x2="111" y2="100" stroke="#0A0A0A" strokeWidth="0.75" opacity="0.15" strokeDasharray="2 2"/>
                  
                  <rect x="14" y="100" width="50" height="20" rx="3" stroke="#0A0A0A" strokeWidth="1" fill="none" opacity="0.3"/>
                  <text x="39" y="114" textAnchor="middle" fontFamily="DepartureMono" fontSize="6.5" fill="#0A0A0A" opacity="0.35" letterSpacing="0.5">APPROVALS</text>
                  
                  <rect x="86" y="100" width="50" height="20" rx="3" stroke="#0A0A0A" strokeWidth="1" fill="none" opacity="0.3"/>
                  <text x="111" y="114" textAnchor="middle" fontFamily="DepartureMono" fontSize="6.5" fill="#0A0A0A" opacity="0.35" letterSpacing="0.5">INVENTORY</text>

                  <circle r="3.5" fill="#0A0A0A" opacity="0.7">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M28,45 L64,45"/>
                    <animate attributeName="opacity" values="0;0.7;0.7;0" dur="3s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>
              <div className="card-foot">
                <div className="card-idx">Pillar 03</div>
                <div className="card-title">Business & Operations Workflows</div>
                <div className="card-cap">Eliminate internal bottlenecks. From automating data entry and reporting to orchestrating complex internal approvals, I build the Agentic Layer your business needs to move faster.</div>
              </div>
            </div>

          </div>
          <div className="c-dots" id="dots-services-carousel"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
