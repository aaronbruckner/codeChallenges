import * as _ from 'lodash';
import NumberHashMap from '../NumberHashMap';

describe('Number Hash Map', () => {
    let hashMap: NumberHashMap<string>;

    beforeEach(() => {
        hashMap = new NumberHashMap();
    });

    it('should return null if the key has never been set', () => {
        expect(hashMap.get(1)).toBeNull();
    });

    it('should return a previously set value', () => {
        hashMap.set(2, 'hello');

        expect(hashMap.get(2)).toEqual('hello');
    });

    it('should return a previously set value which used a negative key', () => {
        hashMap.set(-4, 'hello');

        expect(hashMap.get(-4)).toEqual('hello');
    });

    it('should return a previously set value which used a float key', () => {
        hashMap.set(4.5, 'hello');

        expect(hashMap.get(4.5)).toEqual('hello');
    });

    it('should handle collisions', () => {
        const keys = _.range(1, 100);

        for(let key of keys) {
            hashMap.set(key, key.toString());
        }

        for(let key of keys) {
            expect(hashMap.get(key)).toEqual(key.toString());
        }
    });

    it('should not return values for deleted keys', () => {
        const keys = _.range(1, 100);

        for(let key of keys) {
            hashMap.set(key, key.toString());
        }

        hashMap.delete(99);

        expect(hashMap.get(99)).toEqual(null);
    });

    it('should replace the value if an existing key is used again', () => {
        hashMap.set(1, 'hello');
        hashMap.set(1, 'new hello');

        expect(hashMap.get(1)).toEqual('new hello');
    });

    it('delete should remove any value if a key was set multiple times', () => {
        hashMap.set(1, 'hello');
        hashMap.set(1, 'new hello');

        hashMap.delete(1);

        expect(hashMap.get(1)).toEqual(null);
    });

    it('deleting a key that never existed should do nothing', () => {
        hashMap.set(1, 'hello');

        hashMap.delete(2);

        expect(hashMap.get(1)).toEqual('hello');
    });

    it('large number of sets, deletes, and gets', () => {
        const keys = _.range(-1000, 1000, 0.5);

        for (let key of keys) {
            hashMap.set(key, key.toString());
        }

        for (let key of keys) {
            expect(hashMap.get(key)).toEqual(key.toString());
        }

        for (let key of keys) {
            hashMap.set(key, key.toString() + 'v2');
        }

        for (let key of keys) {
            expect(hashMap.get(key)).toEqual(key.toString() + 'v2');
        }

        for (let i = 0; i < keys.length; i += 2) {
            hashMap.delete(keys[i]);
        }

        for (let i = 0; i < keys.length; i ++) {
            const key = keys[i];
            if (i % 2 === 0) {
                expect(hashMap.get(key)).toBeNull();
            } else {
                expect(hashMap.get(key)).toEqual(key.toString() + 'v2');
            }
        }
    });
});