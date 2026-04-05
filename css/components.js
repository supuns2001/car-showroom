/* components.js — injects header/footer into all pages */

const currentPage = window.location.pathname.split('/').pop() || 'index.html';

const navLinks = [
  { href: 'index.html',    label: 'Home' },
  { href: 'about.html',    label: 'About Us' },
  { href: 'vehicles.html', label: 'Vehicles' },
  { href: 'services.html', label: 'Services' },
  { href: 'reviews.html',  label: 'Reviews' },
  { href: 'contact.html',  label: 'Contact Us', cta: true },
];

function renderHeader() {
  const navItems = navLinks.map(l => `
    <li class="${l.cta ? 'nav-cta' : ''}">
      <a href="${l.href}" class="${currentPage === l.href ? 'active' : ''}">${l.label}</a>
    </li>`).join('');
  return `
  <header>
    <div class="header-inner">
      <a href="index.html" class="logo-wrap">
        <div class="logo-icon">LD</div>
        <div class="logo-text">
          <div class="brand-name">LankaDrive Auto Sales</div>
          <div class="brand-tagline">Premium Vehicles · Colombo, Sri Lanka</div>
        </div>
      </a>
      <nav><ul>${navItems}</ul></nav>
      <div class="hamburger" onclick="toggleMobileNav(this)">
        <span></span><span></span><span></span>
      </div>
    </div>
    <div class="mobile-nav" id="mobileNav" style="display:none;background:var(--deep);padding:16px 24px;border-top:1px solid var(--border);">
      <ul style="display:flex;flex-direction:column;gap:4px;">
        ${navLinks.map(l => `<li><a href="${l.href}" style="display:block;padding:10px 12px;border-radius:8px;font-size:0.85rem;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:var(--muted);">${l.label}</a></li>`).join('')}
      </ul>
    </div>
  </header>`;
}

function toggleMobileNav(btn) {
  const nav = document.getElementById('mobileNav');
  nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
}

function renderFooter() {
  return `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo-wrap">
            <div class="logo-icon">LD</div>
            <div class="logo-text">
              <div class="brand-name">LankaDrive Auto Sales</div>
              <div class="brand-tagline">Premium Vehicles · Colombo</div>
            </div>
          </div>
          <p class="footer-desc">Sri Lanka's trusted destination for brand new, reconditioned, and used vehicles. Quality, transparency, and customer satisfaction guaranteed.</p>
          <div class="social-links">
            <a href="#" class="social-link" title="Facebook">🗺</a>
            <a href="#" class="social-link" title="Instagram">📸</a>
            <a href="#" class="social-link" title="YouTube">▶</a>
            <a href="#" class="social-link" title="WhatsApp">💬</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Quick Links</div>
          <div class="footer-links">
            <a href="index.html">Home</a>
            <a href="about.html">About Us</a>
            <a href="vehicles.html">Vehicle Listings</a>
            <a href="services.html">Our Services</a>
            <a href="reviews.html">Customer Reviews</a>
            <a href="contact.html">Contact Us</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Contact Info</div>
          <div class="footer-contact-item">
            <span class="ci-icon">📍</span>
            <p>No. 45, Galle Road,<br>Colombo 03, Sri Lanka</p>
          </div>
          <div class="footer-contact-item">
            <span class="ci-icon">📞</span>
            <p>+94 11 234 5678<br>+94 77 890 1234</p>
          </div>
          <div class="footer-contact-item">
            <span class="ci-icon">✉</span>
            <p>info@lankadrive.lk<br>sales@lankadrive.lk</p>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Newsletter</div>
          <p style="font-size:0.85rem;color:var(--muted);margin-bottom:14px;">Get the latest vehicle arrivals and exclusive deals delivered to your inbox.</p>
          <div class="newsletter-form">
            <div class="newsletter-input-wrap">
              <input type="email" placeholder="Your email address">
              <button type="button">Subscribe</button>
            </div>
            <p class="newsletter-note">🔒 Your data is safe with us. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="footer-bottom">
        <span>© 2025 LankaDrive Auto Sales (Pvt) Ltd. All rights reserved.</span>
        <span>Designed for ITE 1713 Web Design Assignment</span>
      </div>
    </div>
  </footer>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const headerPlaceholder = document.getElementById('header-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (headerPlaceholder) headerPlaceholder.outerHTML = renderHeader();
  if (footerPlaceholder) footerPlaceholder.outerHTML = renderFooter();
});
