import * as _ from 'lodash';

interface Node<T> {
    value: T;
    next?: Node<T>;
    prev?: Node<T>
}

export default class LinkedList<T = any> {
    private _size: number;
    private headNode: Node<T>;
    private tailNode: Node<T>;

    constructor() {
        this._size = 0;   
        this.headNode = null;
        this.tailNode = null; 
    }

    set size(v) {
        // No-Op
    }

    get size() {
        return this._size;
    }

    public head(): T {
        return _.get(this.headNode, 'value', null);
    }

    public tail(): T {
        return _.get(this.tailNode, 'value', null);
    }

    public unshift(value: T) {
        this._size++;
        if (!this.headNode) {
            return this.addFirstNode(value);
        }

        const newNode: Node<T> = {
            value,
            next: this.headNode.next
        };
        this.headNode.next = newNode;
        this.headNode = newNode;
    }

    private addFirstNode(value: T) {
        const newNode: Node<T> = {
            value
        };

        this.headNode = newNode;
        this.tailNode = newNode;
    }

    public push(value: T) {
        this._size++;
        if (!this.headNode) {
            return this.addFirstNode(value);
        }

        const newNode: Node<T> = {
            value,
            prev: this.tailNode,
            next: null
        };
        this.tailNode.next = newNode;
        this.tailNode = newNode;
    }


    public shift(): T {
        if (!this.headNode) {
            return null;
        }
        
        this._size--;
        const firstNode = this.headNode;
        this.headNode = this.headNode.next;

        if (this._size === 0) {
            this.tailNode = null;
        }

        firstNode.next = null;
        return firstNode.value;
    }

    public pop(): T {
        if (!this.tailNode) {
            return null;
        }
        
        this._size--;
        const lastNode = this.tailNode;
        this.tailNode = this.tailNode.prev;

        if (this._size === 0) {
            this.headNode = null;
        }

        lastNode.prev = null;
        return lastNode.value;
    }
}