import Heap, { HeapType } from '../Heap';

export default function heapSort(array: number[]) {
    const heap: Heap = new Heap({type: HeapType.MIN});

    for (let i = 0; i < array.length; i++) {
        heap.add(array[i]);
    }

    for (let i = 0; i < array.length; i++) {
        array[i] = heap.pop();
    }
}