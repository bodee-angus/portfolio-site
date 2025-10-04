import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import App from './App.tsx'

if (window.location.hash) {
  const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
  if (nav?.type === 'reload') {
    history.replaceState(null, '', window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// After the page is shown (including bfcache restores), if there's no hash,
// force a top-of-page position *after* layout paints once.
window.addEventListener('pageshow', () => {
  if (!location.hash) {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
