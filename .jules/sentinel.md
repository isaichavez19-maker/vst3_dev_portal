## 2026-04-01 - [Consolidated CSP and SRI Implementation]
**Vulnerability:** Redundant and conflicting Content-Security-Policy (CSP) meta tags and lack of Subresource Integrity (SRI) for external CDN-hosted scripts (MathJax).
**Learning:** Multiple CSP tags are additive, meaning a resource must pass ALL of them. Conflicting tags can cause legitimate assets (like data: URIs or fonts) to be blocked even if one tag allows them. Lack of SRI on CDNs exposes the site to supply-chain attacks.
**Prevention:** Always consolidate CSP into a single comprehensive tag. Use SRI (integrity attribute) for all external scripts and styles hosted on CDNs to ensure code authenticity.
