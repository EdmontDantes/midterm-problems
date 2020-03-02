function isEvenlyDivisible(num1, num2) {
  if ((num1 / num2) % 2 === 0 ) {
    return true;
  } else if (num1 / num2 !== 0) {
    return false;
  }
}

function isEvenlyDivisible2 (num1, num2) {
  return num1 % num2 === 0;
}

function halfSquare(num) { 
  let halfSquaredNum = (num ** 2) / 2
  return halfSquaredNum;
}

function halfSquare2(num) {
  return num ** 2 / 2;
}


function exclaim(sentence) {
//   let lastChar = str.charAt(str.length-1);
//   let previousofLastChar = str.charAt(str.length-2);
// if (previousofLastChar === '!' && lastChar === '!') {
//   let lastExclaimRemoved = str.substring(0, str.length-1);
//   return lastExclaimRemoved;
// } else if (lastChar === '!') {
//     return str;
//   } else if (lastChar !== '!') {
//     return str + '!';
//   }

let exclamation = sentence + '!';

// while(exclamation.slice(-2) === '!!')
while(exclamation.endsWith('!!')) {
  exclamation = exclamation.slice(0, exclamation.length - 1); // slice is exclusive NOT inclusive
}
return exclamation;
}


function exclaim2(sentence) {
  let exclamation = sentence + '!';

  // while(exclamation.slice(-2) === '!!')
  while(exclamation.endsWith('!!')) {
    exclamation = exclamation.slice(0, exclamation.length - 1); // slice is exclusive NOT inclusive
  }
  return exclamation;
}

function exclaim3 (sentence) {
  //'hello!'
  // if (sentence.endsWith('!')) {
  // return exclamation = sentence.slice(0, sentence.indexOf('!') + 1); // slice is exclusive 
  // }

  // return sentence + '!';

  // return sentence.endWith('!') ? 
  // sentence.slice(0, sentence.indexOf('!') + 1) :
  // return sentence + '!';
}


function isLong(str) {
  return str.length >= 15

}
function containsDigit(str) {
  let numbersStr = '1234567890'
  // for(let i =0; i < str.length; i++){
  //   if (numbersStr.includes(str[i])) {
  //     return true;
  // }

  for (const char of str) {
    if (numbersStr.includes(char)) {
      return true;
    } // don't else and return false otherwise it will stop the loop
  }
  return false;
}

// if (numbersStr.includes(str)) {
//   return true;
// } else if (str === '') {
//   return false;
// } else {
// }
// return false;

// }
function containsLowerCase(str) {
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  for (const char of str) {
  if (lowercaseLetters.includes(char)) {
    return true
  }
}
return false;
}
function containsUpperCase(str) {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (const char of str) {
    if (uppercaseLetters.includes(char)) {
      return true
    }
  }
  return false;

}
function containsNonAlphanumeric(str) {
  for (const char of str) {
    if (!containsDigit(char) && !containsLowerCase(char) && !containsUpperCase(char)) {
      return true;
    }
  }
  return false;
}

function containsNonAlphanumeric2(str) {
  const alpanumeric = 'abcdefghiklmnopqrstuwxyzABCDEFGHIKLMNOPQRSTUWXYZ0123456789';
  for (const char of str) {
    if (!alpanumeric.includes(char)) {
      return true;
    }
  }
  return false;
}


function containsSpace(str) {
  return str.includes(' ');
}

function countWords(str) {
  // const words = str.split(' ');

  // return words.length;
  let spaceCount = 0;
  for (const char of str) {
    if(char === ' ') {
    spaceCount++;
    }
  }
  return spaceCount + 1;
}





function digits(number) {
  const digitChars = number.toString().split('');
  const onlyDigits = [];
  for (const digit of digitChars) {
    if (digit !== '.' && digit !== '-') {
      onlyDigits.push(digit);
    }
  }
  const numbers = [];

  for (const char of onlyDigits) {
    numbers.push(Number(char));
  }
  return numbers;
}

function truncate(title) {
  if (title.length >= 15) {
    return title.slice(0, 8) + '...';
  }

  return title;

}

function isValidPassword(str) {
  return containsDigit(str) 
  && containsLowerCase(str) 
  && containsUpperCase(str) 
  && containsNonAlphanumeric(str) 
  && !containsSpace(str);
}

function onlyPunchy(titles) {
  const exclamationPointTitles = [];
  
  for (const title of titles){
    exclamationPointTitles.push(exclaim(title));
  }
  
  const shortTitles = [];
  for (const title of exclamationPointTitles) {
    if (!isLong(title)) {
      shortTitles.push(title);
    }
  }

  return shortTitles;
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}