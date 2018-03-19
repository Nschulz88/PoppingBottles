var invested = 40;

var popCost = 2;
var capsPerBottle = 4;
var bottlesPerBottle = 2;
var bottleStart = invested / popCost; // 5
var capsCount = invested / popCost;  // 5
var totalBottles = 0;
var recycle = 0;
var restCountBottles = 0;
var restCountCaps = 0;

function bottlesBack(invested) {
    while (bottleStart >= 2 || capsCount >= 4){
    
        var capsToRedeem = capsCount + restCountCaps;  // 5 + 0
        restCountCaps = capsToRedeem % capsPerBottle; // 1

        var capsAbleToRedeem = capsToRedeem - restCountCaps;  // 4
        var bottlesFromCaps = capsAbleToRedeem / capsPerBottle; // 1

        restCountBottles += bottlesFromCaps;

        var bottlesToRedeem = bottleStart + restCountBottles;  // 5 + 1 
        restCountBottles = bottlesToRedeem % bottlesPerBottle; // 1

        recycle = bottlesToRedeem / bottlesPerBottle;
        totalBottles += recycle + bottlesFromCaps;
        bottleStart = bottleStart - bottlesToRedeem + recycle + bottlesFromCaps;
        capsCount = capsCount - capsAbleToRedeem + bottlesFromCaps + recycle;
    }
    console.log(restCountBottles);
    console.log("Total bottles: ", totalBottles + (invested / popCost));
}

bottlesBack(invested);