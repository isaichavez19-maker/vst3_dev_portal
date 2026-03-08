## 2026-03-08 - CSP Consolidation and MathJax SRI
**Vulnerability:** Redundant and inconsistent Content-Security-Policy (CSP) meta tags, and lack of Subresource Integrity (SRI) for external MathJax library.
**Learning:** Having multiple CSP meta tags can cause browser confusion and unintended blocking of resources (like the Rust Playground) due to the intersection of policies. External scripts from CDNs should always use SRI to prevent supply chain attacks.
**Prevention:** Consolidate CSP into a single comprehensive tag and ensure all external resources are whitelisted and secured with SRI.
