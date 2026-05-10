import React, { useEffect } from 'react';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Services from './components/Services';
import Agents from './components/Agents';
import TargetAudience from './components/TargetAudience';
import Footer from './components/Footer';

function App() {
  // Setup intersection observer for fade-up animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    const fadeElements = document.querySelectorAll('.fu');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  // Setup mobile carousels
  useEffect(() => {
    function initCarousel(trackId) {
      const track = document.getElementById(trackId);
      const dotsEl = document.getElementById('dots-' + trackId);
      if (!track || !dotsEl) return;

      // Only run on mobile
      if (window.innerWidth > 768) return;

      // Collect direct child cards
      const cards = Array.from(track.children).filter(c => c.tagName === 'DIV' || c.classList.contains('card') || c.classList.contains('aud-card'));
      if (cards.length < 2) return;

      // Build dots
      dotsEl.innerHTML = cards.map((_, i) =>
        `<button class="c-dot${i===0?' active':''}" aria-label="Go to item ${i+1}"></button>`
      ).join('');
      const dots = Array.from(dotsEl.querySelectorAll('.c-dot'));

      // Update active dot on scroll
      let raf;
      const handleScroll = () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const idx = Math.round(track.scrollLeft / (cards[0].offsetWidth + 12));
          dots.forEach((d, i) => d.classList.toggle('active', i === idx));
        });
      };
      
      track.addEventListener('scroll', handleScroll, { passive: true });

      // Tap dot → scroll
      dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
          track.scrollTo({ left: i * (cards[0].offsetWidth + 12), behavior: 'smooth' });
        });
      });

      return () => {
        track.removeEventListener('scroll', handleScroll);
      };
    }

    const carouselIds = ['services-carousel', 'agents-carousel', 'who-carousel'];
    const cleanupFns = [];

    const setupCarousels = () => {
      document.querySelectorAll('.c-dots').forEach(d => d.innerHTML = '');
      carouselIds.forEach(id => {
        const cleanup = initCarousel(id);
        if (cleanup) cleanupFns.push(cleanup);
      });
    };

    // Delay initialization slightly to let fonts/layout settle
    const initTimer = setTimeout(setupCarousels, 100);

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setupCarousels, 200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(initTimer);
      window.removeEventListener('resize', handleResize);
      cleanupFns.forEach(fn => fn());
    };
  }, []);

  return (
    <>
      <nav style={{ padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg)', borderBottom: '1px solid var(--rule)' }}>
        <div style={{ fontFamily: "'DepartureMono', monospace", fontSize: '12px', letterSpacing: '0.1em' }}>NUMAIR SHAHZADA</div>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '24px', margin: 0, padding: 0 }}>
          <li className="nav-link"><a href="#services" style={{ textDecoration: 'none', color: 'var(--ink)', fontFamily: "'DepartureMono', monospace", fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Services</a></li>
          <li className="nav-link"><a href="#work" style={{ textDecoration: 'none', color: 'var(--ink)', fontFamily: "'DepartureMono', monospace", fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Agents</a></li>
        </ul>
      </nav>
      <main>
        <Hero />
        <ValueProposition />
        <Services />
        <Agents />
        <TargetAudience />
      </main>
      <Footer />
    </>
  );
}

export default App;
