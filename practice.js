var num1 = prompt('Enter your first number:');
var num2 = prompt('Enter your second number:');
num1 = parseInt(num1,10);
num2 = parseInt(num2,10);
var add, sub, mult, div, rem;
add = (num1 + num2);

document.write("1. Addition is = " + add + '<br/>' );
sub = num1 - num2;
document.write("2. substriction is = " + sub + '<br/>');
mult = num1 * num2;
document.write("3. Multiplication is = " + mult + '<br/>');
div = num1 / num2;
document.write("4. division is = " + div + '<br/>');
rem = num1 % num2;
document.write("5. reminder is = " + rem + '<br/>');



let f1 = prompt('enter your first name:');
let f2 = prompt('enter your last name: ');
let fullName = f1+ " " + f2;
document.write('fullname is ' +  fullName + "</br>");
document.write("upercase fullname is " + fullName.toUpperCase() + "</br>");
document.write("fullname character number: " + fullName.length );


 


 var numberInput = new Array();
for (let i = 0; i < 2; i++) {
    numberInput[i] = parseInt(prompt('Enter yor number:'));
 
}
var sum = 0;
for (let i = 0; i < numberInput.length; i++) {
    const element = numberInput[i];
    sum += element;
    
}
document.write(sum); 

 function HighScore(scores){
var topscoreArray = scores.sort(function(a,b){
    return b - a;
})
return topscoreArray[0];
}
var scor = [ 50,20,80,50,90,1020 ];
var tor = [50,40];
console.log(HighScore(scor)); 

let scoreList = [100,50,20,900];
function HighScore(scores){
let max = scores[0];
for (let i = 0; i < scores.length; i++) {
    if ( max < scores[i])
    max = scores[i];
    
}
    return max;
}
console.log(HighScore(scoreList)); 

 function highscorer(playerInfo){
    // 2D / two dimentional array 
    var maxScore = playerInfo[0][1];
    var maxScorer = playerInfo[0][0];
    for (let i = 1; i < playerInfo.length; i++) {
       if(maxScore <  playerInfo[i][1]) 
       maxScorer = playerInfo[i][0];
       maxScore =  playerInfo[i][1];
    }
return maxScorer;
}
 var playerlistWithScore = [['sakib',90],['rahim',8],['rakhy',100]];
 var an = highscorer(playerlistWithScore); 
 console.log(an);
// this keyword uses?
function Student(a,b,c,d){
    this.name = a;
    this.age = b;
    this.id = c;
    this.lang = d;

    this.read = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.id);
        console.log(this.lang);

    }
}
var student1 = new Student('sara',14,25,['bangla','english'])

student1.read();
 