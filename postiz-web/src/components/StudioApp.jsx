import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  Sparkles, 
  Send, 
  BarChart3, 
  Share2, 
  CheckCircle, 
  Clock, 
  Trash2, 
  Plus, 
  Bot, 
  Eye, 
  RefreshCw, 
  Sliders,
  TrendingUp,
  Users,
  MessageSquare,
  ThumbsUp,
  Globe
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PLATFORMS_DATA, INITIAL_POSTS } from '../data/postizData';

export default function StudioApp({ onClose, t, lang = 'bn' }) {
  const [activeTab, setActiveTab] = useState('calendar'); // 'calendar' | 'composer' | 'accounts' | 'analytics'
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem('postiz_user_posts');
    if (saved) return JSON.parse(saved);
    return [
      {
        id: 'post-bn-1',
        content: '🚀 আমাদের নতুন অটোমেটেড এআই সোশ্যাল মিডিয়া শিডিউলার চালু হয়েছে! একবার লিখুন, ৩০+ প্ল্যাটফর্মে এক ক্লিকে পোস্ট করুন।',
        platforms: ['x', 'linkedin', 'facebook'],
        scheduledDate: '2026-10-28',
        scheduledTime: '10:00 AM',
        status: 'scheduled'
      },
      {
        id: 'post-bn-2',
        content: 'সোশ্যাল মিডিয়া থেকে ট্রাফিক এবং ক্লায়েন্ট পাওয়ার ৩টি কার্যকারী কৌশল 🧵👇',
        platforms: ['linkedin', 'reddit'],
        scheduledDate: '2026-10-29',
        scheduledTime: '03:30 PM',
        status: 'scheduled'
      },
      {
        id: 'post-bn-3',
        content: 'আমাদের ওপেন-সোর্স প্রজেক্টে ১৪,০০০+ গিটহাব স্টার সম্পন্ন হয়েছে! সবাইকে অসংখ্য ধন্যবাদ 🙌 #opensource',
        platforms: ['x', 'devto', 'bluesky'],
        scheduledDate: '2026-10-27',
        scheduledTime: '11:00 AM',
        status: 'published'
      }
    ];
  });

  // Composer State
  const [composerContent, setComposerContent] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState(['x', 'linkedin', 'facebook']);
  const [scheduleDate, setScheduleDate] = useState('2026-10-30');
  const [scheduleTime, setScheduleTime] = useState('10:00 AM');
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiTone, setAiTone] = useState(lang === 'bn' ? 'ভাইরাল হুক' : 'Viral Hook');
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewPlatform, setPreviewPlatform] = useState('x');

  // Connected accounts state
  const [connectedAccounts, setConnectedAccounts] = useState({
    x: { connected: true, handle: '@mybrand_bd', followers: '12.4k' },
    linkedin: { connected: true, handle: 'Tech Innovators BD', followers: '28.9k' },
    facebook: { connected: true, handle: 'Postiz Bangladesh', followers: '45.2k' },
    instagram: { connected: true, handle: '@mybrand.official', followers: '18.1k' },
    reddit: { connected: true, handle: 'u/dev_advocate', karma: '14.2k' },
    bluesky: { connected: true, handle: '@mybrand.bsky.social', followers: '5.6k' },
    youtube: { connected: false, handle: 'BrandTV', followers: '0' },
    tiktok: { connected: false, handle: '@mybrand_tok', followers: '0' },
    discord: { connected: true, handle: 'Postiz Community', members: '3.4k' },
    telegram: { connected: false, handle: '@mybrand_channel', subscribers: '0' }
  });

  // Save posts to localStorage
  useEffect(() => {
    localStorage.setItem('postiz_user_posts', JSON.stringify(posts));
  }, [posts]);

  // AI Prompt templates
  const AI_PRESETS = lang === 'bn' ? [
    { title: '🚀 নতুন প্রডাক্ট বা সার্ভিস লঞ্চ', prompt: 'আমাদের নতুন অটোমেশন টুলের রিলিজ নিয়ে একটি আকর্ষণীয় এবং কার্যকর পোস্ট লেখো।' },
    { title: '💡 গ্রোথ ট্রিকস ও টিপস', prompt: 'সোশ্যাল মিডিয়া ম্যানেজমেন্টে সময় বাঁচানোর ৩টি সেরা কৌশল শেয়ার করো।' },
    { title: '🔥 আকর্ষণীয় ট্রেন্ডিং মতামত', prompt: 'ম্যানুয়াল সোশ্যাল মিডিয়া শিডিউলিং কেন এখন সেকেলে—এই বিষয়ে একটি বোল্ড বার্তা তৈরি করো।' },
    { title: '🛠️ টেক ও ফ্রিল্যান্সিং টিউটোরিয়াল', prompt: 'কীভাবে AI এজেন্ট ও ক্লাউড টুলস দিয়ে সহজে ক্লায়েন্টের কাজ সম্পন্ন করা যায় তার গাইড।' }
  ] : [
    { title: '🚀 Product Launch', prompt: 'Announce a major v2 release of our agentic automation tool with key features and call to action.' },
    { title: '💡 Growth Retrospective', prompt: 'Share 3 non-obvious lessons learned while scaling social distribution from 0 to 50k views.' },
    { title: '🔥 Hot Industry Take', prompt: 'Write a provocative take on why traditional social media schedulers are obsolete in the AI agent era.' },
    { title: '🛠️ Dev Tips & Tutorial', prompt: 'Share a fast 4-step tutorial on connecting Claude Desktop to custom APIs via Model Context Protocol (MCP).' }
  ];

  // Handle AI generation
  const handleAiGenerate = () => {
    if (!aiPrompt.trim()) return;
    setIsGenerating(true);

    setTimeout(() => {
      let generatedText = '';
      if (lang === 'bn') {
        if (aiTone.includes('ভাইরাল') || aiTone.includes('Viral')) {
          generatedText = `বেশিরভাগ মানুষ দিনে ৩-৪ ঘণ্টা সময় নষ্ট করেন বিভিন্ন সোশ্যাল মিডিয়ায় আলাদা আলাদা পোস্ট করতে করতে।\n\nআমরা যেভাবে সম্পূর্ণ কাজ অটোমেট করলাম 🤖👇\n\n১. AI কো-পাইলট প্রতিটি চ্যানেলের সাইজ অনুযায়ী পোস্ট লিখে দেয়\n২. এক ক্লিকে ফেসবুক, লিংকডইন, এক্স এবং ইনস্টাগ্রামে সিঙ্ক\n৩. সেরা সময়ে অটোমেটিক পাবলিশ হয়ে যায়\n\nস্মার্টলি কাজ করুন, সময় বাঁচান! #freelance #automation #growth`;
        } else if (aiTone.includes('প্রফেশনাল') || aiTone.includes('Professional')) {
          generatedText = `আমরা আনন্দের সাথে জানাচ্ছি আমাদের নতুন সার্ভিস ও অটোমেশন আপডেট। আমাদের সিস্টেমের মাধ্যমে সোশ্যাল মিডিয়া ট্রাফিক এবং এনগেজমেন্ট গড়ে +৫০% বৃদ্ধি পেয়েছে।\n\nবিস্তারিত জানতে ও ট্রায়াল নিতে ইনবক্স করুন অথবা লিঙ্ক চেক করুন।`;
        } else if (aiTone.includes('মতামত') || aiTone.includes('Controversial')) {
          generatedText = `একটি কড়া সত্য: ২০২৬ সালে এসেও যদি আপনি বা আপনার সোশ্যাল মিডিয়া টিম দিনে ৫টি আলাদা ট্যাবে লগইন করে ম্যানুয়ালি পোস্ট কপি-পেস্ট করেন, তবে আপনি অযথা শ্রম ও অর্থ নষ্ট করছেন।\n\nAI ড্রাফট করবে, আপনি শুধু এক ক্লিকে অনুমোদন দেবেন—এটাই হলো আধুনিক সমাধান।`;
        } else {
          generatedText = `আজকের একটি গুরুত্বপূর্ণ আপডেট! ⚡\n\nআমাদের কাজের গতি বাড়াতে পোস্ট শিডিউলিং সম্পূর্ণ অটোমেট করা হয়েছে। আপনার নিজের সোশ্যাল প্রেজেন্স বাড়াতে আপনি কী ধরনের টুল ব্যবহার করেন? কমেন্টে জানান!`;
        }
      } else {
        if (aiTone.includes('Viral')) {
          generatedText = `Most teams waste 15+ hours a week manually copy-pasting social posts.\n\nHere is how we switched to 100% agentic scheduling with Postiz 🤖👇\n\n1. AI agents draft per-network tailored copy\n2. MCP server connects Claude directly to our visual calendar\n3. One-click human approval before going live across 30+ networks\n\nWork smarter, not harder. #automation #buildinpublic`;
        } else {
          generatedText = `We are proud to share our latest infrastructure milestone. By standardizing our content pipeline around autonomous AI workflows, our team has boosted cross-platform engagement by +50%.\n\nExplore our benchmarks and release notes below.`;
        }
      }

      setComposerContent(generatedText);
      setIsGenerating(false);
    }, 800);
  };

  // Toggle platform selection in composer
  const togglePlatform = (platId) => {
    if (selectedPlatforms.includes(platId)) {
      if (selectedPlatforms.length > 1) {
        setSelectedPlatforms(selectedPlatforms.filter(id => id !== platId));
      }
    } else {
      setSelectedPlatforms([...selectedPlatforms, platId]);
    }
  };

  // Schedule Post
  const handleSchedulePost = () => {
    if (!composerContent.trim()) return;

    const newPost = {
      id: `post-${Date.now()}`,
      content: composerContent,
      platforms: selectedPlatforms,
      scheduledDate: scheduleDate,
      scheduledTime: scheduleTime,
      status: 'scheduled'
    };

    setPosts([newPost, ...posts]);
    setComposerContent('');

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setActiveTab('calendar');
  };

  // Delete post
  const handleDeletePost = (id) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  // Toggle account connection
  const toggleAccountConnection = (platId) => {
    setConnectedAccounts(prev => ({
      ...prev,
      [platId]: {
        ...prev[platId],
        connected: !prev[platId]?.connected
      }
    }));
  };

  // Days for visual calendar
  const calendarDays = lang === 'bn' ? [
    { date: '2026-10-26', dayName: 'সোম ২৬' },
    { date: '2026-10-27', dayName: 'মঙ্গল ২৭', isToday: true },
    { date: '2026-10-28', dayName: 'বুধ ২৮' },
    { date: '2026-10-29', dayName: 'বৃহঃ ২৯' },
    { date: '2026-10-30', dayName: 'শুক্র ৩০' },
    { date: '2026-10-31', dayName: 'শনি ৩১' },
    { date: '2026-11-01', dayName: 'রবি ০১' }
  ] : [
    { date: '2026-10-26', dayName: 'Mon 26' },
    { date: '2026-10-27', dayName: 'Tue 27', isToday: true },
    { date: '2026-10-28', dayName: 'Wed 28' },
    { date: '2026-10-29', dayName: 'Thu 29' },
    { date: '2026-10-30', dayName: 'Fri 30' },
    { date: '2026-10-31', dayName: 'Sat 31' },
    { date: '2026-11-01', dayName: 'Sun 01' }
  ];

  return (
    <div style={{
      background: '#070b14',
      minHeight: '85vh',
      borderRadius: '24px',
      margin: '20px auto 60px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 25px 80px -20px rgba(0, 0, 0, 0.8), 0 0 50px rgba(139, 92, 246, 0.12)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Studio Header Bar */}
      <div style={{
        padding: '16px 24px',
        background: 'rgba(12, 18, 32, 0.95)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Bot size={18} color="#fff" />
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              {t.studioTitle}
              <span className="badge-pill" style={{ fontSize: '10px', padding: '2px 8px' }}>{t.studioBadge}</span>
            </h3>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              {Object.values(connectedAccounts).filter(a => a?.connected).length} {t.activeChannelsSummary}
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="tabs-header">
          <button
            onClick={() => setActiveTab('calendar')}
            className={`tab-btn ${activeTab === 'calendar' ? 'active' : ''}`}
          >
            <CalendarIcon size={16} /> {t.tabCalendar} ({posts.length})
          </button>
          <button
            onClick={() => setActiveTab('composer')}
            className={`tab-btn ${activeTab === 'composer' ? 'active' : ''}`}
          >
            <Sparkles size={16} color="#c084fc" /> {t.tabComposer}
          </button>
          <button
            onClick={() => setActiveTab('accounts')}
            className={`tab-btn ${activeTab === 'accounts' ? 'active' : ''}`}
          >
            <Globe size={16} /> {t.tabAccounts}
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`tab-btn ${activeTab === 'analytics' ? 'active' : ''}`}
          >
            <BarChart3 size={16} /> {t.tabAnalytics}
          </button>
        </div>

        <button
          onClick={() => setActiveTab('composer')}
          className="btn-primary"
          style={{ padding: '8px 16px', fontSize: '13px' }}
        >
          <Plus size={15} /> {t.btnCreatePost}
        </button>
      </div>

      {/* Main Studio Body */}
      <div style={{ padding: '24px', flex: 1 }}>
        {/* TAB 1: VISUAL CALENDAR */}
        {activeTab === 'calendar' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700 }}>{t.weeklyScheduleTitle}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}>
                  {t.weeklyScheduleDesc}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span className="status-badge status-published">● {t.badgePublished}</span>
                <span className="status-badge status-scheduled">● {t.badgeScheduled}</span>
                <span className="status-badge status-ai">● {t.badgeAiDraft}</span>
              </div>
            </div>

            {/* 7-Day Calendar Grid */}
            <div className="calendar-grid" style={{ marginBottom: '24px' }}>
              {calendarDays.map((day) => {
                const dayPosts = posts.filter(p => p.scheduledDate === day.date);
                return (
                  <div
                    key={day.date}
                    className={`calendar-cell ${day.isToday ? 'today' : ''}`}
                    onClick={() => {
                      setScheduleDate(day.date);
                      setActiveTab('composer');
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '13px', fontWeight: day.isToday ? 700 : 500, color: day.isToday ? '#c084fc' : '#cbd5e1' }}>
                        {day.dayName}
                      </span>
                      {day.isToday && (
                        <span style={{ fontSize: '9px', background: '#8b5cf6', color: '#fff', padding: '1px 5px', borderRadius: '4px' }}>
                          {lang === 'bn' ? 'আজ' : 'TODAY'}
                        </span>
                      )}
                    </div>

                    {/* Day's Posts */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', overflowY: 'auto', maxHeight: '180px' }}>
                      {dayPosts.map((post) => (
                        <div
                          key={post.id}
                          style={{
                            background: 'rgba(30, 41, 69, 0.8)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '6px',
                            padding: '6px 8px',
                            fontSize: '11px'
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                            <div style={{ display: 'flex', gap: '3px' }}>
                              {post.platforms.map(p => (
                                <img
                                  key={p}
                                  src={`/icons/platforms/${p}.png`}
                                  alt={p}
                                  style={{ width: '13px', height: '13px', objectFit: 'contain' }}
                                  onError={(e) => e.target.style.display = 'none'}
                                />
                              ))}
                            </div>
                            <span style={{ color: 'var(--text-muted)', fontSize: '10px' }}>{post.scheduledTime}</span>
                          </div>
                          <div style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            color: '#e2e8f0',
                            lineHeight: 1.3
                          }}>
                            {post.content}
                          </div>
                        </div>
                      ))}

                      {dayPosts.length === 0 && (
                        <div style={{ fontSize: '11px', color: 'var(--text-subtle)', fontStyle: 'italic', padding: '10px 0', textAlign: 'center' }}>
                          {t.clickToSchedule}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Posts List & Management Table */}
            <div className="glass-panel" style={{ padding: '20px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '16px' }}>{t.upcomingQueue}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {posts.map((post) => (
                  <div
                    key={post.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '10px',
                      gap: '16px',
                      flexWrap: 'wrap'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: '260px' }}>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        {post.platforms.map(p => (
                          <div key={p} style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={`/icons/platforms/${p}.png`} alt={p} style={{ width: '14px', height: '14px', objectFit: 'contain' }} onError={(e) => e.target.style.display = 'none'} />
                          </div>
                        ))}
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: '13px', color: '#f1f5f9', margin: 0, fontWeight: 500 }}>
                          {post.content}
                        </p>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                          {post.scheduledDate} ({post.scheduledTime})
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span className={`status-badge status-${post.status}`}>
                        {post.status === 'scheduled' ? t.badgeScheduled : t.badgePublished}
                      </span>
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: 'var(--text-subtle)',
                          cursor: 'pointer',
                          padding: '4px'
                        }}
                        title={lang === 'bn' ? 'মুছে ফেলুন' : 'Delete'}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: AI COMPOSER */}
        {activeTab === 'composer' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px' }}>
            {/* Left Column: Composer Controls */}
            <div className="glass-panel" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={17} color="#c084fc" /> {t.composerTitle}
                </h4>
                <span className="badge-pill" style={{ fontSize: '11px', padding: '3px 8px' }}>
                  {lang === 'bn' ? '৩০+ নেটওয়ার্ক সিঙ্ক' : 'Multi-Network'}
                </span>
              </div>

              {/* Target Platforms Picker */}
              <div style={{ marginBottom: '18px' }}>
                <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                  {t.selectChannelsLabel}
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {PLATFORMS_DATA.slice(0, 10).map((plat) => {
                    const isSelected = selectedPlatforms.includes(plat.id);
                    return (
                      <button
                        key={plat.id}
                        onClick={() => togglePlatform(plat.id)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '6px 12px',
                          borderRadius: '9999px',
                          fontSize: '12px',
                          fontWeight: 500,
                          cursor: 'pointer',
                          background: isSelected ? 'rgba(139, 92, 246, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                          border: isSelected ? '1px solid rgba(168, 85, 247, 0.6)' : '1px solid rgba(255, 255, 255, 0.08)',
                          color: isSelected ? '#ffffff' : 'var(--text-muted)',
                          transition: 'all 0.2s'
                        }}
                      >
                        <img src={plat.icon} alt={plat.name} style={{ width: '14px', height: '14px', objectFit: 'contain' }} onError={(e) => e.target.style.display = 'none'} />
                        {plat.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* AI Agent Prompt Box */}
              <div style={{
                background: 'rgba(139, 92, 246, 0.06)',
                border: '1px solid rgba(139, 92, 246, 0.25)',
                borderRadius: '12px',
                padding: '14px',
                marginBottom: '18px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#c084fc', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Bot size={14} /> {t.aiPromptLabel}
                  </span>
                  <select
                    value={aiTone}
                    onChange={(e) => setAiTone(e.target.value)}
                    style={{
                      background: 'rgba(15, 23, 42, 0.9)',
                      color: '#cbd5e1',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      fontSize: '11px',
                      borderRadius: '6px',
                      padding: '3px 8px'
                    }}
                  >
                    <option value={lang === 'bn' ? 'ভাইরাল হুক' : 'Viral Hook'}>{t.toneViral}</option>
                    <option value={lang === 'bn' ? 'প্রফেশনাল' : 'Professional'}>{t.toneProfessional}</option>
                    <option value={lang === 'bn' ? 'বোল্ড মতামত' : 'Controversial Take'}>{t.toneControversial}</option>
                    <option value={lang === 'bn' ? 'সহজ বার্তা' : 'Casual Update'}>{t.toneCasual}</option>
                  </select>
                </div>

                <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                  <input
                    type="text"
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder={t.promptPlaceholder}
                    style={{
                      flex: 1,
                      background: 'rgba(6, 9, 17, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      color: '#fff',
                      fontSize: '13px',
                      outline: 'none'
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleAiGenerate();
                    }}
                  />
                  <button
                    onClick={handleAiGenerate}
                    disabled={isGenerating}
                    className="btn-primary"
                    style={{ padding: '8px 16px', fontSize: '13px' }}
                  >
                    {isGenerating ? <RefreshCw size={14} className="animate-spin" /> : <Sparkles size={14} />}
                    {t.btnGenerate}
                  </button>
                </div>

                {/* Quick Prompt Presets */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {AI_PRESETS.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => setAiPrompt(p.prompt)}
                      style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '6px',
                        padding: '4px 8px',
                        fontSize: '11px',
                        color: 'var(--text-muted)',
                        cursor: 'pointer'
                      }}
                    >
                      {p.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Text Content */}
              <div style={{ marginBottom: '18px' }}>
                <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                  {t.postContentLabel}
                </label>
                <textarea
                  rows={6}
                  value={composerContent}
                  onChange={(e) => setComposerContent(e.target.value)}
                  placeholder={t.postContentPlaceholder}
                  style={{
                    width: '100%',
                    background: 'rgba(6, 9, 17, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    padding: '12px',
                    color: '#fff',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    resize: 'vertical',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              {/* Date & Time Schedule Controls */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                <div>
                  <label style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    {t.dateLabel}
                  </label>
                  <input
                    type="date"
                    value={scheduleDate}
                    onChange={(e) => setScheduleDate(e.target.value)}
                    style={{
                      width: '100%',
                      background: 'rgba(6, 9, 17, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      padding: '8px 10px',
                      color: '#fff',
                      fontSize: '13px'
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    {t.timeLabel}
                  </label>
                  <input
                    type="text"
                    value={scheduleTime}
                    onChange={(e) => setScheduleTime(e.target.value)}
                    style={{
                      width: '100%',
                      background: 'rgba(6, 9, 17, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      padding: '8px 10px',
                      color: '#fff',
                      fontSize: '13px'
                    }}
                  />
                </div>
              </div>

              {/* Schedule CTA */}
              <button
                onClick={handleSchedulePost}
                className="btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '15px' }}
              >
                <CalendarIcon size={16} /> {t.btnScheduleEverywhere} ({selectedPlatforms.length})
              </button>
            </div>

            {/* Right Column: Live Per-Platform Preview */}
            <div className="glass-panel" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h4 style={{ fontSize: '15px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Eye size={16} color="#38bdf8" /> {t.realtimePreviewTitle}
                </h4>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {selectedPlatforms.map(p => (
                    <button
                      key={p}
                      onClick={() => setPreviewPlatform(p)}
                      style={{
                        padding: '4px 8px',
                        borderRadius: '6px',
                        background: previewPlatform === p ? 'rgba(56, 189, 248, 0.2)' : 'transparent',
                        border: previewPlatform === p ? '1px solid #38bdf8' : '1px solid transparent',
                        cursor: 'pointer',
                        color: previewPlatform === p ? '#38bdf8' : 'var(--text-subtle)'
                      }}
                    >
                      <img src={`/icons/platforms/${p}.png`} alt={p} style={{ width: '14px', height: '14px', objectFit: 'contain' }} onError={(e) => e.target.style.display = 'none'} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview Container Mockup */}
              <div style={{
                background: previewPlatform === 'x' ? '#000000' : 'rgba(15, 23, 42, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '20px',
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  {/* Account Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      color: '#fff',
                      fontSize: '15px'
                    }}>
                      P
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                        Postiz Official
                        <CheckCircle size={14} color="#38bdf8" />
                      </div>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                        {previewPlatform === 'x' ? '@postiz_official' : 'Postiz Scheduler'}
                      </span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <p style={{
                    fontSize: '14px',
                    color: '#f8fafc',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-wrap',
                    minHeight: '80px'
                  }}>
                    {composerContent || (lang === 'bn' ? 'বাম পাশের ফর্মে লিখুন বা এআই দিয়ে জেনারেট করুন—এখানে আপনার ' + previewPlatform.toUpperCase() + ' পোস্টের রিয়েল প্রিভিউ দেখতে পাবেন...' : 'Write or generate something on the left to see the live rendered preview for ' + previewPlatform.toUpperCase() + '...')}
                  </p>
                </div>

                {/* Platform footer metadata */}
                <div style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '12px',
                  color: 'var(--text-muted)'
                }}>
                  <span>{t.dateLabel} {scheduleDate} ({scheduleTime})</span>
                  <span>{composerContent.length} chars</span>
                </div>
              </div>

              {/* Tips */}
              <div style={{ marginTop: '18px', fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                {t.previewTip}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CONNECTED ACCOUNTS */}
        {activeTab === 'accounts' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700 }}>{t.channelsTitle}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  {t.channelsDesc}
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {PLATFORMS_DATA.map((plat) => {
                const isConn = connectedAccounts[plat.id]?.connected;
                const account = connectedAccounts[plat.id];

                return (
                  <div
                    key={plat.id}
                    className="interactive-card"
                    style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <img src={plat.icon} alt={plat.name} style={{ width: '22px', height: '22px', objectFit: 'contain' }} onError={(e) => e.target.style.display = 'none'} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 600, margin: 0 }}>{plat.name}</h4>
                        <span style={{ fontSize: '11px', color: isConn ? '#34d399' : 'var(--text-subtle)' }}>
                          {isConn ? `${account?.handle || (lang === 'bn' ? 'সংযুক্ত' : 'Connected')} (${account?.followers || 'Ready'})` : (lang === 'bn' ? 'সংযুক্ত নয়' : 'Not connected')}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleAccountConnection(plat.id)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '9999px',
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        border: isConn ? '1px solid rgba(239, 68, 68, 0.3)' : '1px solid rgba(139, 92, 246, 0.5)',
                        background: isConn ? 'rgba(239, 68, 68, 0.1)' : 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                        color: isConn ? '#f87171' : '#ffffff',
                        transition: 'all 0.2s'
                      }}
                    >
                      {isConn ? t.btnDisconnect : t.btnConnect}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 4: ANALYTICS */}
        {activeTab === 'analytics' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700 }}>{t.analyticsTitle}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  {t.analyticsDesc}
                </p>
              </div>
            </div>

            {/* KPI Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
              <div className="glass-panel" style={{ padding: '20px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>{t.kpiReach}</span>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#38bdf8' }}>142,850</div>
                <span style={{ fontSize: '12px', color: '#34d399' }}>↑ +24.8% {lang === 'bn' ? 'গত মাসের তুলনায়' : 'vs last month'}</span>
              </div>
              <div className="glass-panel" style={{ padding: '20px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>{t.kpiEngagement}</span>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#c084fc' }}>6.4%</div>
                <span style={{ fontSize: '12px', color: '#34d399' }}>↑ +1.8% {lang === 'bn' ? 'গড় বৃদ্ধি' : 'benchmark'}</span>
              </div>
              <div className="glass-panel" style={{ padding: '20px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>{t.kpiPosts}</span>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#34d399' }}>{posts.length + 38}</div>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{lang === 'bn' ? '৮টি চ্যানেলে পাবলিশড' : 'Across 8 active networks'}</span>
              </div>
              <div className="glass-panel" style={{ padding: '20px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>{t.kpiTimeSaved}</span>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#fbbf24' }}>32.5 hrs</div>
                <span style={{ fontSize: '12px', color: '#34d399' }}>{lang === 'bn' ? 'মূল্যবান শ্রম সাশ্রয়' : '$2,450 estimated value'}</span>
              </div>
            </div>

            {/* Platform Comparison Breakdown */}
            <div className="glass-panel" style={{ padding: '24px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '16px' }}>
                {lang === 'bn' ? 'চ্যানেল ভিত্তিক বিস্তারিত ফলাফল' : 'Channel Breakdown & Effectiveness'}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { name: 'Facebook', icon: '/icons/platforms/facebook.png', impressions: '54.6k', rate: '8.4%', color: '#1877F2' },
                  { name: 'LinkedIn', icon: '/icons/platforms/linkedin.png', impressions: '68.2k', rate: '7.8%', color: '#0A66C2' },
                  { name: 'X (Twitter)', icon: '/icons/platforms/x.png', impressions: '45.1k', rate: '5.2%', color: '#ffffff' },
                  { name: 'Instagram', icon: '/icons/platforms/instagram.png', impressions: '21.4k', rate: '6.9%', color: '#E1306C' }
                ].map((item) => (
                  <div key={item.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <img src={item.icon} alt={item.name} style={{ width: '20px', height: '20px', objectFit: 'contain' }} onError={(e) => e.target.style.display = 'none'} />
                      <span style={{ fontWeight: 600, fontSize: '14px' }}>{item.name}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '30px' }}>
                      <div>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block' }}>
                          {lang === 'bn' ? 'ইম্প্রেশন' : 'IMPRESSIONS'}
                        </span>
                        <span style={{ fontWeight: 700, fontSize: '14px' }}>{item.impressions}</span>
                      </div>
                      <div>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block' }}>
                          {lang === 'bn' ? 'এনগেজমেন্ট' : 'ENGAGEMENT'}
                        </span>
                        <span style={{ fontWeight: 700, fontSize: '14px', color: '#34d399' }}>{item.rate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
