let quiz = document.querySelector(".quiz");
let result = document.querySelector(".result");
let quest = document.querySelector(".quest");
let ans = document.querySelector(".ans");
let submit = document.querySelector(".submit");
let next = document.querySelector(".next");
let score = document.querySelector(".score");
let reset = document.querySelector(".reset");
let prevScore = ~~localStorage.getItem('.score');
// score.textContent = `Score : ${prevScore}`;

const question = function(){
    let a = Math.floor(Math.random()*7) + Math.floor(Math.random()*6)  
    let b = Math.floor(Math.random()*7) + Math.floor(Math.random()*6)
    let data = {value1:a, value2:b}
    return data
}
// console.log(question.value1);
// console.log(question.value1);

function answer() {

    let {value1, value2} = question()
    let que1 = value1
    let que2 = value2
    let operand = ['+','-','*', '/']
    let operandSelector = Math.floor(Math.random()*operand.length);
    let ans = `${que1} ${operand[operandSelector]} ${que2}`
    quest.textContent = `${ans} = ?`;
    return ans;
}
// let queVal = answer(question)

submit.addEventListener('click', (e) => {
    e.preventDefault()
    let validAns = eval(answer(question))
    console.log(question, ans);
    console.log(ValidAns);
    if(ans.value !== validAns){
        result.textContent = `Oops! Correct ans is ${validAns}`;
    }
    let scr = prevScore + 5;
    prevScore = scr;
    result.textContent = `Correct`;
    localStorage.setItem("score", prevScore);
    score.textContent = `Score : ${prevScore}`;
    answer(question)
    // console.log(answer(question));
})