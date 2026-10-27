import React from 'react';
import { Calendar, Bot, Palette, Users, Zap, BarChart3, Check } from 'lucide-react';

export default function FeaturesSection({ onLaunchStudio, t, lang = 'bn' }) {
  const features = lang === 'bn' ? [
    {
      icon: <Calendar size={24} color="#38bdf8" />,
      tag: 'শিডিউলিং',
      title: 'এক ক্লিকে সকল চ্যানেলে পোস্ট শিডিউল',
      desc: 'একটি পোস্ট একবার লিখুন এবং পছন্দের সবকটি চ্যানেলে নিজ নির্ধারিত সময়ে পাঠিয়ে দিন। পোস্ট যাওয়ার আগেই ভিজুয়াল ক্যালেন্ডারে প্রিভিউ দেখে নিন।',
      highlights: ['একটি কেন্দ্রীয় ক্যালেন্ডার ভিউ', 'প্রতিটি নেটওয়ার্কের জন্য অপটিমাইজেশন', 'এভারগ্রিন রিপিট শিডিউল']
    },
    {
      icon: <Bot size={24} color="#c084fc" />,
      tag: 'AI এজেন্টস',
      title: 'অটোনোমাস AI এজেন্টের সাথে কাজ করুন',
      desc: 'Claude, ChatGPT, Claude Code, Grok বা Muse ব্যবহার করে স্বয়ংক্রিয়ভাবে কনটেন্ট তৈরি ও পোস্ট ম্যানেজ করুন।',
      highlights: ['হোস্টেড Model Context Protocol (MCP)', 'টার্মিনাল এজেন্টের জন্য CLI স্কিল', 'সম্পূর্ণ REST API ও ওয়েবহুকস']
    },
    {
      icon: <Palette size={24} color="#f472b6" />,
      tag: 'AI ইমেজ ও ডিজাইন',
      title: 'AI দিয়ে আকর্ষণীয় ব্যানার ও ছবি তৈরি',
      desc: 'ক্যানভা-স্টাইল বিল্ট-ইন এডিটর দিয়ে পোস্টের ছবি তৈরি করুন অথবা প্রম্পট দিয়ে এক ক্লিকে আকর্ষণীয় AI গ্রাফিক্স বানান।',
      highlights: ['প্রম্পট-টু-ইমেজ জেনারেটর', '৯:১৬ ভার্টিক্যাল ভিডিও ও রিলস ক্লিপিং', 'বিল্ট-ইন ক্যানভা-স্টাইল স্টুডিও']
    },
    {
      icon: <Users size={24} color="#34d399" />,
      tag: 'টিম ও ব্র্যান্ডিং',
      title: 'টিম ও মাল্টিপল ক্লায়েন্টের জন্য তৈরি',
      desc: 'ক্লায়েন্ট বা ব্র্যান্ড অনুসারে কাস্টমার গ্রুপে আলাদা করুন। ফ্রিল্যান্সার এবং এজেন্সির জন্য আদর্শ সমাধান।',
      highlights: ['অ্যাডমিন ও মেম্বার রোলস', 'আলাদা আলাদা ব্র্যান্ড ওয়ার্কস্পেস', 'আনলিমিটেড টিম সিট']
    },
    {
      icon: <Zap size={24} color="#fbbf24" />,
      tag: 'অটোমেটিক অ্যাকশনস',
      title: 'অটো অ্যাকশন ও এনগেজমেন্ট প্লাগস',
      desc: 'যেমন ১০০ লাইক হলে অটোমেটিক প্রথম কমেন্ট বা প্লাগ পোস্ট করা—যাতে আপনার সেরা পোস্টগুলো আরও বেশি মানুষের কাছে পৌঁছায়।',
      highlights: ['মাইলস্টোন এনগেজমেন্ট ট্রিগার', 'স্বয়ংক্রিয় প্রথম কমেন্ট', 'RSS ফিড থেকে অটো-পোস্ট']
    },
    {
      icon: <BarChart3 size={24} color="#818cf8" />,
      tag: 'অ্যানালিটিক্স',
      title: 'পূর্ণাঙ্গ ক্রস-প্ল্যাটফর্ম অ্যানালিটিক্স',
      desc: 'কোন পোস্ট এবং কোন চ্যানেলে ভালো ফলাফল আসছে তা এক নজরে দেখে নিন। ৫টি আলাদা অ্যাপ ওপেন করার প্রয়োজন নেই।',
      highlights: ['রিয়েল-টাইম অফিসিয়াল API মেট্রিক্স', 'LinkedIn বনাম X বনাম Facebook তুলনা', 'অডিয়েন্স গ্রোথ ট্র্যাকিং']
    }
  ] : [
    {
      icon: <Calendar size={24} color="#38bdf8" />,
      tag: 'PLANNING',
      title: 'Schedule everywhere at once',
      desc: 'Write a post once and publish it to every channel you pick, on the schedule you set. Preview it all in a visual calendar before it goes out.',
      highlights: ['One unified calendar view', 'Platform-specific character limits', 'Evergreen repeat schedule']
    },
    {
      icon: <Bot size={24} color="#c084fc" />,
      tag: 'AI AGENTS',
      title: 'Work with autonomous AI agents',
      desc: 'Use Claude, ChatGPT, Claude Code, GrokBot, Hermes, or Muse to create and manage content through the official Postiz MCP server.',
      highlights: ['Hosted Model Context Protocol', 'CLI skill for terminal agents', 'Full REST API & Webhooks']
    },
    {
      icon: <Palette size={24} color="#f472b6" />,
      tag: 'AI IMAGE & STUDIO',
      title: 'Design it with AI or Built-in Studio',
      desc: 'Design post visuals in a built-in, Canva-like editor, or generate eye-catching graphics from a natural language prompt with AI.',
      highlights: ['Prompt-to-image generator', '9:16 vertical video clipping', 'Canva-like visual editor']
    },
    {
      icon: <Users size={24} color="#34d399" />,
      tag: 'ORGANIZING',
      title: 'Built for teams & multi-brands',
      desc: 'Organize accounts into Customer Groups. Perfect for agencies and freelancers running multiple client workspaces under one login.',
      highlights: ['Admin & Member roles', 'Client workspace separation', 'Unlimited team seats (Team+)']
    },
    {
      icon: <Zap size={24} color="#fbbf24" />,
      tag: 'PLUGS & TRIGGERS',
      title: 'Auto actions & engagement plugs',
      desc: 'Set milestones, such as 100 likes on a post, and Postiz will automatically post a plug, auto-like, or auto-comment to boost viral reach.',
      highlights: ['Milestone engagement triggers', 'Auto-first comment', 'RSS feed to social posting']
    },
    {
      icon: <BarChart3 size={24} color="#818cf8" />,
      tag: 'ANALYTICS',
      title: 'Comprehensive cross-network insights',
      desc: 'See which posts and channels perform best, then double down on what works without opening 10 different dashboards.',
      highlights: ['Real-time official API metrics', 'Compare LinkedIn vs X vs Reddit', 'Audience growth benchmarks']
    }
  ];

  return (
    <section id="features" style={{ padding: '80px 0', background: 'rgba(12, 18, 32, 0.4)' }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="badge-pill" style={{ marginBottom: '14px' }}>
            <Zap size={14} color="#fbbf24" /> {t.featuresBadge}
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', lineHeight: 1.2, marginBottom: '16px' }}>
            {t.featuresTitle} <br />
            <span className="text-gradient-purple">{t.featuresTitleGradient}</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '16px', maxWidth: '640px', margin: '0 auto' }}>
            {t.featuresSubtitle}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="feature-grid">
          {features.map((feat, idx) => (
            <div key={idx} className="interactive-card" style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                {feat.icon}
              </div>

              <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-subtle)', letterSpacing: '0.08em', marginBottom: '8px' }}>
                {feat.tag}
              </span>

              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: '#fff' }}>
                {feat.title}
              </h3>

              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                {feat.desc}
              </p>

              {/* Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '16px' }}>
                {feat.highlights.map((h, hIdx) => (
                  <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#cbd5e1' }}>
                    <Check size={14} color="#10b981" />
                    {h}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div style={{
          marginTop: '48px',
          padding: '28px',
          borderRadius: '18px',
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(56, 189, 248, 0.1))',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '6px' }}>{t.readyToSchedule}</h4>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>
              {t.readyToScheduleDesc}
            </p>
          </div>
          <button
            onClick={onLaunchStudio}
            className="btn-primary"
            style={{ padding: '12px 24px' }}
          >
            {t.btnLaunchStudio}
          </button>
        </div>
      </div>
    </section>
  );
}
