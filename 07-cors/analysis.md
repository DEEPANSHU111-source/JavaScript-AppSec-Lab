# Lab 07 — CORS Review

## Objective

Understand CORS as a browser read-policy, not an authentication or authorization mechanism.

## Review headers

```text
Origin
Access-Control-Allow-Origin
Access-Control-Allow-Credentials
Access-Control-Allow-Methods
Access-Control-Allow-Headers
```

## Local setup

Start one server on port 8000 and another on port 8001.

```bash
python3 -m http.server 8000
```

In another terminal:

```bash
cd 07-cors
python3 -m http.server 8001
```

Open:

```text
http://127.0.0.1:8000/07-cors/
```

Observe the browser's CORS behavior in DevTools.

## Security review

A CORS issue becomes meaningful when the configuration combines with factors such as:

- sensitive authenticated responses
- credentials
- attacker-controlled or overly broad allowed origins
- incorrect origin validation
- meaningful browser read access

Do not report "CORS enabled" as a vulnerability by itself.

## Analyst takeaway

Always inspect the complete request/response context and the sensitivity of the response.
