import Router from './router.js';
import { renderHomePage, initHomePage } from '../pages/home.js';
import { renderLoginPage, initLoginPage } from '../scripts/login.js';
import { renderSignupPage, initSignupPage } from '../scripts/signup.js';
import { renderForgotPasswordPage, initForgotPasswordPage } from '../scripts/forgot-password.js';
import '../styles/style.css';

// Define routes — this is equivalent to React Router's <Route> definitions
const router = new Router([
    {
        path: '/',
        component: renderHomePage,
        afterRender: initHomePage,
    },
    {
        path: '/login',
        component: renderLoginPage,
        afterRender: initLoginPage,
    },
    {
        path: '/signup',
        component: renderSignupPage,
        afterRender: initSignupPage,
    },
    {
        path: '/forgot-password',
        component: renderForgotPasswordPage,
        afterRender: initForgotPasswordPage,
    },
    // Ali Raza's chat route will be added here later:
    // {
    //   path: '/chat',
    //   component: renderChatPage,
    //   afterRender: initChatPage,
    // },
]);

// Initialize routes
router.setAppElement(document.querySelector('#app'));

// Set default route if no hash
if (!window.location.hash) {
    window.location.hash = '#/';
}
