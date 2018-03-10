function heapSort(array) {
  function bubbleDown(i, arrayLength) {
    let leftI = getLeftChild(i);
    let rightI = getRightChild(i);
    if (leftI >= arrayLength) {
      return;
    }
    let leftValue = array[leftI];
    let rightValue = rightI < arrayLength ? array[rightI] : -Infinity;
    if (array[i] < Math.max(leftValue, rightValue)) {
      let nextI = leftValue > rightValue ? leftI : rightI;
      swap(nextI, i);
      bubbleDown(nextI, arrayLength);
    }
  }

  function swap(a, b) {
    let tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
  }

  function getLeftChild(i) {
    return (i * 2) + 1;
  }

  function getRightChild(i) {
    return (i * 2) + 2;
  }

  //Intiial heapify
  for (let i = Math.floor((array.length - 2)/2); i >= 0; i--) {
    bubbleDown(i, array.length);
  }
  // Sort array
  for (let i = array.length - 1; i >= 1; i--) {
    swap(0, i);
    bubbleDown(0, i);
  }
}

module.exports = heapSort;
