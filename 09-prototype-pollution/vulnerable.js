// Educational local demonstration only.

function setByPath(target, path, value) {
    const parts = path.split(".");
    let current = target;

    for (let i = 0; i < parts.length - 1; i++) {
        const key = parts[i];

        if (!current[key]) {
            current[key] = {};
        }

        current = current[key];
    }

    current[parts[parts.length - 1]] = value;
}

const config = {};

console.log("Before:", {}.demoFlag);

setByPath(config, "__proto__.demoFlag", true);

console.log("After:", {}.demoFlag);
