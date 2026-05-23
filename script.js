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

// create the function
// loop through characters

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

console.log(countCharacters('aabbcc'));

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
