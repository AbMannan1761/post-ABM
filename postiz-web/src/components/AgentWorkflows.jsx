import React, { useState } from 'react';
import { Terminal, Copy, Check, Bot, Cpu, Zap, Code2, ArrowUpRight } from 'lucide-react';
import { AGENT_WORKFLOWS } from '../data/postizData';

export default function AgentWorkflows({ t }) {
  const [activeWorkflow, setActiveWorkflow] = useState(AGENT_WORKFLOWS[0]);
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeWorkflow.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="agents" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge-pill" style={{ marginBottom: '14px' }}>
            <Bot size={14} color="#a855f7" /> {t.workflowsBadge}
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', lineHeight: 1.2, marginBottom: '16px' }}>
            {t.workflowsTitle}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '16px', maxWidth: '640px', margin: '0 auto' }}>
            {t.workflowsSubtitle}
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '32px'
        }}>
          {AGENT_WORKFLOWS.map((wf) => {
            const isActive = activeWorkflow.id === wf.id;
            return (
              <button
                key={wf.id}
                onClick={() => setActiveWorkflow(wf)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isActive ? '1px solid rgba(168, 85, 247, 0.7)' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isActive ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.25), rgba(124, 58, 237, 0.15))' : 'rgba(15, 23, 42, 0.6)',
                  color: isActive ? '#ffffff' : 'var(--text-muted)',
                  boxShadow: isActive ? '0 4px 18px rgba(124, 58, 237, 0.25)' : 'none',
                  transition: 'all 0.2s'
                }}
              >
                <Bot size={15} color={isActive ? '#c084fc' : 'var(--text-subtle)'} />
                {wf.name}
              </button>
            );
          })}
        </div>

        {/* Workflow Showcase Box */}
        <div className="glass-panel" style={{
          padding: '36px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '32px',
          alignItems: 'center',
          border: '1px solid rgba(168, 85, 247, 0.3)'
        }}>
          {/* Left Details */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <span className="badge-pill">{activeWorkflow.badge}</span>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Official Integration</span>
            </div>

            <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '14px', color: '#fff' }}>
              {activeWorkflow.name}
            </h3>

            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
              {activeWorkflow.desc}
            </p>

            {/* Prompt Example Box */}
            <div style={{
              background: 'rgba(6, 9, 17, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '20px'
            }}>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '6px' }}>
                {t.samplePromptLabel}
              </span>
              <p style={{ fontSize: '13px', color: '#e2e8f0', fontStyle: 'italic', margin: 0, lineHeight: 1.5 }}>
                {activeWorkflow.promptExample}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="https://docs.postiz.com/public-api"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
                style={{ fontSize: '13px' }}
              >
                {t.devDocs} <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Code/Terminal Box */}
          <div style={{
            background: '#040711',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
          }}>
            <div style={{
              padding: '12px 18px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                <span style={{ fontSize: '12px', color: 'var(--text-subtle)', marginLeft: '8px', fontFamily: 'var(--font-mono)' }}>
                  config / terminal
                </span>
              </div>

              <button
                onClick={handleCopyCode}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: copied ? '#10b981' : 'var(--text-muted)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '11px'
                }}
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                {copied ? t.copiedText : t.copyText}
              </button>
            </div>

            <pre style={{
              padding: '20px',
              margin: 0,
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              lineHeight: 1.6,
              color: '#a5f3fc',
              overflowX: 'auto'
            }}>
              <code>{activeWorkflow.codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
