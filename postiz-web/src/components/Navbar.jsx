import React from 'react';
import { Sparkles, Calendar, ExternalLink, Play, Terminal, Languages } from 'lucide-react';

export default function Navbar({ activeView, setActiveView, onOpenSelfHostModal, lang, setLang, t }) {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      background: 'rgba(6, 9, 17, 0.88)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '74px'
      }}>
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }} onClick={() => setActiveView('landing')}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(139, 92, 246, 0.4)'
          }}>
            <img src="/postiz.svg" alt="Postiz" style={{ width: '22px', height: '22px', filter: 'brightness(0) invert(1)' }} onError={(e) => {
              e.target.style.display = 'none';
            }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 800,
              fontSize: '22px',
              letterSpacing: '-0.03em',
              color: '#ffffff',
              lineHeight: 1
            }}>
              postiz<span style={{ color: '#a855f7' }}>.</span>
            </span>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.04em' }}>
              {t.taglineSubtitle}
            </span>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '26px' }}>
          <a href="#features" onClick={() => setActiveView('landing')} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
            {t.navFeatures}
          </a>
          <a href="#agents" onClick={() => setActiveView('landing')} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
            {t.navAgents}
          </a>
          <a href="#networks" onClick={() => setActiveView('landing')} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
            {t.navNetworks}
          </a>
          <a href="#pricing" onClick={() => setActiveView('landing')} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
            {t.navPricing}
          </a>
          <a href="#faq" onClick={() => setActiveView('landing')} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
            {t.navFaq}
          </a>
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              background: 'rgba(255, 255, 255, 0.06)',
              color: '#38bdf8',
              transition: 'all 0.2s'
            }}
            title="ভাষা পরিবর্তন করুন / Switch Language"
          >
            <Languages size={14} />
            {lang === 'bn' ? 'বাংলা' : 'EN'}
          </button>

          {/* View switcher button */}
          <button
            onClick={() => setActiveView(activeView === 'studio' ? 'landing' : 'studio')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              padding: '8px 16px',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              border: activeView === 'studio' ? '1px solid rgba(168, 85, 247, 0.6)' : '1px solid rgba(255, 255, 255, 0.12)',
              background: activeView === 'studio' ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255, 255, 255, 0.05)',
              color: activeView === 'studio' ? '#d8b4fe' : '#e2e8f0',
              transition: 'all 0.2s'
            }}
          >
            {activeView === 'studio' ? (
              <>
                <ExternalLink size={15} /> {t.backToLanding}
              </>
            ) : (
              <>
                <Calendar size={15} color="#c084fc" /> {t.launchStudio}
              </>
            )}
          </button>

          {/* Self-Host guide trigger */}
          <button
            onClick={onOpenSelfHostModal}
            className="btn-outline"
            style={{ fontSize: '13px', padding: '8px 14px' }}
          >
            <Terminal size={14} /> {t.selfHostGuide}
          </button>

          {/* Start Free button */}
          <button
            onClick={() => setActiveView('studio')}
            className="btn-primary"
            style={{ padding: '9px 18px', fontSize: '14px' }}
          >
            <Sparkles size={15} />
            {t.startFree}
          </button>
        </div>
      </div>
    </header>
  );
}
