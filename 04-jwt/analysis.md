# Lab 04 — JWT and Token Handling

## Objective

Learn to recognize token acquisition, storage and transmission in client-side code.

## What to search for

```text
localStorage
sessionStorage
document.cookie
Authorization
Bearer
access_token
refresh_token
jwt
token
```

## Example flow

```text
login response
     ↓
token
     ↓
storage
     ↓
fetch()
     ↓
Authorization: Bearer <token>
```

## Important distinction

A token being stored in browser storage is not, by itself, enough to claim a vulnerability.

Assess:

- Is the token sensitive?
- Can JavaScript read it?
- How long does it live?
- Is it sent over HTTPS?
- Is the server validating signature, expiry and claims?
- Does XSS increase the practical impact?
- Are refresh tokens handled differently?
- Is authorization enforced server-side?

## Safe demo

The vulnerable page stores only:

```text
FAKE.LOCAL.TEST.TOKEN
```

Never paste a real JWT into GitHub or screenshots.

## Analyst takeaway

The goal is to understand the complete authentication data flow, not to memorize "localStorage = vulnerable."
