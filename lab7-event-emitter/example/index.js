import { EventEmitter } from "event-emitter-lib";

const emitter = new EventEmitter();

function greet(user) {
    console.log(`Hello, ${user.name}!`);
}

function logLogin(user) {
    console.log(`[LOG] User logged at ${new Date().toLocaleTimeString()}`);
}

function brokenListener(user) {
    throw new Error("This listener is broken!");
}


emitter.on("login", greet);
emitter.on("login", logLogin);
emitter.on("login", brokenListener);

console.log("\n---  Unsubscribing the broken listener ---");
emitter.off("login", brokenListener);
emitter.emit("login", { name: "Liliana" });