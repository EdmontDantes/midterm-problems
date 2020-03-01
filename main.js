function isEvenlyDivisible(num1, num2) {
  if ((num1 / num2) % 2 === 0 ) {
    return true;
  } else if (num1 / num2 !== 0) {
    return false;
  }
}

function halfSquare(num) { 
  let halfSquaredNum = (num ** 2) / 2
  return halfSquaredNum;
}


function exclaim(str) {
  let lastChar = str.charAt(str.length-1);
  let previousofLastChar = str.charAt(str.length-2);
  if (lastChar === '!') {
    return str;
  } else if (lastChar !== '!') {
    return str + '!';
  } else if (previousofLastChar === '!' && lastChar === '!') {
    let lastExclaimRemoved = str.substring(0, -1);
    return lastExclaimRemoved;
  }
}

function isLong(str) {
  if (str.length > 15) {
    return true;
  } else if (str.length < 15) {
    return false;
  } else if (str.length === 15) {
    return true;
  }

}
function containsDigit(str) {
if (str.includes('1') === true || str.includes('2') === true ||
str.includes('3') === true || str.includes('4') === true ||
str.includes('4') === true || str.includes('5') === true ||
str.includes('5') === true || str.includes('6') === true ||
str.includes('7') === true || str.includes('8') === true ||
str.includes('9') === true || str.includes('0') === true) {
  return true;
} else if (str === '') {
  return false;
} else {
  return false;
}

}
function countWords() {
}


function containsLowerCase() {
}

function containsUpperCase() {
}

function containsNonAlphanumeric() {
}

function containsSpace() {
}

function digits() {
}

function truncate() {
}

function isValidPassword() {
}

function onlyPunchy() {
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