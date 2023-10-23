/**
 * 225. 用队列实现栈
 * 请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。
 *
 * 实现 MyStack 类：
 *
 * void push(int x) 将元素 x 压入栈顶。
 * int pop() 移除并返回栈顶元素。
 * int top() 返回栈顶元素。
 * boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。
 */
class MyStack {

    private queue: number[];
    constructor() {
        this.queue = [];
    }

    push(x: number): void {
        this.queue.push(x);
    }

    pop(): number {
        for (let i = 0, length = this.queue.length - 1; i < length; i++) {
            this.queue.push(this.queue.shift()!);
        }
        return this.queue.shift()!;
    }

    top(): number {
        let res: number = this.pop();
        this.push(res);
        return res;
    }

    empty(): boolean {
        return this.queue.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */