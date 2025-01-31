let houseHoldCarbonImpact = 0;

function houseHoldCarbonCalculator(numberInHousehold) {
    // Set carbon impact so it doesn't infinitely add
    if (numberInHousehold === 1) {
        houseHoldCarbonImpact = 14;
    }
    else if (numberInHousehold === 2) {
        houseHoldCarbonImpact = 12;
    }
    else if (numberInHousehold === 3) {
        houseHoldCarbonImpact = 10;
    }
    else if (numberInHousehold === 4) {
        houseHoldCarbonImpact = 8;
    }
    else if (numberInHousehold === 5) {
        houseHoldCarbonImpact = 6;
    }
    else if (numberInHousehold === 6) {
        houseHoldCarbonImpact = 4;
    }
    else if (numberInHousehold > 6) {
        houseHoldCarbonImpact = 2;
    }
    else {
        console.log("Points did not update"); // Edgecase
    }

    console.log(`With a household of ${numberInHousehold} members, the estimated carbon points score would equate to ${houseHoldCarbonImpact} points`);
}

houseHoldCarbonCalculator(3);
houseHoldCarbonCalculator(4);

let houseSizeCarbonImpact = 0;
function houseSizeCarbonCalculator(houseSize) {
    if (houseSize === "Large") {
        houseSizeCarbonImpact = 10;
    }
    else if (houseSize === "Medium") {
        houseSizeCarbonImpact = 7;
    }
    else if (houseSize === "Small") {
        houseSizeCarbonImpact = 4;
    }
    else if (houseSize === "Apartment") {
        houseSizeCarbonImpact = 2;
    }
    else {
        console.log("Points did not update"); // Edgecase
    }

    // Comparison so grammer is correct :)
    console.log(`With ${houseSize === "Apartment" ? "an Apartment" : `a ${houseSize} house`}, the estimated carbon points score would equate to ${houseSizeCarbonImpact} points`);
}

houseSizeCarbonCalculator("Large");
houseSizeCarbonCalculator("Apartment");