## 2026-03-23 - [Harden Frontend Security Headers and Scripts]
**Vulnerability:** Multiple redundant and slightly conflicting Content-Security-Policy (CSP) meta tags, lack of Subresource Integrity (SRI) for external scripts, and potential tabnabbing vulnerabilities in footer links.
**Learning:** Redundant CSP meta tags can lead to browser confusion and inconsistent policy enforcement. External scripts from CDNs (like MathJax) should always be pinned with SRI to prevent XSS if the CDN is compromised.
**Prevention:** Consolidate CSP into a single, well-defined meta tag. Always use SRI for external scripts. Include 'noopener noreferrer' on all external links using target="_blank".
