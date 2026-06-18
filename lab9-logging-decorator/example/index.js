import { log } from "log-decorator-lib";

function add(a, b) {
    return a = b;
}

const loggedAdd = log(add, "INFO");

loggedAdd(2, 3);
loggedAdd(5, 7);