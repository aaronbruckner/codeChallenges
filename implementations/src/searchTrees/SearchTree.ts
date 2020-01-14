export default interface SearchTree {
    add: (value: number) => void;
    delete: (value: number) => void;
    has: (value: number) => boolean;
}