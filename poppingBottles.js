var invested = 22;

var popCost = 2;
var capsPerBottle = 4;
var bottlesPerBottle = 2;
var bottleStart = invested / popCost; // 5
var capsCount = invested / popCost;  // 5
var totalBottles = 0;
var recycle = 0;
var restCountBottles = 0;

function bottlesBack(invested) {
    while (bottleStart >= 2){
        var bottlesToRedeem = bottleStart + restCountBottles;
        restCountBottles = bottlesToRedeem % bottlesPerBottle;
        var i2 = bottlesToRedeem - restCountBottles;
        recycle = i2 / bottlesPerBottle;
        totalBottles += recycle;
        bottleStart = bottleStart - i2 + recycle;
    }
    console.log(restCountBottles);
    console.log("Total bottles: ", totalBottles + (invested / popCost));
}

bottlesBack(invested);