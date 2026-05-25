## 2026-05-25 - Content Security Policy Meta Tag Consolidation
**Vulnerability:** Redundant CSP meta tags in `theme/index.hbs`.
**Learning:** Browsers enforce the intersection of all CSP policies found in meta tags. If one tag is more restrictive or missing directives required by the other, it can lead to unintended resource blocking and broken functionality even if one tag appears correct.
**Prevention:** Consolidate all CSP directives into a single meta tag to ensure a consistent and predictable security policy.
