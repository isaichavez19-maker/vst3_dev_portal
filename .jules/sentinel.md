## 2026-02-02 - Multiple CSP Tag Intersection Risk
**Vulnerability:** The presence of multiple Content-Security-Policy (CSP) meta tags in a single HTML document.
**Learning:** Browsers do not merge CSP tags; instead, they enforce the most restrictive intersection of all policies. This can lead to unexpected blocking of legitimate resources if one tag is missing a directive that another tag has.
**Prevention:** Always consolidate CSP directives into a single, comprehensive meta tag or HTTP header to ensure consistent and predictable security policy enforcement.

## 2026-02-02 - Sovereign Dependency Integrity (MANIFESTO)
**Vulnerability:** Use of vendored external libraries without documented provenance or integrity checks.
**Learning:** Vendoring libraries without a clear audit trail (URL, version, hash) makes the supply chain opaque and vulnerable to silent modification by malicious actors.
**Prevention:** Implement a 'Sovereign Protocol' by creating a MANIFESTO.md in directories containing vendored assets, recording the origin URL, version, and SHA256 hash for every external file.
