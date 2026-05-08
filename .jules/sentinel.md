## 2026-05-08 - Hardening Content Security Policy and External Assets
**Vulnerability:** Redundant and insufficient Content Security Policy (CSP) headers, lack of Subresource Integrity (SRI) on externally hosted MathJax, and potential tabnabbing on footer links.
**Learning:** Consolidating CSP headers into a single meta tag reduces browser ambiguity and ensures a unified security posture. Whitelisting specific domains like `play.rust-lang.org` is essential for mdBook interactive features while maintaining a strict `default-src 'self'` policy.
**Prevention:** Regularly audit the `theme/index.hbs` for CSP completeness, always apply SRI to CDN-hosted assets, and ensure all external links using `target="_blank"` include `rel="noopener noreferrer"`.
