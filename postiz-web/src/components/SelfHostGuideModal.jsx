import React, { useState } from 'react';
import { X, Copy, Check, Terminal, FolderCheck, ExternalLink, Cpu } from 'lucide-react';

export default function SelfHostGuideModal({ isOpen, onClose, lang = 'bn' }) {
  const [copiedStep, setCopiedStep] = useState(null);

  if (!isOpen) return null;

  const handleCopy = (text, stepKey) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepKey);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(3, 7, 18, 0.85)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: '#0a0f1d',
        border: '1px solid rgba(168, 85, 247, 0.3)',
        borderRadius: '20px',
        maxWidth: '680px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 25px 70px rgba(0, 0, 0, 0.8), 0 0 40px rgba(139, 92, 246, 0.2)',
        padding: '30px'
      }}>
        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'rgba(139, 92, 246, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Terminal size={18} color="#c084fc" />
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: 0 }}>
                {lang === 'bn' ? 'ক্লোন করা পোস্টটিজ ওপেন-সোর্স চালানোর উপায়' : 'Run Cloned Postiz Open-Source'}
              </h3>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                {lang === 'bn' ? 'অফিসিয়াল কোড ইতিমধ্যে postiz-official/ ফোল্ডারে সংরক্ষিত আছে' : 'Official repository already cloned in postiz-official/'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Content body */}
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
          {lang === 'bn' ? (
            <>
              পোস্টিজের অফিসিয়াল ওপেন-সোর্স কোড (<a href="https://github.com/gitroomhq/postiz-app" target="_blank" rel="noreferrer" style={{ color: '#c084fc' }}>gitroomhq/postiz-app</a>) ইতিমধ্যেই আপনার কম্পিউটারে <code>postiz-official</code> ফোল্ডারে সম্পূর্ণ ডাউনলোড ও ক্লোন করে রাখা হয়েছে। এটি চালানোর জন্য নিচের ৩টি সহজ কমান্ড ব্যবহার করুন:
            </>
          ) : (
            <>
              The official open-source Postiz repository (<a href="https://github.com/gitroomhq/postiz-app" target="_blank" rel="noreferrer" style={{ color: '#c084fc' }}>gitroomhq/postiz-app</a>) has already been cloned right here in your project workspace inside the <code>postiz-official</code> directory.
            </>
          )}
        </p>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
          {/* Step 1 */}
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#f1f5f9' }}>
                {lang === 'bn' ? '১. টার্মিনালে ক্লোন ফোল্ডারে যান' : '1. Navigate to the cloned folder'}
              </span>
              <button
                onClick={() => handleCopy('cd postiz-official', 'step1')}
                className="btn-outline"
                style={{ padding: '3px 8px', fontSize: '11px' }}
              >
                {copiedStep === 'step1' ? <Check size={12} color="#10b981" /> : <Copy size={12} />}
                {copiedStep === 'step1' ? (lang === 'bn' ? 'কপি হয়েছে' : 'Copied') : (lang === 'bn' ? 'কপি করুন' : 'Copy')}
              </button>
            </div>
            <code style={{ display: 'block', padding: '8px 12px', background: '#040711', borderRadius: '6px', fontSize: '13px', color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
              cd postiz-official
            </code>
          </div>

          {/* Step 2 */}
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#f1f5f9' }}>
                {lang === 'bn' ? '২. কনফিগ ফাইল কপি করুন' : '2. Copy Environment Config'}
              </span>
              <button
                onClick={() => handleCopy('Copy-Item .env.example .env', 'step2')}
                className="btn-outline"
                style={{ padding: '3px 8px', fontSize: '11px' }}
              >
                {copiedStep === 'step2' ? <Check size={12} color="#10b981" /> : <Copy size={12} />}
                {copiedStep === 'step2' ? (lang === 'bn' ? 'কপি হয়েছে' : 'Copied') : (lang === 'bn' ? 'কপি করুন' : 'Copy')}
              </button>
            </div>
            <code style={{ display: 'block', padding: '8px 12px', background: '#040711', borderRadius: '6px', fontSize: '13px', color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
              cp .env.example .env
            </code>
          </div>

          {/* Step 3 */}
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#f1f5f9' }}>
                {lang === 'bn' ? '৩. ডকার কম্পোজ দিয়ে এক ক্লিকে চালু করুন' : '3. Launch with Docker Compose'}
              </span>
              <button
                onClick={() => handleCopy('docker compose up -d', 'step3')}
                className="btn-outline"
                style={{ padding: '3px 8px', fontSize: '11px' }}
              >
                {copiedStep === 'step3' ? <Check size={12} color="#10b981" /> : <Copy size={12} />}
                {copiedStep === 'step3' ? (lang === 'bn' ? 'কপি হয়েছে' : 'Copied') : (lang === 'bn' ? 'কপি করুন' : 'Copy')}
              </button>
            </div>
            <code style={{ display: 'block', padding: '8px 12px', background: '#040711', borderRadius: '6px', fontSize: '13px', color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
              docker compose up -d
            </code>
            <span style={{ fontSize: '12px', color: 'var(--text-subtle)', marginTop: '6px', display: 'block' }}>
              {lang === 'bn' ? '(এটি স্বয়ংক্রিয়ভাবে ব্যাকএন্ড, ডেটাবেজ ও ফ্রন্টএন্ড চালু করে দেবে)' : '(Starts Frontend, NestJS backend, Redis, and PostgreSQL database automatically)'}
            </span>
          </div>
        </div>

        {/* Note */}
        <div style={{
          padding: '14px',
          background: 'rgba(245, 158, 11, 0.1)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          borderRadius: '10px',
          fontSize: '13px',
          color: '#fcd34d',
          marginBottom: '20px'
        }}>
          💡 <strong>পরামর্শ:</strong> ডকার ছাড়াও আপনি এখনই কোনো ঝামেলা ছাড়াই এই ওয়েব অ্যাপের <strong>"পোস্টিজ স্টুডিও"</strong> ব্যবহার করে পোস্ট লেখা, AI জেনারেশন এবং ক্যালেন্ডার শিডিউলিং টেস্ট করতে পারেন!
        </div>

        <button onClick={onClose} className="btn-primary" style={{ width: '100%', padding: '12px' }}>
          {lang === 'bn' ? 'ঠিক আছে, গাইড বন্ধ করুন' : 'Got it, Close Guide'}
        </button>
      </div>
    </div>
  );
}
