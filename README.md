# JavaScript-AppSec-Lab

A practical JavaScript Application Security research portfolio focused on reading client-side code, tracing data flow, understanding browser security boundaries, and identifying common security-sensitive patterns.

## What this project demonstrates

- JavaScript fundamentals applied to AppSec
- DOM and event-driven data flow
- Source → processing → sink analysis
- DOM-based XSS
- `postMessage` origin validation
- Client-side authorization vs server-side authorization
- JWT handling and token exposure
- Browser storage
- Fetch/API security review
- CORS behavior
- WebSocket security review
- Prototype pollution
- Dynamic code execution (`eval`, `Function`)
- Secure coding and remediation

## Labs

| # | Lab | Main security skill |
|---|---|---|
| 01 | DOM XSS | Source → sink tracing |
| 02 | postMessage | Origin validation + DOM sinks |
| 03 | Client-Side Authorization | Trust boundary analysis |
| 04 | JWT & Token Handling | Auth flow/source-code review |
| 05 | Fetch/API Review | Endpoint + auth + input analysis |
| 06 | Browser Storage | Token exposure analysis |
| 07 | CORS | Origin/credential reasoning |
| 08 | WebSocket Review | Message/auth/authorization analysis |
| 09 | Prototype Pollution | Unsafe object-key/data-flow analysis |
| 10 | Dynamic Code Execution | `eval()` / `Function()` review |

## Methodology

For every lab, use this workflow:

1. Identify the attacker-controlled input.
2. Identify the source.
3. Trace how the value is transformed.
4. Identify the sink or security boundary.
5. Determine whether the browser/client is making a security decision.
6. Reproduce the behavior safely in the local lab.
7. Explain the impact without overstating it.
8. Implement a safer version.
9. Verify the fixed behavior.

### Source → Processing → Sink

A central AppSec pattern in this repository is:

```text
UNTRUSTED INPUT
      ↓
     SOURCE
      ↓
 PROCESSING
      ↓
      SINK
      ↓
 SECURITY IMPACT
```

Examples of sources:

- `location.search`
- `location.hash`
- `event.data`
- form fields
- API responses
- WebSocket messages
- browser storage

Examples of sensitive sinks/operations:

- `innerHTML`
- `outerHTML`
- `insertAdjacentHTML`
- `document.write`
- `eval`
- `Function`
- navigation to attacker-controlled URLs
- security-sensitive client-side decisions

OWASP specifically recommends treating untrusted data as data rather than code/markup and using safer DOM APIs such as `textContent` where appropriate. See the references below.

## Running the labs

No Node.js dependency is required for most labs.

From this directory:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000
```

For labs involving cross-origin behavior, run a second local server:

```bash
python3 -m http.server 8001
```

Use only local/test data. These examples are intentionally vulnerable for education.

## Suggested screenshots

Take screenshots of:

1. Repository tree in GitHub
2. Lab 01 vulnerable source + browser result
3. Lab 01 fixed version
4. DevTools Console showing the traced value
5. Lab 02 message event showing `event.origin` and `event.data`
6. Lab 03 source showing the client-side role check and the analysis explaining why it is not authorization
7. Lab 04 Network tab showing a sample Authorization header using a fake local token
8. Lab 06 Application/Storage tab showing a dummy token (never a real credential)
9. Lab 07 Network tab showing CORS response headers
10. Lab 08 WebSocket frames using a local demo message
11. Lab 09 console showing the prototype pollution demonstration
12. Lab 10 source showing the dangerous dynamic execution and the fixed allowlist approach

### Screenshot rule

Never put real passwords, API keys, session cookies, JWTs, bug-bounty credentials, or personal information in screenshots.

## How to present this on a resume

**JavaScript Application Security Research Lab**
- Built a practical client-side AppSec lab covering DOM XSS, postMessage origin validation, JWT handling, browser storage, CORS, WebSockets, prototype pollution and dynamic code execution.
- Performed source-to-sink tracing and documented vulnerable vs. secure implementations with reproduction and remediation steps.
- Used browser DevTools to inspect DOM behavior, storage, network requests and client-side security decisions.

## How to present it on LinkedIn

Do not describe this as "I completed JavaScript."

Describe it as:

> Built a JavaScript Application Security Research Lab to practice reading client-side code, tracing untrusted data, reviewing API/authentication flows, and identifying security-sensitive browser behavior.

## References

- OWASP DOM Based XSS Prevention Cheat Sheet
- OWASP JavaScript and TypeScript Security Cheat Sheet
- OWASP Prototype Pollution Prevention Cheat Sheet
- OWASP HTML5 Security Cheat Sheet
- MDN Web APIs documentation

Reference links are listed in `docs/references.md`.

## Ethical scope

All examples are intentionally vulnerable and designed to run locally. Do not use these techniques against applications without authorization.
