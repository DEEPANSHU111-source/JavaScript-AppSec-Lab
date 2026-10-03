# Lab 08 — WebSocket Security Review

## Objective

Learn to review WebSocket code as an application protocol rather than treating it as "just another HTTP request."

Search for:

```text
new WebSocket(...)
onopen
onmessage
send(...)
close(...)
ws://
wss://
```

## Review questions

- How is the connection authenticated?
- Does the server authorize every sensitive action?
- Can one user access another user's channel/data?
- What message types exist?
- Are message fields validated?
- Does the client trust server messages?
- Are sensitive messages logged?
- Does the server validate the Origin where appropriate?
- Is TLS used (`wss://`)?

## Safe testing

Use only the local/demo endpoint and test messages that contain no sensitive information.

## Analyst takeaway

The important skill is reading the client to infer the protocol and then verifying the server's authentication and authorization independently.
