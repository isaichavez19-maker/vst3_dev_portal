## 2026-04-06 - SRI Implementation for External Scripts in mdBook
**Vulnerability:** External scripts loaded from CDNs without integrity checks are susceptible to supply-chain attacks if the CDN is compromised.
**Learning:** mdBook templates (theme/index.hbs) often include external scripts like MathJax. SRI should be manually applied to these script tags. Calculating the SRI hash using `curl | openssl` is the standard procedure.
**Prevention:** Always verify external script URLs and include `integrity` and `crossorigin="anonymous"\" attributes in template files.

## 2026-04-06 - Consolidating CSP in mdBook
**Vulnerability:** Redundant or conflicting Content-Security-Policy meta tags can lead to browser confusion and bypasses if the most restrictive policy is not consistently applied.
**Learning:** mdBook's `theme/index.hbs` may contain multiple CSP tags from different development stages. Consolidation into a single, comprehensive tag is essential for maintainability and security.
**Prevention:** Periodically audit templates for duplicate security headers and meta tags. Use a single source of truth for security policies.
