let arr=[1,2,3];
arr.push(4);
console.log(arr);
function rem_last(){
    arr.pop();
    console.log("Remaining elements of array=["+arr+"]");
}
rem_last();
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
console.log("Sum is"+sum);
let arr1=[1,2,3];
let arr2=[3,4,5];
let array=arr1.concat(arr2);
console.log(array);
arr.reverse();
console.log(arr);
let arrays=['short','longer','longest'];
function longest(){
return arrays.sort(function(a,b){
return b.length-a.length;})[0];
}
console.log(longest(arrays));
let checkpalin=(string)=>{
return string===string.split('').reverse().join('');
};
console.log(checkpalin("racecar"));
function titlecase(str){
return str.toLowerCase().split('').map(function(word){
return(word.charAt(0).toUpperCase()+word.slice(1));
}).join('');
}
console.log(titlecase("hello world"));
function longer(str){
str=str.split("");
return str.sort((a,b)=>b.length-a.length)[0]}
console.log(longer(" find the longest word in this sentence"));
function capitalize(arr){
return arr.map((word)=>{
const capitalizefirst=word.charAt(0).toUpperCase();
const rest=word.slice(1).toLowerCase();
return capitalizefirst+rest;
});
}
const words=['hello','world'];
console.log(capitalize(words));

function reverseString(str){
const strRev=str.split('').reverse().join('');
console.log(strRev);
}
reverseString("hello");
let text="I Love JavaScript";
let re=text.replace("JavaScript","TextScript");
console.log(re);
function occ(){
let s="hello world";
let f='l';
let r=s.split(f).length+-1;
console.log(r);
}
occ();
const person={
name:'Alice'
}
person.age=25;
console.log(person);
delete person.age;
console.log(person);
const personn={
name:'Alice',
age:25
}
let output='age' in personn;
console.log(output);
let keys=Object.keys(personn);
console.log(keys);
let values=Object.values(personn);
console.log(values);
const objlength=Object.entries(personn).length;
console.log(objlength);
let person1={
name:'Alice'
}
let person2={
age:25
}
let personnew={
person1,
person2
}
console.log(personnew);
function countVowels(str) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  for(let char of str.toLowerCase()) {
    if(vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}

const inputString = "Hello world";
const vowelCount = countVowels(inputString);
console.log("Number of vowels in the string:", vowelCount);
const number = prompt("Enter a number: ");
if(number % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}
const array1 = ["Cecilie", "Lone"];
const array2 = ["Emil", "Tobias", "Linus"];
const children = array1.concat(array2);
function convertHoursToSeconds(hours) {
  return hours * 60 * 60;
}
let n = 5; 
 

function factorial(n) { 

    let ans = 1; 

     

    if(n === 0)

        return 1;

    for (let i = 2; i <= n; i++) 

        ans = ans * i; 

    return ans; 
}
 
console.log(factorial(n));

function Fib(n) {

  if (n <= 1) {

    return n;

  } else {

    return Fib(n - 1) + Fib(n - 2);

  }
}
 
let x = 9;

console.log(x + "th Fibonacci Number: " + Fib(x));
let text1 = "Hello world";
let result = text1.endsWith("world");
function largestElement(arr) {

    return arr.reduce((largest, current) =>

        (current > largest ? current : largest), arr[0]);
}
 
let num1 = [10, 15, 38, 20, 13];
console.log(largestElement(num1));