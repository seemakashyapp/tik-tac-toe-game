//////////////////////////////////tic tac toe game ////////////////////////////////////////////////////
let boxes =document.querySelectorAll(".box");
let reset =document.querySelector("#btn");
let newgame =document.querySelector("#newbtn");
let msgcontainer =document.querySelector(".msg-container");
let msg =document.querySelector("#msg");

let turnO= true;//playerx,player0
const winPatterns = [
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,6],
   [6,7,8],
];
const resetgame =()=>{
turnO =true;
enabledboxes();
msgcontainer.classList.add("hide");
};
 boxes.forEach((box) => {
   box.addEventListener("click",() => {
      
      if(turnO){
         box.innerText="O";
         turnO=false;
      }
      else{
         box.innerText="X";
         turnO=true;
      }
       box.disabled=true;
       checkWinner();
   });
});
const enabledboxes =()=>{
   for(let box of boxes){
  box.disabled =false;
  box.innerText="";
   }
};
const disabledboxes =()=>{
   for(let box of boxes){
  box.disabled =true;
   }
};
const showWinner =(winner)=>{
  msg.innerText = `Congratulation ,Winner is  ${winner}`;
  msgcontainer.classList.remove("hide");
  disabledboxes();
};
const checkWinner =()=>{
   for( let pattern of winPatterns){
     let pos1Val= boxes[pattern[0]].innerText;
     let pos2Val = boxes[pattern[1]].innerText;
     let pos3Val = boxes[pattern[2]].innerText;
     if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
      if(pos1Val=== pos2Val && pos2Val=== pos3Val){
        
         showWinner(pos1Val);
      }
     }
   }
  
};
newbtn.addEventListener("click",resetgame);
btn.addEventListener("click",resetgame);
