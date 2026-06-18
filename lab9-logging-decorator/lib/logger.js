const LEVELS = { ERROR: 0, INFO: 1, DEBUG: 2 };

export function log(fn, level = 'INFO') {
    return function (...args) {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] [${level}] ${fn.name} (${JSON.stringify(args)})`);

        const result = fn(...args);

        console.log(`[${timestamp}] [${level}] ${fn.name} => ${JSON.stringify(result)}`);
        return result;
    }
}

