function bubbleSort(array) {
  for (let stop = array.length; stop > 1; stop--) {
    for (let i = 0; i < stop - 1; i++) {
      if(array[i] > array[i + 1]) {
        swap(i, i + 1, array);
      }
    }
  }
}

function swap(a, b, array) {
  let tmp = array[a];
  array[a] = array[b];
  array[b] = tmp;
}

module.exports = bubbleSort;
