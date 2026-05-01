## 2026-05-01 - Avoid SRI for Dynamic Third-Party Scripts
**Vulnerability:** Functional breakage due to Subresource Integrity (SRI) failure.
**Learning:** Applying SRI to dynamic, unversioned third-party scripts like Google Analytics (`analytics.js`) is risky because the provider may update the script in place, causing the SRI hash to mismatch and the script to fail loading.
**Prevention:** Only use SRI for versioned, static assets from trusted CDNs. For dynamic scripts, rely on other security measures like CSP and monitoring.
