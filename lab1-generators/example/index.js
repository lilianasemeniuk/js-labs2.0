import {colorCycleGenerator, consumeWithTimeout} from "color-cycle-lib";

const colors = ["red", "green", "blue", "yellow", "purple"];

const ansiColors = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  blue: "\x1b[34m",
  yellow: "\x1b[33m",
  purple: "\x1b[35m",
  reset: "\x1b[0m"
};

const generator = colorCycleGenerator(colors);

consumeWithTimeout(generator, 3, (color, iteration) => {
    const ansiColor = ansiColors[color] ?? "";
    console.log(`${ansiColor}${iteration} ${new Date().toLocaleTimeString()} -> ${color}${ansiColors.reset}`);
})