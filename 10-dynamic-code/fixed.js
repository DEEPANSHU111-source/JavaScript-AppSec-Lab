// Safer design: do not execute arbitrary strings.
// For a tiny calculator, use an explicit operation allowlist.

function calculate(a, operator, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new Error("Invalid numbers");
    }

    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) throw new Error("Division by zero");
            return a / b;
        default:
            throw new Error("Unsupported operator");
    }
}

console.log(calculate(2, "+", 3));
