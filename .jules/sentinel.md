
## 2026-02-11 - [CSP Consolidation and SRI Hardening]
**Vulnerability:** Redundant and conflicting Content Security Policy (CSP) meta tags and lack of Subresource Integrity (SRI) for external scripts.
**Learning:** Multiple CSP meta tags are enforced as an intersection by browsers, which can lead to unintentional resource blocking and configuration confusion. Loading external scripts (like MathJax) from a CDN without SRI exposes the site to supply-chain attacks if the CDN is compromised.
**Prevention:** Consolidate CSP into a single comprehensive meta tag. Always use SRI hashes for external resources.
