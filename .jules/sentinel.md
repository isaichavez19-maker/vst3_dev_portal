## 2025-05-15 - Hardening VST 3 Developer Portal Security

**Vulnerability:** Redundant and incomplete Content Security Policy (CSP), missing Subresource Integrity (SRI) for external scripts, and insecure external links (tabnabbing risk).

**Learning:** Static documentation sites using templates like `mdbook` often inherit legacy configurations or missing modern security headers. Consolidating the CSP ensures a single point of truth and prevents browser confusion. SRI protects against CDN compromises.

**Prevention:** Always use a single, comprehensive CSP meta tag. Verify SRI hashes for all external resources. Use `rel="noopener noreferrer"` for all `target="_blank"` links.
