// function getSum(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum=sum+i;
        
//     }
//     return sum;
// }
// let str=["hi","hello","bye","!"];
// function concat(str){
//     let result="";
//     for(let i=0; i<str.length;i++){
//         result=result+str[i];
//     }
//     return result;
// }
//arrow function:-
// const num =(n)=> {
//   return  (n*n);
// }
// //setInterval and setTimeout
// let id=setInterval(()=>{
//   console.log("good morning");
// },2000);
// setTimeout(()=>{
//     clearTimeout(id);
//     console.log("clear ");
// },10000);

//array method;
//let intial=[2,3,4,6,8,0];
// let final=intial.reduce((res,el)=>{
//     console.log(res);
//    return res+el;
// });
// console.log(final);
//let isEven =intial.filter((el)=>{
   // return el%2==0});
// let double=intial.map((el)=>{
//     return el*2;
// });
// let checkmuloftwo=intial.every((el)=>{
//    return  el%10==0;

// });
// console.log(checkmuloftwo);
// let min=intial.reduce((min,el)=>{
//     if(min<el){
//         return min;
//     }
//     else{
//         return el;
//     }
// });
// console.log(min);
/////////this keyword///////////
// const student = {
//    name:"seema",
//    eng:34,
//    maths:34,
//    phy:23,
//    getAvg(){
//       let avg=this.eng+this.maths+this.phy/3;
//       console.log(avg);
//    }

// }
////////////////////try and catch////////////
// console.log("hello");
// console.log("hello");
// //let a=3;
// try{
//    console.log(a);  
// }catch{
//    console.log("this is an erroe,...");
//    console.log("a");
// }
// console.log("hello1");
////////////arrow function///////////////
// const sum =(a,b)=>{
//    return a+b;
// };
// const cube=(n)=>(n*n*n);
// const power=(a,b)=>a**b;
// setTimeout(()=>{console.log("i love you")},4000);
// console.log("you aree my bhess");
// let id1=setInterval(() => {
//    console.log("hello world");
// }, 2000);
// console.log(id1);
// console.log("clear");
// const student={
//    name:"seema",
//    age:23,
//    rollno:57,
//    getname1:function(){
//     console.log(this);
//     return this.age;
//    },
//    getname2:() => {
//       console.log(this);
//       return this.age;

//    },
//    get:function(){
//       setTimeout(()=>{
//          console.log(this);
//       },2000);
//    },
//    get2:function(){
//       setTimeout(function(){
//          console.log(this);
//       },1000);
//    }
// }
// let  arr=[1,2,3,4,5];
// let print=function(el){
//    console.log(el);
// }
// arr.forEach(print);

// arr.forEach(function(el){
//    console.log(el);
// });
// let  nums =[1,2,3,4,5,34,34,56,78];
// let double =nums.map((el)=>{
//    return el*2;
// }
// );
// let even = nums.filter(
//    (el)=>{
//       return el%2==0;
//    }
// );
// let greaternum =nums.filter(
//    (student)=>{
//       return student>=34;
//    }
// );

// let bool =[2,3,4,6,8].every((el)=>{
//    return el%2==0;
// })
// let arr =[1,2,3,4,5,6];
// let finalValue = arr.reduce((acc,el)=>{
//    console.log(acc);
//    return acc+el;
// });
// console.log(finalValue);
// function sum(b,a=2){
// return a+b;
// }
// sum(3);
// let arr =[1,2,3,45,6,7,8];
// Math.min(...arr);
// Math.max(...arr);
// console.log("seeema");
// console.log(..."seema");
// console.log(...arr);
// console.log(1,2,3,4);
///////////////////spread//////////////
// const person={
// mail:"seemakashyap@gmail.com",
// password:"abcd"
// };
// const datacopy ={...person,id:1,country:"india"};
// let even=[2,4,6,8];
// let odd=[1,3,5,7,9];
// let nums=[...even,...odd];
/////10-05-2024/////
// let h1 =document.querySelector("h1");
// console.dir(h1.innerText);
// h1.innerText = h1.innerText + "  from apna college";

// let divs =document.querySelectorAll(".box");
// let ind =1;
// for (div of divs) {
//    div.innerText =`unique number is ${ind}`;
//    ind++;
// }
// divs[0].innerText="first unique numb 1";
// divs[1].innerText="first unique numb 2";
// divs[2].innerText="first unique numb 3";
// let div =document.querySelector("div");
// console.dir(div);
// let id =div.getAttribute("id");
// console.dir(id);
// let naam = document.querySelector("div");
// console.log(naam.getAttribute("name"));
//  let para= document.querySelector("p");
//   console.log(para.setAttribute("class","newclass"));
// let divs =document.querySelector("div");
// // // div.style.backgroundColor = "green";
// // // div.style.fontSize ="100px";
// // divs.style.visibility ="hidden";
//  divs.innerText ="hello ";
// let newbtn = document.createElement("button");
// newbtn.innerText ="click me!";
//  newbtn.style.fontSize="100px";
// console.log(newbtn);
// let div = document.querySelector("div");
// div.before(newbtn);
// let para =document.querySelector("p");
// para.after(newbtn);
// let para = document.querySelector("p");
// let btn =document.querySelector("#btn");
// btn.onclick =()=>{
// console.log("this is a button");
// let ind =24;
// ind++;
// console.log(ind);
// };
// let divs =document.querySelector("div");

// divs.onmouseover=(evt)=>{
//    // console.log(e);
// console.log(evt.type);
// console.log(evt.clientX,evt.clientY);
// };
//////////////////////////////////toggle light/dark mode//////////////////////////////////////////
// let btn=document.querySelector("#btn");
// let body =document.querySelector("body");
// let currmode= "light";
// btn.addEventListener("click",()=>{
// if(currmode==="light"){
//    currmode="dark";
//    body.classList.add("dark");
//    body.classList.remove("light"); 
// }
// else{
//    currmode="light";
//    body.classList.add("light");
//    body.classList.remove("dark"); 
// }
// console.log(currmode);
// });
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
