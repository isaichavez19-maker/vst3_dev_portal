## 2026-05-19 - Consolidated CSP and Added SRI
**Vulnerability:** Redundant and insecure Content Security Policy, and lack of Subresource Integrity for CDN-hosted scripts.
**Learning:** Multiple CSP meta tags can cause browser confusion and functional issues. CDN scripts without SRI are a high-risk XSS vector.
**Prevention:** Use a single, comprehensive CSP and always use SRI for external scripts.
