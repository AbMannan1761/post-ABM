# Postiz Copy & Full Workspace Solution 📨🤖

এই ডিরেক্টরিতে **Postiz** (https://postiz.com/)-এর দুটি সমাধান প্রস্তুত রয়েছে:

---

## ১. `postiz-web` (Modern Web Application & Landing Page Clone)
- **অবস্থান:** `postiz-web/`
- **টেকনোলজি:** React, Vite, Modern Vanilla CSS, Lucide Icons, Canvas Confetti
- **বৈশিষ্ট্যসমূহ:**
  - 🌟 **Hero & Autopilot AI Agents**: postiz.com-এর অফিসিয়াল ডেটা ও কপিরাইটিং সহ আধুনিক ডার্ক থিম ও গ্লাস মরফিজম ডিজাইন।
  - 📅 **Interactive Postiz Studio Cockpit**:
    - **Visual Calendar**: সাপ্তাহিক/মাসিক ক্যালেন্ডারে শিডিউল করা পোস্ট দেখুন এবং নতুন পোস্ট যোগ করুন।
    - **AI Post Composer**: টার্গেট চ্যানেল (X, LinkedIn, Instagram, TikTok, Reddit, Bluesky ইত্যাদি) নির্বাচন, বিভিন্ন টোন (Viral Hook, Professional, Controversial) এবং প্রম্পট দিয়ে এক ক্লিকে AI জেনারেশন।
    - **Live Platform Preview**: X, LinkedIn, Instagram ইত্যাদিতে পোস্টটি দেখতে কেমন হবে তার রিয়েল-টাইম প্রিভিউ।
    - **Channels Manager**: ৩০+ সোশ্যাল নেটওয়ার্কের কানেকশন ও ফলোয়ার স্ট্যাটাস ম্যানেজমেন্ট।
    - **Performance Analytics**: ইম্প্রেশন, এনগেজমেন্ট রেট এবং চ্যানেল ভিত্তিক তুলনামূলক রিপোর্ট।
  - 🚀 **AI Agent Workflows**: Claude MCP server, ChatGPT, Claude Code CLI (`npx skills add gitroomhq/postiz-agent`), Grok এবং n8n অটোমেশন ইন্টিগ্রেশন।
  - 🌐 **30+ Supported Social Channels**: ফিল্টার ও সার্চ সহ সব প্ল্যাটফর্মের অফিসিয়াল আইকন গ্রিড।
  - 💰 **Interactive Pricing Calculator**: Standard ($29/mo), Team ($39/mo), Pro ($49/mo), Ultimate ($99/mo) — মাসিক ও বার্ষিক (২০% ডিসকাউন্ট) সুইচ সহ।
  - ❓ **FAQ Accordion**: postiz.com-এর অফিসিয়াল প্রশ্ন-উত্তর।

### রান করার নির্দেশাবলী:
```bash
cd postiz-web
npm run dev
```
এরপর ব্রাউজারে `http://localhost:5173/` ওপেন করুন।

---

## ২. `postiz-official` (Official Open-Source Postiz Source Code)
- **অবস্থান:** `postiz-official/`
- **উৎস:** [github.com/gitroomhq/postiz-app](https://github.com/gitroomhq/postiz-app)
- **লাইসেন্স:** AGPL-3.0
- **টেক স্ট্যাক:** NestJS (Backend), Next.js (Frontend), Prisma, PostgreSQL, Redis, Temporal.

### সেলফ-হোস্টিং করার ধাপ:
```bash
cd postiz-official
cp .env.example .env
docker compose up -d
```
> **নোট:** Docker Compose চালানোর জন্য আপনার সিস্টেমে Docker Desktop চালু থাকতে হবে।

---

## প্রজেক্ট স্ট্রাকচার:
```
Postiz copy/
├── postiz-web/          # কাস্টম রিঅ্যাক্ট ওয়েব অ্যাপ ও ইন্টারঅ্যাক্টিভ স্টুডিও
│   ├── public/          # অফিসিয়াল সোশ্যাল আইকন ও ব্র্যান্ড এসেটস
│   ├── src/             # কম্পোনেন্ট, ক্যালেন্ডার, AI কম্পোজার, অ্যানালিটিক্স
│   └── package.json
├── postiz-official/     # অফিসিয়াল গিটহাব রিপোজিটরি (gitroomhq/postiz-app)
│   ├── apps/            # backend, frontend, extension, sdk
│   ├── docker-compose.yaml
│   └── package.json
└── README.md
```
