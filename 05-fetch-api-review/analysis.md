# Lab 05 — Fetch/API Security Review

## Objective

Turn JavaScript API calls into an AppSec review checklist.

For every request, identify:

1. Endpoint
2. HTTP method
3. Query parameters
4. Path parameters
5. Request body
6. Authentication mechanism
7. Authorization assumptions
8. Response handling
9. Error handling
10. Cross-origin behavior

Example:

```javascript
fetch("/api/profile", {
    credentials: "include"
});
```

Questions:

- What authenticates the request?
- What server-side authorization exists?
- Does the endpoint expose another user's data if an identifier changes?
- Is sensitive response data inserted into a dangerous DOM sink?
- Is the request cross-origin?
- Are errors leaking useful information?

## Analyst takeaway

The frontend often reveals the API surface and expected security model. It does not prove that the server actually enforces that model.
