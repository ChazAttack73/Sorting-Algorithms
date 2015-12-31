# Sorting Algorithms

This collection of sorting algorithms includes the following:
  * Bubble Sort
  * Quick Sort
  * Merge Sort
  * Insertion Sort
  * Selection Sort

###Bubble Sort:
Takes an array of numbers and arranges them in order from smallest to largest, left to right. Starts from arr`[0]` (furthest on the left) and compares to the next postition immediately to the right. If smaller in value the number stays in place, if larger in value the number swaps positions in the array. This continues through the length of the array until all numbers have been swapped into the properly ordered positions.


#####Worst case performance: O(n^2), Best case performance: O(n).


###Quick Sort:
Takes an array of numbers and arranges them in order from smallest to largest, left to right. This is a "Divide and Conquer" approach. First a pivot is chosen ( generally either the number in arr`[0]` or the number at the middle of the array, arr`[length/2]`), numbers smaller than the pivot are placed in an array to the left, numbers greater than the pivot are placed in an array to the right. Recursively choose new pivots and separate arrays into left and right until arrays are length of 1. Finally the recursion also concatenates the single element arrays into the properly ordered array.


#####Worst case performance: O(n^2), Best case performance: O(n log n).




  Jushcht schecking if you read thisch Joe!!!
