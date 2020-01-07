import Heap, {HeapType} from '../Heap';

describe('Heap', () => {
    describe('construction', () => {
        it('should throw exception if neither a type or comparator is set', () => {
            expect(() => new Heap()).toThrow();
        });

        it('should accept setting type', () => {
            new Heap({
                type: HeapType.MIN
            });
        });

        it('should accept setting custom comparator', () => {
            new Heap({
                comparator: () => null
            });
        });

        it('should initialize size to 0', () => {
            expect(new Heap({type: HeapType.MIN}).size).toEqual(0);
        });

        it('should not be able to modify size directly', () => {
            const heap = new Heap({type: HeapType.MIN});
            (heap as any).size = 1;

            expect(heap.size).toEqual(0);
        });

        it('should throw an error if an unexpected type is passed', () => {
            expect(() => new Heap({type: 'unknown'} as any)).toThrow();
        });
    });

    describe('min heap', () => {
        let heap: Heap;

        beforeEach(() => {
            heap = new Heap({type: HeapType.MIN});
        });

        it('should return null on peek if no items remain', () => {
            expect(heap.peek()).toEqual(null);
        });

        it('should return null on pop if no items remain', () => {
            expect(heap.pop()).toEqual(null);
        });

        it('should increase size when a new item is added', () => {
            heap.add(1);

            expect(heap.size).toEqual(1);

            heap.add(2);

            expect(heap.size).toEqual(2);
        });

        it('should decrease size when an item is popped', () => {
            heap.add(1);
            heap.add(2);
            heap.pop();

            expect(heap.size).toEqual(1);
        });

        it('peek should not change size', () => {
            heap.add(1);
            heap.add(2);
            heap.peek();

            expect(heap.size).toEqual(2);
        });

        it('should show the smallest value after sorted insert', () => {
            heap.add(1);
            heap.add(2);
            heap.add(3);

            expect(heap.peek()).toEqual(1);
        });

        it('should peek and pop in the correct min order', () => {
            const nums = [100, 0.1, 77, 0.2, -3, -100, 4, 5, 6, 7, 7, 7, 7, 7, 7, 20, 999, 9999999];
            let smallestNum = Infinity;
            for (let num of nums) {
                heap.add(num);
                smallestNum = Math.min(num, smallestNum);
                expect(heap.peek()).toEqual(smallestNum);
            }

            nums.sort((a, b) => a - b);

            for (let num of nums) {
                expect(heap.peek()).toEqual(num);
                expect(heap.pop()).toEqual(num);
            }

            expect(heap.size).toEqual(0);
            expect(heap.peek()).toBeNull();
        });
    });

    describe('max heap', () => {
        let heap: Heap;

        beforeEach(() => {
            heap = new Heap({type: HeapType.MAX});
        });

        it('should peek and pop in the correct min order', () => {
            const nums = [100, 0.1, 77, 0.2, -3, -100, 4, 5, 6, 7, 7, 7, 7, 7, 7, 20, 999, 9999999];
            let largestNum = -Infinity;
            for (let num of nums) {
                heap.add(num);
                largestNum = Math.max(num, largestNum);
                expect(heap.peek()).toEqual(largestNum);
            }

            nums.sort((a, b) => b - a);

            for (let num of nums) {
                expect(heap.peek()).toEqual(num);
                expect(heap.pop()).toEqual(num);
            }

            expect(heap.size).toEqual(0);
            expect(heap.peek()).toBeNull();
        });
    });

    describe('custom heap', () => {
        let heap: Heap<{num: number}>;

        beforeEach(() => {
            heap = new Heap({
                comparator: (a, b) => a.num - b.num
            });
        });

        it('should peek and pop in the correct min order', () => {
            const nums = [100, 0.1, 77, 0.2, -3, -100, 4, 5, 6, 7, 7, 7, 7, 7, 7, 20, 999, 9999999];
            let smallestNum = Infinity;
            for (let num of nums) {
                heap.add({num});
                smallestNum = Math.min(num, smallestNum);
                expect(heap.peek().num).toEqual(smallestNum);
            }

            nums.sort((a, b) => a - b);

            for (let num of nums) {
                expect(heap.peek().num).toEqual(num);
                expect(heap.pop().num).toEqual(num);
            }

            expect(heap.size).toEqual(0);
            expect(heap.peek()).toBeNull();
        });
    });
});