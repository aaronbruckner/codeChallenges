import SearchTree from "./SearchTree";

class Node {
    public value: number;
    public parent: Node;
    public left: Node;
    public right: Node;

    constructor(value) {
        this.value = value;
    }

    public isLeftChild(node: Node) {
        return node === this.left;
    }

    public getChildCount(): number {
        let childCount = 0;
        if (this.right) {
            childCount++;
        }

        if (this.left) {
            childCount++;
        }

        return childCount;
    }
}

export default class BinarySearchTree implements SearchTree{
    private root: Node;
    constructor() {

    }

    public add(value: number): void {
        const nodeToInsert: Node = new Node(value);

        if (!this.root) {
            this.root = nodeToInsert;
        } else {
            let parent = this.root;
            while (true) {
                let dir = value <= parent.value ? 'left' : 'right';
                
                if (parent[dir]) {
                    parent = parent[dir];
                } else {
                    parent[dir] = nodeToInsert;
                    nodeToInsert.parent = parent;
                    break;
                }
            }
        }
    }

    public delete(value: number): void {
        let node: Node = this.root;

        while (node) {
            if (node.value === value) {
                this.deleteDiscoveredNode(node);
                return;
            } else {
                node = this.getNextNodeForValue(node, value);
            }
        }
    }

    private deleteDiscoveredNode(node: Node) {
        const childCount = node.getChildCount();
        if (childCount === 0) {
            const childNode: Node = node.left || node.right;
            
            if (node === this.root) {
                this.root = null;
            } else if (node.parent.isLeftChild(node)) {
                node.parent.left = null;
            } else {
                node.parent.right = null;
            }
        } else if (childCount === 1) {
            const childNode: Node = node.left || node.right;
            childNode.parent = node.parent;
            if (node === this.root) {
                this.root = childNode;
            } else if (node.parent.isLeftChild(node)) {
                node.parent.left = childNode;
            } else {
                node.parent.right = childNode;
            }
        } else {
            const successor: Node = this.findSuccessor(node);
            this.deleteDiscoveredNode(successor);
            node.value = successor.value;
        }
    }

    private findSuccessor(originalNode: Node) {
        let node = originalNode.right;
        while (node.left) {
            node = node.left;
        }

        return node;
    }

    private getNextNodeForValue(node: Node, value: number) {
        return value <= node.value ? node.left : node.right;
    }

    public has(value: number): boolean {
        let node = this.root;
        while (node) {
            if (node.value === value) {
                return true;
            }

            node = this.getNextNodeForValue(node, value);
        }
        return false;
    }
}