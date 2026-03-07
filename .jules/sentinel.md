## 2025-10-24 - [Harden CSP and add SRI for MathJax]
**Vulnerability:** Redundant CSP meta tags and missing Subresource Integrity (SRI) for external MathJax script.
**Learning:** Overlapping CSP policies can lead to inconsistent browser enforcement. Loading external scripts without SRI exposes the site to CDN compromise.
**Prevention:** Consolidate CSP into a single source of truth. Always use SRI for scripts loaded from third-party CDNs.
