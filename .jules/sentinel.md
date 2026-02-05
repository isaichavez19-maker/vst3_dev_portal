## 2025-02-05 - Redundant CSP Tags and Intersection Enforcement
**Vulnerability:** Redundant or duplicate Content-Security-Policy (CSP) meta tags in the HTML head.
**Learning:** Browsers do not merge multiple CSP tags. Instead, they enforce the most restrictive intersection of all policies. This can lead to unexpected blocking of legitimate resources if one tag is missing a directive present in another.
**Prevention:** Consolidate all CSP directives into a single meta tag or a single HTTP header to ensure a clear, predictable, and manageable security policy.
