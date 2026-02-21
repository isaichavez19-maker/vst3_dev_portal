## 2026-02-21 - Redundant CSP Meta Tags Confusion
**Vulnerability:** The presence of multiple Content-Security-Policy meta tags in the same HTML document.
**Learning:** Browsers do not merge multiple CSP tags into a single policy; instead, they enforce the intersection of all policies. This can lead to unexpected resource blocking or a false sense of security if one tag is more permissive than intended while the other is overly restrictive.
**Prevention:** Always consolidate CSP directives into a single comprehensive meta tag or HTTP header to ensure a predictable and consistent security posture.
