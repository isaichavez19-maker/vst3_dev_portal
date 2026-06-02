# Sentinel Security Journal

This journal records critical security learnings for the VST 3 Developer Portal project.

## 2025-05-15 - Consolidating Security Headers and SRI
**Vulnerability:** Redundant and incomplete Content-Security-Policy (CSP) meta tags, lack of Subresource Integrity (SRI) for external MathJax scripts, and missing reverse tabnabbing protection for external links.
**Learning:** Browsers enforce the intersection of multiple CSP policies, which can lead to unintended blocking of resources if not carefully consolidated. Dynamic scripts like Google Analytics can change, making SRI difficult to maintain without automated updates, whereas static versioned libraries like MathJax are ideal candidates for SRI.
**Prevention:** Use a single, comprehensive CSP meta tag. Always apply SRI to versioned external assets. Ensure all `target="_blank"` links include `rel="noopener noreferrer"`.

## 2026-06-02 - CSP Meta Tag Limitations and innerHTML Hardening
**Vulnerability:** Use of `frame-ancestors` in a CSP `<meta>` tag and `innerHTML` in `book.js` for UI elements.
**Learning:** The `frame-ancestors` directive is ignored by browsers when specified in a `<meta>` tag; it must be delivered via an HTTP response header. While the `innerHTML` usage was with static strings, replacing them with safer DOM methods like `createElement` and `appendChild` provides defense in depth against potential XSS sinks.
**Prevention:** Always deliver `frame-ancestors` via HTTP headers. Prefer `createElement` and `textContent`/`appendChild` over `innerHTML` for DOM manipulation.
