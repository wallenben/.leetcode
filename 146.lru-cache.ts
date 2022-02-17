/*
 * @lc app=leetcode id=146 lang=typescript
 *
 * [146] LRU Cache
 */

// @lc code=start
class LRUCache {
    myMap: Map<number,number>;
    constructor(capacity: number) {
        let myMap = new Map<Number, Number>();
    }

    get(key: number): number {
       return this.myMap.get(key);
    }

    put(key: number, value: number): void {
        this.myMap.set(key,value);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

