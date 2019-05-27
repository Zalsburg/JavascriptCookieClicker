let ghostButton = document.getElementById("ghostButton");
let ghostCount = document.getElementById("ghostCount");
let history = document.getElementById("history");
let upgrades = document.getElementById("upgrades");
let upgradesList = document.getElementById("upgradesList");
let extraClicker = document.getElementById("extraClicker");
let deathMachine = document.getElementById("deathMachine");

ghostButton.onclick = ghostClicked;

var noGhosts = 0;
var clickGhost = 0;
function ghostClicked(){
    noGhosts++;
    clickGhost++;
    ghostCount.innerHTML = noGhosts;
    if (clickGhost == 1){
        // let numberClicks = document.createElement("div");
        // numberClicks.appendChild(document.createTextNode(noGhosts));
        history.appendChild(document.createTextNode("Number of clicks: "));
        history.appendChild(document.createTextNode(clickGhost));
    }
    else {
        history.lastChild.remove();
        history.appendChild(document.createTextNode(clickGhost));
    }
    
};

extraClicker.disabled = true;
deathMachine.disabled = true;

function showExtraClicker(){
    if (noGhosts >= 10){
        extraClicker.disabled = false;
    }
}

function showDeathMachine(){
    if (noGhosts >= 20){
        deathMachine.disabled = false;
    }
}

setInterval(showExtraClicker, 1);
setInterval(showDeathMachine, 1);



// setTimeout(function(){
//     console.log("boo!");
// }, 3500);

// setInterval(function(){
//     console.log("Tick")
// }, 1000);

// var myTodo = {
//     title: "Hello World",
//     completed: false
// };

// var myTodos = [
//     myTodo,
//     {
//         bob: "Bob's Todos"
//     },
//     "hello world"
// ];

// console.log(myTodo);

// console.log(myTodos);