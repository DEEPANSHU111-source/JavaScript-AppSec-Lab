# Lab 01 — DOM XSS

## Objective

Trace URL-controlled data from a browser source to a DOM sink.

## Vulnerable flow

```text
location.hash
    ↓
decodeURIComponent()
    ↓
innerHTML
    ↓
HTML parsing / potential script-capable markup
