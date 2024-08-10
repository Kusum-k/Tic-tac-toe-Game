let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".rset");
let newButton=document.querySelector('.new');
let msgContainer=document.querySelector(".msg-container");
let message=document.querySelector(".msg");

let turnO=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    let turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerText="O";
            turnO=false;
            box.disabled=true;
            box.style.color="purple";
           
        }else{
            box.innerText="X";
            turnO=true;
            box.disabled=true;
            box.style.color="black";

        }
        checkWinner();

    });

});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;

    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    message.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner =()=>{
    for(let i of winPatterns){
        let pos1=boxes[i[0]].innerText;
        let pos2=boxes[i[1]].innerText;
        let pos3=boxes[i[2]].innerText;

        if(pos1!=""&& pos2!=""&& pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                showWinner(pos1);
            }
        }

        }
}
newButton.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);