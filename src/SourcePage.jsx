import { Link } from 'react-router-dom';
import { NavBar, Footer } from './Layout';

export default function SourcePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#e5e7eb' }}>
      <NavBar />
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '100px 24px 80px' }}>
        <h1 style={{
          fontFamily: 'Bricolage Grotesque, sans-serif',
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 700, color: '#fff', marginBottom: 8,
        }}>
          Open Source
        </h1>
        <p style={{ color: '#6b7280', marginBottom: 48, fontSize: '0.9375rem' }}>
          Wryft is fully open source. View the code, report issues, and contribute.
        </p>

        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 24 }}>
          <h3 style={{ fontWeight: 600, fontSize: '1rem', color: '#fff', marginBottom: 8 }}>GitHub Repository</h3>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: 16 }}>
            The entire source code is available on GitHub. Licensed under the MIT License.
          </p>
          <a
            href="https://github.com/wryft"
            target="_blank"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#4641D9', color: '#fff', padding: '14px 28px',
              borderRadius: 10, fontWeight: 600, textDecoration: 'none',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </div>

        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 24 }}>
          <h3 style={{ fontWeight: 600, fontSize: '1rem', color: '#fff', marginBottom: 8 }}>License</h3>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: 1.7 }}>
            Wryft is released under the MIT License. You are free to use, modify, and distribute the code.
          </p>
        </div>

        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24 }}>
          <h3 style={{ fontWeight: 600, fontSize: '1rem', color: '#fff', marginBottom: 8 }}>Contributing</h3>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: 16 }}>
            Bug reports, feature requests, and pull requests are welcome. Check the issue tracker for open tasks.
          </p>
          <a
            href="https://github.com/wryft/issues"
            target="_blank"
            style={{ color: '#4641D9', fontSize: '0.9375rem', fontWeight: 500, textDecoration: 'none' }}
          >
            Report an Issue &rarr;
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}


