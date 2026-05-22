# Sentinel Security Journal

## 2025-05-14 - Consolidation of Content Security Policy
**Vulnerability:** Redundant and incomplete CSP meta tags.
**Learning:** Having multiple CSP meta tags can lead to confusion and unintended blocking, as browsers enforce the intersection of all policies. Whitelisting specific external domains for script-src, style-src, etc., is necessary for features like MathJax and Rust Playground.
**Prevention:** Use a single, consolidated CSP meta tag that explicitly whitelists all required trusted external resources.

## 2025-05-14 - Securing External Links
**Vulnerability:** Use of `target="_blank"` without `rel="noopener noreferrer"`.
**Learning:** This exposes the site to "tabnabbing," where the opened page can potentially redirect the original page to a malicious site.
**Prevention:** Always include `rel="noopener noreferrer"` when using `target="_blank"` for external links.

## 2025-05-14 - Integrity of External Scripts
**Vulnerability:** Loading MathJax from a CDN without Subresource Integrity (SRI).
**Learning:** If the CDN is compromised, malicious code could be served. SRI ensures that the browser only executes the script if its hash matches the expected value.
**Prevention:** Always use SRI hashes for third-party scripts hosted on CDNs.
