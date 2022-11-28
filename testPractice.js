function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(str) {
  let newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

const calculator = {
  add(a, b) {
    let sum = a + b;
    return sum;
  },

  subtract(a, b) {
    let sum = a - b;
    return sum;
  },

  divide(a, b) {
    let answer = a / b;
    return answer;
  },

  multiply(a, b) {
    let product = a * b;
    return product;
  },
};

function caesarCipher(string) {
  let alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  // scipher is every letter shifted by 1
  let currentLetter;
  let encryptedLetter;
  let encryption = '';
  for (let i = 0; i <= string.length - 1; i++) {
    if (string[i] === 'z') {
      encryptedLetter = alphabet[0];
    } else if (string[i] === 'Z') {
      encryptedLetter = alphabet[26];
    } else {
      let j = 0;
      currentLetter = string[i];
      while (currentLetter != alphabet[j]) {
        j++;
      }
      encryptedLetter = alphabet[j + 1];
    }

    encryption += encryptedLetter;
  }
  return encryption;
}

function analyzeArray(array) {
  const sum = array.reduce((prev, cur) => cur + prev, 0);

  const average = sum / array.length;

  const min = array.reduce((current, previous) => {
    return Math.min(current, previous);
  });

  const max = array.reduce((current, previous) => {
    return Math.max(current, previous);
  });

  const length = array.length;

  const analyzedArray = {
    average: average,
    min: min,
    max: max,
    length: length,
  };

  return analyzedArray;
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
