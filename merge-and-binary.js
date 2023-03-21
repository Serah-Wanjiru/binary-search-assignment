//Given an array of unsorted numbers,return the index of the following 
//target if the target exists in the array.if the target is not
//found return null
//let num=[45,12,6,89,2,5]
//let target=6
function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    const right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
  }
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
  const num = [45, 12, 6, 89, 2, 5];
  const sortedNum = mergeSort(num);
  console.log(sortedNum)
  function binarySearch(array, target) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;
    while (leftIndex <= rightIndex) {
      const midIndex = Math.floor((leftIndex + rightIndex) / 2);
      if (array[midIndex] === target) {
        return midIndex;
      } else if (array[midIndex] < target) {
        leftIndex = midIndex + 1;
      } else {
        rightIndex = midIndex - 1;
      }
    }
    return null;
  }
  const target = 6;
  const targetIndex = binarySearch(sortedNum, target);
  console.log(targetIndex);

  //question2
  function mergeSortDescending(arr) {
    if (arrayss.length <= 1) {
      return arrayss;
    }
    const middle = Math.floor(arrayss.length / 2);
    const leftIndex = arrayss.slice(0, middle);
    const rightIndex = arrayss.slice(middle);
    return mergeDescending(mergeSortDescending(leftIndex), mergeSortDescending(rightIndex));
  }
  function mergeDescending(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] >= right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  let arrayss = [123, 89, 5, 23, 9, 56];
  let sortedArr = mergeSortDescending(arrayss);
  console.log(sortedArr);
  
  
  
  
  
  

//question3

  function merge(left, right) {
    let sortedArry4 = []
        while (left.length && right.length){
      if (left[0] < right[0]) {
        sortedArry4.push(left.shift())
      } else {
        sortedArry4.push(right.shift())
      }
    }
    return [...sortedArry4, ...left, ...right]
  }
function mergeSort(arrays) {
    if (arrays.length <= 1) return arrays
    let mid = Math.floor(arrays.length / 2)
    let left = mergeSort(arrays.slice(0, mid))
    let right = mergeSort(arrays.slice(mid))
    return merge(left,right);
     console.log( merge(left, right));
  }
  let arrays2 = [1,4,78,2,67,3];
  console.log(mergeSort(arrays2));
  function binary(arrays, target){
    let leftIndex= 0;
    let rightIndex = arrays.length-1;
    while(leftIndex <= rightIndex){
        let middle = Math.floor((leftIndex+rightIndex)/2);
        if (arrays[middle] === target){
            return middle;
        }
        else if(arrays[middle]>target){
            rightIndex = middle-1
        }
        else{
            leftIndex=middle+1
        }
    }
    return null;
}
let targett = 34;
console.log(binary(arrays2,target));
