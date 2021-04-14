/* 
1. Define a function maxOfTwoNumbers  that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

// maxOfTwoNumbers = (a,b) => {
// 	if (a>b) {
//         console.log(a)
//     } else if (b>a) {
//         console.log(b)
//     }else{
//         console.log('both inputs are equal')
//     }

// };

// maxOfThree();

/*
2. Define a function  maxOfThree  that takes three numbers as arguments and returns the largest of them.
*/
// maxOfThree = (a, b, c) => {
// 	if (c > a && c > b) {
// 		console.log(c);
// 	} else if (a > b && a > c) {
// 		console.log(a);
// 	} else if (b > a && b > c) {
// 		console.log(b);
// 	} else {
// 		console.log('try again');
// 	}
// };

/*
3. Write a function  isCharacterAVowel  that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
// isCharacterAVowel = () => {
// 	let letter = 't';
// 	if (
// 		letter === 'a' ||
// 		letter === 'e' ||
// 		letter === 'i' ||
// 		letter === 'o' ||
// 		letter === 'u'
// 	) {
// 		console.log(letter + ' is a vowel');
// 	} else {
// 		console.log(letter + ' is not a vowel');
// 	}
//     return letter
// };
// console.log(isCharacterAVowel());
/*
4. Define a function  sumArray  and a function  multiplyArray  that sums and multiplies (respectively) all the numbers in an array of numbers. For example,  sumArray([1,2,3,4])  should return 10, and  multiplyArray([1,2,3,4])  should return 24.
*/

// sumArray = () => {
// 	// ADD YOUR CODE HERE
// };

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/
// function numberOfArguments() {
// 	return arguments.length;
// }
// console.log(numberOfArguments());
/*
6. Define a function  reverseString  that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/
// string = 'dog';
// reverseString = () => {
// 	return string.split('').reverse().join('');
// };

/*
7. Write a function  findLongestWord  that takes an array of words and returns the length of the longest one.
*/

 let array = ['this', 'is', 'my', 'array'];
 let temp;
 function findLongestWord () {
     for(i = 1; i < array.length- 1; i++)
     if(array[array.length-1].length < array[i].length){
         temp= array[i]
array[i] = array[array.length-1]
array[array.length - 1]= temp
     }

    return  array[array.length - 1] + ' is ' +  array[array.length - 1].length + ' characters long';
}

/*
8. Write a function  filterLongWords  that takes an array of words and a number  i  and returns the array of words that are longer than i characters long.
*/

let array2 = ['hot', 'diggity', 'dog'];
let num = 4;
let newArray= [];
function filterLongWords(array2){
	for (let index = 0; index < array2.length; index++) {
		if (array2[index].length > num) {
			newArray.push(array2[index]);
		}
	}
	return newArray;
};
