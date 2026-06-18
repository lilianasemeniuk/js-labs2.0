export function* colorCycleGenerator( colors = ['red', 'green', 'blue'] ) {
  let i = 0;
  while (true) {
    yield colors[i];
    i = (i + 1) % colors.length;
  }
}