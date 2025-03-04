/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
  const arr = process.argv;

  if (arr.length <= 2) {
    return 'No operation provided...';
  }

  if (arr[2] === 'plus' || arr[2] === 'minus') {
    if (arr.length <= 3) {
      return 'No numbers provided...';
    } else {
      for (let i = 3; i < arr.length; i++) {
        if (!Number.isInteger(i)) {
          return 'No numbers provided...';
        }
      }
    }
  } else {
    return 'Invalid operation: modulo';
  }

  if (arr[2] === 'plus') {
    let sum = 0;
    for (let i = 3; i < arr.length; i++) {
      let result = parseInt(arr[i]);
      sum += result;
    }
    return sum;
  } else if (arr[2] === 'minus') {
    let sum = arr[3];
    for (let i = 4; i < arr.length; i++) {
      let result = parseInt(arr[i]);
      sum -= result;
    }
    return sum;
  }
}

// Don't change anything below this line.
module.exports = calculator;
