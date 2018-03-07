function minimumOnStack(operations) {
    let minHeapStack = new MinHeapStack();
    let minResults = [];
    operations.forEach(op => {
        switch (op) {
            case 'pop':
                minHeapStack.pop();
                break;
            case 'min':
                minResults.push(minHeapStack.min());
                break;
            default:
                //push <int>
                minHeapStack.push(parseInt(op.split(' ') [1]));
        }
    });
    return minResults;
}

function minHeapDelete(heap, value) {
    for(let i = 0 ; i < heap.length; i++) {
        if (heap[i] === value) {
            let lastValue = heap.pop();
            if (heap.length && i !== heap.length) {
                heap[i] = lastValue;
                bubbleDown(heap, i);
            }
            break;
        }
    }
}

function bubbleDown(heap, i){
    let leftIndex = (i * 2) + 1;
    let rightIndex = (i * 2) + 2;
    if (leftIndex < heap.length) {
        let leftValue = heap[leftIndex];
        let rightValue = rightIndex < heap.length ? heap[rightIndex] : Infinity;
        let swapIndex = leftValue <= rightValue ? leftIndex : rightIndex;
        if (heap[i] > heap[swapIndex]) {
            swap(heap, i, swapIndex);
            bubbleDown(heap, swapIndex);
        }
    }
}

function minHeapAdd(heap, value) {
    heap.push(value);
    bubbleUp(heap, heap.length - 1);
}

function bubbleUp(heap, i) {
    if (i) {
        let parent = getParentIndex(i);
        if (heap[i] < heap[parent]) {
            swap(heap, parent, i);
            bubbleUp(heap, parent);
        }
    }
}
function swap(array, a, b) {
    let tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
}

function getParentIndex(i) {
    return Math.floor((i-1) / 2);
}

class MinHeapStack {
    constructor() {
        this.stack = [];
        this.minHeap = [];
    }

    push(value) {
        minHeapAdd(this.minHeap, value);
        this.stack.push(value);
    }

    pop() {
        let value = this.stack.pop();
        minHeapDelete(this.minHeap, value);
        return value;
    }

    min() {
       return this.minHeap[0];
    }

}
