import { Routes, Route, Link } from 'react-router-dom';
import { Lock, Globe, User, Camera, Users, Palette, AndroidLogo } from 'phosphor-react';
import { NavBar, Footer } from './Layout';
import HelpPage from './HelpPage';
import BlogPage, { BlogArticle } from './BlogPage';
import DownloadPage from './DownloadPage';
import SourcePage from './SourcePage';
import NotFoundPage from './NotFoundPage';
import './index.css';

function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <section className="hero-section">
        <div className="container max-w-7xl mx-auto" style={{ textAlign: 'center' }}>
          <h1 className="hero" style={{ marginBottom: 24 }}>
            Your private<br />communication network.
          </h1>
          <p className="lead" style={{ color: 'rgba(255,255,255,0.9)', maxWidth: 600, margin: '0 auto 32px' }}>
            Wryft is a decentralized chat app powered by Nostr. Send encrypted messages, join communities, and own your data.
          </p>
          <div className="download-buttons">
            <Link to="/download" className="btn btn-white btn-lg" style={{ textDecoration: 'none' }}>
              <AndroidLogo size={22} weight="fill" />
              Download for Android
            </Link>
          </div>
          <div style={{ marginTop: 64, display: 'flex', justifyContent: 'center' }}>
            <img
              src="public/welcome.png"
              alt="Wryft chat preview"
              style={{ width: 320, height: 680, borderRadius: 24, border: '2px solid rgba(255,255,255,0.5)', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      <section className="section-light-alt">
        <div className="container max-w-7xl mx-auto">
          <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', textAlign: 'center', marginBottom: 64, color: '#fff' }}>
            Everything you expect<br />from a messaging app.
          </h2>
          <div className="feature-grid">
            <FeatureCard icon={<Lock size={28} weight="fill" />} title="End-to-end encrypted" desc="Messages are encrypted with NIP-04. Only you and the recipient can read them." />
            <FeatureCard icon={<Globe size={28} weight="fill" />} title="Decentralized" desc="Built on Nostr. No central servers, no single point of failure." />
            <FeatureCard icon={<User size={28} weight="fill" />} title="Your identity, yours" desc="Your keys stay on your device. Log in with nsec or npub, no email required." />
            <FeatureCard icon={<Camera size={28} weight="fill" />} title="Rich media sharing" desc="Send images, links, and files. Preview them inline without leaving the chat." />
            <FeatureCard icon={<Users size={28} weight="fill" />} title="Private groups" desc="Create invite-only groups. Messages are only delivered to members." />
            <FeatureCard icon={<Palette size={28} weight="fill" />} title="Customizable" desc="Choose between Coal and Light themes. Adjust font size to your liking." />
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container max-w-5xl mx-auto">
          <div className="cta-card">
            <h2 className="display" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', marginBottom: 16 }}>
              Ready to take control?
            </h2>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.9)', maxWidth: 500, margin: '0 auto 32px' }}>
              Download Wryft and start messaging privately, today.
            </p>
            <div className="download-buttons">
              <Link to="/download" className="btn btn-white btn-lg" style={{ textDecoration: 'none' }}>
                <AndroidLogo size={22} weight="fill" />
                Download for Android
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="feature-card">
      <div className="feature-icon" style={{ color: '#4641D9' }}>{icon}</div>
      <h3 className="title-sm" style={{ color: '#fff', marginBottom: 8 }}>{title}</h3>
      <p className="body" style={{ color: '#9ca3af' }}>{desc}</p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/help/:slug" element={<HelpPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogArticle />} />
      <Route path="/download" element={<DownloadPage />} />
      <Route path="/source" element={<SourcePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
