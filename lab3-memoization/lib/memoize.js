export function memoize(fn, options = {}) {
  const maxSize = options.maxSize ?? Infinity;
  const ttl = options.ttl ?? Infinity;
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    const now = Date.now();

    if (cache.has(key)) {
      const entry = cache.get(key);
      if (now - entry.time < ttl) {
        cache.delete(key);
        cache.set(key, { value: entry.value, time: entry.time });
        return entry.value;
      }
      cache.delete(key);
    }

    const result = fn(...args);
    cache.set(key, { value: result, time: now });

    if (cache.size > maxSize) {
      const oldestKey = cache.keys().next().value;
      cache.delete(oldestKey);
    }

    return result;
  };
}