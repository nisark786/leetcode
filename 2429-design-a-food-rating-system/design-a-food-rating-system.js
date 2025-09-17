var FoodRatings = function(foods, cuisines, ratings) {
    class MinHeap {
        constructor(compare) {
            this.data = [];
            this.compare = compare;
        }
        size() { return this.data.length; }
        peek() { return this.data[0]; }
        push(val) {
            this.data.push(val);
            this._heapifyUp(this.data.length - 1);
        }
        pop() {
            if (this.size() === 0) return null;
            const top = this.data[0];
            const end = this.data.pop();
            if (this.size() > 0) {
                this.data[0] = end;
                this._heapifyDown(0);
            }
            return top;
        }
        _heapifyUp(i) {
            while (i > 0) {
                let p = Math.floor((i - 1) / 2);
                if (this.compare(this.data[i], this.data[p]) >= 0) break;
                [this.data[i], this.data[p]] = [this.data[p], this.data[i]];
                i = p;
            }
        }
        _heapifyDown(i) {
            let n = this.size();
            while (true) {
                let l = 2 * i + 1, r = 2 * i + 2, smallest = i;
                if (l < n && this.compare(this.data[l], this.data[smallest]) < 0) smallest = l;
                if (r < n && this.compare(this.data[r], this.data[smallest]) < 0) smallest = r;
                if (smallest === i) break;
                [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
                i = smallest;
            }
        }
    }

    this.foodInfo = new Map(); 
    this.cuisineHeap = new Map();
    this.MinHeap = MinHeap;      

    for (let i = 0; i < foods.length; i++) {
        let food = foods[i], cuisine = cuisines[i], rating = ratings[i];
        this.foodInfo.set(food, { cuisine, rating });

        if (!this.cuisineHeap.has(cuisine)) {
            this.cuisineHeap.set(cuisine, new MinHeap((a, b) => {
                if (a[0] !== b[0]) return a[0] - b[0]; 
                return a[1].localeCompare(b[1]);       
            }));
        }
        this.cuisineHeap.get(cuisine).push([-rating, food]);
    }
};

/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function(food, newRating) {
    let { cuisine } = this.foodInfo.get(food);
    this.foodInfo.set(food, { cuisine, rating: newRating });
    this.cuisineHeap.get(cuisine).push([-newRating, food]);
};

/** 
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function(cuisine) {
    let heap = this.cuisineHeap.get(cuisine);
    while (heap.size() > 0) {
        let [negRating, food] = heap.peek();
        let { rating } = this.foodInfo.get(food);
        if (-negRating === rating) {
            return food; 
        }
        heap.pop(); 
    }
    return null;
};
