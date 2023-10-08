var city= prompt("write your city name like (Karachi) first letter is cappital ")
if (city == "Karachi"){
    alert("welcome to city of light")
}







var gender=prompt ("write your gender")
if (gender == "male"){
    alert("good morning sir")
} 
 else if (gender == "female"){
    alert("good morning maam")
} 






var color = prompt ("write a traffic light color ( like red , green , yellow) ")
if (color == "green" ){
    alert("move now")
}
else if (color == "red" ){
    alert("must stop")
}
else if (color == "yellow" ){
    alert("ready to move")
}
var patrol =prompt("write your remaining fuel (like 0.1 to 0.99)")
if (patrol <"0.25"){
    alert("please refill the fuel in your car")
}









var first = prompt("write your first subject obt marks")
var second = prompt("write your second subject obt marks")
var third = prompt("write your third subject obt marks")
var totalMarks= prompt ("write your total  obt marks")
document.write("<h1>marks sheet</h1>")
document.write("<h1>Total marks : 300</h1>")
document.write("<h1>marks obtanined : "+totalMarks +" </h1>")
document.write("<h1> percentage : "+totalMarks / 300  +" </h1>")
var totalPer= (totalMarks / 300 )






if (totalPer > 0.90 ){
    document.write(" <h1>grade : A</h1>")
}
else if (totalPer >= 0.80 ){
    document.write("<h1>grade : B</h1>")
}
 else if (totalPer >= 0.70 ){
    document.write("<h1>grade : C</h1>")
}
 else if (totalPer >= 0.60 ){
    document.write("<h1>grade : D</h1>")
}
 else if (totalPer < 0.60 ){
    document.write("<h1>grade : fail</h1>")
}







if (totalPer > 0.90 ){
    document.write(" <h1> remarks :excellent</h1>")
}
else if (totalPer >= 0.80 ){
    document.write("<h1> remarks :good</h1>")
}
 else if (totalPer >= 0.70 ){
    document.write("<h1> remarks :you need to improve</h1>")
}
 else if (totalPer >= 0.60 ){
    document.write("<h1> remarks :please paractice</h1>")
}
 else if (totalPer < 0.60 ){
    document.write("<h1>remarks :sorry</h1>")
}








var secretNum=prompt("choise a sceret num (1 to 10)")
if(secretNum == "5"){
    alert ("true")
}
else if  ( secretNum == "6"){
    alert("close enongh to the coreect answer") 
}
else {
    alert ("false")
}







var evenOrOdd = prompt("write a num (even or odd )")
 
if (evenOrOdd % 2 == "0"){
    alert("your num is even")
}
else {
    alert("your num is odd")
}







var temparature = prompt("write the temprature in your city like (10,20,30,40)")
if (temparature  >30){
    alert("it is too hot")
}
else if (temparature  >20){
    alert("the weather today is okay")
}
else if (temparature  >10){
    alert("today weather is cool")
}
else if (temparature  <10){
    alert("OMG! today weather is so cool")
}







