/* eslint-disable no-console */
const urlify = string => {
  let word = string.replace(' ', '%20');

  console.log(word);
};

urlify('hello there');

const arrayFilter = numbers => {
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] >= 5) {
      let numberArray = numbers.splice(i, numbers[i]);
      console.log(numberArray);
    }
  }
};

arrayFilter([1, 2, 3, 4, 5, 6, 7]);
arrayFilter([1, -2, 0.5, 0.1, 1, 10, 6]);

const maxSum = numbers => {
  let highestSum = 0;
  let currentSum = 0;

  for (let i of numbers) {
    currentSum = Math.max(0, currentSum + i);
    highestSum = Math.max(highestSum, currentSum);
  }
  console.log(highestSum);
  return highestSum;
};

maxSum([4, 6, -3, 5, -2, 1]);
maxSum([10, 6, -3, 5, -2, 1]);
maxSum([15, 6, -3, 5, -2, 1]);

const mergeArrays = (arr1, arr2) => {
  let joinedArr = arr1.concat(arr2);
  console.log(joinedArr.sort((a, b) => a - b));
};

mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]);

// REMOVE CHARACTERS