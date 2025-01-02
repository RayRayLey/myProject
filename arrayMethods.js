let testArray = [1, 2, 3, 4, 5, 6, 7, 8];

function mySlice(arr, start, end) {
  let newArray = [];
  if (arguments.length > 1) {
    if (end === undefined || end > arr.length) {
      if (start >= 0) {
        end = arr.length;
      } else {
        end = -0;
      }
    }
    for (let i = start; i < end; i++) {
      newArray.push(arr.at(i));
    }
    return newArray;
  } else if (arguments.length === 1) {
    return arr;
  } else {
    return "Недостаточно аргументов";
  }
}

function myIndexOf(arr, item, from = 0) {
  if (arguments.length > 1) {
    if (from < 0) {
      from += arr.length;
    }
    for (let i = from; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  } else {
    return "Недостаточно аргументов";
  }
}

function myIncludes(arr, item, from = 0) {
  if (arguments.length > 1) {
    if (from < 0) {
      from += arr.length;
    }
    for (let i = from; i < arr.length; i++) {
      if (arr[i] === item) {
        return true;
      }
    }
    return false;
  } else {
    return "Недостаточно аргументов";
  }
}
