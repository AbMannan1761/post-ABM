import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StudioApp from './components/StudioApp';
import AgentWorkflows from './components/AgentWorkflows';
import FeaturesSection from './components/FeaturesSection';
import PlatformsGrid from './components/PlatformsGrid';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import SelfHostGuideModal from './components/SelfHostGuideModal';
import Footer from './components/Footer';
import { TRANSLATIONS } from './data/translations';

export default function App() {
  const [lang, setLang] = useState('bn'); // 'bn' (Default Bangla) | 'en'
  const [activeView, setActiveView] = useState('landing'); // 'landing' | 'studio'
  const [isSelfHostModalOpen, setIsSelfHostModalOpen] = useState(false);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.bn;

  const handleLaunchStudio = () => {
    setActiveView('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Bar */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenSelfHostModal={() => setIsSelfHostModalOpen(true)}
        lang={lang}
        setLang={setLang}
        t={t}
      />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {activeView === 'studio' ? (
          <div className="container" style={{ paddingTop: '20px' }}>
            <StudioApp
              onClose={() => setActiveView('landing')}
              t={t}
              lang={lang}
            />
          </div>
        ) : (
          <>
            {/* Landing Hero */}
            <Hero
              onLaunchStudio={handleLaunchStudio}
              onOpenSelfHostModal={() => setIsSelfHostModalOpen(true)}
              t={t}
              lang={lang}
            />

            {/* Embedded Live Studio Preview section */}
            <section style={{ padding: '40px 0', position: 'relative' }}>
              <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <span className="badge-pill" style={{ marginBottom: '10px' }}>
                    {lang === 'bn' ? 'ইন্টারঅ্যাক্টিভ ব্যক্তিগত ওয়ার্কস্পেস' : 'Interactive Personal Workspace'}
                  </span>
                  <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700 }}>
                    {lang === 'bn' ? (
                      <>সরাসরি ব্যবহার করুন <span className="text-gradient-purple">পোস্টিজ স্টুডিও ককপিট</span></>
                    ) : (
                      <>Experience the <span className="text-gradient-purple">Postiz Studio Cockpit</span></>
                    )}
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
                    {lang === 'bn'
                      ? 'ভিজুয়াল ক্যালেন্ডার দেখুন, এআই এজেন্ট দিয়ে এক ক্লিকে পোস্ট লিখিয়ে নিন এবং একাধিক চ্যানেলে প্রিভিউ যাচাই করুন:'
                      : 'Try the visual calendar, generate tailored posts with the AI agent, and preview across multiple channels:'}
                  </p>
                </div>

                <StudioApp t={t} lang={lang} />
              </div>
            </section>

            {/* AI Agent Workflows (MCP, Claude, ChatGPT, CLI) */}
            <AgentWorkflows t={t} />

            {/* Core Features */}
            <FeaturesSection onLaunchStudio={handleLaunchStudio} t={t} lang={lang} />

            {/* 30+ Social Networks Grid */}
            <PlatformsGrid />

            {/* Pricing Section (Monthly / Annual + Self-Host comparison) */}
            <PricingSection
              onLaunchStudio={handleLaunchStudio}
              onOpenSelfHostModal={() => setIsSelfHostModalOpen(true)}
              t={t}
              lang={lang}
            />

            {/* FAQs */}
            <FaqSection t={t} lang={lang} />
          </>
        )}
      </main>

      {/* Self-Host Guide Modal */}
      <SelfHostGuideModal
        isOpen={isSelfHostModalOpen}
        onClose={() => setIsSelfHostModalOpen(false)}
        lang={lang}
      />

      {/* Global Footer */}
      <Footer
        onLaunchStudio={handleLaunchStudio}
        onOpenSelfHostModal={() => setIsSelfHostModalOpen(true)}
        t={t}
        lang={lang}
      />
    </div>
  );
}
