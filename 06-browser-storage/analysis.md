# Lab 06 — Browser Storage

## Objective

Understand what client-side JavaScript can read and what should therefore be treated as exposed to JavaScript.

Review:

- `localStorage`
- `sessionStorage`
- `document.cookie`
- IndexedDB where relevant

Cookie flags to recognize during a real assessment:

- `HttpOnly`
- `Secure`
- `SameSite`

## Key point

Do not make a simplistic claim such as "localStorage is always vulnerable."

Instead ask:

```text
What is stored?
Who can read it?
How long does it live?
Where is it sent?
What happens if XSS occurs?
What server-side controls exist?
```

The demo contains only fake values.
