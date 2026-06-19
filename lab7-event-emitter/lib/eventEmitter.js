export class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
    }

    emit(eventName, ...args) {
        if (!this.events[eventName]) {
            return;
        }
        for (const listener of this.events[eventName]) {
            try {
              listener(...args);
            } catch (error) {
                console.error(`Listener for "${eventName}" failed:`, error.message);
            }       
        }   
   }
   off(eventName, listener) {
        if (!this.events[eventName]) {
            return;
        }
        this.events[eventName] = this.events[eventName].filter(
            (l) => l !== listener
        );
  }
}