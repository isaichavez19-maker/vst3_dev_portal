## 2026-05-21 - [Security Header Consolidation and Link Hardening]
**Vulnerability:** Redundant and incomplete Content-Security-Policy (CSP) meta tags were present in `theme/index.hbs`. Additionally, external links in the footer lacked `rel="noopener noreferrer"`, posing a tabnabbing risk, and the MathJax script from a public CDN lacked Subresource Integrity (SRI) validation.
**Learning:** Browsers enforce the intersection of multiple CSP policies, which can cause unexpected resource blocking. Consolidating into a single policy ensures clarity and correctness.
**Prevention:** Always consolidate CSP directives into a single meta tag or header. Use `rel="noopener noreferrer"` for all `target="_blank"` links and apply SRI hashes to all external scripts.
