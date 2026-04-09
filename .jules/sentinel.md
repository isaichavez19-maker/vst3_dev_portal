## 2026-04-09 - [Consolidated CSP and SRI Implementation]
**Vulnerability:** Redundant and incomplete Content-Security-Policy tags and missing Subresource Integrity for external scripts.
**Learning:** Having multiple CSP meta tags can lead to browser confusion where the most restrictive policy might block intended functionality, or worse, they might be bypassed if not properly synchronized. Additionally, loading MathJax from a CDN without SRI poses a supply-chain risk.
**Prevention:** Always consolidate CSP into a single comprehensive tag and use SRI for all third-party scripts. Whitelist only necessary domains (e.g., play.rust-lang.org for mdbook playgrounds).
