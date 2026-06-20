# Sentinel Security Journal

This journal records critical security learnings for the VST 3 Developer Portal project.

## 2025-05-15 - Consolidating Security Headers and SRI
**Vulnerability:** Redundant and incomplete Content-Security-Policy (CSP) meta tags, lack of Subresource Integrity (SRI) for external MathJax scripts, and missing reverse tabnabbing protection for external links.
**Learning:** Browsers enforce the intersection of multiple CSP policies, which can lead to unintended blocking of resources if not carefully consolidated. Dynamic scripts like Google Analytics can change, making SRI difficult to maintain without automated updates, whereas static versioned libraries like MathJax are ideal candidates for SRI.
**Prevention:** Use a single, comprehensive CSP meta tag. Always apply SRI to versioned external assets. Ensure all `target="_blank"` links include `rel="noopener noreferrer"`.

## 2026-06-20 - Defense in Depth and HTTPS Migration
**Vulnerability:** Incomplete CSP (missing base-uri, form-action, upgrade-insecure-requests), missing Referrer Policy, and numerous insecure documentation links (HTTP).
**Learning:** Hardening security headers (CSP, Referrer Policy) provides a strong defense-in-depth layer against XSS, clickjacking, and information leakage. Migrating documentation links to HTTPS is essential to prevent MitM attacks and ensure user trust, especially for licensing and SDK resources.
**Prevention:** Always include `base-uri 'self'`, `form-action 'self'`, and `upgrade-insecure-requests` in CSP. Enforce a strict Referrer Policy. Periodically audit and migrate all external links to HTTPS.
