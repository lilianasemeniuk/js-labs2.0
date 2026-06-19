import { asyncMapCallback, asyncMapPromise } from "async-array-lib";

function doubleAsync (n, callback) {
    setTimeout(() => callback(null, n * 2), 300);
}

function doubleAsyncPromise(n) {
    return new Promise((resolve) => setTimeout(() => resolve(n * 2), 300));
}

console.log("--Callback--");
asyncMapCallback([1, 2, 3], doubleAsync, (err, result) => {
    if (err) {
        console.error("Помилка:", err.message);
        return;
    }
    console.log("Результат:", result);
});


async function runPromise() {
    console.log("--Promise (async/await) --");
    const result = await asyncMapPromise([10, 20, 30], doubleAsyncPromise);
    console.log("Результат:", result);
}

async function runAbort() {
    console.log("--Abort--");
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 100);

try {
    const result = await asyncMapPromise([5, 6, 7], doubleAsyncPromise, controller.signal);
    console.log("Результат:", result);
} catch (err) {
    console.log("Скасовано:", err.message);
}
}



setTimeout(runPromise, 500);
setTimeout(runAbort, 1000);