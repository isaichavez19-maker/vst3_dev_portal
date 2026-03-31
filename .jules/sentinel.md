## 2026-03-31 - Consolidated CSP and SRI Hardening
**Vulnerability:** Duplicate and conflicting Content-Security-Policy meta tags in the main template, and lack of Subresource Integrity (SRI) for external MathJax scripts.
**Learning:** Having multiple CSP meta tags can lead to confusion as browsers enforce the most restrictive intersection of all policies. Redundant tags also increase the risk of maintenance errors where one is updated but the other isn't.
**Prevention:** Always consolidate CSPs into a single authoritative tag. Use SRI for all external scripts to protect against CDN compromises.
