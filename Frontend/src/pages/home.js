import { renderNavbar, initNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';

/**
 * Home / Landing Page Component
 * Renders: Navbar → Hero → Features → How It Works → CTA → Footer
 */
export function renderHomePage() {
    return `
    ${renderNavbar('/')}

    <!-- Hero Section -->
    <section class="hero" id="hero">
      <div class="hero-bg">
        <div class="hero-orb hero-orb-1"></div>
        <div class="hero-orb hero-orb-2"></div>
        <div class="hero-orb hero-orb-3"></div>
      </div>
      <div class="container hero-content">
        <div class="hero-badge animate-fade-in-up">
          <span class="badge-dot"></span>
          Now in Beta — Join the conversation
        </div>
        <h1 class="hero-title animate-fade-in-up" style="animation-delay: 0.1s">
          Chat Without <span class="gradient-text">Boundaries</span>
        </h1>
        <p class="hero-subtitle animate-fade-in-up" style="animation-delay: 0.2s">
          A lightning-fast, beautifully designed messaging platform. Connect with friends, 
          teams, and communities in real-time — all from your browser.
        </p>
        <div class="hero-ctas animate-fade-in-up" style="animation-delay: 0.3s">
          <a href="#/signup" class="btn-primary btn-lg">
            Get Started Free
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a href="#features" class="btn-secondary btn-lg">
            Explore Features
          </a>
        </div>
        <div class="hero-stats animate-fade-in-up" style="animation-delay: 0.4s">
          <div class="stat-item">
            <span class="stat-number">10K+</span>
            <span class="stat-label">Active Users</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">1M+</span>
            <span class="stat-label">Messages Sent</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">99.9%</span>
            <span class="stat-label">Uptime</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="features">
      <div class="container">
        <div class="section-header animate-fade-in-up">
          <span class="section-tag">Features</span>
          <h2 class="section-title">Everything You Need to <span class="gradient-text">Stay Connected</span></h2>
          <p class="section-subtitle">Powerful features wrapped in a beautiful interface, built for speed and simplicity.</p>
        </div>

        <div class="features-grid">
          <!-- Feature 1 -->
          <div class="feature-card glass">
            <div class="feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <h3>Real-Time Messaging</h3>
            <p>Instant delivery powered by WebSockets. Your messages arrive the moment you hit send — no delays, no refreshing.</p>
          </div>

          <!-- Feature 2 -->
          <div class="feature-card glass">
            <div class="feature-icon feature-icon-accent">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>Group Conversations</h3>
            <p>Create group chats with your team, friends, or community. Tag members, share files, and keep everyone in sync.</p>
          </div>

          <!-- Feature 3 -->
          <div class="feature-card glass">
            <div class="feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3>End-to-End Secure</h3>
            <p>Your privacy matters. Every message is encrypted, and your data is never shared. Chat with confidence.</p>
          </div>

          <!-- Feature 4 -->
          <div class="feature-card glass">
            <div class="feature-icon feature-icon-accent">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3>Works Everywhere</h3>
            <p>Access WebChat from any device — desktop, tablet, or phone. No download needed, just open your browser.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works" id="how-it-works">
      <div class="container">
        <div class="section-header animate-fade-in-up">
          <span class="section-tag">How It Works</span>
          <h2 class="section-title">Start Chatting in <span class="gradient-text">3 Easy Steps</span></h2>
          <p class="section-subtitle">From signup to your first message — it only takes seconds.</p>
        </div>

        <div class="steps-container">
          <div class="step-card">
            <div class="step-number">01</div>
            <div class="step-content">
              <h3>Create Your Account</h3>
              <p>Sign up with your name and email. It's free and takes less than 30 seconds.</p>
            </div>
          </div>
          <div class="step-connector"></div>
          <div class="step-card">
            <div class="step-number">02</div>
            <div class="step-content">
              <h3>Find Your People</h3>
              <p>Search for friends, create groups, or join public communities that interest you.</p>
            </div>
          </div>
          <div class="step-connector"></div>
          <div class="step-card">
            <div class="step-number">03</div>
            <div class="step-content">
              <h3>Start Chatting</h3>
              <p>Send messages, share files, and connect in real-time. It's that simple.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card glass">
          <div class="cta-bg-glow"></div>
          <h2 class="cta-title">Ready to Start <span class="gradient-text">Chatting</span>?</h2>
          <p class="cta-subtitle">Join thousands of users who are already enjoying seamless, real-time conversations on WebChat.</p>
          <div class="cta-buttons">
            <a href="#/signup" class="btn-primary btn-lg">
              Create Free Account
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#/login" class="btn-secondary btn-lg">I Already Have an Account</a>
          </div>
        </div>
      </div>
    </section>

    ${renderFooter()}
  `;
}

/**
 * Initialize home page event listeners and animations
 */
export function initHomePage() {
    initNavbar();

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    // Observe feature cards and step cards
    document.querySelectorAll('.feature-card, .step-card, .cta-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Smooth scroll for in-page links
    document.querySelectorAll('a[href^="#features"], a[href^="#how-it-works"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').replace('#', '');
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}
