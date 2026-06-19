import { memoize } from "memoize-lib";

let calls = 0;
function slowSquare(n) {
  calls++;
  return n * n;
}

const fastSquare = memoize(slowSquare, { maxSize: 3 });

console.log(fastSquare(2));
console.log(fastSquare(2));
console.log(fastSquare(2));
console.log("Викликів реальної функції:", calls);

console.log("\nПеревірка LRU (maxSize 3):");
fastSquare(1);
fastSquare(2);
fastSquare(3);
fastSquare(4);
calls = 0;
fastSquare(1);
console.log("Викликів після витіснення 1:", calls);

async function testTTL() {
  let ttlCalls = 0;
  function getValue(x) {
    ttlCalls++;
    return x * 10;
  }
  const cached = memoize(getValue, { ttl: 200 });

  console.log("\nПеревірка TTL (200мс):");
  cached(5);
  cached(5);
  console.log("Викликів одразу:", ttlCalls);

  await new Promise((r) => setTimeout(r, 300));
  cached(5);
  console.log("Викликів після 300мс:", ttlCalls);
}

testTTL();