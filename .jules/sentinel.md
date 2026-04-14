## 2026-04-14 - Redundant CSP Tags and Missing SRI
**Vulnerability:** Redundant Content Security Policy (CSP) meta tags and missing Subresource Integrity (SRI) for external MathJax script.
**Learning:** Having multiple CSP meta tags can lead to browser confusion and maintenance overhead. Missing SRI on external scripts from CDNs (like cdnjs) exposes the site to potential XSS if the CDN is compromised.
**Prevention:** Consolidate CSP into a single comprehensive tag. Always implement SRI for external scripts with verified hashes. Use Playwright to verify the presence and correctness of security headers in the generated output.
