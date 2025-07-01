let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let score_you = document.querySelector(".score-you");
let score_comp = document.querySelector(".score-comp");
let result = document.querySelector(".result");
let comp = 0;
let you = 0;
score_comp.innerText = `${comp}`;
score_you.innerText = `${you}`;

const reset = () => {

};

const random = () => {
    return Math.floor(Math.random() * 3);
};

const win = (myChoice, compChoice) => {
    you++;
    score_you.innerText = `${you}`;
    result.setAttribute("class", "result win");
    if(compChoice == 0)
        result.innerText = `You Win.${myChoice} beats Rock.`;
    else if(compChoice == 1)
        result.innerText = `You Win.${myChoice} beats Paper.`;
    else
        result.innerText = `You Win.${myChoice} beats Scissor.`;
};

const lose = (myChoice, compChoice) => {
    comp++;
    score_comp.innerText = `${comp}`;
    result.setAttribute("class", "result lose");
    if(compChoice == 0)
        result.innerText = `You lost.Rock beats ${myChoice}`;
    else if(compChoice == 1)
        result.innerText = `You lost.Paper beats ${myChoice}`;
    else
        result.innerText = `You lost.Scissor beats ${myChoice}`;
};

const draw = () => {
    result.setAttribute("class", "result draw");
    result.innerText = `It was Draw.`;
};

// 0 = rock
// 1 = paper
// 2 = scissor

rock.addEventListener("click", () => {
    let ran = random();
    if(ran == 0)
        draw();
    else if(ran == 1)
        lose("Rock", ran);
    else
        win("Rock", ran);
});

paper.addEventListener("click", () => {
    let ran = random();
    if(ran == 0)
        win("Paper", ran);
    else if(ran == 1)
        draw();
    else
        lose("Paper", ran);
});

scissor.addEventListener("click", () => {
    let ran = random();
    if(ran == 0)
        lose("Scissor", ran);
    else if(ran == 1)
        win("Scissor", ran);
    else
        draw();
});