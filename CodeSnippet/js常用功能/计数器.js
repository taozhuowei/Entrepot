/**
 * 计数器
 */
class Counter {
    constructor(start) {
        this.data = start;
        this.origin = start;
    }

    run() {
        console.log(++this.data);
    }

    now() {
        console.log(this.data);
    }

    reset() {
        this.data = this.origin;
    }
}

const counter = new Counter(0);
counter.run();
counter.run();
counter.reset();
counter.now();