interface HashMapEntry<T> {
    key: number;
    value: T;
    next?: HashMapEntry<T>;
}

/**
 * Simple hash map which allows for number keys to be mapped to a value.
 */
export default class NumberHashMap<T = any> {
    private static readonly STARTING_BUCKET_COUNT = 5;
    private static readonly MAX_BUCKET_LENGTH = 5;
    
    private buckets: HashMapEntry<T>[];

    constructor() {
        this.buckets = new Array(NumberHashMap.STARTING_BUCKET_COUNT);
    }

    private getBucketForKey(key: number): number {
        return Math.floor(Math.abs(key)) % this.buckets.length;
    }

    public set(key: number, value: T) {
        const bucket: number = this.getBucketForKey(key);
        
        const newEntry: HashMapEntry<T> = {
            key,
            value
        }

        if (!this.buckets[bucket]) {
            this.buckets[bucket] = newEntry;
        } else {
            this.appendEntry(this.buckets[bucket], newEntry);
        }
    }

    private appendEntry(root: HashMapEntry<T>, newEntry: HashMapEntry<T>) {
        let bucketSize = 0;
        while (true) {
            bucketSize++;
            if (root.key === newEntry.key) {
                root.value = newEntry.value;
                break;
            }

            if (!root.next) {
                root.next = newEntry;
                break;
            }

            root = root.next;
        }

        if (bucketSize > NumberHashMap.MAX_BUCKET_LENGTH) {
            this.growBuckets();
        }
    }

    private growBuckets() {
        const originalBuckets = this.buckets;

        this.buckets = new Array(this.buckets.length * 2);

        for (let i = 0; i < originalBuckets.length; i++) {
            let entry = originalBuckets[i];
            while (entry) {
                this.set(entry.key, entry.value);
                entry = entry.next;
            }
        }
    }

    public get(key: number): T {
        const bucket = this.getBucketForKey(key);

        let entry = this.buckets[bucket];

        while (entry) {
            if (entry.key === key) {
                return entry.value;
            }
            entry = entry.next;
        }

        return null;
    }

    public delete(key: number): void {
        const bucket = this.getBucketForKey(key);

        let sentinel: HashMapEntry<T> = {
            key: 0,
            value: null,
            next: this.buckets[bucket]
        };

        let prevEntry;
        let entry = sentinel;

        while (entry.next) {
            prevEntry = entry;
            entry = entry.next;
            if (entry.key === key) {
                prevEntry.next = entry.next;
                entry.next = null;
                break;
            }
        }
        this.buckets[bucket] = sentinel.next;
    }
}