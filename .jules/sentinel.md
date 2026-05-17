## 2026-05-17 - Redundant CSP Meta Tags and Consolidation
**Vulnerability:** Redundant Content-Security-Policy meta tags were present in the main template, leading to potential "intersection" effects where the browser enforces the most restrictive parts of both, potentially breaking legitimate features.
**Learning:** Multiple CSP policies are additive in their restrictiveness. Whitelisting a source in one tag doesn't help if it's not whitelisted in the other.
**Prevention:** Always maintain a single, consolidated CSP policy to ensure consistency and easier auditing of allowed origins.
