console.log('hello!');
console.log('kumar');
// program to find the factorial of a number

// take input from the user
// const number = parseInt(prompt('Enter a positive integer: '));

// // checking if number is negative
// if (number < 0) {
//   console.log('Error! Factorial for negative number does not exist.');
// }

// // if number is 0
// else if (number === 0) {
//   console.log(`The factorial of ${number} is 1.`);
// }

// // if number is positive
// else {
//   let fact = 1;
//   for (i = 1; i <= number; i++) {
//     fact *= i;
//   }
//   console.log(`The factorial of ${number} is ${fact}.`);
// }

// program to check if a number is prime or not

// take input from the user
// const number = parseInt(prompt('Enter a positive number: '));
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//   console.log('1 is neither prime nor composite number.');
// }

// // check if number is greater than 1
// else if (number > 1) {
//   // looping through 2 to number-1
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(`${number} is a prime number`);
//   } else {
//     console.log(`${number} is a not prime number`);
//   }
// }

// check if number is less than 1
// else {
//   console.log('The number is not a prime number.');
// }

// program to check an Armstrong number of three digits

// let sum = 0;
// const number = prompt('Enter a three-digit positive integer: ');

// // create a temporary variable
// let temp = number;
// while (temp > 0) {
//     // finding the one's digit
//     let remainder = temp % 10;

//     sum += remainder * remainder * remainder;

//     // removing last digit from the number
//     temp = parseInt(temp / 10); // convert float into integer
// }
// // check the condition
// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }

// program to generate a multiplication table

// take input from the user
// const number = parseInt(prompt('Enter an integer: '));

// //creating a multiplication table
// for(let i = 1; i <= 10; i++) {

//     // multiply i with number
//     const result = i * number;

//     // display the result
//     console.log(`${number} * ${i} = ${result}`);
// }

// program to generate range of numbers and characters
// function* iterate(a, b) {
//   for (let i = a; i <= b; i += 1) {
//     yield i
//   }
// }

// function range(a, b) {
//     if(typeof a === 'string') {
//         let result = [...iterate(a.charCodeAt(), b.charCodeAt())].map(n => String.fromCharCode(n));
//         console.log(result);
//     }
//     else {
//         let result = [...iterate(a, b)];
//         console.log(result);
//     }
// }

// range(1, 5);
// range('A', 'G');

// program to generate random strings

// declare all characters
// const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// function generateString(length) {
//     let result = ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }

//     return result;
// }

// console.log(generateString(5));

// program to check if the string is palindrome or not

// function checkPalindrome(str) {

//   // find the length of a string
//   const len = string.length;

//   // loop through half of the string
//   for (let i = 0; i < len / 2; i++) {

//       // check if first and last string are same
//       if (string[i] !== string[len - 1 - i]) {
//           return 'It is not a palindrome';
//       }
//   }
//   return 'It is a palindrome';
// }

// // take input
// const string = prompt('Enter a string: ');

// // call the function
// const value = checkPalindrome(string);

// console.log(value);

// program to check if a string contains a substring

// take input
// const str = prompt('Enter a string:');
// const checkString = prompt('Enter a string that you want to check:');

// // check if string contains a substring
// if(str.includes(checkString)) {
//     console.log(`The string contains ${checkString}`);
// } else {
//     console.log(`The string does not contain ${checkString}`);
// }

// program to check if an array contains a specified value

// const array = ['you', 'will', 'learn', 'javascript'];

// const hasValue = array.includes('javascript');

// // check the condition
// if (hasValue) {
//   console.log('Array contains a value.');
// } else {
//   console.log('Array does not contain a value.');
// }

// program using switch statement
// let a = 2;

// switch (a) {

//     case 1:
//         a = 'one';
//         break;
//     case 2:
//         a = 'two';
//         break;
//     default:
//         a = 'not found';
//         break;
// }
// console.log(`The value is ${a}`);


// program for a simple calculator
// let result;

// // take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {
//     case '+':
//         result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;
//     case '-':
//         result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;
//     case '*':
//         result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;
//     case '/':
//         result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;
// }


// for (let i = 1; i < 500; i++) {
//   console.log(i);
// }





































































































for (let i = 1; i < 5; i++) {
  console.log(i);
}









































































for (let i = 1; i < 5; i++) {
  console.log(i);
}





























































for (let i = 1; i < 5; i++) {
  console.log(i);
}
















































for (let i = 1; i < 5; i++) {
  console.log(i);
}

































for (let i = 1; i < 5; i++) {
  console.log(i);
}


















































































for (let i = 1; i < 5; i++) {
  console.log(i);
}