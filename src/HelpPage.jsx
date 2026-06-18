import { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MagnifyingGlass, ChatCenteredText, UserCircle, ShieldCheck, ArrowLeft } from 'phosphor-react';
import { NavBar, Footer } from './Layout';

const content = {
  'what-is-wryft': {
    body: 'Wryft is a decentralized chat application built on the Nostr protocol. Unlike traditional messaging apps that rely on central servers, Wryft uses a network of relays to deliver messages. This means no single company controls your data, and your identity is tied to a cryptographic key pair rather than an email address or phone number.\n\n**Key concepts:**\n- **Nostr:** The protocol that Wryft uses. Messages are signed with your private key and broadcast to relays.\n- **Relays:** Servers that store and forward messages. You can choose which relays to use.\n- **Keys:** Your nsec (private key) signs messages. Your npub (public key) is your address that others use to find you.',
    category: 'Getting Started',
  },
  'creating-an-account': {
    body: 'Wryft doesn\'t use emails or passwords. Your account is a cryptographic key pair.\n\n**To create a new account:**\n1. Open Wryft and tap "Create Account".\n2. A new nsec (private key) and npub (public key) are generated.\n3. Your nsec is stored securely on your device.\n4. Share your npub with others so they can message you.\n\n**To import an existing account:**\n1. Tap "Sign In" and paste your nsec.\n2. Your keys are restored and your messages will load from relays.\n\n> **Important:** Your nsec is the only way to access your account. If you lose it, you cannot recover your identity. Back it up safely.',
    category: 'Getting Started',
  },
  'sending-your-first-message': {
    body: 'Sending a message on Wryft is simple:\n\n1. Tap the "+" button on the DM list screen.\n2. Enter the recipient\'s npub or hex pubkey.\n3. Tap "Start DM" to open the conversation.\n4. Type your message and tap Send.\n\nMessages are encrypted with NIP-04 before being published to relays. Only the intended recipient can decrypt and read them.\n\n**To send an image:**\n1. Tap the "+" button in the message input area.\n2. Select an image from your gallery.\n3. The image is uploaded to nostr.build and the URL is sent in your message.',
    category: 'Getting Started',
  },
  'understanding-keys': {
    body: 'Your keys are the core of your Nostr identity.\n\n**nsec (Private Key):**\n- This is your secret key. Never share it with anyone.\n- Used to sign messages and decrypt DMs.\n- Stored in your device\'s secure storage.\n- Format: begins with `nsec1...`\n\n**npub (Public Key):**\n- This is your public address.\n- Share this with others so they can message you.\n- Not sensitive — it\'s meant to be public.\n- Format: begins with `npub1...`\n\n**Hex Key:**\n- The raw 64-character hex string.\n- Both nsec and npub are encoded versions of this.\n\n> **Security tip:** Write down your nsec and store it somewhere safe. If you lose your device, you\'ll need it to restore your account.',
    category: 'Account',
  },
  'backing-up-your-nsec': {
    body: 'Your nsec is the only way to prove your identity on Nostr. If you lose access to it, your account cannot be recovered.\n\n**How to back up:**\n1. Go to your Profile page in Settings.\n2. Copy your nsec (it starts with `nsec1...`).\n3. Store it in one of these places:\n   - A password manager (Bitwarden, 1Password, etc.)\n   - An encrypted note\n   - A piece of paper stored securely\n\n**What NOT to do:**\n- Don\'t store it in plain text on your device.\n- Don\'t share it with anyone.\n- Don\'t upload it to any website.\n- Don\'t paste it in a DM (even encrypted).',
    category: 'Account',
  },
  'profile-setup': {
    body: 'Your profile is stored in a kind 0 event on the Nostr network. Set it up from the Profile page in Settings.\n\n**You can set:**\n- **Display Name:** Your preferred name shown to others.\n- **Pronouns:** Optional pronouns displayed under your name.\n- **Avatar:** Upload a profile picture from your gallery.\n- **About Me:** A short bio.\n- **Website:** A link to your site or social media.\n\n**To save:**\n1. Make your changes.\n2. Tap "Save Changes".\n3. The kind 0 event is published to relays.\n4. Your profile updates across the network.',
    category: 'Account',
  },
  'is-wryft-free': {
    body: 'Yes, Wryft is completely free to use. There are no subscriptions, no ads, and no data selling.\n\nThe Nostr protocol is open and permissionless. You can use any relay you want, and you can run your own relay if you prefer.\n\nSome features may require a nsec (private key) to use:\n- Sending messages\n- Creating groups\n- Setting up your profile\n\nReading messages only requires an npub (public key).',
    category: 'FAQs',
  },
  'how-is-my-data-protected': {
    body: 'Wryft protects your data in several ways:\n\n**End-to-end encryption:**\nDirect messages are encrypted using NIP-04 (AES-256-CBC with ECDH key exchange). Only the sender and recipient can read them.\n\n**Decentralized relays:**\nMessages are stored across multiple relays rather than a single server. No single entity controls your data.\n\n**Local key storage:**\nYour private key never leaves your device. It\'s stored in secure device storage (Keychain on iOS, EncryptedSharedPreferences on Android).\n\n**No email or phone required:**\nUnlike most apps, Wryft doesn\'t ask for personal information to create an account.',
    category: 'FAQs',
  },
  'can-i-use-multiple-devices': {
    body: 'Yes, you can use Wryft on multiple devices by importing your existing nsec.\n\n1. On your first device, go to Settings > Profile and copy your nsec.\n2. On your second device, tap "Sign In" and paste the nsec.\n3. Both devices will have access to the same account and messages.\n\n> **Note:** Messages are fetched from relays, so you\'ll see your existing conversations on any device you log into.\n\nIf you created a new account on each device, they are separate identities with different keys.',
    category: 'FAQs',
  },
  'privacy-policy': {
    body: '**Privacy Policy**\n\nWryft does not collect, store, or process any personal data.\n\n**What we don\'t collect:**\n- Email addresses\n- Phone numbers\n- IP addresses\n- Usage analytics\n- Personal information\n\n**What is stored on relays:**\nWhen you send a message, it\'s signed with your key and published to the relays you\'re connected to. This is public data on the Nostr network. The content of your DMs is encrypted, but metadata (who sent it, when, to whom) is visible to relay operators.\n\n**Your control:**\nYou choose which relays to use. You can publish a kind 5 (delete) event to request relay operators remove your messages.',
    category: 'Privacy & Legal',
  },
  'terms-of-service': {
    body: '**Terms of Service**\n\nBy using Wryft, you agree to the following terms:\n\n1. **Use at your own risk.** Wryft is provided "as is" without warranty.\n2. **You are responsible for your keys.** Losing your nsec means losing access to your account.\n3. **Follow relay rules.** Each relay may have its own terms. Respect them.\n4. **No illegal activity.** Don\'t use Wryft for illegal purposes.\n5. **Open source.** Wryft\'s source code is available for review.\n\nThese terms may be updated. Continued use after changes constitutes acceptance.',
    category: 'Privacy & Legal',
  },
  'data-deletion': {
    body: '**How to delete your data from relays**\n\nNostr relays store events (messages, profile updates, etc.) that you publish. To request deletion:\n\n1. The app publishes a kind 5 (deletion) event for each message you want to remove.\n2. Relays that support NIP-09 will honor these deletion requests.\n3. Not all relays support deletion — your data may persist on some.\n\n**What you can do:**\n- Switch to relays that support deletion.\n- Create a new key pair to start fresh.\n- Contact relay operators directly to request removal.\n\n**Important:** Because Nostr is decentralized, there\'s no central authority that can guarantee deletion from all relays.',
    category: 'Privacy & Legal',
  },
};

const categories = [
  {
    slug: 'getting-started',
    title: 'Getting Started',
    desc: 'New to Wryft? Start here.',
    icon: ChatCenteredText,
    articles: [
      { slug: 'what-is-wryft', title: 'What is Wryft?', desc: 'An overview of the decentralized chat app.', updated: '2026-06-10' },
      { slug: 'creating-an-account', title: 'Creating an Account', desc: 'Generate a key pair or import an existing nsec.', updated: '2026-06-10' },
      { slug: 'sending-your-first-message', title: 'Sending Your First Message', desc: 'Start a DM with anyone on Nostr.', updated: '2026-06-10' },
    ],
  },
  {
    slug: 'account',
    title: 'Account',
    desc: 'Manage your Nostr identity and keys.',
    icon: UserCircle,
    articles: [
      { slug: 'understanding-keys', title: 'Understanding Keys', desc: 'What are nsec, npub, and how do they work?', updated: '2026-06-08' },
      { slug: 'backing-up-your-nsec', title: 'Backing Up Your nsec', desc: 'Never lose access to your account.', updated: '2026-06-08' },
      { slug: 'profile-setup', title: 'Profile Setup', desc: 'Add a display name, avatar, and bio.', updated: '2026-06-07' },
    ],
  },
  {
    slug: 'faqs',
    title: 'FAQs',
    desc: 'Frequently asked questions.',
    icon: MagnifyingGlass,
    articles: [
      { slug: 'is-wryft-free', title: 'Is Wryft free?', desc: 'Yes, Wryft is completely free to use.', updated: '2026-06-10' },
      { slug: 'how-is-my-data-protected', title: 'How is my data protected?', desc: 'End-to-end encryption and decentralized relays.', updated: '2026-06-09' },
      { slug: 'can-i-use-multiple-devices', title: 'Can I use multiple devices?', desc: 'Use your nsec to log in on any device.', updated: '2026-06-08' },
    ],
  },
  {
    slug: 'privacy',
    title: 'Privacy & Legal',
    desc: 'Our policies and legal information.',
    icon: ShieldCheck,
    articles: [
      { slug: 'privacy-policy', title: 'Privacy Policy', desc: 'How we handle your data.', updated: '2026-06-01' },
      { slug: 'terms-of-service', title: 'Terms of Service', desc: 'The rules for using Wryft.', updated: '2026-06-01' },
      { slug: 'data-deletion', title: 'Data Deletion', desc: 'How to delete your data from relays.', updated: '2026-05-28' },
    ],
  },
];

const allArticles = categories.flatMap(cat =>
  cat.articles.map(a => ({
    ...a,
    categorySlug: cat.slug,
    categoryTitle: cat.title,
    body: content[a.slug]?.body || 'Content coming soon.',
  }))
);

function HelpHome() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return null;
    const q = query.toLowerCase();
    return allArticles.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.desc.toLowerCase().includes(q) ||
      a.categoryTitle.toLowerCase().includes(q)
    );
  }, [query]);

  const [showingResults, setShowingResults] = useState(false);

  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '100px 24px 80px' }}>
      <h1 style={{
        fontFamily: 'Bricolage Grotesque, sans-serif',
        fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
        fontWeight: 700, color: '#fff', marginBottom: 32,
      }}>
        Help
      </h1>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        background: '#111', border: '1px solid #1f1f1f',
        borderRadius: 10, padding: '8px 14px', marginBottom: 48,
      }}>
        <MagnifyingGlass size={20} color="#6b7280" />
        <input
          type="search"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setShowingResults(true); }}
          placeholder="Search..."
          style={{
            flex: 1, background: 'transparent', border: 'none',
            padding: '8px 0', fontSize: '0.9375rem', color: '#fff', outline: 'none',
          }}
        />
      </div>

      {results !== null && showingResults && results.length > 0 && (
        <section style={{ marginBottom: 48 }}>
          {results.map((article) => (
            <Link key={article.slug} to={`/help/${article.slug}`} style={{
              display: 'block', background: '#111', border: '1px solid #1f1f1f',
              borderRadius: 10, padding: 16, marginBottom: 8, textDecoration: 'none',
            }}>
              <p style={{ fontSize: '0.75rem', color: '#4641D9', fontWeight: 600, marginBottom: 4 }}>{article.categoryTitle}</p>
              <h3 style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>{article.title}</h3>
              <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{article.desc}</p>
            </Link>
          ))}
        </section>
      )}

      {showingResults && results !== null && results.length === 0 && (
        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 10, padding: 24, textAlign: 'center', marginBottom: 48 }}>
          <p style={{ color: '#9ca3af', fontSize: '0.9375rem' }}>No results found. Try a different search term.</p>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div key={cat.slug} style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 10, overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, borderBottom: '1px solid #1f1f1f' }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: 'rgba(70,65,217,0.1)', color: '#4641D9',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={18} weight="fill" />
                </div>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: '0.9375rem', color: '#fff' }}>{cat.title}</h3>
                  <p style={{ fontSize: '0.8125rem', color: '#6b7280' }}>{cat.desc}</p>
                </div>
              </div>
              {cat.articles.map((article, i) => (
                <Link key={article.slug} to={`/help/${article.slug}`} style={{
                  display: 'block', padding: '12px 16px',
                  borderBottom: i < cat.articles.length - 1 ? '1px solid #1a1a1a' : 'none',
                  textDecoration: 'none',
                }}>
                  <h4 style={{ fontWeight: 500, fontSize: '0.875rem', color: '#e5e7eb', marginBottom: 2 }}>{article.title}</h4>
                  <p style={{ fontSize: '0.8125rem', color: '#6b7280' }}>{article.desc}</p>
                </Link>
              ))}
            </div>
          );
        })}
      </div>
    </main>
  );
}

function ArticleDetail() {
  const { slug } = useParams();
  const article = allArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '100px 24px 80px' }}>
        <h1 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>Article not found</h1>
        <Link to="/help" style={{ color: '#4641D9', display: 'inline-block', marginTop: 16 }}>&larr; Back to Help</Link>
      </main>
    );
  }

  function inlineFormat(text) {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#fff;font-weight:600">$1</strong>')
      .replace(/\n/g, '<br />');
  }

  const bodyHtml = article.body
    .split('\n\n')
    .map(paragraph => {
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        const text = paragraph.slice(2, -2);
        return `<h3 style="font-weight:600;font-size:1.125rem;color:#fff;margin-top:24px;margin-bottom:8px">${inlineFormat(text)}</h3>`;
      }
      if (paragraph.startsWith('> ')) {
        return `<blockquote style="border-left:3px solid #4641D9;padding:12px 16px;margin:16px 0;background:#111;border-radius:6px;color:#9ca3af;font-size:0.875rem;line-height:1.6">${inlineFormat(paragraph.slice(2))}</blockquote>`;
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').map(line => line.replace(/^- /, '')).filter(Boolean);
        return `<ul style="margin:8px 0;padding-left:20px">${items.map(i => `<li style="color:#9ca3af;margin-bottom:4px;line-height:1.5">${inlineFormat(i)}</li>`).join('')}</ul>`;
      }
      return `<p style="color:#9ca3af;line-height:1.7;margin-bottom:12px">${inlineFormat(paragraph)}</p>`;
    })
    .join('');

  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '100px 24px 80px' }}>
      <Link to="/help" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#6b7280', fontSize: '0.875rem', marginBottom: 24, textDecoration: 'none' }}>
        <ArrowLeft size={16} />
        Back to Help
      </Link>
      <p style={{ fontSize: '0.75rem', color: '#4641D9', fontWeight: 600, marginBottom: 8 }}>{article.categoryTitle}</p>
      <h1 style={{
        fontFamily: 'Bricolage Grotesque, sans-serif',
        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
        fontWeight: 700, color: '#fff', marginBottom: 8,
      }}>
        {article.title}
      </h1>
      <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: 32 }}>Last updated {article.updated}</p>
      <div style={{ lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </main>
  );
}

export default function HelpPage() {
  const { slug } = useParams();

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#e5e7eb' }}>
      <NavBar />
      {slug ? <ArticleDetail /> : <HelpHome />}
      <Footer />
    </div>
  );
}
