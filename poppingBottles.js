var invested = 10;

var popCost = 2;
var bottlesPerCap = 0.25;
var bottlesPerBottle = 0.5;
var bottleStart = invested / popCost; // 5
var capsCount = invested / popCost;
var totalBottles = 0;

function bottlesBack(invested) {
    var restCountBottles = bottleStart % 2;  // 1
    var redeemedBottles = bottleStart - restCountBottles;  // 4
    var recycle = redeemedBottles * bottlesPerBottle;  // 2
    capsCount += recycle;
    totalBottles += recycle + bottleStart;

    var newCount = recycle + restCountBottles;

    console.log(newCount);
    console.log(capsCount);


    




    console.log("Total bottles: " + totalBottles);
}

bottlesBack(invested);