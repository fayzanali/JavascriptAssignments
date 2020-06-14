// CHAPTER 1
// Task1:
alert("Welcome to my Website Global Tagg");

// Task2:
alert("Error! Please enter a valid password.");

// Task3:
alert("Welcome to JS Land...\nHappy Coding!");

// Task4:
alert("Welcome to JS Land...");
alert("Happy Coding!");

// Task5:
console.log(alert("Hello... I can JS through my web browser's console"));

// Task6:
window.alert("Hello World!");

// CHAPTER 2
// Task1:
var username;

// Task2:
var myName = "Syed Fayzan Ali";

// Task3:
var message;
message = "Hello World";
alert(message)

// Task4:
var name = "Syed Fayzan Ali";
var age = 24;
var course = "Certified Python Programming";

alert(name);
alert(age + " years old");
alert(course);

// Task5:
var pz = ("PIZZA\nPIZZ\nPIZ\nPI\nP");
alert(pz);

// Task6:
var email = "syedfayzanali7@outlook.com";
alert("My email address is " + email);

// Task7:
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

// Task8:
var doc = ("Yah! I can write HTML content through JavaSript");
document.write(doc);

// Task9:
var content = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(content);

// CHAPTER 3
Task1:
var age;
age = 24;
alert("I am " + age + " years old");

// Task2:
var visits = ("You have visited this site 14 times");
alert(visits);

// Task3:
var birthYear = 1995;
document.write("<br><br>My birth year is " + birthYear + "<br>" + "Data type of my declared variable is " + typeof(birthYear));

// Task4:
var visitor_name  = "John Doe";
var product = "T-shirt";
var quantity = 5;
document.write("<br><br>" + visitor_name + " ordered " + quantity + " " + product +"(s) on XYZ Clothing store");

// CHAPTER 4
// Task1:
var row = 0, column = 0, index = 0;

// Task2:
// Legal Variables:
// var name, $name, _name, first_Name, age1;
// Illegal Variables:
// var 1name, +xyz, /abc, ?ab, @abc;

// Task3:
document.write("<h1>"+"Rules for naming JS variables"+"</h1>"+"<br>");
document.write("Variable names can only contain , numbers, $ and _ . For example : $my_1stVariable"+"<br>");
document.write("Variable must begin with a letter, $ or _ . For example : $name, _name or name"+"<br>");
document.write("Variables name are case sensitive" + "<br>");
document.writer("Variable names should not be JS keywords" + "<br>");

// CHAPTER 5
// Task1:
var a = parseInt(prompt("Enter first number"));
var b = parseInt(prompt("Enter second number"));
var c = a + b;
document.write("Sum of " + a + " and " + b + " is "  + c);

// Task2:
var a = parseInt(prompt("Enter a First number"));
var b = parseInt(prompt("Enter your second number"));
var c = a - b;
document.write("Difference of " + a + " and " + b + " is " + c);

var a = parseInt(prompt("Enter your first number"));
var b = parseInt(prompt("Enter your second number"));
var c = a * b;
document.write("Product of " + a + " and " + b + " is " + c);

var a = parseInt(prompt("Enter your first number"));
var b = parseInt(prompt("Enter your second number"));
var c = a / b;
document.write("Quotient of " + a + " and " + b + " is " + c);

var a = parseInt(prompt("Enter your first number"));
var b = parseInt(prompt("Enter your second number"));
var c = a % b;
document.write("Modulus of " + a + " and " + b + " is " + c);

// Task3:
var b;
document.write("Value after variable declaration is undefined" + "<br>");
b = 5;
document.write("Initial value: " + b + "<br>");
++b;
document.write("Value after increment is: " + b + "<br>");
b += 7;
document.write("Value after addition is: " + b + "<br>");
--b;
document.write("Value after decrement is: " + b + "<br>");
b %= 3;
document.write("Ther remainder is: " + b + "<br>");

// Task4:
var ticket_price = 600;
var person = 5;
var total_cost = ticket_price * person;
document.write("Total cost to buy " + person + " tickets to a movie is " + total_cost + "PKR");

// Task5:
var table = 7;
document.write("Table of " + table + "<br>");
for (var i = 1; i <= 10; i++){
    document.write("7 " + "x " + i + " =" + table*i + "<br>");
}

// Task6:
var C = 25;
var F = 70;
C = (C * 9 / 5) + 32;
F = (F - 32) * 5 / 9;
document.write("25<sup>0</sup>C is " + C + "<sup>o</sup>F" + "<br>");
document.write("70<sup>0</sup>F is " + F + "<sup>o</sup>C" + "<br>");

// Task7:
document.write("<h1>Shopping Cart</h1>" + "<br>");
var itm1 = 650;
document.write("Price of item 1 is " + itm1 + "<br>");
qty1 = 3;
document.write("Quantity of item 1 is 3" + "<br>");
var itm2 = 100;
document.write("Price of item 2 is " + itm2 + "<br>");
qty2 = 7;
document.write("Quantity of item 2 is 7" + "<br>");
var shippingCharges = 100;
document.write("Shipping Charges " + shippingCharges + "<br>" + "<br>");
var itm1_total = itm1 * qty1;
var itm2_total = itm2 * qty2;
var sum = itm1_total + itm2_total + shippingCharges;
document.write("Total cost of your order is " + sum);

// Task8:
document.write("<h1>Marks Sheet</h1>" + "<br>");
var total_marks = 980;
var obtained_marks = 804;
var percentage = (obtained_marks / total_marks) * 100;
document.write("Total marks: " + total_marks + "<br>");
document.write("Marks obtained: " + obtained_marks + "<br>");
document.write("Percentage: " + percentage);

// Task9:
document.write("<h1>Currency in PKR</h1>" + "<br>");
var dollar = 104.80;
var riyal = 28;
var total_currency = 10 * dollar + 25 * riyal;
document.write("Total Currency in PKR: " + total_currency);

// Task10:
var a = 7;
num = (a + 5) * 10 / 2;
document.write(num);

// Task11:
document.write("<h1>Age Calculator</h1>" + "<br>");
var current_year = 2020;
var birth_year = 1995;
var age = current_year - birth_year;
document.write("Current Year: " + current_year + "<br>");
document.write("Birth Year: " + birth_year + "<br>");
document.write("Your Age is: " + age + "<br>");

// Task12:
document.write("<h1>The Geometrizer</h1>" + "<br>");
var radius = 20;
var circum = 2 * (3.142) * radius;
var area = (3.142) * (radius * radius);
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circum + "<br>");
document.write("The Area is: " + area + "<br>");

// Task13:
document.write("<h1>The Lifetime Supply Calculator</h1>" + "<br>");
var snack = "Chocolate Chip";
var current_age = "24";
var maxAge = "65";
var estimated = "3";
var total = (maxAge - current_age) * 3;
document.write("Favourite Snack: " + snack + "<br>");
document.write("Current age: " + current_age + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + estimated + "<br>");
document.write("You will need " + total + " " + snack + " to last you until the ripe old age of " + maxAge + "<br>");

// CHAPTER 6-9
// Task1:
var a = 10;
document.write("Result:" + "<br>");
document.write("The value of a is: " + a + "<br>");
document.write(".............................................." + "<br>" + "<br>");

document.write("The value of ++a is: " + ++a + "<br>");
document.write("Now the value of a is: " + a + "<br>" + "<br>" + "<br>");

document.write("The value of a++ is: " + a++ + "<br>");
document.write("Now the value of a is: " + a + "<br>" + "<br>" + "<br>");

document.write("The value of --a is: " + --a + "<br>");
document.write("Now the value of a is: " + a + "<br>" + "<br>" + "<br>");

document.write("The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a + "<br>");

// Task2:
var a = 2;
document.write("a is " + a + "<br>");
var b = 1;
document.write("b is " + b + "<br>");
document.write("--a: 1" + "<br>");
document.write("--a - --b: 1 - 0 = 1" + "<br>");
document.write("--a - --b + ++b: 1 + 1 = 2" + "<br>");
document.write("--a - --b + ++b + b--: 2 + 1 = 3" + "<br>");
var result = --a - --b + ++b + b--;
document.write("result is " + result + "<br>");

// Task3:
var greet = prompt("Please Enter Your Name");
document.write("Hello! " + greet + ". Welcome to Global Tagg");

// Task4:
var num = prompt("Please enter a valid number");
if (num) {
    for (var i = 1; i <= 10; i++){
        document.write(num + " x " + i + " = " + num*i + "<br>");
    }
}else {
    for (var i = 1; i <= 10; i++){
        document.write("5" + " x " + i + " = " + 5*i + "<br>");
    }
}

// Task5:
var sub1 = prompt("Enter Name of Subject 1: ");
var sub2 = prompt("Enter Name of Subject 2: ");
var sub3 = prompt("Enter Name of Subject 3: ");
var totalMarks = 100 * 3;
var subMarks1 = +prompt("Enter Marks of " + sub1); 
var subMarks2 = +prompt("Enter Marks of " + sub2);
var subMarks3 = +prompt("Enter Marks of " + sub3);
var obtainedMarks = (subMarks1 + subMarks2 + subMarks3);
var percentage = (obtainedMarks / totalMarks) * 100;
percentage = percentage.toFixed(2);
var percent1 = (subMarks1 / 100) * 100;
var percent2 = (subMarks2 / 100) * 100;
var percent3 = (subMarks3 / 100) * 100;

document.write("<Table>");
document.write("<tr>");
    document.write("<th>" + "Subject" + "</th>");
    document.write("<th>" + "Total Marks" + "</th>");
    document.write("<th>" + "Obtained Marks" + "</th>");
    document.write("<th>" + "Percentage" + "</th>");
document.write("<tr>");

document.write("<tr>");
    document.write("<td>" + sub1 + "</td>");
    document.write("<td>" + 100 + "</td>");
    document.write("<td>" + subMarks1 + "</td>");
    document.write("<td>" + percent1 + "%" + "</td>");
document.write("<tr>");

document.write("<tr>");
    document.write("<td>" + sub2 + "</td>");
    document.write("<td>" + 100 + "</td>");
    document.write("<td>" + subMarks2 + "</td>");
    document.write("<td>" + percent2 + "%" + "</td>");
document.write("<tr>");

document.write("<tr>");
    document.write("<td>" + sub3 + "</td>");
    document.write("<td>" + 100 + "</td>");
    document.write("<td>" + subMarks3 + "</td>");
    document.write("<td>" + percent3 + "%" + "</td>");
document.write("<tr>");

document.write("<tr>");
    document.write("<td>" + "</td>");
    document.write("<td>" + 300 + "</td>");
    document.write("<td>" + obtainedMarks + "</td>");
    document.write("<td>" + percentage + "%" + "</td>");
document.write("<tr>");

document.write("</Table>");

// CHAPTER 9-11
// Task1:
var city = prompt("Enter city Name");
if (city === "Karachi" || city === "karachi"){
    document.write("Welcome to city of lights")
}else{
    document.write("Welcome to " + city);
}

// Task2:
var gender = prompt("Please Enter Your Gender");
if (gender === "Male" || gender === "male"){
    document.write("Good Morning Sir.");
}else if(gender === "Female" || gender === "female"){
    document.write("Good Morning Ma'am.");
}else{
    document.write("Please Enter Correct Gender");
}

// Task3:
var color = prompt("Enter Traffic Signal Color: ");
if(color === 'Red' || color === 'red'){
    alert("Must Stop");
}else if(color === 'Yellow' || color === 'yellow'){
    alert("Ready to Move");
}else if (color === 'Green' || color === 'green'){
    alert("Move Now");
}else{
    alert('Enter Correct Color')
}

// Task4:
var fuel = +prompt("Enter Remaining Fuel in liters");
if (fuel < 0.25){
    alert("Please refill the fuel in your car");
}else{
    alert("You're good to go");
}

// Task5:
// condition true
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true"); 
}

// condition not true
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true"); 
}

// condition 2 and 4 is true
var c = 12;
if (c++ === 13){
    alert("condition 1 is true"); 
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true"); 
}
if(c === 14){
    alert("condition 4 is true");
}

// condition true
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

// condition true
if (true){
    alert("True");
}
if (false){
    alert("False");
}

// condition true
if("car" < "cat"){
    alert("car is smaller than cat"); 
}

// Task6:
document.write("<h1>Marks Sheet</h1>" + "<br>");
var totalMarks = 300;
var obtainedMarks = Number(window.prompt("Enter Your Marks", "Enter Here"));
var percentage = ((obtainedMarks * 100) / totalMarks).toFixed();
if (percentage >= 80){
    document.write("Total Marks : " + totalMarks + "<br>");
    document.write("Marks Obtained : " + obtainedMarks + "<br>");
    document.write("Percentage : " + percentage + "%" + "<br>");
    document.write("Grade : A-one" + "<br>");
    document.write("Remarks : Excellent" + "<br>");
}else if(percentage >= 70){
    document.write("Total Marks : " + totalMarks + "<br>");
    document.write("Marks Obtained : " + obtainedMarks + "<br>");
    document.write("Percentage : " + percentage + "%" + "<br>");
    document.write("Grade : A" + "<br>");
    document.write("Remarks : Good" + "<br>");
}else if(percentage >= 60){
    document.write("Total Marks : " + totalMarks + "<br>");
    document.write("Marks Obtained : " + obtainedMarks + "<br>");
    document.write("Percentage : " + percentage + "%" + "<br>");
    document.write("Grade : B" + "<br>");
    document.write("Remarks : You need to improve" + "<br>");
}else{
    document.write("Total Marks : " + totalMarks + "<br>");
    document.write("Marks Obtained : " + obtainedMarks + "<br>");
    document.write("Percentage : " + percentage + "%" + "<br>");
    document.write("Grade : Fail" + "<br>");
    document.write("Sorry" + "<br>");
}

// Task7:
var secret = 7;
var guess = +prompt("Guess the number: ");
if (secret === guess){
    alert("Bingo! Correct answer");
}else if((guess + 1) === secret){
    alert("Close enough to the correct answer");
}
else{
    alert("Wrong Answer");
}

// Task8:
var num = +prompt("Enter Number");
if (num % 3 === 0){
    alert(num + " is divisible by 3");
}else{
    alert(num + " is not divisible by 3");
}

// Task9:
var num = +prompt("Enter Number: ");
if (num % 2 === 0){
    alert("Number is Even");
}else{
    alert("Number is Odd");
}

// Task10:
var temp = +prompt("Enter Today's Temperature");
if (temp >= 40){
    document.write("It is too hot outside.");
}else if(temp >= 30){
    document.write("The Weather today is Normal.");
}else if(temp >= 20){
    document.write("Today's Weather is cool.");
}else if(temp >= 10){
    document.write("OMG! Today's Weather is so Cool.");
}

// Task11:
var num1 = +prompt("Enter First Number: ");
var num2 = +prompt("Enter Second Number: ");
var operation = prompt("Enter Operation: ");
if (operation === "+"){
    document.write("Result of Addition is: " + (num1 + num2));
}else if(operation === "-"){
    document.write("Result of Subtraction is: " + (num1 - num2));
}else if(operation === "*" || operation === "x"){
    document.write("Result of Multiplication is: " + (num1 * num2));
}else if(operation === "/"){
    document.write("Result of Division is: " + (num1 / num2));
}else if(operation === "%"){
    document.write("Result of Modulus is: " + (num1 % num2));
}else{
    document.write("Enter Correct Operator");
}

// CHAPTER 12-13
// Task1:
var chr = prompt("Enter Character: ");

if (+chr > 0){
    document.write("You Enter the Number");
}else if(chr.charCodeAt(0) > 64 && chr.charCodeAt(0) < 91){
    document.write("You Enter UpperCase Letter");
}else if(chr.charCodeAt(0) > 96 && chr.charCodeAt(0) < 123){
    document.write("You Enter LowerCase Letter");
}else{
    document.write("You Enter the wrong character");
}

// Task2:
var num1 = +prompt("Enter First Number: ");
var num2 = +prompt("Enter Second Number: ");
if (num1 > num2){
    document.write("Number 1 is greater than Number 2" + "<br>" + num1 + " > " + num2);
}else if(num1 < num2){
    document.write("Number 2 is greater than Number 1" + "<br>" + num1 + " < " + num2);
}else{
    document.write("Both Numbers are Equal" + "<br>" + num1 + " = " + num2)
}

// Task3:
var num = +prompt("Enter Number: ");
if (num > 0){
    document.write(num + " is Positive Number");
}else if(num < 0){
    document.write(num + " is Negative Number");
}else{
    document.write(num + " is Zero");
}

// Task4:
var char = prompt("Enter vowel letter");
char = char.toLocaleLowerCase()
if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
    document.write("True");
}else{
    document.write("False");
}

// Task5:
var password = "global";
var userPass = prompt("Enter Password: ");
if (userPass.length <= 0){
    document.write("Enter your Password");
}
else{
    if(userPass === password){
        document.write("Correct! The password you entered matches the original password");
    }else{
        document.write("Incorrect Password");
    }
}

// Task6:
var greeting;
var hour = 13;
if (hour < 18){
    greeting = document.write("Good day");
}else{
    greeting = document.write("Good evening");
}

// Task7:
var time = +prompt("Enter time: ");
if (time >= 0000 && time < 1200){
    document.write("Good Morning");
}else if(time >= 1200 && time < 1700){
    document.write("Good Afternoon");
}else if (time >= 1700 && time < 2100){
    document.write("Good Evening");
}else if (time >= 2100 && time <= 2359){
    document.write("Good Night");
}else{
    document.write("Invalid!")
}

// CHAPTER 14-16
// Task1:
var arr = [];

// Task2:
var arr = {}; 

// Task3:
var fruits = ["Apple", "Mango"];

// Task4:
var num = [2, 5, 9, 7];

// Task5:
var booleanArray = [true, false];

// Task6:
var mixedArray = [1, "Ali", "Pakistan", true];

// Task7:
var qualification = ["1)SSC" + "<br>" + "2)HSC" + "<br>" + "3)BCS" + "<br>" + "4)BS" + "<br>" + "5)BCOM" + "<br>" + "6)MS" + "<br>" + "7)M.Phil" + "<br>" + "8)PhD" + "<br>"];
document.write("<h3>Qualifications:</h3>");
document.write(qualification);

// Task8:
var arr = ['Michael', 'John', 'Tony'];
var arr1 = [320, 230, 480];
percent1 = (arr1[0]/500) * 100;
percent2 = (arr1[1]/500) * 100;
percent3 = (arr1[2]/500) * 100;
document.write("Score of " + arr[0] + " is " + arr1[0] + "." + " Percentage: " + percent1 + "%" + "<br>");
document.write("Score of " + arr[1] + " is " + arr1[1] + "." + " Percentage: " + percent2 + "%" + "<br>");
document.write("Score of " + arr[2] + " is " + arr1[2] + "." + " Percentage: " + percent3 + "%" + "<br>");

// Task9:
document.write("<h1> Color Names </h1>")
var colorNames = ["Blue", "Red", "Yellow", "Green"];
for (var i = 0; i < colorNames.length; i++) {
document.write(colorNames[i] + ", ");
}

document.write("<h1>After Add in the beginning </h1><br>");
// Part a
var user = window.prompt("Enter which color do you want to add in beginning?","Enter Here");
colorNames.unshift(user);
for (var i = 0; i < colorNames.length; i++) {
    document.write(colorNames[i] + ", ");
}

document.write("<h1>After Add in the end </h1><br>");
// part b
var user = window.prompt("Enter which color do you want to add in the end?","Enter Here");
colorNames.push(user);
for (var i = 0; i < colorNames.length; i++) {
    document.write(colorNames[i] + ", ");
}

// part c
document.write("<h1>After Add two more in the beginning </h1><br>");
colorNames.unshift("Violet", "Purple")
for (var i = 0; i < colorNames.length; i++) {
document.write(colorNames[i] + ", ");
}


// part d
document.write("<h1>After delete the first color in the beginning </h1><br>");
colorNames.shift();
for (var i = 0; i < colorNames.length; i++) {
 document.write(colorNames[i] + ", ");
}


// Part e
document.write("<h1>After delete the last color </h1><br>");
colorNames.pop();
for (var i = 0; i < colorNames.length; i++) {
 document.write(colorNames[i] + ", ");
}

// part f
document.write("<h1>updated list </h1><br>");
var user = window.prompt("Enter at which index do you want to add that color of your choice?","Enter Here");
colorNames.splice(user, 0, "Orange");
for (var i = 0; i < colorNames.length; i++) {
document.write(colorNames[i] + ", ");
}

// part g
document.write("<h1>updated list </h1><br>");
var user = window.prompt("Enter at which index do you want to delete  that color?", "Enter Here");
var user1 = window.prompt("Enter how many do you want to delete?", "Enter Here");
colorNames.splice(user, user1);
for (var i = 0; i < colorNames.length; i++) {
document.write(colorNames[i] + ", ");
}

// Task10:
var arr = [320, 230, 480, 120];
document.write("Scores of Students : " + arr + "<br>");
arr.sort();
document.write("Ordered Scores of Students : " + arr + "<br>")

// Task11:
var arr = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("Cities list: " + "<br>" + arr + "<br>" + "<br>");
document.write("Selected cities list: " + "<br>" + arr.slice(1, 4) + "<br>");

// Task12:
var arr = ["This ", " is ", " my ", " cat"];
document.write("Array: " + "<br>" + arr + "<br>" + "<br>");
document.write("String: " + "<br>" + arr.join("") + "<br>");

// Task13:
var arr = ["keyboard ", "mouse ", "printer ", "monitor"];
document.write("Devices: " + "<br>" + arr + "<br>" + "<br>");
document.write("Out: " + "<br>" + arr.slice(0, 1) + "<br>");
document.write("Out: " + "<br>" + arr.slice(1, 2) + "<br>");
document.write("Out: " + "<br>" + arr.slice(2, 3) + "<br>");
document.write("Out: " + "<br>" + arr.slice(3, 4) + "<br>");

// Task14:
var arr = ["keyboard ", "mouse ", "printer ", "monitor"];
document.write("Devices: " + "<br>" + arr + "<br>" + "<br>");
document.write("Out: " + "<br>" + arr.slice(3, 4) + "<br>");
document.write("Out: " + "<br>" + arr.slice(2, 3) + "<br>");
document.write("Out: " + "<br>" + arr.slice(1, 2) + "<br>");
document.write("Out: " + "<br>" + arr.slice(0, 1) + "<br>");

// Task15:
var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<label for = 'mobile'>Mobile Phone Companies: </label>");
document.write("<select id='mobile'>");
    document.write("<option selected disabled>Options...</option>");
    for (var i = 0; i < phone.length; i++){
        document.write("<option>" + phone[i] + "</option>");
    }
document.write("</select>");

// CHAPTER 17-20
// Task1:
var multiArr = [[ ], [ ]];

// Task2:
var matrix1 = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
for (var i = 0; i < matrix1.length; i++){
    for(var j = 0; j < matrix1[i].length; j++){
        document.write("<strong>" + matrix1[i][j] + "</strong> ");
    }
    document.write("<br>")
}

// Task3:
for (var i = 1; i <= 10; i++){
    document.write(i + "<br>");
}

// Task4:
var table = +prompt("Enter a number to show its multiplication table");
var length = +prompt("Enter lenth multiplication table");
document.write("Multiplication table of  " + table + "<br>");
document.write("Length " + length + "<br>" + "<br>");
for (var i = 1; i <= length; i++){
    document.write(table + " x " + i + " = " + table*i + "<br>")
}

// Task5:
var fruits = ["apple", "banana", "mango", "orange", "strawberry" + "<br>"]
for(var i = 0; i < fruits.length; i++){
    document.write(fruits[i] + "<br>")
}for (var j = 0; j < fruits.length; j++){
    document.write("Element at index " + j + " is " + fruits[j] + "<br>")
}

// Task6:
document.write("<h2>Counting:</h2>")
for(var i = 1; i <= 15; i++){
    document.write(i + ", ");
}
document.write("<h2>Reverse counting:</h2>")
for(var j = 10; j >= 1; j--){
    document.write(j + ", ");
}
document.write("<h2>Even:</h2>")
for(var k = 0; k <= 20; k++ + k++){
    document.write(k + ", ");
}
document.write("<h2>Odd:</h2>")
for(var l = 1; 1 < 20; l++ + l++){
    document.write(l + ", ");
}
document.write("<h2>Series:</h2>")
for(var m = 2; m <= 20; m++ + m++){
    document.write(m + "k, ");
}

// Task7:
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir / ma'am?");
userInput = userInput.toLowerCase();
for(var i = 0; i < arr.length; i++){
    if (userInput === arr[i]){
        document.write(userInput + "is <strong>available</strong> at index " + i + " in our bakery");
        break
    }
}
if (userInput !== arr[i]){
    document.write("We are sorry. " + userInput + " is <strong>not available</strong> in our bakery");
}

// Task8:
var arr = [24, 53, 78, 91, 12];
document.write("Array items: " + arr + "<br>");
var large = Math.max.apply(Math, arr);
document.write("The largest number is " + large);

// Task9:
var arr = [24, 53, 78, 91, 12];
document.write("Array items: " + arr + "<br>");
var small = Math.min.apply(Math, arr);
document.write("The smallest number is " + small);

// Task10:
var num = 5;
for (var i = 1; i <= 20; i++){
    if (num  === 5){
        document.write(num * i + ", ");
    }
}