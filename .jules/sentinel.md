## 2026-02-10 - [Redundant CSP Policy Conflict]
**Vulnerability:** The presence of multiple Content-Security-Policy meta tags caused the browser to enforce the most restrictive intersection of all policies, potentially leading to inconsistent behavior and difficult-to-debug resource blocking.
**Learning:** mdBook custom themes may inadvertently include multiple CSP tags if not properly audited during template customization.
**Prevention:** Consolidate all CSP directives into a single comprehensive meta tag in the head of the main template (e.g., index.hbs).
