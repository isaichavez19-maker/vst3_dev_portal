## 2026-05-14 - Redundant CSP Header Consolidation
**Vulnerability:** The application had two redundant Content-Security-Policy `<meta>` tags. The first was more restrictive and lacked necessary directives (`img-src data:`, `connect-src`) that the second one tried to provide.
**Learning:** Browsers enforce all CSP policies present on a page by taking their intersection. If multiple policies exist, a resource must be allowed by ALL of them. Providing a second, more permissive policy cannot "relax" a more restrictive first policy.
**Prevention:** Always maintain a single, consolidated Content-Security-Policy to avoid confusion and ensure that all necessary resources are correctly whitelisted in one place.
