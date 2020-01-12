import insertionSort from '../insertionSort';
import mergeSort from '../mergeSort'
import heapSort from '../heapSort';
import quickSort from '../quickSort';
import * as _ from 'lodash';

describe('sorting', () => {
    const sortingAlgorithms = {
        insertionSort,
        mergeSort,
        heapSort,
        quickSort
    };
    
    Object.keys(sortingAlgorithms).forEach( name => {
        describe(name, () => {
            const sort = sortingAlgorithms[name];

            it('empty array does nothing', () => {
                const array = [];
                
                sort(array);

                expect(array).toEqual([]);
            });

            it('array of one item', () => {
                const array = [1];
                
                sort(array);

                expect(array).toEqual([1]);
            });

            it('array with infinity values', () => {
                const array = [1, 2, 3, 4, Infinity, -Infinity, Infinity, 8, -Infinity, 9, 5, Infinity, 6, Infinity, 7, -Infinity, 10];
                
                sort(array);

                expect(array).toEqual([-Infinity, -Infinity, -Infinity, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, Infinity, Infinity, Infinity, Infinity]);
            });

            it('array filled with the same numbers', () => {
                const array = [5, 5, 5, 5, 5];
                
                sort(array);

                expect(array).toEqual([5, 5, 5, 5, 5]);
            });

            it('array with items in the middle out of order', () => {
                const array = [1, 2, 3, 8, 4, 10, 15];
                
                sort(array);

                expect(array).toEqual([1, 2, 3, 4, 8, 10, 15]);
            });

            it('array which is already sorted', () => {
                const array = [];

                for (let i = -1000; i <= 1000; i++) {
                    array.push(i);
                }
                
                sort(_.cloneDeep(array));

                expect(array).toEqual(array);
            });

            it('array with two items out of order', () => {
                const array = [10, -10];
                
                sort(array);

                expect(array).toEqual([-10, 10]);
            });

            it('array with three items out of order', () => {
                const array = [10, 0, -10];
                
                sort(array);

                expect(array).toEqual([-10, 0, 10]);
            });

            it('large array out of order', () => {
                const sortedArray = [];

                for (let i = -1000; i <= 1000; i++) {
                    sortedArray.push(i);
                }
                
                const unsortedArray = _.reverse(_.cloneDeep(sortedArray));
                sort(unsortedArray);

                expect(unsortedArray).toEqual(sortedArray);
            });

            it('large array out of order with breaks', () => {
                const sortedArray = _.range(-100, 100, 5);
                
                const unsortedArray = _.reverse(_.cloneDeep(sortedArray));
                sort(unsortedArray);

                expect(unsortedArray).toEqual(sortedArray);
            });
        });
    });
});