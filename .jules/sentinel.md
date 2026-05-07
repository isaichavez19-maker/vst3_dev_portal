## 2026-05-07 - CSP Consolidation and SRI Hardening
**Vulnerability:** Redundant CSP meta tags and missing SRI for external MathJax script.
**Learning:** Redundant CSP tags can lead to confusion and maintenance overhead. External scripts from CDNs should always use SRI to prevent supply chain attacks. MDbook's playground features require `https://play.rust-lang.org` to be explicitly whitelisted in `script-src` and `connect-src`.
**Prevention:** Consolidate security headers and always verify external asset integrity with SRI hashes.
