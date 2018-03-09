function quickSort(array) {
  function sort(start, end) {
    if (end - start <= 0) {
      return;
    }
    let wall = start;
    let pivot = array[end];
    for (let i = start; i < end; i++) {
      if (array[i] < pivot) {
        swap(i, wall++, array);
      }
    }
    swap(end, wall, array);
    sort(start, wall - 1);
    sort(wall + 1, end);
  }

  sort(0, array.length - 1);
}

function swap(a, b, array) {
  let tmp = array[a];
  array[a] = array[b];
  array[b] = tmp;
}

module.exports = quickSort;
