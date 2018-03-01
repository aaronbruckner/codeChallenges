/*
* Merge sort with limited extra array creation. Single scratch array created to merge two
* subsections.
*/
function mergeSort(array) {
  function split(start, stop) {
    if (stop - start < 1) {
      return;
    }
    let mid = Math.floor((stop - start)/2) + start;
    split(start, mid);
    split(mid + 1, stop);
    let nextLeft = start;
    let nextRight = mid + 1;
    let mergedArray = [];
    while(mergedArray.length <= stop - start) {
      let left = nextLeft <= mid ? array[nextLeft] : Infinity;
      let right = nextRight <= stop ? array[nextRight] : Infinity;
      if (left < right) {
        mergedArray.push(left);
        nextLeft++;
      } else {
        mergedArray.push(right);
        nextRight++;
      }
    }
    for (let i = 0; i < mergedArray.length; i++) {
      array[start + i] = mergedArray[i];
    }
  }

  split(0, array.length - 1);
}

module.exports = mergeSort;
