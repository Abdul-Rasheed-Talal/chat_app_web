import { renderNavbar, initNavbar } from '../components/navbar.js';

/**
 * Forgot Password Page Component
 * Step 1: Enter email → Step 2: Success confirmation
 */
export function renderForgotPasswordPage() {
    return `
    ${renderNavbar('/forgot-password')}

    <section class="auth-section">
      <div class="auth-bg">
        <div class="auth-orb auth-orb-1"></div>
        <div class="auth-orb auth-orb-2"></div>
      </div>

      <div class="auth-container animate-fade-in-up">
        <div class="auth-card glass">

          <!-- Step 1: Enter Email -->
          <div id="forgot-step-email">
            <div class="auth-header">
              <div class="auth-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h1>Forgot Password?</h1>
              <p>No worries! Enter your email and we'll send you a reset link.</p>
            </div>

            <form class="auth-form" id="forgot-form" novalidate>
              <div class="form-group">
                <label for="forgot-email">Email Address</label>
                <div class="input-wrapper">
                  <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <input type="email" id="forgot-email" placeholder="you@example.com" autocomplete="email" />
                </div>
                <span class="form-error" id="forgot-email-error"></span>
              </div>

              <button type="submit" class="btn-primary btn-full" id="forgot-submit">
                Send Reset Link
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>

            <p class="auth-switch">
              Remember your password? <a href="#/login">Back to Login</a>
            </p>
          </div>

          <!-- Step 2: Success Confirmation -->
          <div id="forgot-step-success" style="display: none;">
            <div class="auth-header">
              <div class="auth-icon auth-icon-success">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h1>Check Your Email</h1>
              <p>We've sent a password reset link to:</p>
              <p class="forgot-email-display" id="forgot-email-display"></p>
              <p class="forgot-instructions">Click the link in the email to reset your password. If you don't see it, check your spam folder.</p>
            </div>

            <button class="btn-primary btn-full" id="forgot-resend">
              Resend Email
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="23 4 23 10 17 10"/>
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
              </svg>
            </button>

            <div class="forgot-resend-timer" id="forgot-resend-timer"></div>

            <p class="auth-switch">
              <a href="#/login">← Back to Login</a>
            </p>
          </div>

        </div>
      </div>
    </section>
  `;
}

/**
 * Initialize forgot password page event listeners
 */
export function initForgotPasswordPage() {
    initNavbar();

    const form = document.getElementById('forgot-form');
    const emailInput = document.getElementById('forgot-email');
    const stepEmail = document.getElementById('forgot-step-email');
    const stepSuccess = document.getElementById('forgot-step-success');
    const emailDisplay = document.getElementById('forgot-email-display');
    const resendBtn = document.getElementById('forgot-resend');
    const resendTimer = document.getElementById('forgot-resend-timer');

    let cooldown = 0;
    let cooldownInterval = null;

    function startResendCooldown() {
        cooldown = 30;
        resendBtn.disabled = true;
        resendBtn.style.opacity = '0.5';
        resendBtn.style.cursor = 'not-allowed';
        resendTimer.textContent = `You can resend in ${cooldown}s`;

        cooldownInterval = setInterval(() => {
            cooldown--;
            if (cooldown <= 0) {
                clearInterval(cooldownInterval);
                resendBtn.disabled = false;
                resendBtn.style.opacity = '1';
                resendBtn.style.cursor = 'pointer';
                resendTimer.textContent = '';
            } else {
                resendTimer.textContent = `You can resend in ${cooldown}s`;
            }
        }, 1000);
    }

    // Form submit — validate and show success
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const emailError = document.getElementById('forgot-email-error');
            const email = emailInput.value.trim();

            if (!email) {
                emailError.textContent = 'Email is required';
                emailInput.parentElement.classList.add('error');
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                emailError.textContent = 'Please enter a valid email address';
                emailInput.parentElement.classList.add('error');
                return;
            }

            emailError.textContent = '';
            emailInput.parentElement.classList.remove('error');

            // Show success step
            emailDisplay.textContent = email;
            stepEmail.style.display = 'none';
            stepSuccess.style.display = 'block';
            stepSuccess.classList.add('animate-fade-in-up');

            // In the future, this will call the Express backend API to send the email
            console.log('Password reset requested for:', email);

            startResendCooldown();
        });

        // Clear error on input
        emailInput.addEventListener('input', () => {
            emailInput.parentElement.classList.remove('error');
            document.getElementById('forgot-email-error').textContent = '';
        });
    }

    // Resend button
    if (resendBtn) {
        resendBtn.addEventListener('click', () => {
            if (cooldown > 0) return;

            const email = emailDisplay.textContent;
            console.log('Resending password reset to:', email);

            // Simulate resend
            startResendCooldown();

            // Brief visual feedback
            resendBtn.textContent = 'Email Sent!';
            setTimeout(() => {
                resendBtn.innerHTML = `
          Resend Email
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="23 4 23 10 17 10"/>
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
          </svg>
        `;
            }, 2000);
        });
    }
}
