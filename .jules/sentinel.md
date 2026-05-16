## 2026-05-16 - Hardening CSP and Fixing Tabnabbing in mdBook
**Vulnerability:** Redundant and weak Content-Security-Policy (CSP) meta tags, and missing `rel="noopener noreferrer"` on external links (tabnabbing).
**Learning:** mdBook templates can contain multiple CSP meta tags which browsers intersection. Consolidating them into one comprehensive tag is necessary for clarity and to ensure all required sources (like Rust Playground and Google Analytics) are correctly whitelisted without accidental blocking.
**Prevention:** Always consolidate CSP directives into a single tag in the `<head>` and use `rel="noopener noreferrer"` for all `target="_blank"` links. Apply Subresource Integrity (SRI) to external CDNs like MathJax.
