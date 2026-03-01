import { renderNavbar, initNavbar } from '../components/navbar.js';

/**
 * Signup Page Component
 * Renders the registration form with name, email, password, confirm password.
 */
export function renderSignupPage() {
    return `
    ${renderNavbar('/signup')}

    <section class="auth-section">
      <div class="auth-bg">
        <div class="auth-orb auth-orb-1"></div>
        <div class="auth-orb auth-orb-2"></div>
      </div>

      <div class="auth-container animate-fade-in-up">
        <div class="auth-card glass">
          <!-- Header -->
          <div class="auth-header">
            <div class="auth-icon auth-icon-signup">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="8.5" cy="7" r="4"/>
                <line x1="20" y1="8" x2="20" y2="14"/>
                <line x1="23" y1="11" x2="17" y2="11"/>
              </svg>
            </div>
            <h1>Create Account</h1>
            <p>Join WebChat and start connecting today</p>
          </div>

          <!-- Signup Form -->
          <form class="auth-form" id="signup-form" novalidate>
            <!-- Full Name -->
            <div class="form-group">
              <label for="signup-name">Full Name</label>
              <div class="input-wrapper">
                <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <input type="text" id="signup-name" placeholder="Abdul Rasheed" autocomplete="name" />
              </div>
              <span class="form-error" id="signup-name-error"></span>
            </div>

            <!-- Email -->
            <div class="form-group">
              <label for="signup-email">Email Address</label>
              <div class="input-wrapper">
                <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <input type="email" id="signup-email" placeholder="you@example.com" autocomplete="email" />
              </div>
              <span class="form-error" id="signup-email-error"></span>
            </div>

            <!-- Password -->
            <div class="form-group">
              <label for="signup-password">Password</label>
              <div class="input-wrapper">
                <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <input type="password" id="signup-password" placeholder="Min 6 characters" autocomplete="new-password" />
                <button type="button" class="password-toggle" id="signup-password-toggle" aria-label="Toggle password">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-open">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-closed" style="display:none">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                </button>
              </div>
              <!-- Password Strength -->
              <div class="password-strength" id="password-strength">
                <div class="strength-bar"><div class="strength-fill" id="strength-fill"></div></div>
                <span class="strength-text" id="strength-text"></span>
              </div>
              <span class="form-error" id="signup-password-error"></span>
            </div>

            <!-- Confirm Password -->
            <div class="form-group">
              <label for="signup-confirm">Confirm Password</label>
              <div class="input-wrapper">
                <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <input type="password" id="signup-confirm" placeholder="Re-enter your password" autocomplete="new-password" />
              </div>
              <span class="form-error" id="signup-confirm-error"></span>
            </div>

            <!-- Submit -->
            <button type="submit" class="btn-primary btn-full" id="signup-submit">
              Create Account
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>

          <!-- Divider -->
          <div class="auth-divider">
            <span>or</span>
          </div>

          <!-- Social Signup Placeholder -->
          <button class="btn-social glass" disabled>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google (Coming Soon)
          </button>

          <!-- Switch to Login -->
          <p class="auth-switch">
            Already have an account? <a href="#/login">Sign in</a>
          </p>
        </div>
      </div>
    </section>
  `;
}

/**
 * Initialize signup page event listeners
 */
export function initSignupPage() {
    initNavbar();

    const form = document.getElementById('signup-form');
    const nameInput = document.getElementById('signup-name');
    const emailInput = document.getElementById('signup-email');
    const passwordInput = document.getElementById('signup-password');
    const confirmInput = document.getElementById('signup-confirm');
    const passwordToggle = document.getElementById('signup-password-toggle');
    const strengthFill = document.getElementById('strength-fill');
    const strengthText = document.getElementById('strength-text');

    // Password visibility toggle
    if (passwordToggle) {
        passwordToggle.addEventListener('click', () => {
            const type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;
            passwordToggle.querySelector('.eye-open').style.display = type === 'password' ? 'block' : 'none';
            passwordToggle.querySelector('.eye-closed').style.display = type === 'password' ? 'none' : 'block';
        });
    }

    // Password strength meter
    if (passwordInput) {
        passwordInput.addEventListener('input', () => {
            const val = passwordInput.value;
            let score = 0;
            if (val.length >= 6) score++;
            if (val.length >= 10) score++;
            if (/[A-Z]/.test(val)) score++;
            if (/[0-9]/.test(val)) score++;
            if (/[^A-Za-z0-9]/.test(val)) score++;

            const colors = ['#ef4444', '#f59e0b', '#eab308', '#22c55e', '#10b981'];
            const labels = ['Very Weak', 'Weak', 'Fair', 'Strong', 'Very Strong'];

            if (val.length === 0) {
                strengthFill.style.width = '0%';
                strengthText.textContent = '';
            } else {
                const idx = Math.min(score, 4);
                strengthFill.style.width = `${(score / 5) * 100}%`;
                strengthFill.style.backgroundColor = colors[idx];
                strengthText.textContent = labels[idx];
                strengthText.style.color = colors[idx];
            }
        });
    }

    // Form validation on submit
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Validate name
            const nameError = document.getElementById('signup-name-error');
            if (!nameInput.value.trim()) {
                nameError.textContent = 'Full name is required';
                nameInput.parentElement.classList.add('error');
                isValid = false;
            } else if (nameInput.value.trim().length < 2) {
                nameError.textContent = 'Name must be at least 2 characters';
                nameInput.parentElement.classList.add('error');
                isValid = false;
            } else {
                nameError.textContent = '';
                nameInput.parentElement.classList.remove('error');
            }

            // Validate email
            const emailError = document.getElementById('signup-email-error');
            if (!emailInput.value.trim()) {
                emailError.textContent = 'Email is required';
                emailInput.parentElement.classList.add('error');
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address';
                emailInput.parentElement.classList.add('error');
                isValid = false;
            } else {
                emailError.textContent = '';
                emailInput.parentElement.classList.remove('error');
            }

            // Validate password
            const passwordError = document.getElementById('signup-password-error');
            if (!passwordInput.value) {
                passwordError.textContent = 'Password is required';
                passwordInput.parentElement.classList.add('error');
                isValid = false;
            } else if (passwordInput.value.length < 6) {
                passwordError.textContent = 'Password must be at least 6 characters';
                passwordInput.parentElement.classList.add('error');
                isValid = false;
            } else {
                passwordError.textContent = '';
                passwordInput.parentElement.classList.remove('error');
            }

            // Validate confirm password
            const confirmError = document.getElementById('signup-confirm-error');
            if (!confirmInput.value) {
                confirmError.textContent = 'Please confirm your password';
                confirmInput.parentElement.classList.add('error');
                isValid = false;
            } else if (confirmInput.value !== passwordInput.value) {
                confirmError.textContent = 'Passwords do not match';
                confirmInput.parentElement.classList.add('error');
                isValid = false;
            } else {
                confirmError.textContent = '';
                confirmInput.parentElement.classList.remove('error');
            }

            if (isValid) {
                // In the future, this will call the Express backend API
                console.log('Signup submitted:', {
                    name: nameInput.value,
                    email: emailInput.value,
                });
                alert('Account created! (Backend integration coming soon)');
                window.location.hash = '#/login';
            }
        });

        // Clear errors on input
        [nameInput, emailInput, passwordInput, confirmInput].forEach(input => {
            input.addEventListener('input', () => {
                input.parentElement.classList.remove('error');
                const fieldName = input.id.replace('signup-', '');
                const errorEl = document.getElementById(`signup-${fieldName}-error`);
                if (errorEl) errorEl.textContent = '';
            });
        });
    }
}
