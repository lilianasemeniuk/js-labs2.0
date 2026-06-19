export async function* generateData(total) {
  for (let i = 1; i <= total; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1));
    yield i;
  }
}


export async function processStream(stream, onItem) {
  let count = 0;
  let sum = 0;

   for await (const item of stream) {
    count++;
    sum += item;
    if (onItem) onItem(item, count);
  }

  return { count, sum };
}