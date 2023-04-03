// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

/* minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1] */


function minMax(arr){
let max= arr[0];
let min= arr[0];

  for(let i=1; i<arr.length; i++){
    if (arr[i]>max) {
        max=arr[i];
    }
    if (arr[i]<min) {
        min=arr[i];
    }
}
console.log([min,max])
}

minMax([100,200,152,234,61,22])
