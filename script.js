// console.log("Hi! my name is Ranu Gaurav")

// let a  = 5;
// let b = 10;
// console.log('the sum is',a+b)

// let n = prompt("Enter the number");
// if(n%2==0){
//     console.log("it's an even number")
// } 
// else{
//     console.log("it's an odd number")
// }

// let a = prompt("Enter the first number: ")
// let b = prompt("Enter the second number: ")
// if(a >b){
//     console.log(a,"is greater than",b)
// }
// else{
//     console.log(b,"is greater than",a)
// }
    
// let a = 5;
// let b = 6;
// let temp = a;
// a = b;
// b = temp;
// console.log('a =',a, 'b =', b)

// for(i=1;i<=10;i++){
//     console.log(i)
// }

// const str = "Tweksbury";
// const reversedstr = str.split('').reverse().join('') ;
// console.log(reversedstr);

// const str = "philosophy";
// let c  = 1;
// for(let i=1; i<str.length; i++){
//     c++
// }
// console.log(c)

// const str = "philosophy";
// let c = str.length;
// console.log("number of characters is",c);

// let arr = [1, 4, 6, 7 ,8 , 3, 12, 5];
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }

// function greet(name) {
//     console.log('Hello', name)
// }
// greet("ranu")
// greet("gaurav")

// ek var banao jisme ek value hogi check kro value 10 se bdi h to 1 print kro otherwise 2
// var a  = 5;
// if(typeof a == "number"){
//     if(a>10){
//         console.log(1)
//     }
//     else{
//         console.log(2)
//     }
// }
// else{
//     console.log("value is not a number")
// }

// var a = prompt("Enter the name")
// console.log(a)

// prompt se user se age maango aur uska type check kro

// var a = prompt("Enter the age");
// console.log(typeof a)

// let a = 5;
// if(typeof a == "string"){
//     console.log("string")
// }
// else if(typeof a == "number"){
//     console.log("number")
// }
// else{
//     console.log("neither string nor number")
// }

// let a = Number(prompt("Enter a number"));
// console.log(a)
// let b = a + 2;

// console.log(b)

// let r = prompt("Enter a number");

// let a = Number(r);
// if (isNaN(a) == "number"){
//     console.log("it's  a number")
// }
// else{
//     console.error('its not a number')
// }

1.
//  let a = prompt("Enter something here")
//  if (isNaN(a) == true){
//      console.log("you entered a string")
//   }
//  else{
//      console.log("invalid input")
//  }

2.
// let a = Number(prompt("Enter a number"))
// if (a == Number(a)){
//     console.log("you entered a number", a)
// }
// else{
//     console.log("Enter a valid number")
// }

3.
// let a = prompt("Enter a number")
// if(a%2 == 0){
//     console.log("it's an even numebr")
// }
// else if(isNaN(a) == true){
//     console.log("Enter a valid input")
// }
// else{
//     console.log("It's an odd number")
// }

4.
// let a = prompt("Enter something")
// if (a == ""){
//     console.log("You didn't enter anything")
// }
// else{
//     console.log("Thakyou for the input")
// }

5.
// let a = prompt("Enter a number")
// if (a == 'true' || a == 'false'){
//     console.log("you entered a boolean string")
// }
// else{
//     console.log("not a boolean string")
// }

6.
// let a = prompt("Enter your age")
// if(a<18){
//     console.log("You are underage")
// }
// else if(isNaN(a) == true){
//     console.log("Enter a valid age")
// }
// else{
//     console.log("You are an adult")
    
// }

7.
// let a = prompt("Enter a number");
// if(a>10 && a<100){
//     console.log("The number is in range");
// }
// else if(isNaN(a) == true){
//     console.log("Enter a valid number");
// }

// else{
//     console.log("The number is out of range");
// }

8.
// let password = "Ranu12345";
// let inp = prompt("Enter your password");
// if(password == inp){
//     console.log("Access granted");
// }
// else{
//     console.log("Access denied");
// }

9.
// let a = prompt("Enter a word");
// if(a.length>5){
//     console.log("The word is long");
// }
// else if(a.length<=5){
//     console.log("the word is short")
// }
// else
// {
//     console.log("The word is empty")
// }

// let a = Number(prompt("Enter a number"));
// if(typeof a === "number"){
//     console.log(a+2);
// }
// else{
//     console.log(a)
// }

// let a = Number(prompt("Enter a number"));
// let b = Number(prompt("Enter second number"));
// if(isNaN(a) || isNaN(b)){
//         console.log('Enter a valid input')
// }
// else{
//     console.log("sum =",a+b);
// }
 
// var a = [1,2,3,4,5];
// var b = [...a];
// console.log(b);

1.
// let a  = prompt("Enter a string")
// if(isNaN(a) == true){
//     console.log("you entered a string");
// }
// else{
//     console.log("invalid input");
// }    

2.
// let a = Number(prompt("Enter a number"));
// if(isNaN(a) == true){
//     console.log("Enter a valid input");
// }
// else{
//     console.log("your number is ", a);
// }

3.
// let a = prompt("Enter a number");
// if(a%2==0){
//     console.log("even number");
// }
// else if(isNaN(a)  == true){
//     console.log("invalid input");
// }
// else{
//     console.log("odd number");
// }

// let a = prompt("Enter a number");
// for(let i = 1; i<31; i++){
//     console.log(a)
// } 

// let a  = Number(prompt("Enter a value"))
// if(a == null){
//     console.log("cancelled");
// }
// else if(a == ""){
//     console.log("you entered an empty string");
// }
// else{
//     for(let i = 1; i<a+1;i++ ){
//         console.log("ranu")
//     }
// }

// let a = prompt("Enter something");
// if (a == "") {
//     console.log("you did not enter something");
// }
// else if(a === null){
//     console.log("cancelled");
// }
// else{
//     console.log("Thankyou for your input");
// }

5.
// let a = prompt("Enter something");
// if (a == "true" || a == "false"){
//     console.log("you entered a boolean value");
// }
// else{
//     console.log("you entered something else");
// }

// for (let i = 23; i<46; i+=4){
//     if (i===30||i === 32 ) {}
//     else{
//     console.log(i)
//  }
// }

// let a = Number(prompt("Enter something"));
// if (a === null) {
//     console.log("cancelled");
// }
// else{
//     if(){

//     }
// else if(isNaN(a)==true){
//     console.log("error")
// }
// else{
// for(let i = 1; i<=a; i++){
//     console.log(a)
// }
// }
// }


// array push pop shift 
// ek loop chalao 5 baar hr baar prompt maange aur jo bhi prompt me de wo array me save ho jaaye , last me pura array console
// me print ho jaaye

// let arr = [];
// for(let i = 1; i<=5; i++){
//     let a = Number(prompt("Enter something"));
//     arr.push(a);
// }
// console.log(arr);

// let arr = [];
// for(let i = 1; i<=8 ; i++){
//     let a = Number(prompt("Enter something"));
//     arr.push(a);
// }
// console.log(arr);

// let sum = 0;
// for(let i = 1; i<=8; i++){
//     let a = Number(prompt("Enter something"));
//     sum = sum + a;
//     console.log("till now: ", a)
// }
// console.log("total sum =" ,sum)

// let sum = 0;
// for(let i = 1; i<=8; i++){
//     let a = Number(prompt("Enter something"));
    
//     if(isNaN(a)){
//         console.log("till now: ", sum)
        
//     }
//     else{
        
//         sum = sum + a;
//         console.log("total sum =" ,sum)
//     }
// }

// let sum = 0;
// for(let i = 1; i<=8; i++){
//     let a = Number(prompt("Enter something"));
    
//     if(a == null){
//         console.log("till now: ",sum)
//     }   
//     else if(isNaN(a)){
//         console.log("till now: ", sum)
//     }
//     else if(a.trim = ""){
//         console.log("till now: ", sum)
//     }
//     else{
        
//         sum = sum + a;
//         console.log("total sum =" ,sum)
//     }
// }

1. // Prompt the user 5 times and store each input in an array. At the end, print the entire array.
// let arr = [];
// for(let i = 1; i<=5; i++){
//     let a = prompt("Enter something");
//     arr.push(a);
// }
// console.log(arr)
    
2. // Prompt the user 7 times. Count and print how many inputs were valid numbers.
// count = 0
// for(let i = 1; i <= 7; i++){
//     let a = Number(prompt("Enter something"));
//     if(isNaN(a)){
//         console.log("till now: ", (count-1))
//     }
//     else if(!isNaN(a)){
//         console.log("valid number entered: ", count++)
//     }
// }


3. // Prompt the user 6 times. Add and print the total only if the number is even. Ignore spaces, blanks, and cancelled inputs.
// let sum = 0;
// for(let i = 1; i <=6; i++){
//     let a = prompt("Enter the number");
//     if(a == null || a.trim() == "" || isNaN(a)){
//         console.log("till now: ", sum)
// }
// else if(a%2==0){
//     sum = sum + Number(a);
//     console.log("total sum =", sum)
// }
// }

4. // Take 5 prompts, store them in an array, and print the array in reverse order.
// let arr = [];
// for(let i = 1; i<=5; i++){
//     let a= prompt("Enter something")
//     arr.push(a);
// }
// arr.reverse();
// console.log(arr);

5. // Prompt the user 4 times for any word. Print the word that has the highest number of characters.
// let arr = [];
// for(let i = 1; i<=4; i++){
//     let a  = prompt("Enter any word here");
//     arr.push(a);
// }
// console.log(arr)
// let longest = "";
// for(let word of arr){
//     if(word.length>longest.length){
//         longest = word;
//     }
// }
// console.log("longest string is: ", longest);

6. // Prompt the user 6 times for anything. Store all valid numbers in a new array and print just that array
// let arr = [];
// for(i=1;i<=6; i++){
//     let a = prompt("Enter anything here")
//     if(!isNaN(a)){
//     arr.push(a);
//     }
// }
// console.log(arr)

7. // Prompt the user 5 times for numbers. Ignore blank or cancelled inputs. Print the total and the average of valid numbers.
// let sum = 0;
// for(let i = 1; i <= 5; i++){
//     let a = Number(prompt("Enter the number"));
//     if(a == null || a.trim == "" || isNaN(a)){
//         console.log("invalid input")
//     }
//     else if(!isNaN(a)){
//         sum = sum + a;
//         console.log(sum)
//     }
    
// }

8. // Prompt 6 numbers and print the smallest and largest numbers entered.
// let arr = [];
// for(let i = 1; i<=6; i++){
//     let b = Number(prompt("Enter the number"));
//     arr.push(b);
// }
// let largest = Number("");
// for(let num of  arr){
//     if(num > largest){
//         largest = num;
//     }
// } 
// let smallest = Number("");
// for(let num of arr){
//     if (num<smallest){
//         num = smallest;
//     }
// }
// console.log(arr)
// console.log("The largest number among them is", largest)
// console.log("The smallest number among them is", smallest )

9.// Take 4 prompts. If any input is exactly “admin” or “password”, show an alert saying “You entered a reserved word!”. Otherwise, log all inputs.
// let arr = [];
// for(let i = 1; i<=4; i++){
//     let a = prompt("Enter input");
//     arr.push(a);
    
//     if(a == "admin" || a == "password"){
//         console.alert("you entered a reserved word")
//     }
//     else{
//         console.log(arr)
//     }
// }

10. // Prompt the user to enter one number. Print the first 10 multiples of that number.
// let n = Number(prompt("Enter a number"))
// for(let i = 1; i<=10; i++){
//     console.log(n*i)
// }

// object
// what is object
// how to create object
// how to access object

// let boy = {name : "Ranu", age : 20, height : 5.9, isStudent : true};
// console.log(boy.name);
// console.log(boy.isStudent);

// functions

