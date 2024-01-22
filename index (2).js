let CD ;
let CA ;
let age;
let C;
let answer;
let air;
let FirstResult = 0;
let SecondResult = 0;
let ThirdResult = 0;
let FourthResult = 0;
let FifthResult = 0;
let TotalResult;


document.getElementById("SButton").onclick = function(){

    age = document.getElementById("agetextbox").value;

    if(age <= 10){
        document.getElementById("agelabel").innerHTML = "Its okay if you fail this test.";
    }
    else if(age <= 15){
        document.getElementById("agelabel").innerHTML = "You SHOULD pass this test.";
    }
    else if(age >= 15){
        document.getElementById("agelabel").innerHTML = "If you fail restart your educational years.";
    }
}

document.getElementById("SubmitButton").onclick = function(){

    CD = document.getElementById("CDTextBox").value;
    if(CD == 5){
        FirstResult = 1;
        document.getElementById("cd").innerHTML = "Nice you got this one right!";
    }

    else{
        FirstResult = 0;
        document.getElementById("cd").innerHTML = "In a rectangle the opposite sides are always equal! This is looking bad for you..";

    }
}

document.getElementById("SubButton").onclick = function(){
     CA = document.getElementById("CATextBox").value;
     if(CA == 10){
        SecondResult = 1;
        document.getElementById("CA").innerHTML = "Good Job ! Next one !";
     }

     else{
        SecondResult = 0;
        document.getElementById("CA").innerHTML = "The right answer was 10 (Due to the theorem of Pythagoras).";
 }
}
document.getElementById("CButton").onclick = function(){
     C = document.getElementById("CTextBox").value;
     if(C == 40){
        ThirdResult = 1;
        document.getElementById("C").innerHTML = "Nice one buddy !";
     }
     else{
        ThirdResult = 0;
        document.getElementById("C").innerHTML = "Nice try but no .The right answer was 40";
     }
}
document.getElementById("TriangleButton").onclick = function(){
     answer = document.getElementById("TriangleIsocele").value;
     if(answer = "yes" || "Yes"){
        FourthResult = 1;
        document.getElementById('TriangleLabel').innerHTML = "This is looking good for you !";
     }  
     else{
        FourthResult = 0;
        document.getElementById("TriangleLabel").innerHTML = "The answer was yes because A=B+C and C=A-B , so yes.";
     }
}
document.getElementById("AirButton").onclick = function(){
     air = document.getElementById("AirTextBox").value;
     if(air >= 78 && air <=79){
        FifthResult = 1;
        document.getElementById("AirLabel").innerHTML = "You got it right!";
     }
      else{
        FifthResult = 0;
        document.getElementById("AirLabel").innerHTML = "You shouldve done : π x R x R";
      }
}
document.getElementById("Calc").onclick = function(){
TotalResult = FirstResult + SecondResult + ThirdResult + FourthResult + FifthResult;
TotalResult = Number(TotalResult);
document.getElementById("FinalResult").innerHTML = "Your final result is : " + TotalResult + "/5.";
}
if(TotalResult <=2){
    document.getElementById("FailedResult").innerHTML = "You failed the test!";
}
else if (TotalResult >=3){
    document.getElementById("FailedResult").innerHTML = "You passed the test!";
}
