export default function mergeSort(array: number[], leftStart = 0, rightEnd = array.length - 1): void {
    if (leftStart >= rightEnd) {
        return;
    }

    const leftEnd = Math.floor((rightEnd - leftStart) / 2) + leftStart;
    const rightStart = leftEnd + 1;

    mergeSort(array, leftStart, leftEnd);
    mergeSort(array, rightStart, rightEnd);

    const mergedArray = new Array(rightEnd - leftStart + 1);

    let leftI = leftStart;
    let rightI = rightStart;
    for (let mergedI = 0; mergedI < mergedArray.length; mergedI++) {
        const leftValue = leftI <= leftEnd ? array[leftI] : Infinity;
        const rightValue = rightI <= rightEnd ? array[rightI]: Infinity;

        if (leftValue < rightValue) {
            mergedArray[mergedI] = leftValue;
            leftI++;
        } else {
            mergedArray[mergedI] = rightValue;
            rightI++;
        }
    }

    for (let i = 0; i < mergedArray.length; i++) {
        array[leftStart + i] = mergedArray[i];
    }
}