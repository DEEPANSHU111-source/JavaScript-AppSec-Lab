# Lab 02 — postMessage Security

## Objective

Understand why both message origin validation and safe DOM handling matter.

## Vulnerable flow

```text
window message event
        ↓
event.data
        ↓
innerHTML
```

There are two review questions:

- Is the sender trusted?
- Is the received data treated as data or markup/code?

OWASP recommends exact origin checks and warns against inserting untrusted `event.data` into `innerHTML`.

## Local reproduction

Run the project server:

```bash
python3 -m http.server 8000
```

Open the vulnerable page and use another local page/origin to send a message, or use DevTools to inspect the event listener.

A simple sender page can be created at `http://127.0.0.1:8001`:

```html
<script>
window.opener?.postMessage("hello from another origin", "*");
</script>
```

The point is to observe that the receiver should not blindly trust the message.

## Fix

1. Compare `event.origin` against an exact expected origin.
2. Treat message content as data with `textContent`.
3. If structured data is expected, parse and validate its schema.

## Analyst takeaway

`postMessage` is a trust boundary. Never assume `event.data` is trustworthy simply because it arrived through a browser API.
