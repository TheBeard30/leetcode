class MyQueue {
    inStack;
    outStack

    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    push(x: number): void {
        this.inStack.push(x);
    }

    pop(): number {
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop()!);
            }
        }
        return this.outStack.pop()!;
    }

    peek(): number {
        let temp: number = this.pop();
        this.outStack.push(temp);
        return temp;
    }

    empty(): boolean {
        return this.inStack.length === 0 && this.outStack.length === 0;
    }
}