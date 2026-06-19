import { generateData, processStream } from "stream-processor-lib";

async function run() {
  console.log("Обробка великого потоку даних...");

  const stream = generateData(1000);

    const result = await processStream(stream, (item, count) => {
         if (count % 200000 === 0) {
             console.log(`Оброблено ${count} елементів...`);
          }
    });

  console.log("Готово!");
  console.log(`Всього елементів: ${result.count}`);
  console.log(`Сума: ${result.sum}`);
}

run();
