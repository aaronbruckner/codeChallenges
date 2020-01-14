
import * as _ from 'lodash';
import BinarySearchTree from '../BinarySearchTree';
import SearchTree from '../SearchTree';

describe('Search Trees', () => {
    const trees = {
        BinarySearchTree
    };
    
    Object.keys(trees).forEach( name => {
        describe(name, () => {
            const Tree = trees[name];
            let tree: SearchTree;
            
            beforeEach(() => {
                tree = new Tree();
            });

            it('should return false if asked for a value not in the tree', () => {
                expect(tree.has(1)).toEqual(false);
            });

            it('should return true if asked for a value in the tree', () => {
                tree.add(1);

                expect(tree.has(1)).toEqual(true);
            });

            it('should return true if asked for a value in the tree - multiple values', () => {
                const numbers = [5, 3, 7, 10, -1, -20, 13, 14, 15];
                
                for (let num of numbers) {
                    tree.add(num);
                }

                for (let num of numbers) {
                    expect(tree.has(num)).toEqual(true);
                }

                expect(tree.has(-100)).toEqual(false);
                expect(tree.has(100)).toEqual(false);
            });

            it('should return true if asked for a value in the tree - same value added many times', () => {
                const numbers = [5, 5, 5, 5];
                
                for (let num of numbers) {
                    tree.add(num);
                }
                
                expect(tree.has(5)).toEqual(true);
            });

            it('should return false if the only value is deleted from the tree', () => {
                tree.add(1);

                tree.delete(1);

                expect(tree.has(1)).toEqual(false);
            });

            it('should return true if there are multiple copies of a deleted value', () => {
                const numbers = [4, 5, 10, -20, 50, 1, 2, 6, 1, 100, 90, 43, 67];
                
                for (let num of numbers) {
                    tree.add(num);
                }

                tree.delete(1);

                expect(tree.has(1)).toEqual(true);

                tree.delete(1);

                expect(tree.has(1)).toEqual(false);
            });

            it('large array of random numbers with random inserts, deletes, and has checks', () => {
                const ENTRY_COUNT = 1000;
                const numbers = new Set();

                for (let i = 0; i < ENTRY_COUNT; i++) {
                    numbers.add(_.random(-100000, 100000));
                }
                
                const entries = Array.from<any>(numbers).map(value => {
                    return {
                        value,
                        isDeleted: false
                    };
                });

                // Add each value twice
                for (let {value} of entries) {
                    tree.add(value);
                }
                for (let {value} of entries) {
                    tree.add(value);
                }

                for (let {value} of entries) {
                    expect(tree.has(value)).toEqual(true);
                }

                // Delete all doubles and confirm all nums still return true
                for (let {value} of entries) {
                    tree.delete(value);
                }
                for (let {value} of entries) {
                    expect(tree.has(value)).toEqual(true);
                }

                // Randomly delete around half the entries.
                for (let i = 0; i < ENTRY_COUNT / 2; i++) {
                    const entryToDelete = entries[_.random(0, entries.length - 1)];

                    tree.delete(entryToDelete.value);
                    entryToDelete.isDeleted = true;
                }

                for (let {value, isDeleted} of entries) {
                    expect(tree.has(value)).toEqual(!isDeleted);
                }
            });
        });
    });
});