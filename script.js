// JavaScript Exercises

function countVowels(str) {
  let count = 0;
  const vowels = 'aeiouAEIOU';

  for (ch of str) {
    if (vowels.includes(ch)) {
      count++;
    }
  }

  return count;
}

function reverseVowels(str) {
  const vowels = [];
  for (ch of str) {
    if ('aeiouAIEOU'.includes(ch)) {
      vowels.push(ch);
    }
  }

  let result = '';

  for (ch of str) {
    if ('aeiouAIEOU'.includes(ch)) {
      result += vowels.pop();
    } else {
      result += ch;
    }
  }

  return result;
}

function findLargestNumber(numbers) {
  let max = numbers[0];
  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

function reverseString(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

function isPalindrome(str) {
  str = str.toLowerCase();

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function countEvens(arr) {
  let count = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      count++;
    }
  }

  return count;
}

function sumDigits(num) {
  let digit = 0;
  let sum = 0;

  while (num > 0) {
    digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }

  return sum;
}

function firstNonRepeatingChar(str) {
  let count = {};

  for (let ch of str) {
    count[ch] = (count[ch] || 0) + 1;
  }

  for (let ch of str) {
    if (count[ch] === 1) {
      return ch;
    }
  }

  return '_';
}

function countCharacters(str) {
  let count = {};

  for (let ch of str) {
    count[ch] = (count[ch] || 0) + 1;
  }

  return count;
}

function findMissingNumber(arr) {
  let sum = 0;
  let n = arr.length + 1;
  let expectedTotal = 0;
  let missingNumber = 0;

  for (let num of arr) {
    sum += num;
  }

  expectedTotal = (n * (n + 1)) / 2;
  missingNumber = expectedTotal - sum;

  return missingNumber;
}

function rotateArray(arr, rotation) {
  for (let i = 0; i < rotation; i++) {
    let lastValue = arr.pop();
    arr.unshift(lastValue);
  }

  return arr;
}

function findDuplicates(arr) {
  let numbers = {};
  let duplicatedArray = [];

  for (let num of arr) {
    numbers[num] = (numbers[num] || 0) + 1;
    if (numbers[num] === 2) {
      duplicatedArray.push(num);
    }
  }

  duplicatedArray.sort((a, b) => a - b);

  return duplicatedArray;
}

function moveZeroes(arr) {
  let newArray = [];

  for (let num of arr) {
    if (num !== 0) {
      newArray.push(num);
    }
  }

  for (let num of arr) {
    if (num === 0) {
      newArray.push(num);
    }
  }

  return newArray;
}

function findPair(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }

  return newArray;
}

function findPairsOfSum(arr, target) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (arr[i] + arr[j] === target) {
        newArray.push(arr[i]);
        newArray.push(arr[j]);
      }
    }
  }

  return newArray;
}
