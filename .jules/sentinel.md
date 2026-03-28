## 2026-03-28 - [Frontend Hardening: CSP, SRI, and Tabnabbing Mitigation]
**Vulnerability:** Redundant and incomplete Content-Security-Policy (CSP), lack of Subresource Integrity (SRI) for external CDNs, and potential tabnabbing via insecure external links.
**Learning:** Legacy templates often accumulate multiple CSP meta tags which can lead to confusion or inconsistent enforcement. Additionally, external scripts from CDNs like MathJax are a risk without SRI, and external links without `rel="noopener noreferrer"` can be exploited by malicious sites opened in new tabs.
**Prevention:** Consolidate CSPs into a single, well-defined tag. Always use SRI for external assets. Enforce `rel="noopener noreferrer"` for all `target="_blank"` links.
