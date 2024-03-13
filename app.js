



// var percentage = +prompt("Enter Your Percentage");
// if (percentage > 100) {
//     console.log("abey loro");
// } else if (percentage < 40) {
//     console.log("you are Eliminate Better Luck Next Time");
// } 
// // else if (percentage <= 50) {
// //     console.log("congratulation you are passed Keep Improving");
// // }
// //  else if (percentage < 60) {
// //     console.log("congratulation you grade is B");
// // }
// //  else if (percentage <= 50) {
// //     console.log("congratulation you are passed Keep Improving");
// // }
// //  else if (percentage <= 50) {
// //     console.log("congratulation you are passed Keep Improving");
// // }
// else {
//     console.log("Please Input Correct Value");
// }









// let num = 5;
// let result = (num % 2 === 0) ? "Even" : "Odd";
// console.log(result);



// let num1 = 4;
// if ( num1 % 12 != 2){
//     console.log("correct")
// }else{
//     console.log("Incorreect")
// };

// question no 3  

// let age = +prompt("Enter Your Age20");

// if (age > 18) {
//     console.log("Old enough");
// } else {
//     console.log("Too Young");
// }

// Question no 4 

// var username = prompt("Enter your Name");
// var _name = "Developer";
// if(username === _name){
//     console.log("Welcome Sir");
// }else{
//     console.log("Incorrect Username");
// }

// Question no 5 

// var num = 2;
// if ( 3 % num){
//     console.log("Dividible by 3")
// }else{
//     console.log("Not Dividible by 3")
// }

// let number = parseInt(prompt("Enter a number:"));

// switch (number % 3) {
//     case 0:
//         console.log("Number is divisible by 3");
//         break;
//     default:
//         console.log("Number is not divisible by 3");
// }


// var num = +prompt("Enter Your Number");
// if (num % 3){
//     console.log("Dividible by 3")
// }else{
//     console.log("Not Dividible by 3")
// }



// Question no 12 

// var hour = 13;
// if (hour < 18) {
// console.log("Good day");}
// else{
// console.log("Good evening");
// } 

// question no 14 

// let num11 = parseFloat(prompt("Enter a number: "));



// question no 14 
// var inputNum = +prompt("Enter a number");
// if ( inputNum > 0){
//     console.log("POSITIVE NUMBER");
// }else if( inputNum < 0){
//     console.log("NAGATIVE NUMBER");
// }else{
//     console.log("THE NUMBER IS ZERO");
// }







// function sum(userName , lastname , age){
//     console.log( hello ,  userName + lastname + age);
// }
// sum(Talha , Zahid, 17);


//   function percentageCal(English , )
















    // function greetuser (user , user2 ){
    //     console.log("HELLO " + user + user2);
    //     return "hello" + user
    // }
    // var username = greetuser("talha");
    // console.log(username);


//     var input = document.querySelector("#input");
// function inputValueget (){
//     console.log(input.value);
//     input.value = ""
// }


// var input1 = document.querySelector(".input");
// function inputValueget1 (){
//     console.log(input1.value);
//     input.value =""
// }


// function calculateGrade() {
//     var subject1 = parseInt(document.getElementById('subject1').value);
//     var subject2 = parseInt(document.getElementById('subject2').value);
//     var subject3 = parseInt(document.getElementById('subject3').value);
//     var subject4 = parseInt(document.getElementById('subject4').value);

//     var totalMarks = subject1 + subject2 + subject3 + subject4;
//     var percentage = (totalMarks / 400) * 100;
//     var grade = '';

//     if (percentage >= 90) {
//       grade = 'A';
//     } else if (percentage >= 80) {
//       grade = 'B';
//     } else if (percentage >= 70) {
//       grade = 'C';
//     } else if (percentage >= 60) {
//       grade = 'D';
//     } else {
//       grade = 'F';
//     }

//     var resultElement = document.getElementById('result');
//     resultElement.innerHTML = 'Obtained Marks: ' + totalMarks + '<br>' +
//                                'Percentage: ' + percentage.toFixed(2) + '%<br>' +
//                                'Grade: ' + grade;
//   }




// var subject1 = document.querySelector("#subject1");
// var subject2 = document.querySelector("#subject2");
// var subject3 = document.querySelector("#subject3");
// var subject4 = document.querySelector("#subject4");

// var totalMarks = subject1 + subject2 + subject3 + subject4 ;
//  var  result = document.innerHTML = "totalMarks"; 

// function calculate(){
//     console.log(result);
//     return "result" 
// }



// function cal (){
//     var fnum = document.querySelector("#subject1").value;
//     var snum = document.querySelector("#subject2").value;
//     var total = parseInt(fnum) + parseInt(snum);
//     document.getElementById("result").innerHTML=total;

// }



// function cal(){
//     var total =  "total marks" + " " + 200;
//     console.log(total);
//     var add = Number(input1.value) + Number(input2.value)
//     console.log(add);
//     var per = "add/total"*100;
//     console.log(per);
// }


// function hello(){
//     var sum = Number(100) + Number(100);
//     console.log(sum);

//     var change  = document.querySelector("#change");
//     change.innerHTML = "NOW TALHA IS BILLIONARIE";
//     console.log(change.innerHTML);
// }




    //      var chemistry = document.querySelector('#chem-marks');
    //      var physics   = document.querySelector('#phy-marks');
    //      var math      = document.querySelector('#math-marks');
    //      var computer  = document.querySelector('#com-marks');
    //      var tot = document.querySelector('#total-marks');
    //      var student = document.querySelector('#student-percentage');
    //      var Grade = document.querySelector('#grade');

    //         function calculate (){
    //             console.log(chemistry.value);
    //             console.log(physics.value);
    //             console.log(math.value);
    //             console.log(computer.value);
    //             var totalmarks = 400;
    //  var Obtainedmarks =  +chemistry.value + +physics.value + +math.value + +computer.value;
    //  console.log( "obtainedmarks ====> " , Obtainedmarks);
    //  tot.innerHTML = Obtainedmarks;
    //  var studentpercentage =   Obtainedmarks / totalmarks * 100 ;
    //  console.log("percetage ====>" , studentpercentage)
    //  student.innerHTML = studentpercentage;
     
    //                     if(studentpercentage>90){
    //                         console.log(Grade.innerHTML= "A")
    //                     }else if(studentpercentage>70){
    //                         console.log(Grade.innerHTML="A")
    //                     }else if(studentpercentage>60){
    //                         console.log(Grade.innerHTML="B")
    //                     }else{
    //                         console.log(Grade.innerHTML="fail")
            //             }
            //










// let countries = ['pakistan' , 'uk' , 'australia' , 'dubai' , 'canada']


// console.log(countries)
// console.log( `${countries[1]} ${countries[3]}`)



// const fruit = ['pineapple','mango','banana','orange','watermelon','promagraden','grapes','maa ke choo']
// fruit.push('apple');
// fruit.pop();
// fruit.unshift('apple');
// fruit.shift();
// fruit.splice(3,2)
// console.log(fruit);





















// // Create an object with properties
// let user = {
//     name: "John Doe",
//     email: "john@example.com",
//     password: "password123",
//     age: 25,
//     gender: "male",
//     city: "New York",
//     country: "USA"
// };

// // Check if age and country properties exist in the object
// const ageExists = 'age' in user;
// const countryExists = 'country' in user;

// // Check if firstName and lastName properties exist in the object
// const firstNameExists = 'firstName' in user;
// const lastNameExists = 'lastName' in user;

// console.log("Does 'age' property exist?", ageExists);
// console.log("Does 'country' property exist?", countryExists);
// console.log("Does 'firstName' property exist?", firstNameExists);
// console.log("Does 'lastName' property exist?", lastNameExists);
























// const fruits = [`apple` , `banana` , `orange` , `mango`]


// fruits.splice(1 , 3);   
// console.log(fruits);

// const fruits = ['banana' , 'orange', 'mango'];
// // fruits.splice('shurw kaha sa krna ha' , 'kitna delete krna hain' , 'uski jaga kiya rkhna haa')
// fruits.splice(2, 1 , 'strawberry' , 'watermelon' , 'melon' , 'mangoes' , 'guava' , 'nashpati' , 'grapes' , 'anaaar' , 'kinno');
// fruits.splice(6 , 2 , 'helo');
// console.log(fruits)







// var input1 = document.querySelector('#input1');
// var input2 = document.querySelector('#input2');

//  let ary = [apple , banana , kinno , kharboza , tarboz , anar , chicko]
//  var input = document.querySelector('#input1');

//  function check(){
//     //    console.log(ary.includesof('apple'));
//     //  if(ary.includesof(input.value)){
//     //     console.log('avai')
//     //  }else{
//     //     console.log('not')
//     //  }
//     console.log(input.value);
//     console.log(ary.includesof(apple));
// }
















// const sampleArray = ["apple", "banana", "cherry", "date", "elderberry"];

// document.getElementById("valueForm").addEventListener("submit", function(event) {
//     event.preventDefault();
//     const valueInput = document.getElementById("value").value.trim();
//     const resultDiv = document.getElementById("result");

//     if (sampleArray.includes(valueInput)) {
//         resultDiv.innerHTML = `<p>${valueInput} this fruit is avaliable.</p>`;
//     } else {
//         resultDiv.innerHTML = `<p>${valueInput} is not present in the array.</p>`;
//     }
// });











// let array = ['iphone 14' , "iphone 12" , "iphone 13" , "phoneX"]
// let input = document.querySelector('#input1');
// let h2 = document.querySelector('h2');
// function check(){
//     // console.log(array.includes("iphone 14"))
//   console.log(input.value)
//     if(array.includes(input.value)){
//         console.log("This Is Availaible")
//         h2.innerHTML = ` ${input.value} is Availaible` 
//     }else{
//         console.log("This Is Not Available")
//         h2.innerHTML = `${input.value} is Not Availaible` 
//     }
// }






































// question no 8 

// let array = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"]

// console.log(array);
















// for (let index = 0; index < ; index++) {
//     const element = array[index];
    

































// for (let i = 1; i <= 10; i++) {
//     console.log("DEVELOPER");
// }


// for ( let i = 1; i < 10; i++){
//     console.log("outer loop ======>" , i);
//     for ( let j = 1; j <= 5; j++){
//         console.log("inner loop ======> " , j);
//     }
// }






// const inputTable = +prompt("ENTER YOUR TABLE");
// const userInput = +prompt("how many times  table do you want")
// for ( let i = 1; i<=10; i++){
//     console.log(`${inputTable} * ${i} = ${10*i}`);
// }


// for ( let i = 0; i < 10; i++){
//     console.log("HELLO" , i );
//     for (let j = 0; j < 5; j++){
//         console.log("WORLD" , j);
//     }
// }









// for ( let  i = 1; i <= 10; i++){
//     console.log("hello world" , i);
// }
for (let i = 1; i <= 10; i++){
    console.log(`5 * ${i} = ${5*i}`)
}














































































