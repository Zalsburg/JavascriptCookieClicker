let ghostButton = document.getElementById("ghostButton");
let ghostCount = document.getElementById("ghostCount");
let history = document.getElementById("history");
let upgrades = document.getElementById("upgrades");
let upgradesList = document.getElementById("upgradesList");
let extraClicker = document.getElementById("extraClicker");
let deathMachine = document.getElementById("deathMachine");
let actionSummary = document.getElementById("actionSummary");
let summary = document.getElementById("summary");
let totalClickers = document.getElementById("totalClickers");
let totalDeaths = document.getElementById("totalDeaths");
let clickerCost = document.getElementById("clickerCost");
let deathCost = document.getElementById("deathCost");

ghostButton.onclick = ghostClicked;

var noGhosts = 0;
var clickGhost = 0;
var noClickers = 0;
var noDeaths = 0;

function ghostClicked(){
    noGhosts++;
    clickGhost++;
    ghostCount.innerHTML = noGhosts;
    if (clickGhost == 1){
        // let numberClicks = document.createElement("div");
        // numberClicks.appendChild(document.createTextNode(noGhosts));
        let numberClicks = document.createElement("div");
        numberClicks.setAttribute("class", "numberClicks");
        history.appendChild(numberClicks);
        numberClicks.appendChild(document.createTextNode("Number of clicks: "));
        numberClicks.appendChild(document.createTextNode(clickGhost));
    }
    else {
        history.lastChild.lastChild.remove();
        history.lastChild.appendChild(document.createTextNode(clickGhost));
    }
};

extraClicker.disabled = true;
deathMachine.disabled = true;

setInterval(showExtraClicker, 1);
setInterval(showDeathMachine, 1);

clickerPrice = 10;
deathPrice = 20;

function showExtraClicker(){
    if (noGhosts >= clickerPrice){
        extraClicker.disabled = false;
    }
    else{
        extraClicker.disabled = true;
    }
}

function showDeathMachine(){
    if (noGhosts >= deathPrice){
        deathMachine.disabled = false;
    }
    else{
        deathMachine.disabled = true;
    }
}

extraClicker.onclick = extraClickerClicked;
deathMachine.onclick = deathMachineClicked;

function extraClickerClicked(){
    noClickers++;
    noGhosts = noGhosts - clickerPrice;
    ghostCount.innerHTML = noGhosts;
    clickGhost = 0;
    clickerPrice = Math.round(clickerPrice * 1.5);
    clickerCost.innerHTML = clickerPrice;

    setInterval(function(){
        noGhosts++;
        ghostCount.innerHTML = noGhosts;
    }, 5000);

    let clickerBuy = document.createElement("div");
    clickerBuy.setAttribute("class", "clickerBuy");
    history.appendChild(clickerBuy);
    clickerBuy.appendChild(document.createTextNode("Purchased Clicker"));
    
    totalClickers.innerHTML = noClickers;
}

function deathMachineClicked(){
    noDeaths++;
    noGhosts = noGhosts - deathPrice;
    ghostCount.innerHTML = noGhosts;
    clickGhost = 0;
    deathPrice = Math.round(deathPrice * 2);
    deathCost.innerHTML = deathPrice;

    setInterval(function(){
        noGhosts++;
        ghostCount.innerHTML = noGhosts;
    }, 1000);
    let deathBuy = document.createElement("div");
    deathBuy.setAttribute("class", "deathBuy");
    history.appendChild(deathBuy);
    deathBuy.appendChild(document.createTextNode("Purchased Spookier Ghost"));

    totalDeaths.innerHTML = noDeaths;
}

// if (noGhosts < 10){
//     showExtraClicker.disabled = true;
//}



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