# Lab 03 — Client-Side Authorization

## Objective

Show why hiding a button or checking a role in JavaScript is not authorization.

## Vulnerable design

```javascript
if (user.role !== "admin") {
    return;
}
```

This can improve the user interface, but the browser is controlled by the user. A security boundary cannot rely only on client-side code.

## Correct security model

```text
Browser
   ↓
GET /api/admin
   ↓
Server authenticates user
   ↓
Server authorizes role/permission
   ↓
Allow or deny
```

The frontend may hide the UI for usability, but the server must independently enforce authorization.

## Analyst takeaway

During a source review, search for:

- `role`
- `isAdmin`
- `isAuthenticated`
- `permission`
- `canDelete`
- `canEdit`
- `showAdmin`
- API calls behind privileged UI

Then determine whether the server independently enforces the same rule.

## Evidence to capture

- The client-side role check
- The API call associated with the privileged action
- Network response showing the server decision in a real authorized lab
