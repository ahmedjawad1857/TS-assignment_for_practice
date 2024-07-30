// // assignment

// // Easy
// // 1. Write a script to log "Hello, World!" to the console.

// // console.log is a function that print the value we put inside it...
// console.log("Hello, World!");

// // 2. Create a variable `temperature` and assign it a value. Then log "It's cold!" if the temperature is below 20 degrees Celsius.
// //  https://www.youtube.com/watch?v=nGoSP3MBV2E
// let temperature: number = 10;
// console.log(temperature < 20 && "It's cold");

// // 3. Use arithmetic operators to solve the problem: If you have 10 apples and you give away 3, how many do you have left? Log the result.

// let totalApples: number = 10;
// let givenApples: number = 3;
// console.log(
//   `If we have ${totalApples} apples, we have give away ${givenApples} apples, then we have ${
//     totalApples - givenApples
//   } apples left.`
// );

// // 4. Declare two variables, `firstName` and `lastName`, then create a third variable `fullName` that combines them. Log the result.

// let firstName: string = "John";
// let lastName: string = "Doe";
// let fullName: string = firstName + " " + lastName; // we can also use .concat() method but it is more easy
// console.log(fullName);

// // 5. Write a TypeScript code that uses a comparison operator to check if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No".

// let num1: number = 5;

// console.log(num1 > 3 ? "Yes" : "No");

// // ### Medium

// // 6. Create a function `calculateArea` that takes the radius of a circle as an input and returns the area of the circle.

// function calculateArea(radius: number): string {
//   return `${Math.PI * radius * radius}m²`;
// }

// let radius: number = 10;

// console.log(calculateArea(radius));

// // 7. Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".

// for (let i: number = 1; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// // 8. Define an array `temperatures` with at least five different temperatures (numbers). Write a script to find and log the highest temperature.

// let temperatures: number[] = [10, 20, 30, 40, 50];
// let highestTemperature: number = temperatures[0];

// for (let i: number = 1; i < temperatures.length; i++) {
//   if (temperatures[i] > highestTemperature) {
//     highestTemperature = temperatures[i];
//   }
// }
// console.log(`The highest temperature in the list is ${highestTemperature}`);

// // or we can use max() function also...The output will be same

// console.log(
//   `The highest temperature in the list is ${Math.max(...temperatures)}`
// );

// // 9. Create a script that prompts the user to enter their age and then logs whether they are a minor (under 18) or an adult.

// // let age: number = Number(prompt("Enter your age"));
// let age: number = 18;

// if (age > 0 && age < 18) {
//   console.log("You are a minor");
// } else if (age >= 18) {
//   console.log("You are an adult");
// } else {
//   console.log("Invalid age!");
// }

// // 10. Write a function that takes an array of numbers and returns the count of positive numbers in the array.

// function countPositiveNumbers(numbers: number[]): number {
//   let count: number = 0;

//   for (let i: number = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//       count++;
//     }
//   }

//   return count;
// }
// let numbers: number[] = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(
//   `In the list [${numbers}]\n\t there are ${countPositiveNumbers(
//     numbers
//   )} positive numbers.`
// );

// // ### Arrays and Array Methods

// // 11. Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'

// function filterWords(words: string[]): string[] {
//   // we use filter() method to loop through the words and return a string array.
//   let filteredWords: string[] = words.filter(
//     (word) => word[0].toLowerCase() === "a"
//   );
//   return filteredWords;
// }

// let words: string[] = ["apple", "banana", "apricot", "durian", "elephant"];

// console.log(
//   `list containing words that start with letter a [${filterWords(words)}]`
// );

// // 12. Create a script that logs the second to last element of an array named `fruits`.

// let fruits: string[] = ["apple", "banana", "apricot", "durian", "elephant"];

// console.log(
//   `The second last element of the array is ${fruits[fruits.length - 2]}`
// );

// // 13. Develop a function that takes an array of numbers and returns a new array with each number squared.

// function squareNumbers(numbers: number[]): number[] {
//   let squaredNumbers: number[] = numbers.map((number) => number * number);
//   return squaredNumbers;
// }

// let numbersList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(
//   `The squared numbers in the list [${numbersList}] are [${squareNumbers(
//     numbersList
//   )}]`
// );

// // 4. Write a JavaScript function that accepts an array and reverses its elements without using the `.reverse()` method. Log the result.

// function reverseArray(numbers: number[]): number[] {
//   let reversedNumbers: number[] = [];

//   for (let i: number = numbers.length - 1; i >= 0; i--) {
//     reversedNumbers.push(numbers[i]);
//   }

//   return reversedNumbers;
// }

// let numbersList1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(
//   `The reversed numbers in the list [${numbersList1}] are [${reverseArray(
//     numbersList1
//   )}]`
// );

// // 15. Given an array `scores` [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of times the score exceeded the maximum score and the number of times it fell below the minimum score.

// function logExceededAndBelowScores(scores: number[]): void {
//   const maxScore: number = Math.max(...scores);
//   const minScore: number = Math.min(...scores);
//   let maxCount: number = 0;
//   let minCount: number = 0;

//   for (const score of scores) {
//     if (score > maxScore) {
//       maxCount++;
//     } else if (score < minScore) {
//       minCount++;
//     }
//   }

//   console.log(
//     `Number of times the score exceeded the maximum score: ${maxCount}`
//   );
//   console.log(
//     `Number of times the score fell below the minimum score: ${minCount}`
//   );
// }

// // Example usage:
// const scores: number[] = [10, 5, 20, 20, 4, 5, 2, 25, 1];
// logExceededAndBelowScores(scores);

// // 16. Create a function that removes all falsey values from an array. Falsey values include `false`, `null`, `0`, `""`, `undefined`, and `NaN`.
// // here we using any type because we will give anything inside it because there are many fasey vlues
// function removeFalseyValues(values: any[]): any[] {
//   let filteredValues: any[] = values.filter((value: any) => value);
//   return filteredValues;
// }
// let values: any[] = [
//   2,
//   false,
//   0,
//   "",
//   null,
//   undefined,
//   NaN,
//   5,
//   "hello world",
//   1,
//   true,
// ];
// console.log(removeFalseyValues(values));

// // 17. Write a script that concatenates two arrays `[1, 2, 3]` and `[4, 5, 6]` into a single array.

// function concatenateArrays(array1: number[], array2: number[]): number[] {
//   let concatenatedArray: number[] = array1.concat(array2);
//   return concatenatedArray;
// }

// let array1: number[] = [1, 2, 3];

// let array2: number[] = [4, 5, 6];

// console.log(`The concatenated array is [${concatenateArrays(array1, array2)}]`);

// // 18. Develop a function called `sumOfElements` that calculates the sum of all elements in an array that are either even or odd, based on a parameter.

// function sumOfElements(numbers: number[]): number {
//   let sumofAllElements: number = numbers.reduce(
//     (elem1: number, elem2: number) => elem1 + elem2
//   );
//   return sumofAllElements;
// }

// let elems: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(
//   `The sum of all elements in the array [${elems}] is ${sumOfElements(elems)}`
// );

// // 19. Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.

// function checkElement(array: number[], target: number): number {
//   let index: number = array.indexOf(target);
//   return index ? index : -1;
// }

// let arrayOfElement: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // let target: number = Number(
// //   prompt("Enter the target to check existence of element in an array.")
// // );
// let target: number = 6;
// console.log(checkElement(arrayOfElement, target));

// // 20. Write a function to find and return the smallest number in an array of integers.

// function findSmallestElement(array: number[]): number {
//   let smallestElement: number = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (smallestElement > array[i]) {
//       smallestElement = array[i];
//     }
//   }
//   return smallestElement;
// }

// let integers: number[] = [6, 9, 8, 1, 2, 3, 4, 5, 6, 76, 77, 4, 8];

// console.log(
//   `The smallest integer in list [${integers}] is ${findSmallestElement(
//     integers
//   )}`
// );

// // ### Functions

// // 21. Write a function `calculateProduct` that takes an array of numbers and returns the product of all elements.

// function calculateProduct(numbers: number[]): number {
//   let product: number = numbers.reduce(
//     (elem1: number, elem2: number) => elem1 * elem2
//   );
//   return product;
// }

// let integerList: number[] = [1, 2, 3, 4, 5, 10];

// console.log(
//   `The product of all elements of the [${integerList}] array is ${calculateProduct(
//     integerList
//   )}`
// );

// // 22. Develop a function `filterByLength` that takes an array of strings and a number `n`. The function should return an array containing only the strings that are longer than `n` characters.

// function filterByLength(strings: string[], n: number): string[] {
//   let filteredStrings: string[] = strings.filter(
//     (string: string) => string.length > n
//   );
//   return filteredStrings;
// }

// let stringList: string[] = ["Hello", "World", "This", "Is", "Our", "House"];

// let n: number = 4;

// console.log(
//   `The strings that are longer than ${n} characters are [${filterByLength(
//     stringList,
//     n
//   )}]`
// );

// // 23. Create a function `findDuplicates` that finds and logs all duplicates in an array.

// function findDuplicates(array: number[]): number[] {
//   let duplicates: number[] = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] === array[j] && !duplicates.includes(array[i])) {
//         duplicates.push(array[i]);
//       }
//     }
//   }
//   return duplicates;
// }

// let array: number[] = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
// ];

// console.log(
//   `The duplicates in the array [${array}] are [${findDuplicates(array)}]`
// );

// // 24. Write a function `incrementAll` that takes an array of integers and increments each element by one.

// function incrementAll(array: number[]): number[] {
//   let incrementedArray: number[] = array.map((elem: number) => elem + 1);
//   return incrementedArray;
// }

// let arrayOfInt: number[] = [1, 2, 3, 4, 5];

// console.log(
//   `The incremented array of [${arrayOfInt}] by 1 is [${incrementAll(
//     arrayOfInt
//   )}]`
// );

// // 25. Develop a function `countOccurrences` that counts how many times a specific element appears in an array.
// function countOccurrences(array: number[]): { value: number; count: number }[] {
//   let count: { value: number; count: number }[] = [];
//   for (let i = 0; i < array.length; i++) {
//     let found = false;
//     for (let j = 0; j < count.length; j++) {
//       if (count[j].value === array[i]) {
//         count[j].count++;
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       count.push({ value: array[i], count: 1 });
//     }
//   }
//   return count;
// }

// let countArrayElem: number[] = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 7, 5];

// console.log(
//   `The count of each element in the array [${countArrayElem}] is`,
//   countOccurrences(countArrayElem)
// );

// // 26. Create a function `isSorted` that checks if an array is sorted in ascending order.

// function isSorted(array: number[]): string {
//   let sorted: boolean = true;
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i] > array[i + 1]) {
//       sorted = false;
//       break;
//     }
//   }
//   return sorted ? "sorted" : "not sorted";
// }

// let sortedArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2];

// console.log(`The array [${sortedArray}] is ${isSorted(sortedArray)}`);

// // 27. Write a function that receives an array of names and formats them into a string separated by commas, except for the last two names, which should be separated by "and".

// const sperateElem = (arr: string[]): string => {
//   if (arr.length === 0) {
//     return "";
//   } else if (arr.length === 1) {
//     return arr[0];
//   } else if (arr.length === 2) {
//     return arr.join(" and ");
//   } else {
//     let formattedNames =
//       arr.slice(0, -2).join(", ") + ", " + arr.slice(-2).join(" and ");
//     return formattedNames;
//   }
// };

// const names: string[] = ["Ahmad", "jawad", "Moosa", "Umair"];
// console.log(`formatted names: ${sperateElem(names)}`);

// // 28. Develop a function that converts an array of Fahrenheit temperatures to Celsius and logs the new temperatures.

// const temp_to_celsius = (temperatures: number[]): string[] => {
//   let new_temperatures: string[] = temperatures.map((temp: number) =>
//     (((temp - 32) * 5) / 9).toFixed(2)
//   );
//   return new_temperatures;
// };

// let temps: number[] = [32, 64, 128, 256, 512];
// console.log(
//   `array of farhenhiet tempertures:[${temps}] when converted to celsius temperature it is like that [${temp_to_celsius(
//     temps
//   )}]`
// );

// // 29. Write a function `minMaxAverage` that takes an array of numbers and returns an object with properties for the minimum, maximum, and average of those numbers.

// type MinMaxAverageObjType = {
//   min: number;
//   max: number;
//   average: number;
// };

// const minMaxAverage = (numbers: number[]): MinMaxAverageObjType | null => {
//   if (numbers.length === 0) {
//     return null; // If the array is empty, return null
//   }

//   let min = numbers[0];
//   let max = numbers[0];
//   let sum = numbers.reduce((num1, num2) => num1 + num2);

//   const average = sum / numbers.length;

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//       min = numbers[i];
//     }
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }

//   return {
//     min: min,
//     max: max,
//     average: average,
//   };
// };

// let intArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(minMaxAverage(intArray));

// // 30. Create a function `swapElements` that swaps two specified indices in an array.

// const swapElements = (
//   arr: string[],
//   index1: number,
//   index2: number
// ): string[] | null => {
//   if (
//     index1 >= arr.length ||
//     index1 < 0 ||
//     index2 >= arr.length ||
//     index2 < 0
//   ) {
//     console.log(
//       "Invalid indices provided. Please provide valid indices within the array bounds."
//     );
//     return null;
//   }
//   let temp: string = arr[index1];
//   arr[index1] = arr[index2];
//   arr[index2] = temp;
//   return arr;
// };

// let arr: string[] = ["Ahmad", "Jawad", "Moosa", "Umair"];
// console.log("Original array:", arr);

// // Swap elements at indices 1 and 3
// swapElements(arr, 1, 7);
// console.log("Array after swapping:", arr);

// // ### Hard

// // 31. Develop a function that takes two inputs, a string and a character, and returns the number of times the character appears in the string.

// const checkOccurence = (str: string, char: string) => {
//   let count: number = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === char.toLowerCase()) {
//       count++;
//     }
//   }
//   console.log(
//     `In the string, '${str}' the character '${char}' appears ${count} times.`
//   );
// };

// let word: string = "HeLlo World...";
// let character: string = ".";
// checkOccurence(word, character);

// // 32. Create a 'to-do list' array of objects where each object has properties `task` and `completed` (a boolean). Write a function to log only the tasks that are not yet completed.

// interface todoListType {
//   task: string;
//   completed: boolean;
// }

// const printCompletedTodo = (data: todoListType[]) => {
//   let completedTasks: string[] = [];
//   for (let item of data) {
//     if (item.completed === true) {
//       completedTasks.push(item.task);
//     }
//   }
//   console.log(`Completed tasks: ${completedTasks.join(", ")}`);
// };

// let to_do_list_data: todoListType[] = [
//   {
//     task: "sleep at 6",
//     completed: true,
//   },
//   {
//     task: "Eat parathas",
//     completed: false,
//   },
//   {
//     task: "Wear shoes",
//     completed: false,
//   },
//   {
//     task: "Wear socks",
//     completed: true,
//   },
//   {
//     task: "make a todo-app",
//     completed: false,
//   },
//   {
//     task: "play piano",
//     completed: true,
//   },
// ];

// printCompletedTodo(to_do_list_data);

// //  33. Write a function that takes an array of integers and sorts them from smallest to largest.

// const sortNumbers = (arr: number[]): number[] => {
//   const len = arr.length;
//   for (let i = 0; i < len - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < len; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       // Swap elements if necessary
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }
//   return arr;
// };

// let original_array: number[] = [1, 4, 9, 3, 2, 3, 2, 34, 2, 9 + 3];

// console.log("original Array:", original_array);

// let sorted_array: number[] = sortNumbers(original_array);

// console.log("Sorted array in asscending order:", sorted_array);

// // 34. Develop a TypeScript program that logs every element of an array in reverse order without using the `.reverse()` method.

// const reverseElement = (array: number[]): void => {
//   for (let i: number = array.length - 1; i >= 0; i--) {
//     let reversedElement: number = array[i];
//     console.log(`elem: ${reversedElement}`);
//   }
// };

// let elements: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// console.log(
//   `Array: ${elements}\nElements of this array is now prining in reverse order.`
// );

// reverseElement(elements);

// // 35. Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result.

// type Operator = "+" | "-" | "*" | "/";

// const basicCalculator = (
//   operand1: number,
//   operand2: number,
//   operator: Operator
// ): number => {
//   let result: number = 0;
//   switch (operator) {
//     case "+":
//       result = operand1 + operand2;
//       break;
//     case "-":
//       result = operand1 - operand2;
//       break;
//     case "*":
//       result = operand1 * operand2;
//       break;
//     case "/":
//       if (operand2 === 0) {
//         throw new Error("Division by zero is not allowed.");
//       }
//       result = operand1 / operand2;
//       break;
//     default:
//       throw new Error(
//         "Invalid operator. Valid operators are '+', '-', '*', '/'"
//       );
//   }
//   return result;
// };

// let operand1: number = 2;
// let operand2: number = 6;
// let operator: Operator = "-";

// try {
//   const result = basicCalculator(operand1, operand2, operator);
//   console.log(
//     `The result of ${operand1} ${operator} ${operand2} is equal to ${result.toFixed(
//       2
//     )}`
//   );
// } catch (error: any) {
//   console.error(error.message);
// }
