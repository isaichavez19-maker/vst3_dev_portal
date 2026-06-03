# Sentinel Security Journal

This journal records critical security learnings for the VST 3 Developer Portal project.

## 2025-05-15 - Consolidating Security Headers and SRI
**Vulnerability:** Redundant and incomplete Content-Security-Policy (CSP) meta tags, lack of Subresource Integrity (SRI) for external MathJax scripts, and missing reverse tabnabbing protection for external links.
**Learning:** Browsers enforce the intersection of multiple CSP policies, which can lead to unintended blocking of resources if not carefully consolidated. Dynamic scripts like Google Analytics can change, making SRI difficult to maintain without automated updates, whereas static versioned libraries like MathJax are ideal candidates for SRI.
**Prevention:** Use a single, comprehensive CSP meta tag. Always apply SRI to versioned external assets. Ensure all `target="_blank"` links include `rel="noopener noreferrer"`.

## 2025-05-16 - XSS Hardening and CSP Meta Tag Limitations
**Vulnerability:** Use of unsafe DOM APIs (`innerHTML`, `insertAdjacentHTML`) in `theme/book.js` for UI elements and invalid `frame-ancestors` directive in a CSP `<meta>` tag.
**Learning:** Using `innerHTML` for UI generation creates unnecessary XSS sinks even with static content. Additionally, the `frame-ancestors` CSP directive is strictly ignored by browsers when defined in a `<meta>` tag; it is only functional when sent as an HTTP response header.
**Prevention:** Mandatory use of `document.createElement`, `textContent`, and `appendChild` for dynamic UI construction. Remove or move `frame-ancestors` to server-level headers as it is ineffective in HTML markup.
