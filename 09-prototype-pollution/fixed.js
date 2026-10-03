// Safer educational pattern: reject dangerous path segments.

const BLOCKED_KEYS = new Set([
    "__proto__",
    "prototype",
    "constructor"
]);

function safeSetByPath(target, path, value) {
    const parts = path.split(".");

    if (parts.some(part => BLOCKED_KEYS.has(part))) {
        throw new Error("Unsafe property path");
    }

    let current = target;

    for (let i = 0; i < parts.length - 1; i++) {
        const key = parts[i];

        if (typeof current[key] !== "object" || current[key] === null) {
            current[key] = {};
        }

        current = current[key];
    }

    current[parts[parts.length - 1]] = value;
}

const config = {};

console.log("Before:", {}.demoFlag);

try {
    safeSetByPath(config, "__proto__.demoFlag", true);
} catch (error) {
    console.log("Blocked:", error.message);
}

console.log("After:", {}.demoFlag);
