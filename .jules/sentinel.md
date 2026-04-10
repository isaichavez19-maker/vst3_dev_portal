## 2026-04-10 - Content-Security-Policy Consolidation and SRI Implementation
**Vulnerability:** Duplicated and incomplete Content-Security-Policy (CSP) meta tags, and lack of Subresource Integrity (SRI) on external scripts.
**Learning:** Overlapping CSP tags can lead to browser confusion or ineffective policies if one is more restrictive than intended for certain features. MDbook's default template might not include modern security headers or SRI by default.
**Prevention:** Always consolidate security policies into a single, well-defined tag. Implement SRI for all external assets to ensure they haven't been tampered with. Use `rel="noopener noreferrer"` for all external links to prevent tabnabbing.
