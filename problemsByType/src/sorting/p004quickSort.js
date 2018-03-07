function quickSort(array) {
  function sort(start, end) {
    if (end - start <= 0) {
      return;
    }
    let wall = start;
    let pivot = array[end];
    for (let i = start; i < end; i++) {
      if (array[start + i] < pivot) {
        swap(start + i, wall++, array);
      }
    }
  }

  sort(0, array.length - 1);
}

function swap(a, b, array) {
  let tmp = array[a];
  array[a] = array[b];
  array[b] = tmp;
}

module.exports = quickSort;
