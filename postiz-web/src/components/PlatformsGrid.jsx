import React, { useState } from 'react';
import { Search, Globe, CheckCircle } from 'lucide-react';
import { PLATFORMS_DATA } from '../data/postizData';

export default function PlatformsGrid({ onSelectPlatform }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Social', 'Video', 'Community', 'Publishing', 'Professional', 'Web3'];

  const filteredPlatforms = PLATFORMS_DATA.filter((plat) => {
    const matchesCategory = selectedCategory === 'All' || plat.category === selectedCategory;
    const matchesSearch = plat.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="networks" style={{ padding: '80px 0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="badge-pill" style={{ marginBottom: '14px' }}>
            <Globe size={14} color="#38bdf8" /> 30+ Social Networks
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', lineHeight: 1.2, marginBottom: '16px' }}>
            Connect all the channels <span className="text-gradient-purple">you already use</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '16px', maxWidth: '640px', margin: '0 auto' }}>
            From X and LinkedIn to TikTok, Bluesky, Mastodon, Telegram, and developer publications. Manage them all from one calendar.
          </p>
        </div>

        {/* Filter bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '32px'
        }}>
          {/* Categories */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: selectedCategory === cat ? '1px solid rgba(168, 85, 247, 0.7)' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: selectedCategory === cat ? 'rgba(168, 85, 247, 0.25)' : 'rgba(15, 23, 42, 0.6)',
                  color: selectedCategory === cat ? '#ffffff' : 'var(--text-muted)',
                  transition: 'all 0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(15, 23, 42, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '9999px',
            padding: '6px 14px',
            width: '240px'
          }}>
            <Search size={15} color="var(--text-muted)" />
            <input
              type="text"
              placeholder="Search 30+ networks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '13px',
                outline: 'none',
                width: '100%'
              }}
            />
          </div>
        </div>

        {/* Channels Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '16px'
        }}>
          {filteredPlatforms.map((plat) => (
            <div
              key={plat.id}
              className="interactive-card"
              style={{
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '10px'
              }}
            >
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}>
                <img
                  src={plat.icon}
                  alt={plat.name}
                  style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 600, margin: 0, color: '#f1f5f9' }}>{plat.name}</h4>
                <span style={{ fontSize: '11px', color: 'var(--text-subtle)' }}>{plat.category}</span>
              </div>

              <span style={{
                fontSize: '10px',
                color: '#34d399',
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
                fontWeight: 600
              }}>
                <CheckCircle size={11} /> API Supported
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
