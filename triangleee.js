
let a;
let b; 
let c;

function GetSideA(){

 document.getElementById('AButton').onclick = function(){

 b = document.getElementById('BTextBox').value;
 b = Number(b);

 c = document.getElementById('CTextBox').value;
 c = Number(c);

 a = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));

 document.getElementById('AAnswer').innerHTML = 'Side AB is : ' + a;
 }
}

 GetSideA();

 function GetSideB(){

    document.getElementById('BButton').onclick = function(){
   
    a = document.getElementById('ATextBox').value;
    a = Number(a);
   
    c = document.getElementById('CTextBox').value;
    c = Number(c);
   
    b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
   
    document.getElementById('BAnswer').innerHTML = 'Side BC is : ' + b;
    }
   }
    GetSideB();
   
    function GetSideC(){

        document.getElementById('CButton').onclick = function(){
       
        a = document.getElementById('ATextBox').value;
        a = Number(a);
       
        b = document.getElementById('BTextBox').value;
        b = Number(b);
       
        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
       
        document.getElementById('CAnswer').innerHTML = 'Side CA is : ' + c;
        }
       }
        GetSideC();
























