let num = document.getElementById("text")
let num2 = document.getElementById("text-2")

let count=0
function one(){
 count+=1
 num.textContent = count
}

function two(){
    count+=2
    num.textContent = count
}

function three(){
    count+=3
    num.textContent = count
 }
 //for second scoreboard
 let guest =0
 function oneguest(){
    guest+=1
    num2.textContent = guest

   }

   function twoguest(){
    guest+=2
    num2.textContent = guest
   } 
   function threeguest(){
    guest+=3
    num2.textContent = guest
   } 

   //set the score 0

   function newgame(){
    count =0
    guest =0
    num.textContent = count
    num2.textContent = guest
   }
   