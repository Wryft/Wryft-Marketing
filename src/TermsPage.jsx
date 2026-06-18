import { Link } from 'react-router-dom';
import { NavBar, Footer } from './Layout';

export default function TermsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#e5e7eb', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <main style={{ flex: 1, maxWidth: 720, margin: '0 auto', padding: '100px 24px', width: '100%' }}>
        <p style={{ fontSize: '0.8125rem', color: '#6b7280', marginBottom: 8 }}>Last Updated: June 18, 2026</p>
        <h1 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#fff', marginBottom: 24 }}>Terms of Service</h1>
        <div style={{ color: '#9ca3af', lineHeight: 1.8, fontSize: '0.9375rem' }}>
          <p style={{ marginBottom: 20, fontWeight: 600, color: '#e5e7eb' }}>IMPORTANT: PLEASE READ CAREFULLY. BY USING THIS APPLICATION, YOU AGREE TO THESE TERMS.</p>

          <h3 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginTop: 24, marginBottom: 8 }}>1. Software Provided "AS IS"</h3>
          <p style={{ marginBottom: 12 }}>This software is provided "AS IS" without warranty of any kind, express or implied. We disclaim all warranties including merchantability, fitness for a particular purpose, and non-infringement. Use at your own risk.</p>

          <h3 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginTop: 24, marginBottom: 8 }}>2. No Liability for Damages</h3>
          <p style={{ marginBottom: 12 }}>We are not liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of this application, including but not limited to data loss, service interruption, or any other damages.</p>

          <h3 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginTop: 24, marginBottom: 8 }}>3. Decentralized Social Network (Nostr)</h3>
          <p style={{ marginBottom: 12 }}>This application connects to the Nostr protocol, a decentralized social network. We do not control the relays, content, or data you access. You are solely responsible for your interactions with third-party relays and content.</p>

          <h3 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginTop: 24, marginBottom: 8 }}>4. User Responsibility</h3>
          <p style={{ marginBottom: 12 }}>You are responsible for backing up your data and keys, securing your device, complying with applicable laws, and understanding how Nostr works.</p>

          <h3 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginTop: 24, marginBottom: 8 }}>5. Privacy and Data Collection</h3>
          <p style={{ marginBottom: 12 }}>All application data is stored locally on your device. We do not track your activity or collect analytics. Third-party services (Nostr relays, file hosting services) may log connections and data as part of their normal operation.</p>

          <h3 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginTop: 24, marginBottom: 8 }}>6. Legal Compliance</h3>
          <p style={{ marginBottom: 12 }}>You must comply with all applicable laws in your jurisdiction. Use is void where prohibited. We make no representations about legality in any jurisdiction.</p>

          <h3 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginTop: 24, marginBottom: 8 }}>7. Modifications</h3>
          <p style={{ marginBottom: 12 }}>We may modify these terms at any time. Continued use constitutes acceptance.</p>

          <h3 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginTop: 24, marginBottom: 8 }}>8. Acceptance</h3>
          <p style={{ marginBottom: 12 }}>By using this application, you acknowledge that you have read, understood, and agree to these terms.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
