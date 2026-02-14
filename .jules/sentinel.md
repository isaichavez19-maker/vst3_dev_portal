## 2026-02-14 - [CSP Consolidation and SRI Hardening]
**Vulnerability:** Redundant and inconsistent Content-Security-Policy (CSP) meta tags in `theme/index.hbs`, along with lack of Subresource Integrity (SRI) for external MathJax scripts and reverse tabnabbing risk in footer links.
**Learning:** Having multiple CSP meta tags leads to a "most restrictive intersection" policy which can cause unexpected breakage. Additionally, `frame-ancestors` is ignored in `<meta>` tags but often included for completeness or scanner compliance.
**Prevention:** Consolidate all CSP directives into a single comprehensive tag. Always use SRI for CDN-hosted scripts like MathJax. Use `rel="noopener noreferrer"` for all `target="_blank"` links to prevent reverse tabnabbing.
