## 2026-03-26 - [Hardening Frontend Security in mdBook Theme]
**Vulnerability:** Redundant/Inconsistent CSP meta tags, missing Subresource Integrity (SRI) for CDN-hosted MathJax, and missing `rel="noopener noreferrer"` on external links.
**Learning:** mdBook custom themes often inherit security gaps if not explicitly hardened. Multiple CSP tags can lead to browser confusion or accidental bypasses. Loading scripts like MathJax without SRI poses a supply-chain risk.
**Prevention:** Consolidate CSP into a single comprehensive tag. Always use SRI hashes for external CDN scripts. Ensure all `target="_blank"` links have `rel="noopener noreferrer"` to prevent tabnabbing.
