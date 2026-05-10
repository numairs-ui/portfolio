import React from 'react';
import './Agents.css';

const Agents = () => {
  return (
    <section className="agents" id="work">
      <div className="container">
        <div className="grid agents-header fu">
          <div className="agents-title-wrapper">
            <div className="sec-label">04 — Agents</div>
            <div className="agents-hl">Three agents. <strong>Endless leverage.</strong></div>
          </div>
        </div>
        
        <div className="carousel-wrap">
          <div className="bento fu" id="agents-carousel">
            
            {/* AGENT 1: Lead Scraper */}
            <div className="card c-agent-1">
              <div className="card-vis bg-agent-1">
                <svg width="200" height="140" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="40" r="10" stroke="#0A0A0A" strokeWidth="1.5" fill="none" opacity="0.5"/>
                  <circle cx="24" cy="70" r="10" stroke="#0A0A0A" strokeWidth="1.5" fill="none" opacity="0.65"/>
                  <circle cx="24" cy="100" r="10" stroke="#0A0A0A" strokeWidth="1.5" fill="none" opacity="0.5"/>
                  <text x="24" y="44" textAnchor="middle" fontFamily="DepartureMono" fontSize="7" fill="#0A0A0A" opacity="0.6">DB</text>
                  <text x="24" y="74" textAnchor="middle" fontFamily="DepartureMono" fontSize="7" fill="#0A0A0A" opacity="0.75">WEB</text>
                  <text x="24" y="104" textAnchor="middle" fontFamily="DepartureMono" fontSize="7" fill="#0A0A0A" opacity="0.6">CSV</text>
                  <line x1="34" y1="40" x2="82" y2="66" stroke="#0A0A0A" strokeWidth="1" opacity="0.2" strokeDasharray="3 2"/>
                  <line x1="34" y1="70" x2="82" y2="70" stroke="#0A0A0A" strokeWidth="1" opacity="0.3" strokeDasharray="3 2"/>
                  <line x1="34" y1="100" x2="82" y2="74" stroke="#0A0A0A" strokeWidth="1" opacity="0.2" strokeDasharray="3 2"/>
                  <rect x="82" y="56" width="40" height="28" rx="4" fill="#0A0A0A" opacity="0.85"/>
                  <text x="102" y="74" textAnchor="middle" fontFamily="DepartureMono" fontSize="10" fontWeight="500" fill="#FFF6E1">AI</text>
                  <line x1="122" y1="70" x2="148" y2="70" stroke="#0A0A0A" strokeWidth="1.5" opacity="0.45"/>
                  <polygon points="145,66 152,70 145,74" fill="#0A0A0A" opacity="0.45"/>
                  <rect x="152" y="58" width="36" height="24" rx="2" stroke="#0A0A0A" strokeWidth="1.5" fill="none" opacity="0.6"/>
                  <polyline points="152,60 170,74 188,60" stroke="#0A0A0A" strokeWidth="1.5" fill="none" opacity="0.6"/>
                  <circle cx="100" cy="108" r="3" fill="#0A0A0A">
                    <animate attributeName="opacity" values="0.7;0.1;0.7" dur="1.4s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="114" cy="108" r="3" fill="#0A0A0A">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.4s" begin="0.25s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="128" cy="108" r="3" fill="#0A0A0A">
                    <animate attributeName="opacity" values="0.1;0.6;0.1" dur="1.4s" begin="0.5s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>
              <div className="card-foot">
                <div className="card-idx">Agent 01</div>
                <div className="card-title">Lead Scraper &amp; Email Sender</div>
                <div className="card-cap">Building an optimised lead engine — scrape, qualify, personalise, send. Turn cold data into warm pipeline automatically.</div>
              </div>
            </div>

            {/* AGENT 2: Gymbot */}
            <div className="card c-agent-2">
              <div className="card-vis bg-agent-2">
                <svg width="160" height="100" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="34" width="16" height="32" rx="2" stroke="#0A0A0A" strokeWidth="1.5" fill="none" opacity="0.55"/>
                  <rect x="136" y="34" width="16" height="32" rx="2" stroke="#0A0A0A" strokeWidth="1.5" fill="none" opacity="0.55"/>
                  <rect x="24" y="26" width="112" height="48" rx="3" stroke="#0A0A0A" strokeWidth="1.5" fill="none" opacity="0.55"/>
                  <line x1="0" y1="50" x2="10" y2="50" stroke="#0A0A0A" strokeWidth="2" opacity="0.45"/>
                  <line x1="150" y1="50" x2="160" y2="50" stroke="#0A0A0A" strokeWidth="2" opacity="0.45"/>
                  <line x1="52" y1="28" x2="52" y2="74" stroke="#0A0A0A" strokeWidth="1" opacity="0.18"/>
                  <line x1="80" y1="28" x2="80" y2="74" stroke="#0A0A0A" strokeWidth="1" opacity="0.18"/>
                  <line x1="108" y1="28" x2="108" y2="74" stroke="#0A0A0A" strokeWidth="1" opacity="0.18"/>
                </svg>
                <div className="gymbot-progress">
                  <div className="progress-row">
                    <div className="progress-label">STR</div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{width: '72%', opacity: 0.7}}></div>
                    </div>
                  </div>
                  <div className="progress-row">
                    <div className="progress-label">VOL</div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{width: '54%', opacity: 0.55}}></div>
                    </div>
                  </div>
                  <div className="progress-row">
                    <div className="progress-label">PRG</div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{width: '88%', opacity: 0.85}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-foot">
                <div className="card-idx">Agent 02</div>
                <div className="card-title">Gymbot</div>
                <div className="card-cap">Your AI gym coach — personalised workouts, progress tracking, and accountability. Automated, always on, always improving.</div>
              </div>
            </div>

            {/* AGENT 3: Cofounder */}
            <div className="card c-agent-3">
              <div className="card-vis bg-agent-3">
                <svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="80" cy="24" r="18" stroke="#0A0A0A" strokeWidth="1.5" fill="none" opacity="0.55">
                    <animate attributeName="opacity" values="0.55;0.9;0.55" dur="2.4s" repeatCount="indefinite"/>
                  </circle>
                  <text x="80" y="28" textAnchor="middle" fontFamily="DepartureMono" fontSize="8" fill="#0A0A0A" opacity="0.65">IDEA</text>
                  <line x1="62" y1="40" x2="42" y2="68" stroke="#0A0A0A" strokeWidth="1" opacity="0.2" strokeDasharray="3 2"/>
                  <line x1="98" y1="40" x2="118" y2="68" stroke="#0A0A0A" strokeWidth="1" opacity="0.2" strokeDasharray="3 2"/>
                  <circle cx="36" cy="80" r="16" stroke="#0A0A0A" strokeWidth="1.5" fill="none" opacity="0.45">
                    <animate attributeName="opacity" values="0.45;0.8;0.45" dur="2.4s" begin="0.6s" repeatCount="indefinite"/>
                  </circle>
                  <text x="36" y="84" textAnchor="middle" fontFamily="DepartureMono" fontSize="7" fill="#0A0A0A" opacity="0.6">PLAN</text>
                  <circle cx="124" cy="80" r="16" stroke="#0A0A0A" strokeWidth="1.5" fill="none" opacity="0.45">
                    <animate attributeName="opacity" values="0.45;0.8;0.45" dur="2.4s" begin="1.1s" repeatCount="indefinite"/>
                  </circle>
                  <text x="124" y="84" textAnchor="middle" fontFamily="DepartureMono" fontSize="7" fill="#0A0A0A" opacity="0.6">BUILD</text>
                  <line x1="44" y1="95" x2="64" y2="112" stroke="#0A0A0A" strokeWidth="1" opacity="0.2" strokeDasharray="3 2"/>
                  <line x1="116" y1="95" x2="96" y2="112" stroke="#0A0A0A" strokeWidth="1" opacity="0.2" strokeDasharray="3 2"/>
                  <rect x="52" y="112" width="56" height="22" rx="4" fill="#0A0A0A" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2.4s" begin="1.6s" repeatCount="indefinite"/>
                  </rect>
                  <text x="80" y="127" textAnchor="middle" fontFamily="DepartureMono" fontSize="8" fontWeight="500" fill="#FFF6E1">LAUNCH</text>
                </svg>
              </div>
              <div className="card-foot">
                <div className="card-idx">Agent 03</div>
                <div className="card-title">Cofounder</div>
                <div className="card-cap">Acts as a co-founder to help you start up the right way — strategy, validation, direction, and momentum from day one.</div>
              </div>
            </div>

          </div>
          <div className="c-dots" id="dots-agents-carousel"></div>
        </div>
      </div>
    </section>
  );
};

export default Agents;
