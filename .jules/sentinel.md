## 2026-03-03 - [Security] CSP Consolidation and Hardening
**Vulnerability:** Redundant Content-Security-Policy (CSP) meta tags in `theme/index.hbs`.
**Learning:** Browsers enforce the most restrictive intersection of multiple CSP policies. Having multiple tags can lead to unexpected blocking of legitimate resources (like the mdBook playground) and makes policy management error-prone.
**Prevention:** Always consolidate CSP directives into a single comprehensive `<meta>` tag or HTTP header.
