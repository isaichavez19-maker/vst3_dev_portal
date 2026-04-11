# Sentinel Security Journal

## 2026-04-11 - Redundant and Incomplete Content Security Policy
**Vulnerability:** Redundant CSP meta tags with missing directives for required features (Rust Playground, Analytics).
**Learning:** Redundant tags can lead to browser confusion where the most restrictive policy might block legitimate features if not carefully managed across all tags.
**Prevention:** Maintain a single, consolidated CSP meta tag in the base template and ensure all external dependencies (CDNs, tracking, interactive features) are explicitly whitelisted.

## 2026-04-11 - Lack of Subresource Integrity (SRI) for External Scripts
**Vulnerability:** External scripts (MathJax) were included without integrity checks, making the site vulnerable to CDN compromise.
**Learning:** Even well-known CDNs can be a vector for supply chain attacks.
**Prevention:** Always use SRI hashes (`integrity` attribute) and `crossorigin="anonymous"` when including scripts from external domains.
