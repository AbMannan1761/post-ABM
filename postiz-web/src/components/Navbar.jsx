import React, { useState } from 'react';
import { Sparkles, Calendar, ExternalLink, Terminal, Languages, Menu, X } from 'lucide-react';

export default function Navbar({ activeView, setActiveView, onOpenSelfHostModal, lang, setLang, t }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view = 'landing') => {
    setActiveView(view);
    setMobileMenuOpen(false);
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      background: 'rgba(6, 9, 17, 0.92)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px',
        position: 'relative'
      }}>
        {/* Brand Logo */}
        <div 
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', zIndex: 10 }} 
          onClick={() => handleNavClick('landing')}
        >
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(139, 92, 246, 0.4)',
            flexShrink: 0
          }}>
            <img 
              src="/postiz.svg" 
              alt="Postiz" 
              style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} 
              onError={(e) => { e.target.style.display = 'none'; }} 
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 800,
              fontSize: '20px',
              letterSpacing: '-0.03em',
              color: '#ffffff',
              lineHeight: 1
            }}>
              postiz<span style={{ color: '#a855f7' }}>.</span>
            </span>
            <span style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.04em' }}>
              {t.taglineSubtitle}
            </span>
          </div>
        </div>

        {/* Center Nav Links (Desktop) */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
          <a href="#features" onClick={() => handleNavClick('landing')} className="nav-link">
            {t.navFeatures}
          </a>
          <a href="#agents" onClick={() => handleNavClick('landing')} className="nav-link">
            {t.navAgents}
          </a>
          <a href="#networks" onClick={() => handleNavClick('landing')} className="nav-link">
            {t.navNetworks}
          </a>
          <a href="#pricing" onClick={() => handleNavClick('landing')} className="nav-link">
            {t.navPricing}
          </a>
          <a href="#faq" onClick={() => handleNavClick('landing')} className="nav-link">
            {t.navFaq}
          </a>
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Language Switcher (Always accessible) */}
          <button
            onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '6px 10px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              background: 'rgba(255, 255, 255, 0.06)',
              color: '#38bdf8',
              transition: 'all 0.2s',
              flexShrink: 0
            }}
            title="ভাষা পরিবর্তন / Switch Language"
          >
            <Languages size={14} />
            {lang === 'bn' ? 'বাংলা' : 'EN'}
          </button>

          {/* View Switcher button (Desktop & Tablet) */}
          <button
            onClick={() => setActiveView(activeView === 'studio' ? 'landing' : 'studio')}
            className="navbar-studio-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              border: activeView === 'studio' ? '1px solid rgba(168, 85, 247, 0.6)' : '1px solid rgba(255, 255, 255, 0.12)',
              background: activeView === 'studio' ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255, 255, 255, 0.05)',
              color: activeView === 'studio' ? '#d8b4fe' : '#e2e8f0',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap'
            }}
          >
            {activeView === 'studio' ? (
              <>
                <ExternalLink size={14} /> <span className="btn-label-responsive">{t.backToLanding}</span>
              </>
            ) : (
              <>
                <Calendar size={14} color="#c084fc" /> <span className="btn-label-responsive">{t.launchStudio}</span>
              </>
            )}
          </button>

          {/* Self-Host guide trigger (Desktop only) */}
          <button
            onClick={onOpenSelfHostModal}
            className="btn-outline desktop-only-btn"
            style={{ fontSize: '12px', padding: '7px 12px' }}
          >
            <Terminal size={13} /> {t.selfHostGuide}
          </button>

          {/* Start Free button (Desktop only) */}
          <button
            onClick={() => handleNavClick('studio')}
            className="btn-primary desktop-only-btn"
            style={{ padding: '8px 16px', fontSize: '13px' }}
          >
            <Sparkles size={14} />
            {t.startFree}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-hamburger-btn"
            aria-label="Toggle Menu"
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer" style={{
          position: 'absolute',
          top: '70px',
          left: 0,
          right: 0,
          background: 'rgba(6, 9, 17, 0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(168, 85, 247, 0.3)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
          zIndex: 49
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a 
              href="#features" 
              onClick={() => handleNavClick('landing')} 
              style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '15px', fontWeight: 600, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >
              {t.navFeatures}
            </a>
            <a 
              href="#agents" 
              onClick={() => handleNavClick('landing')} 
              style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '15px', fontWeight: 600, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >
              {t.navAgents}
            </a>
            <a 
              href="#networks" 
              onClick={() => handleNavClick('landing')} 
              style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '15px', fontWeight: 600, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >
              {t.navNetworks}
            </a>
            <a 
              href="#pricing" 
              onClick={() => handleNavClick('landing')} 
              style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '15px', fontWeight: 600, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >
              {t.navPricing}
            </a>
            <a 
              href="#faq" 
              onClick={() => handleNavClick('landing')} 
              style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '15px', fontWeight: 600, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >
              {t.navFaq}
            </a>
          </nav>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '6px' }}>
            <button
              onClick={() => {
                setActiveView('studio');
                setMobileMenuOpen(false);
              }}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
            >
              <Calendar size={16} /> {t.launchStudio}
            </button>
            <button
              onClick={() => {
                onOpenSelfHostModal();
                setMobileMenuOpen(false);
              }}
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
            >
              <Terminal size={16} color="#c084fc" /> {t.selfHostGuide}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

