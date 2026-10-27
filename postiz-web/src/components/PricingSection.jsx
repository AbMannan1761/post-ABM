import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, X, Cpu, Server } from 'lucide-react';
import { PRICING_PLANS } from '../data/postizData';

export default function PricingSection({ onLaunchStudio, onOpenSelfHostModal, t, lang = 'bn' }) {
  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' | 'annual'

  return (
    <section id="pricing" style={{ padding: '80px 0', background: 'rgba(12, 18, 32, 0.4)' }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="badge-pill" style={{ marginBottom: '14px' }}>
            <Sparkles size={14} color="#a855f7" /> {t.pricingBadge}
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', lineHeight: 1.2, marginBottom: '16px' }}>
            {t.pricingTitle} <span className="text-gradient-purple">{t.pricingTitleGradient}</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '16px', maxWidth: '640px', margin: '0 auto 28px' }}>
            {t.pricingSubtitle}
          </p>

          {/* Monthly / Annual Switcher */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <div className="switch-wrapper">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`switch-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              >
                {t.billingMonthly}
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`switch-btn ${billingCycle === 'annual' ? 'active' : ''}`}
              >
                {t.billingAnnual}
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '64px',
          alignItems: 'stretch'
        }}>
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`pricing-card ${plan.featured ? 'featured' : ''}`}
              >
                {plan.featured && (
                  <div style={{
                    position: 'absolute',
                    top: '-13px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                    padding: '4px 14px',
                    borderRadius: '9999px',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    color: '#ffffff',
                    boxShadow: '0 4px 14px rgba(168, 85, 247, 0.5)'
                  }}>
                    {lang === 'bn' ? 'সবচেয়ে জনপ্রিয়' : plan.badge}
                  </div>
                )}

                <div style={{ marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '6px' }}>{plan.name}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', minHeight: '38px', margin: 0 }}>
                    {plan.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '42px', fontWeight: 800, fontFamily: 'var(--font-sans)', color: '#ffffff' }}>
                      ${price}
                    </span>
                    <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>/ {lang === 'bn' ? 'প্রতি মাস' : 'month'}</span>
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--text-subtle)' }}>
                    {billingCycle === 'annual' ? `${t.billedAnnually} ($${price * 12}/yr)` : t.billedMonthly}
                  </span>
                </div>

                {/* Channels Badge */}
                <div style={{
                  padding: '8px 12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  marginBottom: '24px',
                  textAlign: 'center',
                  fontWeight: 600,
                  fontSize: '13px',
                  color: '#38bdf8'
                }}>
                  {plan.channels} {t.connectedChannelsSuffix}
                </div>

                {/* CTA Button */}
                <button
                  onClick={onLaunchStudio}
                  className={plan.featured ? 'btn-primary' : 'btn-secondary'}
                  style={{ width: '100%', marginBottom: '28px', padding: '12px' }}
                >
                  {t.ctaTrial}
                </button>

                {/* Feature List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {t.includedPrefix}
                  </span>

                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#e2e8f0' }}>
                      <Check size={15} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </div>
                  ))}

                  {plan.missing && plan.missing.map((miss, mIdx) => (
                    <div key={mIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-subtle)' }}>
                      <X size={15} color="var(--text-subtle)" style={{ flexShrink: 0 }} />
                      <span>{miss}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Cloud vs Open-Source Comparison Box */}
        <div className="glass-panel" style={{ padding: '36px', border: '1px solid rgba(168, 85, 247, 0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '6px' }}>
                {t.cloudVsSelfHostTitle}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>
                {t.cloudVsSelfHostDesc}
              </p>
            </div>
            <button onClick={onOpenSelfHostModal} className="btn-outline" style={{ fontSize: '13px' }}>
              <Cpu size={15} /> {t.btnHowToRun}
            </button>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '12px 16px' }}>{lang === 'bn' ? 'ফিচার / সুবিধা' : 'Feature / Area'}</th>
                  <th style={{ padding: '12px 16px', color: '#c084fc' }}>☁️ {lang === 'bn' ? 'পোস্টিজ ক্লাউড' : 'Postiz Cloud'}</th>
                  <th style={{ padding: '12px 16px', color: '#38bdf8' }}>💻 {lang === 'bn' ? 'ওপেন-সোর্স (সেলফ-হোস্টেড)' : 'Postiz Open-Source (Self-hosted)'}</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600 }}>{lang === 'bn' ? 'লাইসেন্স ও খরচ' : 'License & Cost'}</td>
                  <td style={{ padding: '12px 16px' }}>$29/মাস থেকে (৭ দিন ফ্রি ট্রায়াল)</td>
                  <td style={{ padding: '12px 16px', color: '#10b981' }}>আজীবন সম্পূর্ণ ফ্রি (AGPL-3.0)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600 }}>{lang === 'bn' ? 'সেটআপ ও রক্ষণাবেক্ষণ' : 'Setup & Maintenance'}</td>
                  <td style={{ padding: '12px 16px' }}>১ মিনিটে রেডি (কোনো সার্ভার লাগে না)</td>
                  <td style={{ padding: '12px 16px' }}>Docker Compose, PostgreSQL, Redis</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600 }}>{lang === 'bn' ? 'সোশ্যাল মিডিয়া API পারমিশন' : 'Social App Approvals'}</td>
                  <td style={{ padding: '12px 16px' }}>পোস্টিজের পূর্ব-অনুমোদিত অফিসিয়াল অ্যাপস</td>
                  <td style={{ padding: '12px 16px' }}>নিজের ফেসবুক/এক্স ডেভেলপার আইডি তৈরি করতে হবে</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600 }}>{lang === 'bn' ? 'এআই ফিচার (লেখা ও ছবি)' : 'AI Features'}</td>
                  <td style={{ padding: '12px 16px' }}>প্ল্যানের কোটার সাথে অন্তর্ভুক্ত</td>
                  <td style={{ padding: '12px 16px' }}>নিজের OpenAI / Anthropic API কি ব্যবহার করবেন</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 16px', fontWeight: 600 }}>{lang === 'bn' ? 'MCP ও AI এজেন্টস' : 'MCP & Agentic Surfaces'}</td>
                  <td style={{ padding: '12px 16px' }}>রেডিমেড হোস্টেড MCP সার্ভার</td>
                  <td style={{ padding: '12px 16px' }}>লোকাল MCP/CLI নিজের সার্ভারে পয়েন্ট করবেন</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
