import LinkedList from '../LinkedList';

describe('linked list', () => {
    let list: LinkedList<string>;

    beforeEach(() => {
        list = new LinkedList();
    });

    it('should start with size 0', () => {
        expect(list.size).toEqual(0);
    });

    it('should not allow you to change size with size 0', () => {
        (list as any).size = 10;

        expect(list.size).toEqual(0);
    });

    it('head should return null if no items are in the list', () => {
        expect(list.head()).toBeNull();
    });

    it('tail should return null if no items are in the list', () => {
        expect(list.tail()).toBeNull();
    });

    it('should push a value', () => {
        list.push('1');

        expect(list.head()).toEqual('1');
        expect(list.tail()).toEqual('1');
        expect(list.size).toEqual(1);
    });

    it('should unshift a value', () => {
        list.unshift('1');

        expect(list.head()).toEqual('1');
        expect(list.tail()).toEqual('1');
    });

    it('multiple pushes and unshifts should return correct head/tail & size', () => {
        list.push('1');
        list.push('2');
        list.push('3');

        expect(list.head()).toEqual('1');
        expect(list.tail()).toEqual('3');
        expect(list.size).toEqual(3);

        list.unshift('0');
    
        expect(list.head()).toEqual('0');
        expect(list.tail()).toEqual('3');
        expect(list.size).toEqual(4);
    });

    it('should return null if an empty list is popped', () => {
        expect(list.pop()).toEqual(null);
    });

    it('should return the popped value and tail should point to the correct value', () => {
        list.push('1');
        list.push('2');
        list.push('3');

        expect(list.pop()).toEqual('3');
        expect(list.size).toEqual(2);
        expect(list.tail()).toEqual('2');
    });

    it('pop all values in list', () => {
        list.push('1');
        list.push('2');
        list.push('3');

        expect(list.pop()).toEqual('3');
        expect(list.pop()).toEqual('2');

        expect(list.size).toEqual(1);
        expect(list.head()).toEqual('1');
        expect(list.tail()).toEqual('1');

        expect(list.pop()).toEqual('1');

        expect(list.size).toEqual(0);
        expect(list.head()).toEqual(null);
        expect(list.tail()).toEqual(null);

        expect(list.pop()).toBeNull();

        expect(list.size).toEqual(0);
        expect(list.head()).toEqual(null);
        expect(list.tail()).toEqual(null);
    });

    it('should return null if an empty list is shifted', () => {
        expect(list.shift()).toEqual(null);
    });

    it('should return the shifted value and head should point to the correct value', () => {
        list.push('1');
        list.push('2');
        list.push('3');

        expect(list.shift()).toEqual('1');
        expect(list.size).toEqual(2);
        expect(list.head()).toEqual('2');
    });

    it('shift all values in list', () => {
        list.push('1');
        list.push('2');
        list.push('3');

        expect(list.shift()).toEqual('1');
        expect(list.shift()).toEqual('2');

        expect(list.size).toEqual(1);
        expect(list.head()).toEqual('3');
        expect(list.tail()).toEqual('3');

        expect(list.shift()).toEqual('3');

        expect(list.size).toEqual(0);
        expect(list.head()).toEqual(null);
        expect(list.tail()).toEqual(null);

        expect(list.shift()).toBeNull();
        
        expect(list.size).toEqual(0);
        expect(list.head()).toEqual(null);
        expect(list.tail()).toEqual(null);
    });
});