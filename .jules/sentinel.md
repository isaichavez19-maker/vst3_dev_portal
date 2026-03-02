## 2026-03-02 - [Consolidate and Harden CSP, Add SRI for MathJax]
**Vulnerability:** Redundant CSP meta tags leading to potential browser confusion and lack of integrity verification for external MathJax library.
**Learning:** Consolidating CSP meta tags ensures consistent enforcement. Adding SRI for CDN-hosted scripts (MathJax) provides defense-in-depth against CDN compromises. Whitelisting 'https://play.rust-lang.org' is necessary for mdBook's interactive playground features.
**Prevention:** Always consolidate CSP directives into a single comprehensive tag. Use SRI for all external resources.
