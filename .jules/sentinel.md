## 2026-02-22 - [Consolidated CSP and Supply Chain Hardening]
**Vulnerability:** Multiple redundant Content-Security-Policy (CSP) meta tags in `theme/index.hbs` and missing Subresource Integrity (SRI) for both external (MathJax) and vendored (Mermaid) scripts.
**Learning:** Having multiple CSP meta tags can lead to browser confusion and unintended resource blocking, as browsers enforce the intersection of all policies. Vendored scripts in `mdbook` are often included via `additional-js` in `book.toml`, which doesn't support SRI hashes.
**Prevention:** Consolidate CSP into a single comprehensive tag. Manually include vendored scripts in the Handlebars template to apply SRI attributes, and remove them from the automated `additional-js` configuration.
