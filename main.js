//   Написати функцію, яка приймає один параметр. При першому виклику вона запамятовує його,
//   при другому — підсумовує переданий параметр з тим, що передали перший раз і тд.
//   Все це із замиканнями, наприклад: sum(3) = 3 sum(5) = 8 sum(20) = 28

function getSum() {
  let result = null;

  return function (number) {
    if (typeof number !== "number") {
      throw new Error('Wrong type');
    } else if (result === null) {           // при першому виклику функція запамятовує його
      return result = number;
    } else {                        // при другому — підсумовує переданий параметр з тим, що передали перший раз
      return result += number;
    }
  }
}

let sum = getSum();
console.log(sum(3));    //  = 3
console.log(sum(5));    //  = 8
console.log(sum(20));   //  = 28


let sum1 = getSum();
console.log(sum1(0));    //  = 0
console.log(sum1(4));    //  = 4
console.log(sum1(12));   //  = 16


//   Даний масив з елементами різних типів. Створити функцію, яка вираховує середнє арифметичне
//   лише числових елементів даного масиву.

let arr1 = ["s", true, 1, [250, "r", 3, [undefined, "4"]], {key1: 1, key2: 2}, false, NaN, 4, null, 3];
let arr2 = ["s", true, 3, [1, "r", 4, [2, undefined, "4"]], {key1: 1, key2: 2}, false, NaN, 4, null];

function getArithmeticMean() {
  let arithmeticMean = 0;
  let countOfNumbers = 0;

  return function findNumbers(array) {             // рекурсія
    for (const item of array) {
      if (typeof item === "number" && item === item) {
        arithmeticMean += item;
        countOfNumbers += 1;
      } else if (Array.isArray(item)) {
        findNumbers(item);                                // замикання
      }
    }
    return `Середнє арифметичне = ${arithmeticMean / countOfNumbers}`;
  }
}

console.log(getArithmeticMean()(arr1));
console.log(getArithmeticMean()(arr2));


//   Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x та y, рядок znak.
//   У змінній znak може бути значення +, -, *, /, %, ^ (ступінь).
//   Вивести результат математичної дії, вказаної у змінній znak. Обидва числа та знак виходять від користувача.


function doMath(x, znak, y) {
  if (typeof x === "number" && x === x && typeof y === "number" && y === y && ["+", "-", "*", "/", "%", "^"].includes(znak)) {
    switch (znak) {
      case "+":
        return x + y;
      case "-":
        return x - y;
      case "*":
        return x * y;
      case "/":
        return x / y;
      case "%":
        return x % y;
      case "^":
        return x ** y;
    }
  } else {
    throw new Error("Wrong type");
  }
}

console.log(doMath(2, "^", 3));
console.log(doMath(2, "+", 3));
console.log(doMath(7, "%", 3));
console.log(doMath(4, "/", 2));


//   Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву та
//   внутрішніх масивів задає користувач. Значення всіх елементів масивів задає користувач.

function fillTwoDimensionalArray(lengthOfMainArray, lengthOfInternalArrays, valueOfAllElements = "hello") {
  if (typeof lengthOfMainArray === "number" && lengthOfMainArray === lengthOfMainArray && lengthOfMainArray > 0 && typeof lengthOfInternalArrays === "number" && lengthOfInternalArrays === lengthOfInternalArrays && lengthOfInternalArrays > 0) {
    let result = [];
    for (let i = 0; i < lengthOfMainArray; i++) {
      result[i] = [];
      for (let j = 0; j < lengthOfInternalArrays; j++) {
        result[i][j] = valueOfAllElements;
      }
    }
    return result;
  } else {
    throw new Error("Wrong parameters =(");
  }
}

console.log(fillTwoDimensionalArray(3, 4,));
console.log(fillTwoDimensionalArray(4, 2, "Wow"));


//   Створити функцію, яка видаляє з рядка всі символи, які ми передали другим аргументом.
//   'func("hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач

function func(string, arrayOfSymbols) {
  if (typeof string === "string" && Array.isArray(arrayOfSymbols)) {
    arrayOfSymbols.forEach(symbol => {
      string = string.replaceAll(symbol, "")
    })
    return string;
  } else {
    throw new Error("Wrong type =(")
  }
}

console.log(func("hello world", ['l', 'd']));     //   =>   heo wor
console.log(func("I love javaScript", ['l', 'd', "t"]));     //   =>   I ove javaScrip