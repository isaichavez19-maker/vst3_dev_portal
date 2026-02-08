## 2026-02-08 - [Consolidated CSP and SRI Implementation]
**Vulnerability:** Redundant and loose CSP meta tags allowed for potential bypasses, and MathJax was loaded from CDN without integrity verification.
**Learning:** Consolidating CSP tags ensures the browser enforces a single, consistent policy. Adding SRI hashes to CDN-hosted scripts like MathJax provides defense-in-depth against supply chain attacks.
**Prevention:** Always consolidate CSP directives into one tag and use SRI for all external resources.
