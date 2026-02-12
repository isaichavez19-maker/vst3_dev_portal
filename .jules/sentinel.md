## 2026-02-12 - [Hardening mdbook Custom Themes]
**Vulnerability:** Redundant and inconsistent Content-Security-Policy meta tags in custom `index.hbs` templates, leading to potential policy bypass or functional breakage. Lack of Subresource Integrity (SRI) for external MathJax scripts.
**Learning:** Browsers enforce the most restrictive intersection of multiple CSP meta tags. Consolidating into a single comprehensive tag ensures consistent enforcement. MathJax v2.7.1, commonly used in mdbook, requires explicit SRI hashes for secure delivery from CDNs.
**Prevention:** Use a single, consolidated CSP meta tag in the `<head>`. Always apply SRI to external third-party scripts. Document all vendored assets in a `MANIFESTO.md` to maintain supply chain sovereignty.
