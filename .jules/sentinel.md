## 2026-05-20 - Redundant CSP Tags and Missing SRI
**Vulnerability:** Redundant Content-Security-Policy meta tags and missing Subresource Integrity (SRI) for external CDNs.
**Learning:** Multiple CSP tags are enforced as an intersection by browsers, which can lead to overly restrictive policies or confusion. External scripts from CDNs should always use SRI to prevent tampering.
**Prevention:** Consolidate CSP into a single well-defined tag. Audit all external assets for SRI compliance.
