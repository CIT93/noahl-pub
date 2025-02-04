function houseSizeImpact(size) {
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
    if (numberInHousehold === 1) {
        carbonFootprintPoints += 14;
    }
    else if (numberInHousehold === 2) {
        carbonFootprintPoints += 12;
    }
    else if (numberInHousehold === 3) {
        carbonFootprintPoints += 10;
    }
    else if (numberInHousehold === 4) {
        carbonFootprintPoints += 8;
    }
    else if (numberInHousehold === 5) {
        carbonFootprintPoints += 6;
    }
    else if (numberInHousehold === 6) {
        carbonFootprintPoints += 4;
    }
    else if (numberInHousehold > 6) {
        carbonFootprintPoints += 2;
    }
    else {
        console.log("Points did not update"); // Edgecase
        return;
    }
    console.log(`The carbon footprint has updated to ${carbonFootprintPoints}`)
}

let carbonFootprintPoints = 0;
// The console will not log anything

houseHoldImpact(5);
houseSizeImpact("large");