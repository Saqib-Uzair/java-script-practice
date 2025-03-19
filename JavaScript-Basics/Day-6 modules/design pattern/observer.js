class Observer {
    constructor() {
        this.subscribers = [];
    }

    subscribe(fn) {
        this.subscribers.push(fn);
    }

    notify(data) {
        this.subscribers.forEach(subscriber => subscriber(data));
    }
}

const observer = new Observer();

observer.subscribe(data => console.log(`Event received: ${data}`));
observer.notify('Hello World');