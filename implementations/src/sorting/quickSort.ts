import * as _ from 'lodash';

export default function quickSort(array: number[], startI = 0, endI = array.length - 1): void {
    if (startI >= endI) {
        return;
    }

    // Randomly select a pivot and move to the end to avoid N^2 behavior on sorted list.
    const randomPivotI = _.random(startI, endI);
    swap(array, endI, randomPivotI);

    const pivotI = partition(array, startI, endI);
    
    quickSort(array, startI, pivotI - 1);
    quickSort(array, pivotI + 1, endI);
}

function partition(array: number[], startI: number, endI: number): number {
    const pivot = array[endI];

    let leftEnd = startI - 1;

    for (let i = startI; i < endI; i++) {
        if (array[i] <= pivot) {
            leftEnd++;
            swap(array, i, leftEnd);
        }
    }

    const pivotI = leftEnd + 1;
    swap(array, pivotI, endI);

    return pivotI;
}

function swap(array: number[], aI, bI) {
    const tmp = array[aI];
    array[aI] = array[bI];
    array[bI] = tmp;
}