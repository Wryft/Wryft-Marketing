import { Link } from 'react-router-dom';
import { Calendar, CaretRight } from 'phosphor-react';
import { NavBar, Footer } from './Layout';

const posts = [
  {
    slug: 'wryft-v1-launch',
    title: 'Wryft v1.0 — Launch',
    date: '2026-06-18',
    author: 'Wryft Team',
    excerpt: 'The first public release of Wryft, a private decentralized chat app built on Nostr.',
    body: '**Wryft v1.0 is here.**\n\nAfter months of development, we\'re releasing the first public version of Wryft — a private, decentralized chat app powered by the Nostr protocol.\n\n**What\'s included:**\n- End-to-end encrypted DMs (NIP-04)\n- Private groups with member-only access\n- Image sharing with nostr.build\n- Profile management (kind 0 metadata)\n- Coal and Light themes\n- Custom relay support\n\n**What\'s coming next:**\n- Message reactions (kind 7)\n- Push notifications\n- NIP-17 sealed DMs\n- Community channels\n\nDownload the APK from the download page and give it a try.',
  },
  {
    slug: 'why-nostr',
    title: 'Why Nostr?',
    date: '2026-06-10',
    author: 'Wryft Team',
    excerpt: 'Why we chose Nostr as the foundation for Wryft instead of building a traditional centralized chat app.',
    body: '**Why Nostr?**\n\nWhen we set out to build Wryft, we evaluated several protocols. Nostr won for three reasons:\n\n**1. Simplicity**\nNostr is astonishingly simple. There are no complex consensus mechanisms, no blockchain, no tokens. Just signed events relayed between servers. This simplicity makes it easy to build on and easy to audit.\n\n**2. True decentralization**\nUnlike many "decentralized" apps that still rely on a single company\'s servers, Nostr lets you choose your relays. You can run your own, use public ones, or switch at any time without losing your identity.\n\n**3. Open ecosystem**\nYour Nostr identity works across any Nostr client. You\'re not locked into Wryft — you can use the same keys with any other app that supports the protocol.\n\nThis philosophy of openness and user control aligns with what we want Wryft to be.',
  },
  {
    slug: 'security-and-privacy',
    title: 'Security & Privacy in Wryft',
    date: '2026-06-05',
    author: 'Wryft Team',
    excerpt: 'A technical overview of how Wryft protects your messages and data.',
    body: '**How Wryft protects you**\n\n**Message encryption**\nDirect messages use NIP-04 encryption: AES-256-CBC with a shared secret derived from ECDH key exchange. Only the sender and recipient can decrypt the content.\n\n**Key storage**\nYour nsec (private key) never leaves your device. It\'s stored in the platform\'s secure storage — iOS Keychain or Android EncryptedSharedPreferences.\n\n**Relay transparency**\nYou choose which relays to connect to. The app defaults to three public relays, but you can add or remove any relay in Settings.\n\n**What we don\'t do**\n- No phone number or email required\n- No tracking or analytics\n- No data collection\n- No ads\n- No central servers that we control\n\nThe code is fully open source for anyone to audit.',
  },
];

export default function BlogPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#e5e7eb' }}>
      <NavBar />
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '100px 24px 80px' }}>
        <h1 style={{
          fontFamily: 'Bricolage Grotesque, sans-serif',
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 700, color: '#fff', marginBottom: 8,
        }}>
          Blog
        </h1>
        <p style={{ color: '#6b7280', marginBottom: 48, fontSize: '0.9375rem' }}>Updates, guides, and announcements.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {posts.map(post => (
            <Link key={post.slug} to={`/blog/${post.slug}`} style={{
              display: 'block', background: '#111', border: '1px solid #1f1f1f',
              borderRadius: 10, padding: 20, textDecoration: 'none',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6, fontSize: '0.8125rem', color: '#6b7280' }}>
                <Calendar size={14} />
                {post.date}
              </div>
              <h2 style={{ fontWeight: 600, fontSize: '1.125rem', color: '#fff', marginBottom: 6 }}>{post.title}</h2>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.6 }}>{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function BlogArticle() {
  const slug = window.location.pathname.split('/blog/')[1];
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  function inlineFormat(text) {
    return text.replace(/\*\*(.+?)\*\*/g, '<strong style="color:#fff;font-weight:600">$1</strong>');
  }

  const bodyHtml = post.body.split('\n\n').map(p => {
    if (p.startsWith('- ')) {
      const items = p.split('\n').map(l => l.replace(/^- /, '')).filter(Boolean);
      return `<ul style="margin:8px 0;padding-left:20px">${items.map(i => `<li style="color:#9ca3af;margin-bottom:4px;line-height:1.6">${inlineFormat(i)}</li>`).join('')}</ul>`;
    }
    return `<p style="color:#9ca3af;line-height:1.7;margin-bottom:12px">${inlineFormat(p)}</p>`;
  }).join('');

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#e5e7eb' }}>
      <NavBar />
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '100px 24px 80px' }}>
        <Link to="/blog" style={{ color: '#6b7280', fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 24 }}>
          <CaretRight size={14} style={{ transform: 'rotate(180deg)' }} />
          Back to Blog
        </Link>
        <p style={{ fontSize: '0.8125rem', color: '#6b7280', marginBottom: 8 }}>{post.date} &middot; {post.author}</p>
        <h1 style={{
          fontFamily: 'Bricolage Grotesque, sans-serif',
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          fontWeight: 700, color: '#fff', marginBottom: 24,
        }}>{post.title}</h1>
        <div style={{ lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h2 style={{ color: '#fff' }}>Article not found</h2>
      <Link to="/blog" style={{ color: '#4641D9' }}>&larr; Back to Blog</Link>
    </div>
  );
}


