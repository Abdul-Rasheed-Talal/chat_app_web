import Router from '../scripts/router.js';

/**
 * Navbar Component
 * Renders a responsive navigation bar with logo, links, and auth CTAs.
 * @param {string} activePath - Current active route path
 */
export function renderNavbar(activePath = '/') {
    return `
    <nav class="navbar" id="navbar">
      <div class="container nav-container">
        <!-- Logo -->
        <a href="#/" class="nav-logo">
          <div class="nav-logo-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <span>WebChat</span>
        </a>

        <!-- Desktop Nav Links -->
        <ul class="nav-links" id="nav-links">
          <li><a href="#/" class="${activePath === '/' ? 'active' : ''}">Home</a></li>
          <li><a href="#features" class="nav-scroll-link">Features</a></li>
          <li><a href="#how-it-works" class="nav-scroll-link">How It Works</a></li>
        </ul>

        <!-- Auth Buttons -->
        <div class="nav-auth">
          <a href="#/login" class="btn-secondary nav-btn-login">Log In</a>
          <a href="#/signup" class="btn-primary nav-btn-signup">Sign Up Free</a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div class="nav-mobile-menu" id="nav-mobile-menu">
        <a href="#/" class="${activePath === '/' ? 'active' : ''}">Home</a>
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <div class="nav-mobile-auth">
          <a href="#/login" class="btn-secondary">Log In</a>
          <a href="#/signup" class="btn-primary">Sign Up Free</a>
        </div>
      </div>
    </nav>
  `;
}

/**
 * Initialize navbar interactivity (hamburger menu, scroll effects)
 */
export function initNavbar() {
    const toggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('nav-mobile-menu');
    const navbar = document.getElementById('navbar');

    // Hamburger toggle
    if (toggle && mobileMenu) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            mobileMenu.classList.toggle('open');
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                mobileMenu.classList.remove('open');
            });
        });
    }

    // Navbar scroll effect — add background on scroll
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}
