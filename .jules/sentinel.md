## 2026-04-29 - [Initial Security Audit]
**Vulnerability:** Weak CSP and missing SRI for external assets.
**Learning:** The project relies on multiple external CDNs (cdnjs, google-analytics) without integrity checks, and has overlapping/redundant CSP meta tags with 'unsafe-inline'.
**Prevention:** Consolidate CSP into a single robust tag, implement Subresource Integrity (SRI) for all external scripts, and add security headers for external links.
