## 2026-02-20 - [CSP Consolidation and SRI Implementation]
**Vulnerability:** Redundant and conflicting Content-Security-Policy (CSP) meta tags in `theme/index.hbs` leading to browser confusion and potential unintended resource blocking.
**Learning:** Multiple CSP meta tags are enforced by the browser as an intersection (most restrictive wins). This can accidentally block legitimate resources if one policy is missing a directive (like `img-src 'self' data:`) while another has it.
**Prevention:** Always consolidate CSP directives into a single comprehensive tag. Use Subresource Integrity (SRI) for all external and critical vendored scripts to harden the supply chain.
