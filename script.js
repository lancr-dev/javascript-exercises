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
