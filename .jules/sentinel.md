# Sentinel Security Journal

This journal records critical security learnings for the VST 3 Developer Portal project.

## 2025-05-15 - Consolidating Security Headers and SRI
**Vulnerability:** Redundant and incomplete Content-Security-Policy (CSP) meta tags, lack of Subresource Integrity (SRI) for external MathJax scripts, and missing reverse tabnabbing protection for external links.
**Learning:** Browsers enforce the intersection of multiple CSP policies, which can lead to unintended blocking of resources if not carefully consolidated. Dynamic scripts like Google Analytics can change, making SRI difficult to maintain without automated updates, whereas static versioned libraries like MathJax are ideal candidates for SRI.
**Prevention:** Use a single, comprehensive CSP meta tag. Always apply SRI to versioned external assets. Ensure all `target="_blank"` links include `rel="noopener noreferrer"`.

## 2025-05-16 - DOM-based XSS Prevention and CSP Hardening
**Vulnerability:** Potential DOM-based XSS via `.innerHTML` in `theme/book.js` and missing defense-in-depth CSP directives.
**Learning:** Even if the injected content is currently static or trustworthy, using `.innerHTML` creates an XSS sink that could be exploited if the source of the content changes. Browsers ignore `frame-ancestors` in `<meta>` tags (it must be in an HTTP header), but keeping it in the template serves as documentation of security intent and satisfies some audit tools.
**Prevention:** Always prefer safe DOM APIs like `document.createElement`, `textContent`, and `appendChild` over `innerHTML`. Implement strict CSP directives including `base-uri 'self'`, `form-action 'self'`, and `upgrade-insecure-requests`.
