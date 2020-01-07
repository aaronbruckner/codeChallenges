import * as _ from 'lodash';

export enum HeapType {
    MIN = 'MIN',
    MAX = 'MAX'
};

export interface HeapInput {
    type?: HeapType;
    comparator?: (a: any, b: any) => number;
};

function minComparator (a: number, b: number): number {
    return a - b;
}

function maxComparator (a: number, b: number): number {
    return b - a;
}

export default class Heap<T = number> {
    public _size: number;
    private heap: T[];
    private comparator: (a: any, b: any) => number;
    
    get size(): number {
        return this.heap.length;
    }

    set size(value) {
        // Do not allow clients to modify size directly.
    }

    constructor(input: HeapInput = {}) {
        if (!input.type && !input.comparator) {
            throw 'You must specify a type or comparator.';
        }

        if (input.type && input.type !== HeapType.MIN && input.type !== HeapType.MAX) {
            throw `Unrecognized heap type. You must use "${HeapType.MAX}" or "${HeapType.MAX}"`
        }

        if (input.type) {
            this.comparator = input.type === HeapType.MIN ? minComparator : maxComparator;
        } else {
            this.comparator = input.comparator;
        }

        this.heap = [];
    }

    public add(item: T): void {
        this.heap.push(item);
        this.bubbleUp(this.heap.length - 1);
    }

    private getParent(i: number): number {
        return Math.ceil(i / 2) - 1;
    }

    private getLeftChild(i: number): number {
        return (i * 2) + 1;
    } 

    private getRightChild(i: number): number {
        return (i * 2) + 2;
    } 

    private isLessThan(aI, bI): boolean {
        return this.comparator(this.heap[aI], this.heap[bI]) < 0
    }

    private swap(aI, bI): void {
        const tmp = this.heap[bI];
        this.heap[bI] = this.heap[aI];
        this.heap[aI] = tmp;
    }

    private bubbleUp(i: number): void {
        const parentI = this.getParent(i);
        if (parentI >= 0 && this.isLessThan(i, parentI)) {
            this.swap(i, parentI);
            this.bubbleUp(parentI);
        }
    }

    private bubbleDown(i: number): void {
        const leftI: number = this.getLeftChild(i);
        const rightI: number = this.getRightChild(i);

        let smallestI = -1;

        if (leftI < this.heap.length) {
            smallestI = leftI;
        }

        if (rightI < this.heap.length && this.comparator(this.heap[rightI], this.heap[leftI]) < 0) {
            smallestI = rightI;
        }

        if (smallestI >= 0 && this.comparator(this.heap[smallestI], this.heap[i]) < 0) {
            this.swap(smallestI, i);
            this.bubbleDown(smallestI);
        }
    }

    public peek(): T {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    public pop(): T {
        if (this.heap.length === 0) {
            return null;
        }

        const firstItem = _.first(this.heap);
        const lastItem = this.heap.pop();

        if (this.heap.length) {
            this.heap[0] = lastItem
            this.bubbleDown(0);
        }

        return firstItem;
    }
}