var invested = 20;

var popCost = 2;
var bottlesPerCap = 0.25;
var bottlesPerBottle = 0.5;
var bottlesReceived = 0;

function bottlesBack(invested) {
    bottlesReceived = invested / popCost;
    console.log(bottlesReceived);
}

bottlesBack(invested);