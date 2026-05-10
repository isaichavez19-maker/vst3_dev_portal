## 2026-05-10 - [CSP Consolidation and MathJax SRI]
**Vulnerability:** Redundant and incomplete Content Security Policy (CSP) headers, and missing Subresource Integrity (SRI) on externally hosted MathJax scripts.
**Learning:** Redundant CSP meta tags can lead to confusion and maintenance overhead. MathJax v2.7.1 from cdnjs requires an SRI hash to prevent tampering. Explicitly whitelisting `https://play.rust-lang.org` is necessary for the Rust Playground feature to function under a strict CSP.
**Prevention:** Use a single, consolidated CSP meta tag. Always apply SRI to third-party assets. Regularly audit CSP for necessary third-party domains.
