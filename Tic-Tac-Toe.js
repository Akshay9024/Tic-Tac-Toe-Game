let boxes=document.querySelectorAll('.box');
let reset=document.querySelector('#resetButton');
let nG=document.querySelector('.newGame');
let mC=document.querySelector('.msg-container');
let win=document.querySelector('#msg');

let turn_0 = true;
let winnings=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log('Button is clicked');
        if (turn_0){
            box.innerText ='O';
            turn_0 =false;
        }else{
            box.innerText = 'X';
            turn_0 =true;
        }
        box.disabled = true;
        winnerCheck();
    });
});

let winnerCheck=()=>{
    for (let pattern of winnings){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if (pos1Val != '' && pos2Val != '' && pos3Val != ''){
            if (pos1Val===pos2Val && pos2Val===pos3Val){
                console.log(`Finally winner is ${pos1Val} 🏆`)
                showWinner(pos1Val)
            }
        }
    }
}

let showWinner=(winner)=>{
    win.innerText =`Congrats, Winner is "${winner}" 🏆`;
    mC.classList.remove('hide');
    buttonDisable();
}

let buttonDisable=()=>{
    for (let box of boxes){
        box.disabled =true;
    }
}
let buttonEnable=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText='';
    }
}

let resetGame=()=>{
    turn_0 = true;
    buttonEnable();
    mC.classList.add('hide');
}

nG.addEventListener('click',resetGame);
reset.addEventListener('click',resetGame);