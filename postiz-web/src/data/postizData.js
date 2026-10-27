export const PLATFORMS_DATA = [
  { id: 'instagram', name: 'Instagram', icon: '/icons/platforms/instagram.png', color: '#E1306C', category: 'Social', popular: true },
  { id: 'youtube', name: 'YouTube', icon: '/icons/platforms/youtube.png', color: '#FF0000', category: 'Video', popular: true },
  { id: 'linkedin', name: 'LinkedIn', icon: '/icons/platforms/linkedin.png', color: '#0A66C2', category: 'Professional', popular: true },
  { id: 'x', name: 'X (Twitter)', icon: '/icons/platforms/x.png', color: '#000000', category: 'Social', popular: true },
  { id: 'tiktok', name: 'TikTok', icon: '/icons/platforms/tiktok.png', color: '#00F2FE', category: 'Video', popular: true },
  { id: 'facebook', name: 'Facebook', icon: '/icons/platforms/facebook.png', color: '#1877F2', category: 'Social', popular: true },
  { id: 'reddit', name: 'Reddit', icon: '/icons/platforms/reddit.png', color: '#FF4500', category: 'Community', popular: true },
  { id: 'threads', name: 'Threads', icon: '/icons/platforms/threads.png', color: '#000000', category: 'Social', popular: true },
  { id: 'bluesky', name: 'Bluesky', icon: '/icons/platforms/bluesky.png', color: '#0085FF', category: 'Social', popular: true },
  { id: 'pinterest', name: 'Pinterest', icon: '/icons/platforms/pinterest.png', color: '#BD081C', category: 'Social', popular: false },
  { id: 'mastodon', name: 'Mastodon', icon: '/icons/platforms/mastodon.png', color: '#6364FF', category: 'Social', popular: false },
  { id: 'discord', name: 'Discord', icon: '/icons/platforms/discord.png', color: '#5865F2', category: 'Community', popular: true },
  { id: 'slack', name: 'Slack', icon: '/icons/platforms/slack.png', color: '#4A154B', category: 'Workplace', popular: false },
  { id: 'telegram', name: 'Telegram', icon: '/icons/platforms/telegram.png', color: '#229ED9', category: 'Community', popular: true },
  { id: 'dribbble', name: 'Dribbble', icon: '/icons/platforms/dribbble.png', color: '#EA4C89', category: 'Design', popular: false },
  { id: 'medium', name: 'Medium', icon: '/icons/platforms/medium.png', color: '#000000', category: 'Publishing', popular: false },
  { id: 'devto', name: 'Dev.to', icon: '/icons/platforms/devto.png', color: '#0A0A0A', category: 'Publishing', popular: true },
  { id: 'hashnode', name: 'Hashnode', icon: '/icons/platforms/hashnode.png', color: '#2962FF', category: 'Publishing', popular: false },
  { id: 'wordpress', name: 'WordPress', icon: '/icons/platforms/wordpress.png', color: '#21759B', category: 'Publishing', popular: false },
  { id: 'lemmy', name: 'Lemmy', icon: '/icons/platforms/lemmy.png', color: '#00B894', category: 'Community', popular: false },
  { id: 'nostr', name: 'Nostr', icon: '/icons/platforms/nostr.png', color: '#9B51E0', category: 'Web3', popular: false },
  { id: 'vk', name: 'VK', icon: '/icons/platforms/vk.png', color: '#0077FF', category: 'Social', popular: false },
  { id: 'twitch', name: 'Twitch', icon: '/icons/platforms/twitch.png', color: '#9146FF', category: 'Video', popular: false },
  { id: 'kick', name: 'Kick', icon: '/icons/platforms/kick.png', color: '#53FC18', category: 'Video', popular: false },
  { id: 'skool', name: 'Skool', icon: '/icons/platforms/skool.png', color: '#F59E0B', category: 'Community', popular: false },
  { id: 'whop', name: 'Whop', icon: '/icons/platforms/whop.png', color: '#FF5C00', category: 'Commerce', popular: false },
  { id: 'gmb', name: 'Google My Business', icon: '/icons/platforms/gmb.png', color: '#4285F4', category: 'Business', popular: false },
  { id: 'listmonk', name: 'Listmonk', icon: '/icons/platforms/listmonk.png', color: '#2C3E50', category: 'Email', popular: false },
  { id: 'mewe', name: 'MeWe', icon: '/icons/platforms/mewe.png', color: '#3B5998', category: 'Social', popular: false },
  { id: 'wrapcast', name: 'Warpcast / Farcaster', icon: '/icons/platforms/wrapcast.png', color: '#8A63D2', category: 'Web3', popular: false }
];

export const TESTIMONIALS_DATA = [
  { name: 'Lisa Anders', platform: 'Reddit', stat: 'x2', label: 'Boost in engagement rate', icon: '/icons/platforms/reddit.png' },
  { name: 'Cindy Goodman', platform: 'Facebook', stat: 'x4', label: 'Increase in traffic', icon: '/icons/platforms/facebook.png' },
  { name: 'Paula Wright', platform: 'LinkedIn', stat: '+50%', label: 'Increase in followers', icon: '/icons/platforms/linkedin.png' },
  { name: 'Larry Williams', platform: 'Dribbble', stat: '+15%', label: 'Followers growth', icon: '/icons/platforms/dribbble.png' },
  { name: 'Gilbert Ward', platform: 'Instagram', stat: '+3k', label: 'Saved per month', icon: '/icons/platforms/instagram.png' },
  { name: 'Sherry Porter', platform: 'YouTube', stat: '+20%', label: 'Subscriber growth', icon: '/icons/platforms/youtube.png' },
  { name: 'Raymond Harrison', platform: 'TikTok', stat: '+10%', label: 'Grew following', icon: '/icons/platforms/tiktok.png' },
  { name: 'Joel Johnson', platform: 'TikTok', stat: '+15%', label: 'Increase in impressions', icon: '/icons/platforms/tiktok.png' },
  { name: 'Frank Grant', platform: 'LinkedIn', stat: '2k', label: 'Saved per month', icon: '/icons/platforms/linkedin.png' },
  { name: 'Bernice Wilson', platform: 'Reddit', stat: '+10%', label: 'Increase in impressions', icon: '/icons/platforms/reddit.png' },
  { name: 'Jonathan Turner', platform: 'Facebook', stat: '+3k', label: 'Followers gained', icon: '/icons/platforms/facebook.png' }
];

export const AGENT_WORKFLOWS = [
  {
    id: 'claude',
    name: 'Via Claude',
    badge: 'Hosted MCP Server',
    desc: 'Connect Claude to Postiz through the official Model Context Protocol (MCP) server. Claude can draft copy, make images, and schedule directly.',
    promptExample: '“Hey Claude, analyze our product release notes, generate a punchy 3-part thread for X and a detailed summary for LinkedIn, and schedule them for tomorrow 9 AM UTC.”',
    codeSnippet: `{
  "mcpServers": {
    "postiz": {
      "command": "npx",
      "args": ["-y", "@postiz/mcp-server"],
      "env": {
        "POSTIZ_API_KEY": "pstz_live_xxxxxxxxxxxx"
      }
    }
  }
}`
  },
  {
    id: 'chatgpt',
    name: 'Via ChatGPT',
    badge: 'GPT Action & OAuth',
    desc: 'Generate and refine social media posts using ChatGPT with simple conversational prompts and direct calendar access.',
    promptExample: '“Draft an announcement about our new API SDK. Create an eye-catching thumbnail and queue it for Instagram and Bluesky.”',
    codeSnippet: `# Use Postiz GPT Action in ChatGPT Plus:
1. Enable Postiz Connector in GPT Actions
2. Authorize your Postiz account via OAuth2
3. Ask ChatGPT: "Schedule my next week content calendar"`
  },
  {
    id: 'claude-code',
    name: 'Via Claude Code & CLI',
    badge: 'Terminal Native',
    desc: 'Create, test, and schedule posts directly from your terminal or developer agent using the official Postiz CLI and skills.',
    promptExample: 'claude "npx skills add gitroomhq/postiz-agent; schedule latest git release to X and LinkedIn"',
    codeSnippet: `# Install Postiz Agent Skill:
npx skills add gitroomhq/postiz-agent

# Post directly from CLI:
postiz post --channels twitter,linkedin --text "Ship day! Check our newest release."`
  },
  {
    id: 'grok',
    name: 'Via Grok Bot',
    badge: 'Real-time Trends',
    desc: 'Use Grok Bot with Postiz to detect viral trending topics on X and automatically generate context-aware posts.',
    promptExample: '“Spot trending topics in AI infra today, craft an insightful viewpoint post, and schedule it on X and Threads.”',
    codeSnippet: `# Grok Bot Integration
grok.connect({
  target: 'postiz-workspace',
  scheduleMode: 'auto-optimal-time'
})`
  },
  {
    id: 'automation',
    name: 'Via n8n & Make.com',
    badge: 'Visual Workflow',
    desc: 'Connect Postiz to n8n, Make.com, or Zapier and let your autonomous pipelines draft, approve, and publish across 30+ channels hands-free.',
    promptExample: 'New Notion page approved -> Trigger n8n workflow -> Call Postiz API -> Publish to 10 channels',
    codeSnippet: `// Postiz REST API Call
POST https://api.postiz.com/public/v1/posts
Authorization: Bearer <API_TOKEN>
{
  "content": "Automated broadcast from n8n!",
  "providers": ["x", "linkedin", "reddit"],
  "scheduledAt": "2026-10-30T14:00:00Z"
}`
  }
];

export const PRICING_PLANS = [
  {
    id: 'standard',
    name: 'Standard',
    monthlyPrice: 29,
    annualPrice: 23,
    channels: 5,
    tagline: 'Ideal for solo creators & indie hackers',
    featured: false,
    features: [
      '5 Connected Channels',
      'AI Copilot (Hook & Caption writer)',
      '3 AI Videos / month',
      '60 min AI Video clipping',
      'Public REST API & Webhooks',
      'Cross-posting & Visual Calendar',
      'RSS Feed auto-posting',
      'Single user workspace'
    ],
    missing: ['Unlimited team members', 'AI Image generation', 'Customer multi-groups']
  },
  {
    id: 'team',
    name: 'Team',
    monthlyPrice: 39,
    annualPrice: 31,
    channels: 10,
    tagline: 'Best for growing startups & content teams',
    featured: false,
    features: [
      '10 Connected Channels',
      'Unlimited Team Members',
      '100 AI Images / month',
      '10 AI Videos / month',
      '120 min AI Video clipping',
      'Customer Groups (Brand isolation)',
      'Public API & Hosted MCP Server',
      'Auto-plugs & Engagement triggers',
      'Visual Calendar & Preview engine'
    ],
    missing: []
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 49,
    annualPrice: 39,
    channels: 30,
    tagline: 'Most Popular for creators & boutique agencies',
    featured: true,
    badge: 'MOST POPULAR',
    features: [
      '30 Connected Channels',
      'Unlimited Team Members',
      '300 AI Images / month',
      '30 AI Videos / month',
      '300 min AI Video clipping',
      'Full MCP Server & CLI access',
      'Comprehensive Cross-Platform Analytics',
      'Evergreen Post Recurrence',
      'Dedicated Customer Workspaces',
      'Priority Support via Discord'
    ],
    missing: []
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    monthlyPrice: 99,
    annualPrice: 79,
    channels: 100,
    tagline: 'For full-scale agencies and high-volume brands',
    featured: false,
    features: [
      '100 Connected Channels',
      'Unlimited Team Members',
      '500 AI Images / month',
      '60 AI Videos / month',
      '600 min AI Video clipping',
      'Multi-Brand Workspace Isolation',
      'Custom webhook triggers & n8n nodes',
      'Full White-label capabilities',
      'Unlimited RSS feeds & sets',
      '1-on-1 Onboarding & SLA'
    ],
    missing: []
  }
];

export const FAQS_DATA = [
  {
    q: 'What is Postiz and how is it different from Buffer or Hootsuite?',
    a: 'Postiz is the first agentic social media scheduling platform. Unlike traditional schedulers where you manually click and type everything, Postiz is built from day one to be driven by AI agents (Claude, ChatGPT, Cursor, CLI, MCP). Agents can plan, generate visuals, and schedule posts across 30+ networks while you review and approve everything in one unified visual calendar.'
  },
  {
    q: 'How do AI agents connect to Postiz?',
    a: 'Postiz provides three agentic interfaces: (1) A hosted MCP server for Claude Desktop, Claude Code, Cursor, and ChatGPT; (2) A CLI & skill installable via "npx skills add gitroomhq/postiz-agent" for agents that execute bash commands; and (3) Official platform connectors and a clean REST API with Webhooks.'
  },
  {
    q: 'Can I self-host Postiz for free?',
    a: 'Yes! Postiz is 100% open source under the AGPL-3.0 license. The exact same core codebase is published on GitHub at gitroomhq/postiz-app (which we have cloned in the postiz-official directory). You can run it on your own server or laptop with Docker Compose for free. The Cloud version at postiz.com provides pre-approved social API credentials, managed cloud infrastructure, and turnkey AI generation.'
  },
  {
    q: 'How many social networks does Postiz support?',
    a: 'Postiz supports over 30+ networks from one calendar: X, LinkedIn (profiles & company pages), Facebook, Instagram, Threads, TikTok, YouTube, Pinterest, Reddit, Bluesky, Mastodon, Discord, Telegram, Slack, Lemmy, Farcaster (Warpcast), Nostr, Medium, Dev.to, Hashnode, WordPress, Dribbble, Twitch, Kick, Skool, Whop, Google My Business, Listmonk, and more.'
  },
  {
    q: 'Can I preview how a post will look on each network before publishing?',
    a: 'Yes. Write a post once and each selected channel receives its own specialized preview with custom character limits (e.g. 280 on X, rich formatting on LinkedIn, hashtags on Instagram). You can tweak the copy for each network independently.'
  },
  {
    q: 'Does Postiz support recurring / evergreen posts and RSS feeds?',
    a: 'Yes. Any post can be configured to repeat on a cadence (e.g. every 14 or 30 days) across any subset of channels. Postiz also allows connecting RSS feeds to turn your blog or newsletter into an automated social stream.'
  }
];

export const INITIAL_POSTS = [
  {
    id: 'post-1',
    content: '🚀 Excited to unveil our autonomous AI social media engine! Plan once, publish to 30+ platforms seamlessly.',
    platforms: ['x', 'linkedin', 'bluesky'],
    scheduledDate: '2026-10-28',
    scheduledTime: '09:30 AM',
    status: 'scheduled',
    image: null
  },
  {
    id: 'post-2',
    content: '5 Key design principles for building frictionless agentic software in 2026 🧵👇',
    platforms: ['x', 'threads'],
    scheduledDate: '2026-10-29',
    scheduledTime: '02:00 PM',
    status: 'scheduled',
    image: null
  },
  {
    id: 'post-3',
    content: 'We just crossed 14,000 GitHub Stars on Postiz! Massive thanks to the open-source community 🙌 #opensource #devtools',
    platforms: ['linkedin', 'reddit', 'devto'],
    scheduledDate: '2026-10-27',
    scheduledTime: '11:00 AM',
    status: 'published',
    image: null
  },
  {
    id: 'post-4',
    content: 'Quick tip: You can connect Claude Desktop to your Postiz calendar using our hosted MCP endpoint.',
    platforms: ['x', 'discord'],
    scheduledDate: '2026-10-31',
    scheduledTime: '04:15 PM',
    status: 'scheduled',
    image: null
  }
];
