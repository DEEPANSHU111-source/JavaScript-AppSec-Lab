# Portfolio Write-up

## Project title

JavaScript Application Security Research Lab

## Short description

A hands-on JavaScript AppSec portfolio demonstrating client-side source-code review, browser security analysis, source-to-sink tracing, authentication/API review and secure remediation.

## What I learned

The central lesson was that JavaScript security is largely about data flow and trust boundaries.

For example:

```text
location.hash → decode → innerHTML
event.data → validation → DOM
token → storage → fetch Authorization header
user.role → UI decision → API authorization boundary
path input → object property assignment → prototype
```

## Security-review mindset

When reading unfamiliar JavaScript, I first identify:

1. Inputs
2. Browser APIs
3. API endpoints
4. Authentication state
5. Authorization decisions
6. Storage
7. DOM sinks
8. Message handlers
9. Dynamic execution
10. Security-sensitive data flows

## What this project does NOT claim

This repository is a learning and portfolio project. It does not claim that every pattern shown is automatically exploitable in production. Real findings require data-flow confirmation, context, impact analysis and authorization to test.

## Suggested recruiter summary

> I built a JavaScript AppSec lab to demonstrate that I can read client-side code rather than only write JavaScript. The project focuses on tracing untrusted data through DOM sinks, browser messaging, storage, API/authentication flows, WebSockets and object manipulation, then documenting remediation.
