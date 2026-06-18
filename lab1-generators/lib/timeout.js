export function consumeWithTimeout(iterator, seconds, onValue) {
    const deadline = Date.now() + seconds * 1000;
    let iteration = 0;

    while (Date.now() < deadline) {
        const {value, done} = iterator.next();
        if (done) break;
        iteration++;
        onValue(value, iteration);
    }
}