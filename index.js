// // 15
// function odd(arr) {
//     return arr.filter(number => number % 2 !== 0)
    
// }
// const array = [1,2,3,4,5,6,7,8,9,10]
// const result = odd(array)
// console.log(result)

// function findShortestWord(arr) {
//     return arr.reduce((shortest, current) => {
//         return current.length < shortest.length ? current : shortest;
//     });
// }

// const words = ["apple", "banana", "kiwi", "grape", "fig"];
// const shortestWord = findShortestWord(words);
// console.log(shortestWord);

// function countPositiveNumbers(array) {
//     let count = 0;
//     for (let number of array) {
//         if (number > 0) {
//             count++;
//         }
//     }
//     return count;
// }

// // მაგალითი მასივი
// const numbers = [-10, 2, 3, -1, 5, 0, -7, 8];
// const positiveCount = countPositiveNumbers(numbers);

// console.log(positiveCount);


// function splitNumberIntoDigits(number) {

//     const absoluteNumber = Math.abs(number);

//     const digitsArray = [];


//     absoluteNumber.toString().split('').forEach(digit => {
//         digitsArray.push(Number(digit));
//     });

//     return digitsArray;
// }

// const number = -12345;
// const digits = splitNumberIntoDigits(number);

// console.log(digits);

// function mochra(txt) {
//     return txt.slice(0,1)
    
// }
// let x = "nigga"
// const result = mochra(x)
// console.log(result)

// function WordCount(str) { 
//     return str.split(" ").length;
//   }
  
//   console.log(WordCount("hello world"));


// function gaertianeba(array1 , array2) {
//    return array2.concat(array1 , array2)
    
// }
// const fir = [1,2,3,4,5,6]
// const sec = [23,2343,5]
// const result = gaertianeba(fir, sec
// )
// console.log(result)

// function sortArray(arr) {
//     return arr.sort((a, b) => a - b);
//   }
// let numbers = [10, 3, 8, 15, 2, 7];  
//   let sortedNumbers = sortArray(numbers);
//   console.log(sortedNumbers);


// function ricxvebi(jami, jami1) {
//     if (jami > jami1) {
//         return reverse(jami , jami1)
        
//     }
//     let sum = 0
//     for (let i = jami; i<= jami1; i++) {
//         sum += i
        
//     }
//     return sum
    
// }
// let result = ricxvebi(3, 7);
// console.log(result);