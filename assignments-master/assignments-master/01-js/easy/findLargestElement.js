/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let large=numbers[0];
    for(let i=0;i<numbers.length;i++)
    {
        if(numbers[i]>=large)
        {
            large=numbers[i];
        }
    }
    return large;
}

console.log("The largest element in the given array is "+findLargestElement([2,5,7,9,1]));
findLargestElementUsingSort([3, 7, 2, 9, 1]);

//other method to solve the problem-- sort the elements in the array

function findLargestElementUsingSort(numbers) {
   
    let numbersArray = numbers.sort();

    console.log("Largest element is "+numbersArray[numbersArray.length -1]);
}
