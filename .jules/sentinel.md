# Sentinel Security Journal

## 2025-05-15 - [Consolidated CSP and SRI Implementation]
**Vulnerability:** Redundant and incomplete Content-Security-Policy (CSP) headers, and lack of Subresource Integrity (SRI) for external MathJax scripts.
**Learning:** Multiple CSP tags can lead to browser confusion or ineffective policies if not properly consolidated. External scripts without SRI are vulnerable to supply-chain attacks.
**Prevention:** Always consolidate CSP into a single comprehensive tag and enforce SRI for all third-party scripts. Whitelist known trusted domains explicitly in the CSP.
