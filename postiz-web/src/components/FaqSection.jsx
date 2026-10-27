import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS_DATA } from '../data/postizData';

export default function FaqSection({ t, lang = 'bn' }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  const bnFaqs = [
    {
      q: 'পোস্টিজ (Postiz) কী এবং এটি বাফার বা হুটস্যুট থেকে কেন আলাদা?',
      a: 'পোস্টিজ হলো বিশ্বের অন্যতম প্রথম এজেন্টিক সোশ্যাল মিডিয়া শিডিউলিং প্ল্যাটফর্ম। সাধারণ সোশ্যাল মিডিয়া টুলে আপনাকে প্রতিটি পোস্ট কপি-পেস্ট করতে হয়, কিন্তু পোস্টিজে AI এজেন্ট (Claude, ChatGPT, Cursor, CLI, MCP) স্বয়ংক্রিয়ভাবে পোস্ট পরিকল্পনা, লেখা এবং ছবি তৈরি করতে পারে। আপনি কেবল কেন্দ্রীয় ভিজুয়াল ক্যালেন্ডারে এক ক্লিকে দেখে নিয়ে অনুমোদন দেবেন।'
    },
    {
      q: 'AI এজেন্টগুলো কীভাবে পোস্টিজের সাথে কাজ করে?',
      a: 'পোস্টিজে রয়েছে ৩টি মাধ্যম: (১) Claude Desktop, Cursor ও ChatGPT-র জন্য তৈরি করা অফিশিয়াল হোস্টেড MCP সার্ভার, (২) টার্মিনাল ও সেলফ-ড্রাইভেন এজেন্টের জন্য CLI ও স্কিল ("npx skills add gitroomhq/postiz-agent"), এবং (৩) স্ট্যান্ডার্ড REST API ও ওয়েব হুকস।'
    },
    {
      q: 'আমি কি নিজের কাজের জন্য সম্পূর্ণ বিনামূল্যে এটি সেলফ-হোস্ট করতে পারব?',
      a: 'হ্যাঁ, অবশ্যই! পোস্টিজ সম্পূর্ণ ওপেন-সোর্স (AGPL-3.0 লাইসেন্স)। এর আসল সম্পূর্ণ সোর্স কোডটি আপনার এই প্রজেক্টের postiz-official ডিরেক্টরিতে ক্লোন করে রাখা আছে। আপনি ডকার কম্পোজ (docker compose up) দিয়ে নিজের ল্যাপটপ বা ক্লাউড সার্ভারে আজীবন ফ্রিতে চালাতে পারবেন।'
    },
    {
      q: 'পোস্টিজ কোন কোন সোশ্যাল মিডিয়া সাপোর্ট করে?',
      a: 'পোস্টিজ ৩০টিরও বেশি নেটওয়ার্ক সাপোর্ট করে: Facebook, Instagram, LinkedIn (প্রোফাইল ও কোম্পানি পেজ), X (Twitter), YouTube, TikTok, Threads, Reddit, Pinterest, Bluesky, Mastodon, Discord, Telegram, Slack, Medium, Dev.to, Hashnode, WordPress, Twitch ইত্যাদি।'
    },
    {
      q: 'পোস্ট পাবলিশ হওয়ার আগে কি প্রিভিউ দেখা যায়?',
      a: 'হ্যাঁ, পোস্ট লেখার সাথে সাথেই প্রতিটি প্ল্যাটফর্মের জন্য আলাদা রিয়েল-টাইম প্রিভিউ দেখতে পারবেন (যেমন: এক্স-এর জন্য ২৮০ অক্ষরের সীমা, লিঙ্কডইনের ফরম্যাটিং, কিংবা ইনস্টাগ্রামের হ্যাশট্যাগ ও মিডিয়া লেআউট)।'
    },
    {
      q: 'এভারগ্রিন বা পুনরাবৃত্তি (Repeat) পোস্ট এবং RSS ফিড কি সাপোর্ট করে?',
      a: 'হ্যাঁ। যেকোনো ভালো পোস্ট নির্দিষ্ট সময় পর পর (যেমন প্রতি ১৪ বা ৩০ দিন অন্তর) স্বয়ংক্রিয়ভাবে পুনরায় পোস্ট করার জন্য সেট করে রাখা যায়। এছাড়া ব্লগের RSS ফিড লিঙ্ক করে দিলে নতুন আর্টিকেল আসার সাথে সাথে স্বয়ংক্রিয়ভাবে সোশ্যাল মিডিয়ায় পোস্ট হয়ে যাবে।'
    }
  ];

  const faqsToDisplay = lang === 'bn' ? bnFaqs : FAQS_DATA;

  return (
    <section id="faq" style={{ padding: '80px 0' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge-pill" style={{ marginBottom: '14px' }}>
            <HelpCircle size={14} color="#a855f7" /> {t.faqBadge}
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', lineHeight: 1.2, marginBottom: '16px' }}>
            {t.faqTitle} <span className="text-gradient-purple">{t.faqTitleGradient}</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
            {t.faqSubtitle}
          </p>
        </div>

        {/* FAQs Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqsToDisplay.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  borderRadius: '14px',
                  border: isOpen ? '1px solid rgba(168, 85, 247, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                  overflow: 'hidden',
                  transition: 'all 0.2s'
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: 600,
                    textAlign: 'left',
                    cursor: 'pointer',
                    gap: '16px'
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    color="var(--text-muted)"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 24px 20px',
                    color: 'var(--text-muted)',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                    paddingTop: '14px'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
