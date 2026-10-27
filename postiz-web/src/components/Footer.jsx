import React from 'react';
import { Shield, Heart, Code2 } from 'lucide-react';

export default function Footer({ onLaunchStudio, onOpenSelfHostModal, t, lang = 'bn' }) {
  return (
    <footer style={{
      background: '#040710',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '60px 0 30px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '48px'
        }}>
          {/* Col 1: Brand */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img src="/postiz.svg" alt="Postiz" style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(1)' }} onError={(e) => e.target.style.display = 'none'} />
              </div>
              <span style={{ fontSize: '20px', fontWeight: 800, letterSpacing: '-0.02em', color: '#fff' }}>
                postiz<span style={{ color: '#a855f7' }}>.</span>
              </span>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              {t.footerDesc}
            </p>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
              <a href="https://github.com/gitroomhq/postiz-app" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', textDecoration: 'none' }} title="GitHub">
                <Code2 size={16} /> GitHub (14k★)
              </a>
            </div>
          </div>

          {/* Col 2: Product */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#f1f5f9', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {t.footerProduct}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--text-muted)' }}>
              <li><a href="#features" style={{ color: 'inherit', textDecoration: 'none' }}>{lang === 'bn' ? 'ভিজুয়াল ক্যালেন্ডার' : 'Visual Calendar'}</a></li>
              <li><a href="#features" style={{ color: 'inherit', textDecoration: 'none' }}>{lang === 'bn' ? 'AI ইমেজ ও ভিডিও স্টুডিও' : 'AI Image & Video Studio'}</a></li>
              <li><a href="#networks" style={{ color: 'inherit', textDecoration: 'none' }}>{lang === 'bn' ? '৩০+ সোশ্যাল নেটওয়ার্ক' : '30+ Social Networks'}</a></li>
              <li><a href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>{lang === 'bn' ? 'প্যাকেজ ও মূল্য তালিকা' : 'Pricing & Plans'}</a></li>
              <li><button onClick={onLaunchStudio} style={{ background: 'none', border: 'none', padding: 0, color: '#c084fc', cursor: 'pointer', fontSize: '14px' }}>{t.launchStudio}</button></li>
            </ul>
          </div>

          {/* Col 3: AI Agents */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#f1f5f9', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {t.footerAgents}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--text-muted)' }}>
              <li><a href="#agents" style={{ color: 'inherit', textDecoration: 'none' }}>Claude MCP Server</a></li>
              <li><a href="#agents" style={{ color: 'inherit', textDecoration: 'none' }}>ChatGPT Plugin & Action</a></li>
              <li><a href="#agents" style={{ color: 'inherit', textDecoration: 'none' }}>Claude Code CLI Skill</a></li>
              <li><a href="https://docs.postiz.com/public-api" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Public REST API</a></li>
              <li><a href="https://docs.postiz.com" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{t.devDocs}</a></li>
            </ul>
          </div>

          {/* Col 4: Open Source */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#f1f5f9', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {t.footerOpenSource}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--text-muted)' }}>
              <li>
                <button onClick={onOpenSelfHostModal} style={{ background: 'none', border: 'none', padding: 0, color: '#38bdf8', cursor: 'pointer', fontSize: '14px' }}>
                  {t.selfHostGuide}
                </button>
              </li>
              <li><a href="https://github.com/gitroomhq/postiz-app" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub Repository (14k★)</a></li>
              <li><span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}><Shield size={13} /> AGPL-3.0 License</span></li>
              <li><a href="https://opencollective.com/postiz" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Sponsor Postiz</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          paddingTop: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '14px',
          fontSize: '13px',
          color: 'var(--text-subtle)'
        }}>
          <div>
            {t.footerCopy}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            Crafted with <Heart size={14} color="#ec4899" fill="#ec4899" /> • Open Source AGPL-3.0
          </div>
        </div>
      </div>
    </footer>
  );
}
