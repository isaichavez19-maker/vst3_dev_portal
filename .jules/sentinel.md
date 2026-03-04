## 2026-03-04 - [MathJax SRI Enhancement]
**Vulnerability:** CDN-hosted scripts without integrity checks can be replaced with malicious code if the CDN is compromised, leading to XSS.
**Learning:** MathJax 2.7.1 is used in this project via cdnjs. Applying SRI ensures that only the verified version of the script is executed.
**Prevention:** Always use Subresource Integrity (SRI) and crossorigin="anonymous" when including third-party scripts from CDNs.
