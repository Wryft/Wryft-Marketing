import { Link } from 'react-router-dom';
import { AndroidLogo, Check, Copy } from 'phosphor-react';
import { useState } from 'react';
import { NavBar, Footer } from './Layout';

export default function DownloadPage() {
  const [copied, setCopied] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#e5e7eb' }}>
      <NavBar />
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '100px 24px 80px' }}>
        <h1 style={{
          fontFamily: 'Bricolage Grotesque, sans-serif',
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 700, color: '#fff', marginBottom: 8,
        }}>
          Download Wryft
        </h1>
        <p style={{ color: '#6b7280', marginBottom: 48, fontSize: '0.9375rem' }}>
          Available for Android. No Google Play required — install directly from the APK.
        </p>

        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(70,65,217,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AndroidLogo size={28} color="#4641D9" weight="fill" />
            </div>
            <div>
              <h2 style={{ fontWeight: 600, fontSize: '1.125rem', color: '#fff' }}>Wryft for Android</h2>
              <p style={{ fontSize: '0.8125rem', color: '#6b7280' }}>Version 1.0.0 &middot; APK (arm64-v8a)</p>
            </div>
          </div>
          <a
            href="#"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#4641D9', color: '#fff', border: 'none',
              borderRadius: 10, padding: '14px 28px',
              fontSize: '1rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'none',
            }}
          >
            <AndroidLogo size={22} weight="fill" />
            Download APK
          </a>
        </div>

        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 32 }}>
          <h3 style={{ fontWeight: 600, fontSize: '1rem', color: '#fff', marginBottom: 12 }}>Installation Instructions</h3>
          <ol style={{ color: '#9ca3af', lineHeight: 1.8, paddingLeft: 20 }}>
            <li>Download the APK file above.</li>
            <li>On your Android device, open Settings &rarr; Security.</li>
            <li>Enable "Install from unknown sources" (or "Install unknown apps").</li>
            <li>Open the downloaded APK file and tap Install.</li>
            <li>Open Wryft and create your account.</li>
          </ol>
        </div>

        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24 }}>
          <h3 style={{ fontWeight: 600, fontSize: '1rem', color: '#fff', marginBottom: 12 }}>Verify the APK</h3>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: 12 }}>
            SHA-256 hash of the APK (verify integrity after downloading):
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#0a0a0a', borderRadius: 8, padding: '10px 14px', border: '1px solid #1f1f1f' }}>
            <code style={{ flex: 1, fontSize: '0.75rem', color: '#9ca3af', wordBreak: 'break-all' }}>
              a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2
            </code>
            <button
              onClick={() => { navigator.clipboard.writeText('a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2'); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: copied ? '#4ADE80' : '#6b7280' }}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


