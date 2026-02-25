## 2026-02-25 - Frontend Security Hardening and CSP Consolidation
**Vulnerability:** Redundant and conflicting Content-Security-Policy (CSP) meta tags, lack of Subresource Integrity (SRI) for external and local scripts, and exposure to reverse tabnabbing via footer links.
**Learning:** Multiple CSP meta tags are intersected by the browser, which can lead to unintended resource blocking if not carefully managed. mdbook's 'additional-js' does not support SRI, necessitating manual injection in templates for hardened supply chain integrity.
**Prevention:** Consolidate CSP into a single comprehensive tag. Use manual template injection for scripts that require SRI. Always include 'rel="noopener noreferrer"' on 'target="_blank"' links.
