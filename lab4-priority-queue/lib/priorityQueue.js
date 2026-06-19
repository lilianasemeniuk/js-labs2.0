export class PriorityQueue {
     constructor() {
        this.items = [];
        this.counter = 0;
     }
  

 enqueue(value, priority) {
    this.items.push({
      value,
      priority,
      order: this.counter++,  
    });
  }

   size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

   peek(mode = "highest") {
    if (this.isEmpty()) return undefined;

    if (mode === "oldest") {
        return this.items[0].value;
    }

   if (mode === "newest") {
      return this.items[this.items.length - 1].value;
    }

    if (mode === "highest") {
      let best = this.items[0];
      for (const item of this.items) {
        if (item.priority > best.priority) best = item;
      }
      return best.value;
    }

    if (mode === "lowest") {
      let best = this.items[0];
      for (const item of this.items) {
        if (item.priority < best.priority) best = item;
      }
      return best.value;
    }
  }

   dequeue(mode = "highest") {
    if (this.isEmpty()) return undefined;

    let index;

     if (mode === "oldest") {
      index = 0;                              
    } else if (mode === "newest") {
      index = this.items.length - 1;          
    } else if (mode === "highest") {
      index = 0;
      for (let i = 1; i < this.items.length; i++) {
        if (this.items[i].priority > this.items[index].priority) index = i;
      }
    } else if (mode === "lowest") {
      index = 0;
      for (let i = 1; i < this.items.length; i++) {
        if (this.items[i].priority < this.items[index].priority) index = i;
      }
    }

     const removed = this.items.splice(index, 1)[0];
    return removed.value;
  }
}
