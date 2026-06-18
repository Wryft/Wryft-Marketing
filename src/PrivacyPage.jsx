import { Link } from 'react-router-dom';
import { NavBar, Footer } from './Layout';

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#e5e7eb', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <main style={{ flex: 1, maxWidth: 720, margin: '0 auto', padding: '100px 24px', width: '100%' }}>
        <p style={{ fontSize: '0.8125rem', color: '#6b7280', marginBottom: 8 }}>Last Updated: June 18, 2026</p>
        <h1 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#fff', marginBottom: 24 }}>Privacy Policy</h1>
        <div style={{ color: '#9ca3af', lineHeight: 1.8, fontSize: '0.9375rem' }}>
          <h3 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginTop: 24, marginBottom: 8 }}>What We Collect</h3>
          <p style={{ marginBottom: 12 }}>Wryft does not collect any personal data. All your data — keys, messages, contacts — stays on your device and is only shared with the Nostr relays you explicitly connect to.</p>

          <h3 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginTop: 24, marginBottom: 8 }}>What Relays See</h3>
          <p style={{ marginBottom: 12 }}>When you send a message, it is published to the relays you are connected to. The content of your direct messages is encrypted (NIP-04), but metadata such as your pubkey, the recipient's pubkey, and timestamps are visible to relay operators.</p>

          <h3 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginTop: 24, marginBottom: 8 }}>Third-Party Services</h3>
          <p style={{ marginBottom: 12 }}>If you upload images or files, they are sent to third-party hosting services (such as nostr.build). Those services may log your IP address and file metadata as part of their normal operation.</p>

          <h3 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginTop: 24, marginBottom: 8 }}>No Tracking</h3>
          <p style={{ marginBottom: 12 }}>Wryft contains no analytics, telemetry, or tracking code. We do not collect usage statistics, crash reports, or any other data.</p>

          <h3 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginTop: 24, marginBottom: 8 }}>Your Control</h3>
          <p style={{ marginBottom: 12 }}>You choose which relays to connect to. You can delete your data by publishing deletion events (kind 5) to relays. You can export your keys at any time from the app settings.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
