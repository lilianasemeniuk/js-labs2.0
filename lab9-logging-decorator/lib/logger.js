const LEVELS = { ERROR: 0, INFO: 1, DEBUG: 2 };

export function log(fn, level = 'INFO') {
    return async function (...args) {
        const timestamp = new Date().toISOString();

        if (level!== "ERROR") {
                    console.log(`[${timestamp}] [${level}] ${fn.name} (${JSON.stringify(args)})`);

        }

        try {
            const result = await fn(...args);

            if (level !== "ERROR") {
                        console.log(`[${timestamp}] [${level}] ${fn.name} => ${JSON.stringify(result)}`);

            }

            return result;
        }  catch (error) {
            console.log(`[${timestamp}] [ERROR] ${fn.name} threw: ${error.message}`);
            throw error;
        }
    };
}

