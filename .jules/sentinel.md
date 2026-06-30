# Sentinel Security Journal

This journal records critical security learnings for the VST 3 Developer Portal project.

## 2025-05-15 - Consolidating Security Headers and SRI
**Vulnerability:** Redundant and incomplete Content-Security-Policy (CSP) meta tags, lack of Subresource Integrity (SRI) for external MathJax scripts, and missing reverse tabnabbing protection for external links.
**Learning:** Browsers enforce the intersection of multiple CSP policies, which can lead to unintended blocking of resources if not carefully consolidated. Dynamic scripts like Google Analytics can change, making SRI difficult to maintain without automated updates, whereas static versioned libraries like MathJax are ideal candidates for SRI.
**Prevention:** Use a single, comprehensive CSP meta tag. Always apply SRI to versioned external assets. Ensure all `target="_blank"` links include `rel="noopener noreferrer"`.

## 2026-06-30 - Hardening CSP and Referrer Policy
**Vulnerability:** Weak CSP lacking 'base-uri', 'form-action', and 'upgrade-insecure-requests'; missing Referrer Policy; insecure HTTP links.
**Learning:** Even static documentation sites benefit from advanced CSP directives to prevent hijacking and enforce secure transmission. Functional documentation features (like Mermaid) should not be sacrificed for environment-specific build issues during security patching.
**Prevention:** Use comprehensive CSP and Referrer Policy meta tags. Ensure all external links are HTTPS.
