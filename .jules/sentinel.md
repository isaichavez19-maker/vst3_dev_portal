# Sentinel Security Journal

This journal records critical security learnings for the VST 3 Developer Portal project.

## 2025-05-15 - Consolidating Security Headers and SRI
**Vulnerability:** Redundant and incomplete Content-Security-Policy (CSP) meta tags, lack of Subresource Integrity (SRI) for external MathJax scripts, and missing reverse tabnabbing protection for external links.
**Learning:** Browsers enforce the intersection of multiple CSP policies, which can lead to unintended blocking of resources if not carefully consolidated. Dynamic scripts like Google Analytics can change, making SRI difficult to maintain without automated updates, whereas static versioned libraries like MathJax are ideal candidates for SRI.
**Prevention:** Use a single, comprehensive CSP meta tag. Always apply SRI to versioned external assets. Ensure all `target="_blank"` links include `rel="noopener noreferrer"`.

## 2026-07-05 - Hardening Transport Security and Referrer Privacy
**Vulnerability:** Insecure HTTP links in licensing documentation and missing CSP directives to prevent base exfiltration or form hijacking.
**Learning:** Hardcoding HTTP links in documentation can lead to MitM risks even if the main site is served over HTTPS. Enforcing `upgrade-insecure-requests` via CSP provides a programmatic safety net for legacy content.
**Prevention:** Regularly audit documentation for insecure links and use CSP directives like `base-uri 'self'`, `form-action 'self'`, and `upgrade-insecure-requests` to harden the browser environment.
