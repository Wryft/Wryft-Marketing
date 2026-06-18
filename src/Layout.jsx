import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="nav-logo">
            <img src="/src/assets/wryftcircle.png" alt="Wryft" style={{ width: 28, height: 28, borderRadius: 6 }} />
            Wryft
          </div>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/help" className="nav-link">Help</Link>
          <Link to="/source" className="nav-link">Source</Link>
        </div>
        <div className="nav-actions">
          <Link to="/download" className="btn btn-primary" style={{ textDecoration: 'none' }}>Download</Link>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container max-w-7xl mx-auto">
        <div className="footer-grid">
          <div>
            <h4 className="footer-heading">Product</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/download" className="footer-link">Download</Link></li>
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><Link to="/help" className="footer-link">Help Center</Link></li>
              <li><Link to="/source" className="footer-link">Source Code</Link></li>
              <li><a href="https://github.com/wryft" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><Link to="/privacy" className="footer-link">Privacy</Link></li>
              <li><Link to="/terms" className="footer-link">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>
            &copy; 2026 Wryft. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
