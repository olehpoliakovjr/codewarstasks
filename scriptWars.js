let i = 0;

function statementCycle(x){
    for (let j = 0; j < x; j++){
        if (x >= 5){
            console.log(i++);
        } else {
            console.log(i--);
        }
    }

}
statementCycle(4);


function basicOp(operation, value1, value2){
    if(typeof(operation) == "string" && typeof(value1) == "number" && typeof(value2) == "number"){
        if (operation === "+"){
            return value1 + value2;
        } else if (operation === "-") {
            return value1 - value2;
        } else if (operation === "*"){
            return value1 * value2;
        } else if (operation === "/"){
            if (value2 == 0){
                return 0;
            } else {
                return value1 / value2;
            }
        }
    } else {
        return `Enter the correct arguments`
    }
}
basicOp("/",5,1)



function simpleMultiplication(number){
    if (number % 2 == 0) {
        return number * 8;
    } else if(number % 2 == 1){
        console.log(number * 9)
        return number * 9;
    }
}
simpleMultiplication(5)


var countSheep = function (num){
    let str = "";
    for (let i = 1; i < num; i++){
        str += `${i} sheep...`
    }
    return str;
}
countSheep(5);


//
function evenOrOdd(number) {
    if (number%2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
evenOrOdd(5);

//

function check(a, x) {
    if (a.includes(x)){
        return true;
    } else if (!a.includes(x)){
        return false;
    } else {
        return "";
    }
}
check([1,5,7,9,0,1],1);


function grow(x){
    if (x !== null){
        return  x.reduce((a, b) => a * b);
    } else {
        return "";
    }
}
grow([1,3,4,5])

//

function findNeedle(haystack) {
    return `"found the needle at position ${haystack.indexOf("needle")}`
}

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with 1
// Return the resulting string.
// Note: input will never be an empty string

function fakeBin(x){
    let result = '';
    for(let i = 0; i < x.length; i++){
        if (x[i] < 5){
            result += 0;
        } else {
            result +=1
        }
    }
    return result;
}
fakeBin(511);

//Given an array of integers as strings and numbers,return the sum of the array values as if all were numbers
// Return your answer as a number.

function sumMix(x){
    let result = 0;
    for (let n of x) {
        result += parseInt(n);
    }
    return result;
}
sumMix([1,5,'4','2']);


//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function(l , w) {
    if (l == w){
        return l * w;
    } else if(l !== w){
        return ((l * 2)+(w * 2));
    }
};

// Complete the solution so that it reverses the string passed into it.

function solution(str){

    return str.split('').reverse().join("")
}
solution("world");

// Given a random non-negative number, you have to return the digits of this number
// within an array in reverse order.

function digitize(n) {
    let result;
    if (n > 0) {
        result = Array.from(String(n)).map(i => Number(i)).reverse();
        return result;
    } else {
        result = [0];
        return result;
    }
}

digitize(35213); // 1 3 2 5 3

//It's pretty straightforward. Your goal is to create a function that removes the first and last
// characters of a string. You're given one parameter, the original string.
// You don't have to worry with strings with less than two characters.

function removeChar(str){
    return str.slice(1, -1)
}
removeChar("hello");

// Your task is to make a function that can take any non-negative integer as an argument
// and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
    return Number(String(n).split("").sort((a,b) => b - a).join(''));
}
descendingOrder(7431228712);

// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    let hour = 3600000;
    let min = 60000;
    let sec = 1000;
    return h * hour + m * min + s * sec
}
past(1,2,3);

//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
//0.5 water - 1 hour
// 1 water - 3hour
function litres(time) {
    return Math.floor(time * 0.5);
}
litres(3);


function otherAngle(a, b) {
    return 180 - (a + b);
}
otherAngle(56,20);

//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
//n -number s-string
function repeatStr (n, s) {
    return s.repeat(n)
}
repeatStr(2,"hello");


function maps(x){
    if (x !== null){
        return x.map((i) => i * 2)
    } else {
        return "";
    }
}
maps([120,120]);


// Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sumArray (numbers) {
    "use strict"
    if (numbers.length > 0){
        return numbers.reduce((a,b) => a + b);
    } else {
        return 0;
    }
}
sumArray([1,5,-10])

// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

function highAndLow(numbers){
    numbers = numbers.split(' ')
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
highAndLow("3 6 9 1 10 45 31 22 67");

//

function friend(friends){
    let arr = [];
    for (let i = 0; i < friends.length; i++){
        if (friends[i].length === 4){
            arr.push(friends[i]);
        }
    }
    return arr;

}
friend(["mark","oleh","andrii",1,"sasha","alex"]);

// delete all vowel letters

function disemvowel(str) {
    return str.replace(/[aeiouy]/gi, '')
}
disemvowel("This website is for losers LOL!");

//

function booleanToString(b){
    return String(b);
}

//Given an array of integers your solution should find the smallest integer.
// Given [34, 15, 88, 2] your solution will return 2
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

function findSmallestInt(args) {
    return Math.min(...args);
}
findSmallestInt([78,56,232,12,8,-32]);

//Implement a function that accepts 3 integer values a, b, c.
// The function should return true if a triangle can be built with the sides of given length and false in any other case.

function isTriangle(a,b,c){
    return a + b > c && a + c > b && b + c > a;
}
isTriangle(1,2,3);

//Complete the function that accepts a string parameter, and reverses each word in the string.
// All spaces in the string should be retained.

function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ")
}
reverseWords("This is an example!")

//

function smash (words) {
    return words.join().replace(/[,]/gi, ' ')
}
smash(["hello", "world"]);

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".

function DNAStrand(dna) {

    let letters = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    };

    let arr = [];
    for (let i = 0; i < dna.length; i++) {
        arr[i] = letters[dna[i]];
    }

    return arr.join('');
}
DNAStrand("GTAT");

// 3 products for 2 + 1

function mango(quantity, price){
    let qty = quantity - Math.floor(quantity / 2);
    return qty * price;
}
console.log(mango(7,3))

//Given n, take the sum of the digits of n. If that value has more than one digit,
// continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digitalRoott(n) {
    let result;
    result = n;
    let array = Array.from(n.toString(), Number)
    for (let i = 0; i < array.length; i++){
        if (result.length > 2){
            for (let j = 0; j < result.length; j++){
                result = array.reduce((a,b) => a + b)
            }
        } else {
            return  result = array.reduce((a,b) => a + b)
        }
    }
    result = array.reduce((a,b) => a + b)
    return result
}
digitalRoott(83990)
//

function digitalRoot(n) {
    if (n < 10) return n;
    return digitalRoot(
        n.toString().split('').reduce((acc, d) => {
            return acc + +d;
        },0));
}
digitalRoot(5769)

// Write a function which calculates the average of the numbers in a given list.

function findAverage(array) {
    if (array.length !== 0){
        return array.reduce((a,b) => a + b) / array.length;
    } else {
        return 0
    }
}
findAverage([1,2,3,4])

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
function solutions(str, ending){
    return str.endsWith(ending);
}
console.log(solutions('abc', 'd'))

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
function getGrade (s1, s2, s3) {
    let average = Math.ceil((s1 + s2 + s3) / 3);
    console.log(average)
    if (average >= 90){
        return 'A'
    } else if (average >= 80 && average < 90){
        return "B"
    } else if (average >= 70 && average < 80){
        return "C"
    } else if (average >= 60 && average < 70){
        return "D"
    } else if((average >= 0 && average < 60)){
        return "F"
    }
}
getGrade(89,89,90);

//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
function greet (name, owner) {
    if (arguments[0] === arguments[1]){
        return 'Hello boss'
    } else if (owner){
        return 'Hello guest'
    }
}
greet('Daniel', 'Daniel')

//

function areYouPlayingBanjo(name) {
    if (name.charAt(0) === "R" || "r"){
        return name + " plays banjo"
    } else {
        return name + " does not play banjo"
    }
}

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
    if (Math.sign(num) == 1){
        return -num;
    } else if (Math.sign(num) !== 1){
        return num;
    }
}
makeNegative(13);
//!!
function betterThanAverage(classPoints, yourPoints){
    let result;
    result = classPoints.reduce((a,b) => a + b,0) / classPoints.length;
    if (yourPoints >= result){
        result = true;
    } else {
        result = false;
    }
    return result;
}
betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9);

//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
//No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers){
    let array
    array = numbers.sort((a,b) => a - b).slice(0,2).reduce((a,b) => a + b);
    return array;
}
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))

//Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
    if (array.reduce((a,b) => a + b,0) % 2 === 0){
        return `even`
    } else if (array.reduce((a,b) => a + b) % 2 !== 0){
        return `odd`
    } else {
        return [0]
    }
}
oddOrEven([]);

//   debug it

function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++){
        z.push(x * i)
    }
    return z;
}
console.log(countBy(2,5))

//Your task is to sort a given string. Each word in the string will contain a single number.
// This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string.
// The words in the input String will only contain valid consecutive numbers.

let regEx = /love/gmi;
console.log(regEx)

function towerBuilder(nFloors) {
    let arr = [];
    let symbol = "*"
}
towerBuilder(2)

let num1 //= +prompt(`Введите первое число`);
let num2 //= +prompt(`Введите второе число`);
let signPrompt// = prompt(`Введите знак операции +,-,*,/`);
function calcResult(number1,number2,sign){
    let result;
    if (typeof number1 == "number" && typeof number2 == "number"){
        if (sign == "+"){
            result = number1 + number2;
        } else if (sign == "-"){
            result = number1 - number2;
        } else if (sign == "*"){
            result = number1 * number2;
        } else if (sign == "/"){
            if (number2 != 0){
                result = number1 / number2
            } else {
                return console.log(`На 0 делить нельзя`);
            }
        } else {
            return "----"
        }
        return result;
    } else {
        return console.log(`Аргументы не числа`)
    }

}
calcResult(num1,num2,signPrompt)

//Complete the solution so that the function will break up camel casing, using a space between words.
function solutionn(string){
    let result = "";
    let newString = string.split("");
    newString.forEach(function (letter){
        if (letter == letter.toUpperCase()){
            result += " "+letter
        } else {
            result += letter
        }
    })
}
solutionn('camelCasing')

//Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string, the longest possible,
// containing distinct letters - each taken only once - coming from s1 or s2.

function findShort(s){
    let arrayOfWords = s.split(" ")
    let word = arrayOfWords.map(t => ({str: t, size: t.length})).sort((a,b)=>(a.size-b.size))[0].str
    return word.length
}
findShort("bitcoin take over the world maybe who knows perhaps")

//Build a function that returns an array of integers from n to 1 where n>0.
//
// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let array = [];
    for (let i = 1; i <= n; i++){
        array.push(i)
    }
    return array.reverse()
};
reverseSeq(5)

//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

const quarterOf = (month) => {
    if (month >= 1 && month <= 3){
        return 1
    } else if (month >= 4 && month <= 6){
        return 2
    } else if (month >= 7 && month <= 9){
        return 3
    } else if (month >= 10 && month <= 12){
        return 4
    }
}
quarterOf(5)

// You just have to check if your number of building blocks is a perfect square.

const isSquare = function(n){
    let result = Math.sqrt(n);
    return (result % 1 === 0)
}
console.log(isSquare(4))

// Take an array and remove every second element from the array.
// Always keep the first element and start removing with the next element.
// удалить каждий второй єлемент 
function removeEveryOther(arr){
    if (arr.length >= 3){
    } else {
        return arr;
    }
}
removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])

function accum(s) {
    let array = s.split("").map((c,b) => (c.toUpperCase() + c.toLowerCase().repeat(b)))
    return array
}
console.log(accum("abcd"))

//

function boolToWord( bool ){
    if (bool == true){
        return `Yes`
    } else {
        return `No`
    }
}

//Count the number of divisors of a positive integer n.  Random tests go up to n = 500000.

function getDivisorsCnt(n){
    let out = 0;
    for (let i = 0; i <= n; i++){
        if ( n % i === 0 ){
            out++
        }
    }
    return out
}
console.log(getDivisorsCnt(4))

//

function removeSmallest(numbers) {
    return numbers.sort((a,b) => a - b).slice(1)
}
console.log(removeSmallest([5, 3, 2, 1, 4]))

//

function doubleChar(str) {
    let result;
    let eachSymbol = str.split("").map(c => c + c).join("")
    return eachSymbol
}
console.log(doubleChar("hello"))

function noSpace(x){
    return x.replace(/ /g,'');
}
noSpace('8 j 8   mBliB8g  imjB8B8  jl  B');

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

function correct(string) {
    let arr = []
    let res = string.split("")
        for (let later of res){
            arr += later.replace(0,"O").replace(1,"I").replace(5,"S")
        }
    return arr;
}
correct("51NGAP0RE")

// Implement the function which takes an array containing the names of people that like an item.
// It must return the display text as shown in the examples:

function likes(names) {
        if (names.length == 0){
            return `no one likes this`
        } else if(names.length == 1){
            return `${names[0]} likes this`
        } else if(names.length == 2){
            return `${names[0]} and ${names[1]} like this`
        } else if(names.length == 3){
            return `${names[0]}, ${names[1]} and ${names[2]} like this`
        } else if (names.length >= 4){
            return `${names[0]}, ${names[1]} and ${[...names].length - 2} others like this`
        }
}
likes(['Max', 'Jacob', 'Mark', 'Max',"Artem"]);

//Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total.
// Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

function rentalCarCost(d) {
    let rentPerDay = 40
    if (d >= 7){
        return rentPerDay * d - 50;
    }
    else if (d >= 3){
        return rentPerDay * d - 20;
    } else {
        return rentPerDay * d
    }
}
rentalCarCost(7)

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
   return  arr.sort((a,b) => b - a)
}
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))

function createNimber(){
    console.log(`values`)
}
setTimeout(createNimber,1000)

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    return str.replace(/[aeiou]/gi,"").length - 1;
}
console.log(getCount("abracadabra"))

// Write a program that returns the girl's age (0-9) as an integer.

function getAge(inputString){
    return Number(inputString.charAt(0));
}
console.log(getAge("4 years old"))

// Write a program that finds the summation of every number from 1 to num.
//  The number will always be a positive integer greater than 0.

var summation = function (num) {
    let result = 0;
    for(let i = 0; i <= num; i++){
        result += i;
    }
    return result;
}
console.log(summation(8))

//

function paperwork(n, m) {
    if(n < 0 || m < 0){
        return 0
    } else {
        return n * m
    }
}
paperwork(2,3)

//

function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10){
        return 100;
    } else if (exam > 75 && projects >= 5){
        return 90;
    } else if (exam > 50 && projects >= 2){
        return 75;
    } else {
        return 0;
    }
}
console.log(finalGrade(85, 5))

//

function lovefunc(flower1, flower2){
    if((flower1 + flower2) % 2 === 0){
        return false
    } else {
        return true
    }
}

//

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if(distanceToPump <= mpg * fuelLeft) return true
    else return false
};


//Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.

function strCount(str, letter){  
    let times = 0;
    let string = str.split("")
        for(let le of string){
            if(le.includes(letter)){
                times += 1
            }
        }
        return times;
}
console.log(strCount("Hello","l"))

// Complete the square sum function 
// so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    let value = 0;
        for(let number of numbers){
            value += Math.pow(number,2)
        }
    return value;
}
console.log(squareSum([1,2]))

// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr){
    let array;
}
console.log(minMax([2334454,5,3,1,232,42,13]))













