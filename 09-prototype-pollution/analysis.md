# Lab 09 — Prototype Pollution

## Objective

Understand how attacker-controlled property names can cross an unsafe object/path manipulation boundary.

The vulnerable helper accepts arbitrary path segments:

```text
user-controlled path
        ↓
path.split(".")
        ↓
property assignment
        ↓
__proto__
```

The demonstration changes inherited object behavior locally.

## Why it matters

Prototype pollution can become security-relevant when polluted properties influence application behavior, authorization decisions, configuration, or other sensitive logic.

OWASP recommends rejecting dangerous keys such as:

```text
__proto__
constructor
prototype
```

and considering safer structures such as `Map` or prototype-less objects for untrusted dictionary keys.

## Analyst search terms

```text
__proto__
constructor
prototype
Object.assign
merge
deepMerge
setByPath
set
recursive
```

## Important nuance

Finding the string `__proto__` is not automatically a vulnerability. Trace whether attacker-controlled data can reach a dangerous property operation and whether the resulting state affects meaningful application behavior.
