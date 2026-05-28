## 2026-05-28 - Consolidated CSP and SRI implementation
**Vulnerability:** Redundant and incomplete Content Security Policy; Missing Subresource Integrity for external assets; Potential tabnabbing via insecure external links.
**Learning:** Redundant CSP meta tags are enforced as an intersection by browsers, which can lead to unexpected blocking if not carefully managed. Always consolidate into a single policy when possible. SRI is crucial for external CDNs to prevent malicious script injection if the CDN is compromised.
**Prevention:** Use a single, comprehensive CSP meta tag. Always include SRI hashes for external scripts. Use `rel="noopener noreferrer"` for all external links opening in new tabs.
