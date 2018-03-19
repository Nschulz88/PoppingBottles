var invested = process.argv.slice(2);

var popCost = 2;
var capsPerBottle = 4;
var bottlesPerBottle = 2;
var bottleStart = invested / popCost;
var capsCount = invested / popCost;
var totalBottles = 0;
var recycle = 0;
var restCountBottles = 0;
var restCountCaps = 0;
var bottlesRecycled = 0;
var capsRecycled = 0;

function bottlesBack(invested) {
    while (bottleStart >= 2 || capsCount >= 4){
    // not sure where to put the capsRecycled += to count the caps being recycleds

        var capsToRedeem = capsCount;  
        restCountCaps = capsToRedeem % capsPerBottle;

        var capsAbleToRedeem = capsToRedeem - restCountCaps;
        var bottlesFromCaps = capsAbleToRedeem / capsPerBottle;

        restCountBottles += bottlesFromCaps;

        var bottlesToRedeem = bottleStart + restCountBottles;
        restCountBottles = bottlesToRedeem % bottlesPerBottle;
        bottlesToRedeem = bottlesToRedeem - restCountBottles;

        recycle = bottlesToRedeem / bottlesPerBottle;
        totalBottles += recycle + bottlesFromCaps;
        bottlesRecycled += recycle;
        bottleStart = bottleStart - bottlesToRedeem + recycle + bottlesFromCaps;
        capsCount = capsCount - capsAbleToRedeem + bottlesFromCaps + recycle;
    }
    // console.log(capsRecycled); // Cannot figure out how to get the caps Recycled!!
    console.log("TOTAL BOTTLES: ", totalBottles + (invested / popCost) + "\n" + "REMAINING BOTTLES: " + bottleStart +"\n" + "REMAINING CAPS: " + capsCount + "\n" + "TOTAL EARNED: \n   BOTTLES: " + bottlesRecycled + "\n" + "   CAPS: " + capsRecycled);
}

bottlesBack(invested);