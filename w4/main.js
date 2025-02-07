function houseSizeImpact(size) {
    console.log("Inside Block");
    if (size === "large") {
        carbonFootprintPoints += 10;
    } else if (size === "medium") {
        carbonFootprintPoints += 7;
    } else if (size === "small") {
        carbonFootprintPoints += 4;
    } else if (size === "apt") {
        carbonFootprintPoints += 2;
    }
    else {
        console.log("Points did not update"); // Edgecase
        return; // If points don't update then skip the following message since we know points didn't update
    }
    console.log(`The carbon footprint has updated to ${carbonFootprintPoints}`)
}

function houseHoldImpact(numberInHousehold) {
    console.log("Inside Block");
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
        houseHoldPoints = 14;
    }
    else if (numberInHousehold === 2) {
        houseHoldPoints = 12;
    }
    else if (numberInHousehold === 3) {
        houseHoldPoints = 10;
    }
    else if (numberInHousehold === 4) {
        houseHoldPoints = 8;
    }
    else if (numberInHousehold === 5) {
        houseHoldPoints = 6;
    }
    else if (numberInHousehold === 6) {
        houseHoldPoints = 4;
    }
    else if (numberInHousehold > 6) {
        houseHoldPoints = 2;
    }
    else {
        return houseHoldPoints; // In the case of Edgecase
    }
    console.log(`With a household of ${numberInHousehold} members, the carbon footprint would be equal to ${houseHoldPoints} points`)
    return houseHoldPoints;
}

console.log("Global Scope");
function start() {
    const houseHoldPts = houseHoldImpact(5);
    //houseSizeImpact("large");
}

start();

// Refactor the codebase so it's using less variables to make functions more easily repeatable