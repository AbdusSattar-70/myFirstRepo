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


// problem : Receive an array of score list and find high score
//solution no : 1 below----
 
 function HighScore(scores){
var topscoreArray = scores.sort(function(a,b){
    return b - a;
})
return topscoreArray[0];
}
var scor = [ 50,20,80,50,90,1020 ];
var tor = [50,40];
console.log(HighScore(scor));  

// problem : Receive an array of score list and find high score
//solution no : 2 below----

 let scoreList = [100,50,20,900,30];
function HighScore(scores){
let max = scores[0];
for (let i = 0; i < scores.length; i++) {
    if ( max < scores[i])
      max = scores[i];
    
}
    return max;
}
console.log(HighScore(scoreList));  


// problem: receive a 2D array and find high scorer name

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
 var highScorerName = highscorer(playerlistWithScore); 
 console.log(highScorerName); 



 // this keyword uses & object creation
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
  

// problem: which friends Name is big/long? when friends name list have in an array.
function megaFriend(friends) {
    var longestName = friends[0];
    for (let i = 0; i < friends.length; i++) {
        if(friends[0].length < friends[i].length)
               longestName = friends[i];
    }
        return longestName;
}
var friendList = ['rahin','kajolali','maroofmiya','abdusSattar','ka'];
console.log(megaFriend(friendList));





 // number sorting method 
 
friendName1 = [504,0,55,90,55,58];
 friendName1.sort(function(a,b){ 
  return  (a - b);
})
console.log(friendName1); 