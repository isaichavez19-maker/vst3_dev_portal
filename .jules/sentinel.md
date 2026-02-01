## 2026-02-01 - CSP Consolidation and Policy Intersection
**Vulnerability:** Redundant and conflicting Content Security Policy (CSP) meta tags in the same HTML document.
**Learning:** Browsers enforce the intersection of all CSP policies. If multiple tags exist, the most restrictive directive for each source type is applied. This can lead to silent failures or redundant headers that complicate security auditing.
**Prevention:** Consolidate all security directives into a single `Content-Security-Policy` meta tag or header to ensure a clear, predictable, and maintainable security posture.
