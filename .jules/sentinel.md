# Sentinel Security Journal - VST 3 Developer Portal

## 2024-05-09 - Hardening Frontend Security and CSP Consolidation
**Vulnerability:** Redundant and incomplete Content-Security-Policy (CSP) meta tags, lack of Subresource Integrity (SRI) for external assets, and insecure external links (missing `rel="noopener noreferrer"`).
**Learning:** Redundant CSP headers or meta tags can cause confusion and may lead to bypasses if not properly managed. Relying on external CDNs without SRI introduces a risk of supply chain attacks. External links without proper `rel` attributes can expose users to tabnabbing.
**Prevention:** Consolidate CSP into a single, comprehensive directive. Always use SRI for static external assets. Ensure all external links using `target="_blank"` include `rel="noopener noreferrer"`.
