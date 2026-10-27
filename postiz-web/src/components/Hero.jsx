import React, { useState } from 'react';
import { Sparkles, Calendar, ArrowRight, Bot, Cpu, CheckCircle2, ShieldCheck, Play } from 'lucide-react';
import { PLATFORMS_DATA, TESTIMONIALS_DATA } from '../data/postizData';

export default function Hero({ onLaunchStudio, onOpenSelfHostModal, t, lang }) {
  const [scheduleMode, setScheduleMode] = useState('agentic'); // 'agentic' | 'classic'

  return (
    <section style={{ position: 'relative', paddingTop: '60px', paddingBottom: '70px', overflow: 'hidden' }}>
      <div className="bg-ambient-glow" />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
        {/* Release Pill Badge */}
        <div style={{ display: 'inline-flex', marginBottom: '22px' }}>
          <div className="badge-pill">
            <span className="badge-pulse" />
            <span>{t.heroBadge}</span>
          </div>
        </div>

        {/* Hero Title */}
        <h1 style={{
          fontSize: 'clamp(2.4rem, 5.2vw, 4.2rem)',
          lineHeight: 1.15,
          maxWidth: '920px',
          margin: '0 auto 20px',
          letterSpacing: '-0.025em'
        }}>
          {t.heroTitlePrefix} <br />
          <span className="text-gradient-rainbow">{t.heroTitleGradient}</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
          color: 'var(--text-muted)',
          maxWidth: '740px',
          margin: '0 auto 32px',
          lineHeight: 1.6
        }}>
          {t.heroSubtitle}
        </p>

        {/* Primary CTAs */}
        <div className="hero-cta-group" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          marginBottom: '36px'
        }}>
          <button
            onClick={onLaunchStudio}
            className="btn-primary"
            style={{ padding: '14px 30px', fontSize: '16px' }}
          >
            <Sparkles size={18} />
            {t.ctaTrial}
            <ArrowRight size={16} />
          </button>

          <button
            onClick={onOpenSelfHostModal}
            className="btn-secondary"
            style={{ padding: '14px 26px', fontSize: '16px' }}
          >
            <Cpu size={18} color="#a855f7" />
            {t.ctaDeploy}
          </button>
        </div>

        {/* Trust micro-text */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          fontSize: '13px',
          color: 'var(--text-muted)',
          marginBottom: '44px',
          flexWrap: 'wrap'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={15} color="#10b981" /> {t.trustNoCard}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ShieldCheck size={15} color="#10b981" /> {t.trustOauth}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Bot size={15} color="#a855f7" /> {t.trustMcp}
          </span>
        </div>

        {/* Mode switcher tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <div className="switch-wrapper">
            <button
              onClick={() => setScheduleMode('agentic')}
              className={`switch-btn ${scheduleMode === 'agentic' ? 'active' : ''}`}
            >
              {t.modeAgentic}
            </button>
            <button
              onClick={() => setScheduleMode('classic')}
              className={`switch-btn ${scheduleMode === 'classic' ? 'active' : ''}`}
            >
              {t.modeClassic}
            </button>
          </div>
        </div>

        {/* Interactive Mode Preview Card */}
        <div className="glass-panel hero-preview-card" style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '24px',
          border: '1px solid rgba(168, 85, 247, 0.25)',
          background: 'linear-gradient(180deg, rgba(17, 24, 43, 0.8) 0%, rgba(10, 15, 29, 0.95) 100%)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 30px rgba(139, 92, 246, 0.15)'
        }}>
          {scheduleMode === 'agentic' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                  <span style={{ fontWeight: 600, fontSize: '14px', color: '#f1f5f9' }}>
                    {t.agenticCardTitle}
                  </span>
                  <span className="badge-pill" style={{ padding: '3px 10px', fontSize: '11px' }}>{t.agenticBadge}</span>
                </div>
                <button
                  onClick={onLaunchStudio}
                  className="btn-outline"
                  style={{ fontSize: '12px', padding: '5px 12px' }}
                >
                  <Play size={12} fill="#a855f7" /> {t.launchStudio}
                </button>
              </div>

              {/* Chat & Calendar Simulation */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>

                {/* Agent Prompt Box */}
                <div style={{
                  background: 'rgba(6, 9, 17, 0.7)',
                  borderRadius: '12px',
                  padding: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                  <div style={{ fontSize: '12px', color: '#c084fc', fontWeight: 600, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Bot size={14} /> {t.agentPromptLabel}
                  </div>
                  <p style={{ fontSize: '13px', color: '#e2e8f0', fontStyle: 'italic', marginBottom: '12px' }}>
                    {t.agentPromptSample}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#10b981' }}>
                    <CheckCircle2 size={13} /> {t.agentDraftedSuccess}
                  </div>
                </div>

                {/* Calendar Sync Preview */}
                <div style={{
                  background: 'rgba(6, 9, 17, 0.7)',
                  borderRadius: '12px',
                  padding: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                  <div style={{ fontSize: '12px', color: '#38bdf8', fontWeight: 600, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={14} /> {t.calendarPreviewTitle}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
                      <span style={{ fontSize: '12px' }}>Wed 09:30 AM • X & Threads</span>
                      <span className="status-badge status-ai">AI Prepared</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
                      <span style={{ fontSize: '12px' }}>Thu 02:00 PM • LinkedIn & Bluesky</span>
                      <span className="status-badge status-ai">AI Prepared</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '14px' }}>
                <span style={{ fontWeight: 600, fontSize: '14px', color: '#f1f5f9' }}>
                  {lang === 'bn' ? 'ভিজুয়াল ড্র্যাগ অ্যান্ড ড্রপ ক্যালেন্ডার শিডিউলার' : 'Visual Drag & Drop Calendar Scheduler'}
                </span>
                <span className="status-badge status-scheduled">30+ Channels Enabled</span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                {lang === 'bn'
                  ? 'নিজে হাতে নিয়ন্ত্রণ চান? একবার পোস্ট লিখুন, প্রতিটি চ্যানেলের জন্য কাস্টমাইজ করুন, মিডিয়া বা ছবি সংযুক্ত করুন এবং সরাসরি ক্যালেন্ডারে সেট করুন।'
                  : 'Prefer manual control? Write once, customize character limits per network, attach media or design with our built-in Canva-like studio, and schedule with instant visual feedback.'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Marquee 1: Supported Social Platforms */}
      <div style={{ marginTop: '55px', position: 'relative' }}>
        <p style={{
          textAlign: 'center',
          fontSize: '13px',
          fontWeight: 600,
          color: 'var(--text-subtle)',
          letterSpacing: '0.04em',
          marginBottom: '16px'
        }}>
          {t.supportedNetworksText}
        </p>
        <div className="marquee-container">
          <div className="marquee-track">
            {PLATFORMS_DATA.map((plat) => (
              <div key={plat.id} className="social-chip">
                <img src={plat.icon} alt={plat.name} onError={(e) => {
                  e.target.style.display = 'none';
                }} />
                <span>{plat.name}</span>
              </div>
            ))}
          </div>
          <div className="marquee-track" aria-hidden="true">
            {PLATFORMS_DATA.map((plat) => (
              <div key={`${plat.id}-dup`} className="social-chip">
                <img src={plat.icon} alt={plat.name} onError={(e) => {
                  e.target.style.display = 'none';
                }} />
                <span>{plat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee 2: Live Testimonials & Metrics */}
      <div style={{ marginTop: '20px', position: 'relative' }}>
        <div className="marquee-container">
          <div className="marquee-track-reverse">
            {TESTIMONIALS_DATA.map((item, idx) => (
              <div key={idx} className="stat-metric-card">
                <img src={item.icon} alt={item.platform} style={{ width: '22px', height: '22px', objectFit: 'contain' }} onError={(e) => {
                  e.target.style.display = 'none';
                }} />
                <div>
                  <div className="stat-number">{item.stat}</div>
                  <div className="stat-label">{item.label}</div>
                  <div className="stat-author">{item.name} • {item.platform}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="marquee-track-reverse" aria-hidden="true">
            {TESTIMONIALS_DATA.map((item, idx) => (
              <div key={`dup-${idx}`} className="stat-metric-card">
                <img src={item.icon} alt={item.platform} style={{ width: '22px', height: '22px', objectFit: 'contain' }} onError={(e) => {
                  e.target.style.display = 'none';
                }} />
                <div>
                  <div className="stat-number">{item.stat}</div>
                  <div className="stat-label">{item.label}</div>
                  <div className="stat-author">{item.name} • {item.platform}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
