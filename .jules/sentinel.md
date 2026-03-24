## 2026-03-24 - CSP Consolidation and MathJax SRI Hardening
**Vulnerability:** The `theme/index.hbs` template contained two redundant and potentially conflicting `Content-Security-Policy` meta tags. Additionally, the MathJax script was being loaded from a CDN without Subresource Integrity (SRI) protection, and footer links lacked `rel="noopener noreferrer"`.
**Learning:** Redundant CSP tags can lead to browser confusion or weakened security policies if one is less restrictive than the intended one. CDN-hosted scripts are a common vector for supply-chain attacks if not protected by SRI.
**Prevention:** Always consolidate CSP directives into a single meta tag. Use SRI hashes for all external scripts. Ensure all external links with `target="_blank"` include `rel="noopener noreferrer"`.
