## 2026-02-28 - CSP Consolidation and MathJax SRI
**Vulnerability:** Redundant CSP meta tags and missing SRI for external MathJax script.
**Learning:** Multiple CSP meta tags can cause browser confusion and unintended blocking of legitimate resources. External scripts without SRI are vulnerable to CDN compromise. Downgrading mdbook to v0.4.40 was necessary to prevent UI regressions caused by asset hashing in newer versions.
**Prevention:** Always consolidate CSP directives into a single comprehensive tag. Use SRI for all external resources. Verify frontend rendering with the project's recommended build tools and versions.
