export default function insertionSort(array: number[]): void {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(i, i + 1, array);
            for (let j = i; j > 0; j--) {
                if (array[j - 1] > array[j]) {
                    swap(j - 1, j, array);
                } else {
                    break;
                }
            }
        }
    }
}

function swap(aI, bI, array): void {
    const tmp = array[aI];
    array[aI] = array[bI];
    array[bI] = tmp;
}