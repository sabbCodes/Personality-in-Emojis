const stageEl = document.getElementById("stage");
const inputEl = document.getElementById("input-field");
const unshiftBtn = document.getElementById("unshift-btn");
const shiftBtn = document.getElementById("shift-btn");
const pushBtn = document.getElementById("push-btn");
const popBtn = document.getElementById("pop-btn");

let myEmojis = [];

function renderInput(){
    let tryIt = "";
    for (let i = 0; i < myEmojis.length; i++){
        tryIt += `<span>${myEmojis[i]}</span>`;
        stageEl.innerHTML = tryIt;
    }
    inputEl.value = "";
}

unshiftBtn.addEventListener("click", function(){
    myEmojis.unshift(inputEl.value);
    renderInput();
})

shiftBtn.addEventListener("click", function(){
    myEmojis.shift();
    renderInput();
})

pushBtn.addEventListener("click", function(){
    myEmojis.push(inputEl.value);
    renderInput();
})

popBtn.addEventListener("click", function(){
    myEmojis.pop();
    renderInput();
})

//"🚊", "hey", "🥫"
// we can also use this method to render the output in the div
// const tryIt = document.createElement("span");
// tryIt.textContent = myEmojis[i];
// stageEl.append(tryIt);