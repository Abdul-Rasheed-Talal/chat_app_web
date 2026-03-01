/**
 * Simple hash-based SPA Router
 * Routes are defined as { path: string, component: () => string }
 * This pattern maps directly to React Router for future migration.
 */

class Router {
  constructor(routes = []) {
    this.routes = routes;
    this.appElement = null;
    this._onRouteChange = null;

    // Listen for hash changes
    window.addEventListener('hashchange', () => this._resolve());
    window.addEventListener('DOMContentLoaded', () => this._resolve());
  }

  /**
   * Set the DOM element where pages will be rendered
   */
  setAppElement(element) {
    this.appElement = element;
    return this;
  }

  /**
   * Register a callback for route changes
   */
  onRouteChange(callback) {
    this._onRouteChange = callback;
    return this;
  }

  /**
   * Navigate to a given path programmatically
   */
  static navigate(path) {
    window.location.hash = path;
  }

  /**
   * Get the current hash path
   */
  static getCurrentPath() {
    return window.location.hash.slice(1) || '/';
  }

  /**
   * Resolve the current route and render
   */
  _resolve() {
    const path = Router.getCurrentPath();

    const route = this.routes.find(r => r.path === path);

    if (route && this.appElement) {
      // Fade-out, swap, fade-in transition
      this.appElement.style.opacity = '0';
      this.appElement.style.transition = 'opacity 0.2s ease';

      setTimeout(() => {
        this.appElement.innerHTML = route.component();
        this.appElement.style.opacity = '1';

        // Re-attach any event listeners the component needs
        if (route.afterRender) {
          route.afterRender();
        }

        // Notify route change callback
        if (this._onRouteChange) {
          this._onRouteChange(path);
        }

        // Scroll to top on page change
        window.scrollTo(0, 0);
      }, 200);
    }
  }
}

export default Router;
