## 2026-03-18 - [Hardened Frontend Security]
**Vulnerability:** Redundant and incomplete Content-Security-Policy (CSP) meta tags and lack of Subresource Integrity (SRI) for CDN-hosted scripts.
**Learning:** Duplicate CSP meta tags can cause inconsistent browser behavior. A single, comprehensive policy is required. Whitelisting 'unsafe-inline' is often necessary for legacy themes but should be balanced by strict 'self' and trusted CDN whitelisting.
**Prevention:** Always consolidate security headers/meta-tags. Implement SRI for all external assets to mitigate supply-chain risks.
