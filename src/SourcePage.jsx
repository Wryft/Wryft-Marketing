import { Link } from 'react-router-dom';
import { NavBar, Footer } from './Layout';

export default function SourcePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#e5e7eb', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <main style={{ flex: 1, maxWidth: 720, margin: '0 auto', padding: '100px 24px', width: '100%' }}>
        <h1 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#fff', marginBottom: 8 }}>Open Source</h1>
        <p style={{ color: '#6b7280', fontSize: '0.9375rem', marginBottom: 48 }}>Wryft is fully open source. The source code will be available soon.</p>
      </main>
      <Footer />
    </div>
  );
}
