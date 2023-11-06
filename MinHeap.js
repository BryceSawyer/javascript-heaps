// HEAPS: JAVASCRIPT
// Introduction
// A heap data structure is a specialized tree data structure that satisfies the heap condition:

// In a min-heap, for any given element, its parent’s value is less than or equal to its value.
// In a max-heap, for any given element, its parent’s value is greater than or equal to its value.

// A heap data structure is commonly implemented as a binary tree.
// where every parent element has up to two child elements.
// A parent can have either a left child or two children, but not just a right child.
// Min-heaps efficiently keep track of the minimum value in a dataset, even as we add and remove elements.

// Heaps enable solutions for complex problems such as finding the shortest path (Dijkstra’s Algorithm) or efficiently sorting a dataset (heapsort).

// MinHeap class will store two pieces of information:
class MinHeap {
    constructor() {
        // An array of elements within the heap.
        this.heap = [null];
        // A count of the elements within the heap.
        this.size = 0;
    }

    // Pop Min Method:
    popMin() {
        // Checks if our heap is empty. If it is, returns null.
        if (this.size === 0) {
            return null;
        }
        // Exchange the last element of the heap with the minimum element at index 1 using .swap() helper method.
        ///// console.log(`\n/// Pop min... ///\n Current Heap:`, this.heap);
        ///// console.log(`...Swap element ${this.heap[1]} with last element ${this.heap[this.size]}`);
        this.swap(1, this.size); // <--- Swap
        ///// console.log('Swaped heap', this.heap);
        // Remove the last element from the heap.
        const min = this.heap.pop(); // <--- Remove
        ///// console.log(`\n/// ...Removed ${min} from end of heap ///\n`);
        // Decrement the heap size.
        this.size--; // <--- Decrement
        ///// console.log('Current heap', this.heap);
        //Call to .heapify()
        this.heapify();
        // Return the minimum element
        return min;
    }

    // .add() Method:
    // To add elements into the .heap array.
    add(value) {
        // add value to end of the array in this.heap
        this.heap.push(value);
        ///// console.log(`\n/// ...Adding ${value} to heap ///\n`)
        // Increments the size property by one.
        this.size++;
        // Calls .bubbleUp() each time an element is added.
        this.bubbleUp();
    }

    // .bubbleUp() Method:
    // Is called by .add() to maintain the heap conditions when additional elements added.
    bubbleUp() {
        // Sets the current element index to be the last index of heap
        let currentIndex = this.size;
        // Test: swap count
        let swapCount = 0;
        // While current element is 'VALID' and its value is 'LESS' than its parent's value
        while (currentIndex > 1 && this.heap[currentIndex] < this.heap[getParent(currentIndex)]) {
            ///// console.log('/// Bubble Up... ///\nCurrent Heap:', this.heap) 
            // Swap the parent index and the current index using the .swap() helper method.
            ///// console.log(`...Swap CURRENT index ${currentIndex} with PARENT index ${getParent(currentIndex)}`); 
            this.swap(currentIndex, getParent(currentIndex)); // <--- Swap
            // Update the current index to be its parent’s index
            currentIndex = getParent(currentIndex);
            // Test: swap count
            swapCount++;
            ///// console.log('Bubbled Up Heap:', this.heap, '\n'); 
        }
        ///// console.log(`/// Swaps in total per added element: ${swapCount} ///\n`) 
        // Test: swap count
        if (this.size == 10000) {
            console.log(`\n/// Heap of ${this.size} elements restored with the most swaps for an added element: ${swapCount} swaps ///\n`);
        }
    }

    //.heapify() Method:
    heapify() {
        // // Assign the current index to 1
        let currentIndex = 1;
        // Assign the left child index using getLeft() helper function
        let leftChild = getLeft(currentIndex);
        // Assign the right child index using getRight() helper function
        let rightChild = getRight(currentIndex);
        // Test: swap count
        let swapCount = 0;
        // Call .canSwap() helper method with three indices in a while loop
        while (this.canSwap(currentIndex, leftChild, rightChild)) {
            // Checks for the existence of both children
            if (this.exists(leftChild) && this.exists(rightChild)) {
                // Compare the left child’s value with the right child’s value.
                // If the left child is smaller than the right child:
                if (this.heap[leftChild] < this.heap[rightChild]) {
                    // Swap the current element with the left child
                    this.swap(currentIndex, leftChild);
                    // Update the current element index to be the left child
                    ///// console.log(`...Swap CURRENT index ${currentIndex} with LEFT child index ${getLeft(currentIndex)}`) 
                    currentIndex = leftChild;
                    // Test: swap count
                    swapCount++;
                    ///// console.log('Heapifyed:', this.heap) 
                    // Else the right child is smaller than the left child:
                } else {
                    // Swap the current element with the right child
                    ///// console.log(`...Swap CURRENT index ${currentIndex} with RIGHT child index ${getRight(currentIndex)}`) 
                    this.swap(currentIndex, rightChild);
                    // Update the current element index to be the right child
                    currentIndex = rightChild;
                    // Test swap count
                    swapCount++;
                    ///// console.log('Heapifyed:', this.heap) 
                }
                // If only one child exists, it is the left child. 
            } else {
                // Swap the current element with the left child
                ///// console.log(`...Swap CURRENT index ${currentIndex} with LEFT child index ${getLeft(currentIndex)}`) 
                this.swap(currentIndex, leftChild)
                // Update the current element index to be the left child
                currentIndex = leftChild;
                // Test swap count
                swapCount++;
                ///// console.log('Heapifyed:', this.heap) 
            }
            // Update the left child index and right child index
            leftChild = getLeft(currentIndex);
            rightChild = getRight(currentIndex);
        }
        // Test swap count
        if (this.size == 9999) {
            console.log(`\n/// Heap of ${this.size} elements restored with ${swapCount} swaps ///\n`);
          }
    }

    // .exists() Helper Method:
    // Checks for the existence of an element at a particular index.
    // Is called by .canSwap() and .heapify() helper methods
    exists(index) {
        return index <= this.size;
    }

    // .CanSwap() Helper Method:
    // Checks that one of the possible swap conditions exists with .exists() helper method
    canSwap(currentIndex, leftChild, rightChild) {
        return (
            // If a swap is necessary, 
            // starting with the left child, we first check that the child exists 
            // and then whether the min-heap condition is broken,
            // i.e. the current element has a value greater than that child’s value.
            this.exists(leftChild) && this.heap[currentIndex] > this.heap[leftChild]
            // If the left child does not break the min-heap condition, the same check is performed on the right child.
            || this.exists(rightChild) && this.heap[currentIndex] > this.heap[rightChild]
        );
    }

    //.swap() Helper Method:
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
    }
};

// Helper functions: getParent(), getLeft(), and getRight()
// Child and parent elements are determined by their relative indices within the internal heap.
// By doing some arithmetic on an element’s index, 
// we can determine the indices for parent and child elements (if they exist).
// These calculations are important for the efficiency of the heap
// These helpers take an index as the sole parameter and return the corresponding parent or child index.

// Parent: (index / 2), rounded down
const getParent = currentIndex => Math.floor((currentIndex / 2));
// Left Child: index * 2
const getLeft = currentIndex => currentIndex * 2;
// Right Child: (index * 2) + 1
const getRight = currentIndex => currentIndex * 2 + 1;

module.exports = {
    MinHeap,
    getParent,
    getLeft,
    getRight,
};