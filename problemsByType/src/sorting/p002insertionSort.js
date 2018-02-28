function insertionSort(array) {
  for(let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      swap(i, i + 1, array);
      for (let j = i; j > 0; j--) {
        if (array[j] < array[j - 1]) {
          swap(j, j - 1, array);
        } else {
          break;
        }
      }
    }
  }
}

function swap(a, b, array) {
  let tmp = array[a];
  array[a] = array[b];
  array[b] = tmp;
}

module.exports = insertionSort;
