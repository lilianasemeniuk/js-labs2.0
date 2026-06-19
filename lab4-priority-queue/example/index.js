import { PriorityQueue } from "priority-queue-lib";

const pq = new PriorityQueue();

pq.enqueue("low task", 1);
pq.enqueue("urgent task", 10);
pq.enqueue("medium task", 5);
pq.enqueue("another urgent", 10);

console.log("Розмір черги:", pq.size());

console.log("Найвищий пріоритет:", pq.peek("highest"));
console.log("Найнижчий пріоритет:", pq.peek("lowest"));
console.log("Найстаріший (FIFO):", pq.peek("oldest"));
console.log("Найновіший (LIFO):", pq.peek("newest"));

console.log("\nДістаємо по черзі:");
console.log("dequeue highest:", pq.dequeue("highest"));
console.log("dequeue oldest:", pq.dequeue("oldest"));
console.log("dequeue lowest:", pq.dequeue("lowest"));
console.log("dequeue newest:", pq.dequeue("newest"));

console.log("\nРозмір після видалень:", pq.size());