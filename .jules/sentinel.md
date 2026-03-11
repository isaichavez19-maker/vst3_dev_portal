## 2026-03-11 - Hardening CSP and External Resources
**Vulnerability:** Redundant and incomplete Content-Security-Policy (CSP) meta tags, missing Subresource Integrity (SRI) for MathJax, and missing `rel="noopener"` on external links.
**Learning:** Multiple CSP meta tags are additive and can lead to unintended resource blocking if not carefully managed. External CDNs should always use SRI to prevent supply chain attacks.
**Prevention:** Use a single, comprehensive CSP tag. Always calculate and include SRI for external scripts. Ensure all `target="_blank"` links include `rel="noopener"`.
