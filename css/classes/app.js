// conditional satatements 
// let num = 1;
// if (num%10 == 0){
//     console.log("good");
// }
// else {
// console.log("bad");
// }

// let month = 5;
// switch(month){
//     case 1:
//         console.log("january, february, march");
//         break;
//         case 2:
//         console.log("april, may, june");
//         break;
//         case 3:
//         console.log("july, august, september");
//         break;
//         case 4:
//         console.log("october, november, december");
//         break;
//         default:
//             console.log("wrong month");
// }


// let str = "Aamrapali";
// if((str[0] === 'A'  ||  str[0] ==='a') && (str.length > 5)){
//     console.log("golden string");
// }
// else{
//     console.log("not golden string");
// }

// let a = 3;
// let b = 8;
// let c = 7;

// if ((a>b) &&(a>c)){
//     console.log("a is bigger number");
// }
// else if (( a<b) &&(b>c)){
//    console.log("b is bigger number");
// }
// else{
//     console.log("c is bigger number");
// }


// let num1 = 35;
// let num2 = 47852;

// if (num1%10 === num2%10){
//     console.log("numbers have the same last digit which is ",num1%10);
// }
// else {
//      console.log("numbers dont't have the same last digit");
//     }

// let arr = [7, 9, 0, 5,-8, -2];
// let n =4 ;

// let ans = arr.slice(0, n);
// console.log(ans);

// let arr = [7, 9, 0, -2];
// let n =3;

// let ans = arr.slice(arr.length-n);
// console.log(ans);

// let str = prompt("please enter a string");

// if(str.length == 0) {
//     console.log("string is empty");
// }
// else{
//     console.log("string is not empty");
// }

// let str = "ApNaCoLlege";
// let idx = 2;

// if (str[idx] == str[idx] .toLowerCase()) {
//     console.log("character is lowercase");
// }
// else{
//     console.log("character is not lowercase"); 
// }

// let str = prompt("please enter a string");
// console.log(`original string = ${str}`);
// console.log(`string without spaces = ${str.trim () }`);

// let arr = ["hello", 'a', 23, 64, 99, -6];
// let item = 64;

// if (arr.indexOf (item)  != -1){
//     console.log("element exists in array");
// }
// else{
//     console.log("element doesn't exists in array");
// }

// for (let i=1; i<=10; i++){
//     console.log(i);
// }

// for(i=5; i>=1; i--){
//     console.log(i);
// }
// for ( let i=0; i<=15; i=i+2){
//     console.log(i);
// }
// console.log("backward");

// for(let i=16; i>=0; i=i-2){
//     console.log(i);
// }

// let n = prompt("write your number");
// n = parseInt(n);

// for ( let i=n; i<=n*10; i=i+n){
//         console.log(i);
//      }

// 

// let i=0;
// while(i<=20){
//         console.log(i);
//         i++;
// }

// const favMovie = "avatar";

// let guess = prompt("guess my favorite movie");

// while (guess != favMovie) {
        
//         if(guess == "quit") {
//                 console.log("you quit");
//                 break;
//         }
//         guess = prompt("wrong guess. please try again");
// }

// if(guess == favMovie) {
//         console.log("congrats!");
// } 

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for (let i=0; i<=fruits.length; i++) {
//         console.log(i,fruits[i]);
// }
// for (let i=fruits.length-1; i>=0; i--) {
//         console.log(i,fruits[i]); 
// }

// let heroes = [ ["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"] ];

//   for(let i=0; i<heroes.length; i++) {
//         console.log(`list#${i}`);
        
//         for(let j=0; j<heroes[i].length; j++) {
//                 console.log(heroes[i] [j]);
//         }
//   }

// let student = [ ["aman", 95], ["shradha", 94.4], ["karan",100]];

// for(let i=0; i<student.length; i++){
//         console.log(`info of student #${i}`);

//         for(let j=0; j<student[i].length; j++){
//         console.log(student[i] [j]);
//         }
// }

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for(fruit of fruits) {
//         console.log(fruit);
// }

// for(char of "apnacollege") {
//         console.log(char);
// }

// let heroes = [ ["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"] ];

//   for(list of heroes){
//         for(hero of list) {
//                 console.log(hero);
//         }
// }


// let todo = [];

// let req = prompt("please enter your request");

// while(true) {
//         if(req == "quit")  {
  
//                 console.log("quitting app");
//                 break;
//         }

//         if(req == "list") {
//                 console.log("--------------------");
//                 for(let i=0; i<todo.length; i++) {
//                         console.log(i, todo[i]);
//                 }
//                 console.log("---------------------");
//         } else if(req == "add") {
//                 let task = prompt("please enter the task you want to add");
//                 todo.push(task);
//                 console.log("task added")
//         }
//         else if(req == "delete") {
//                 let idx = prompt("please enter thetask index");
//                 todo.splice(idx, 1);
//                 console.log("task deleted");
//         }
//         else {
//                 console.log("wrong request");
//         }
//         req = prompt("please enter your request");
// }

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for (let i=0; i<arr.length; i++) {
//   if(arr[i] == num) {
//         arr.splice (i, 1);
//   }
// }
// console.log(arr)

// let number = 287152;
// let count = 0;
// let copy = number;

// while (copy>0) {
// count++;  
// copy = Math.floor(copy/10);
// }
// console.log(count);


// let number = 28715142;
// let sum = 0;
// let copy = number;

// while (copy>0) {
// digit = copy % 10;
// sum += digit; 
// copy = Math.floor(copy/10);
// }
// console.log(sum);


// let n = 8;
// let factorial = 1;

// for(let i=1; i<=n; i++)  {
//   factorial *= i;
// }
// console.log(`factorial of ${n} is ${factorial}`);


let arr = [2, 5, 10, 4, 2, 11, 1, 9];
let largest = 0;

for(let i=0; i<=arr.length; i++) {
  if(largest < arr[i]) {
    largest = arr[i];

  }
}
console.log(largest);