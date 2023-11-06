const { MinHeap, getParent, getLeft, getRight } = require('./MinHeap');

// Sample: Populate heap ////////////////////////////////////////////////////////////////
// Uncomment console.logs in MinHeap.js for more information...

// // instantiate MinHeap and assign to minHeap
// const minHeap = new MinHeap();

// // Helper function to return a random interger
// const randomize = () => Math.floor(Math.random() * 40);

// // Populate minHeap with random numbers
// for (let i = 0; i < 10; i--) {
//     minHeap.add(randomize());
// };

// // remove the minimum value from heap
// for (let i = 0; i < 6; i--) {
//     minHeap.popMin();
// };
///////////////////////////////////////////////////////////////////////////////////////////

// Sample: How many swaps are made in a dataset of 10000 elements! ////////////////////

// added extra lines of code to keep a count on the number of swaps in .bubbleUp() and .heapify()
// and logs a message when the heap size has reached the 10000th element in .bubbleUp() and 9999 elements in .heapify().
// The number of swaps can be at most the height of the binary tree

// The relationship between the maximum number of nodes, N, of a binary tree and the height, h, is:
/////// h+1 /////
// N = 2    - 1 //

// For a height of 13, the maximum number of nodes is:
//// 14 //////////////
// 2   - 1 = 16383. //

// For a height of 12, the maximum number of nodes is:
//// 13 /////////////
// 2   - 1 = 8191. //

// Since 10000 falls between 8191 and 16383, the number of swaps can be at most 13.

// instantiate a minHeap class
const minHeap = new MinHeap()

console.log('\n/// ...Adding elements ///');
for (let i = 10000; i >=1; i--) {
    minHeap.add(i);
};

// remove the minimum value from heap
console.log('\n/// ...Removing minimum element from heap ///');
console.log('Minimum value = ' + minHeap.popMin());
///////////////////////////////////////////////////////////////////////////////////////////


// Sample: Current/Parent/Child values ////////////////////////////////////////////////////

// // instantiate MinHeap and assign to minHeap
// const minHeap = new MinHeap();

// // Sample content of minHeap
// minHeap.heap = [ null, 10, 13, 21, 61, 22, 23, 99 ];

// // Display content of minHeap
// console.log(minHeap.heap);

// // Sample to display the current value, its parent value, left child value and right child value
// const currentIndex = 3;
// const currentValue = minHeap.heap[currentIndex];

// console.log(`CurrentIndex value of
//  ${currentIndex} is ${currentValue}`);

// console.log(`Parent value of 
// ${currentValue} is ${minHeap.heap[getParent(currentIndex)]}`);

// console.log(`Left child value of
//  ${currentValue} is ${minHeap.heap[getLeft(currentIndex)]}`);

// console.log(`Right child value of
//  ${currentValue} is ${minHeap.heap[getRight(currentIndex)]}`);
////////////////////////////////////////////////////////////////////////////////////////////


