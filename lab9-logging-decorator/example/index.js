import { log } from "log-decorator-lib";

function add(a, b) {
    return a = b;
}

const loggedAdd = log(add, "INFO");

loggedAdd(2, 3);
loggedAdd(5, 7);

async function loadUser(id) {
    await new Promise((resolve) => setTimeout(resolve,500));
    return { id, name: "Liliana" };
}

const loggedLoad = log(loadUser, "INFO");

loggedLoad(1);