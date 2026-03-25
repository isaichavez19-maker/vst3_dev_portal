## 2026-03-25 - [mdBook Security Hardening]
**Vulnerability:** Redundant and overly permissive Content-Security-Policy (CSP) headers in custom themes, lack of Subresource Integrity (SRI) for CDN-hosted scripts, and missing tabnabbing protection on external links.
**Learning:** mdBook custom themes (`index.hbs`) often inherit legacy configurations that may have duplicate `<meta>` tags. MathJax and other CDN-hosted assets should always be pinned with SRI to prevent supply chain attacks.
**Prevention:** Consolidate CSP into a single comprehensive tag. Use `curl | openssl` to calculate SRI hashes for all external scripts. Ensure `rel="noopener noreferrer"` is present on all `target="_blank"` anchors.
