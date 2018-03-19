var invested = 40;

var popCost = 2;
var capsPerBottle = 4;
var bottlesPerBottle = 2;
var bottleStart = invested / popCost;
var capsCount = invested / popCost;
var totalBottles = 0;
var recycle = 0;
var restCountBottles = 0;
var restCountCaps = 0;

function bottlesBack(invested) {
    while (bottleStart >= 2 || capsCount >= 4){
    
        var capsToRedeem = capsCount;  
        restCountCaps = capsToRedeem % capsPerBottle;

        var capsAbleToRedeem = capsToRedeem - restCountCaps;
        var bottlesFromCaps = capsAbleToRedeem / capsPerBottle;
        // console.log("bottlesFromCaps: ", bottlesFromCaps);

        restCountBottles += bottlesFromCaps;

        var bottlesToRedeem = bottleStart + restCountBottles;
        restCountBottles = bottlesToRedeem % bottlesPerBottle;
        bottlesToRedeem = bottlesToRedeem - restCountBottles;


        recycle = bottlesToRedeem / bottlesPerBottle;
        // console.log("Recycle: ", recycle);
        totalBottles += recycle + bottlesFromCaps;
        bottleStart = bottleStart - bottlesToRedeem + recycle + bottlesFromCaps;
        capsCount = capsCount - capsAbleToRedeem + bottlesFromCaps + recycle;
    }
    // console.log(restCountBottles);
    console.log("Total bottles: ", totalBottles + (invested / popCost));
}

bottlesBack(invested);