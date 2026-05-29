## 2026-05-29 - CSP Consolidation and MathJax SRI
**Vulnerability:** Redundant CSP meta tags and missing SRI for external MathJax script.
**Learning:** Redundant CSP meta tags are enforced as an intersection by browsers, which can lead to over-restriction if not carefully managed. MathJax from CDN was missing SRI, posing a supply chain risk.
**Prevention:** Always consolidate CSP into a single tag. Use SRI for all third-party static assets. Ensure `connect-src` includes external APIs used by theme scripts (like Rust Playground).
