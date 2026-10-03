# Lab 10 — Dynamic Code Execution

## Objective

Recognize JavaScript APIs that turn strings into executable code.

Dangerous APIs include:

```text
eval()
Function()
new Function()
```

The security question is not merely "does the application use eval?"

The important question is:

```text
Can attacker-controlled data reach the code-execution API?
```

Example data flow:

```text
HTTP parameter
     ↓
string processing
     ↓
eval(userInput)
     ↓
code execution
```

## Fix

Replace dynamic execution with explicit logic or a safe parser/allowlist appropriate to the application's requirements.

OWASP's JavaScript security guidance recommends not building executable code from strings.

## Analyst search terms

```text
eval(
Function(
new Function(
setTimeout(
setInterval(
```

Then trace the argument backward to its source.
