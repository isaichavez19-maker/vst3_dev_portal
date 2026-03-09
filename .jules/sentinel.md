# Sentinel Security Journal

## 2026-03-09 - Hardening CSP and Securing External Resources
**Vulnerability:** Redundant and incomplete Content Security Policy (CSP) and lack of Subresource Integrity (SRI) on external scripts.
**Learning:** Multiple CSP meta tags can lead to confusion and overly restrictive or conflicting policies. Whitelisting necessary external domains like `play.rust-lang.org` is essential for maintaining application functionality (like the Rust Playground) while maintaining security.
**Prevention:** Consolidate CSP into a single, well-defined policy. Always use SRI for external scripts to prevent supply chain attacks.
