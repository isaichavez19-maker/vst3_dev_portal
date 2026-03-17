## 2026-03-17 - Hardened Security Headers and SRI for mdBook
**Vulnerability:** Redundant/weak CSP meta tags and lack of Subresource Integrity (SRI) for external scripts (MathJax).
**Learning:** mdBook templates can have conflicting CSP meta tags if not carefully managed. External CDNs like cdnjs should always be secured with SRI to prevent supply chain attacks.
**Prevention:** Consolidate CSP into a single hardened meta tag and mandate `integrity` and `crossorigin` attributes for all external assets in `theme/index.hbs`.
