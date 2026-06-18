import { Link } from 'react-router-dom';
import { NavBar } from './Layout';

export default function NotFoundPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#e5e7eb', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 24px', textAlign: 'center' }}>
        <h1 style={{
          fontFamily: 'Bricolage Grotesque, sans-serif',
          fontSize: 'clamp(4rem, 10vw, 6rem)',
          fontWeight: 800, color: '#4641D9', marginBottom: 8,
        }}>
          404
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#9ca3af', marginBottom: 32 }}>
          This page doesn't exist.
        </p>
        <Link to="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: '#4641D9', color: '#fff', padding: '14px 28px',
          borderRadius: 10, fontWeight: 600, textDecoration: 'none',
        }}>
          Go Home
        </Link>
      </main>
    </div>
  );
}
