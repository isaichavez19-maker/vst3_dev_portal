# Sentinel's Journal - Critical Security Learnings

## 2026-02-19 - Consolidated CSP and Hardened Footer
**Vulnerability:** Redundant CSP meta tags and missing `rel="noopener noreferrer"` on external links.
**Learning:** Multiple CSP meta tags result in the browser enforcing the most restrictive intersection, which can cause confusion and accidental resource blocking. Missing `rel="noopener noreferrer"` on `target="_blank"` links exposes users to reverse tabnabbing.
**Prevention:** Always consolidate CSP directives into a single comprehensive tag. Use `rel="noopener noreferrer"` for all external links opening in new tabs.

## 2026-02-19 - Subresource Integrity for MathJax
**Vulnerability:** Loading MathJax from a CDN without integrity checks.
**Learning:** External scripts from CDNs are a major supply chain risk. If the CDN is compromised, malicious code can be injected.
**Prevention:** Use Subresource Integrity (SRI) hashes for all external scripts.

## 2026-02-19 - Balancing Security and Functional Stability
**Vulnerability:** Functional regressions introduced during security hardening (e.g., disabling preprocessors to fix build environment issues).
**Learning:** Security improvements should not compromise the primary functionality of the application unless absolutely necessary to mitigate a critical risk. "Fixing" build issues by disabling features is a regression that should be avoided in favor of addressing the root cause or documenting the environment constraints.
**Prevention:** Always verify that security changes do not break existing features like Table of Contents (TOC) or diagram rendering.
