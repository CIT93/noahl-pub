function houseSizeImpact(size) {
    console.log("Inside Block");
    let houseSizePoints = 0;
    if (size === "large") {
        houseSizePoints = 10;
    } else if (size === "medium") {
        houseSizePoints = 7;
    } else if (size === "small") {
        houseSizePoints = 4;
    } else if (size === "apt") {
        houseSizePoints = 2;
    }
    else {
        return houseSizePoints; // In the case of Edgecase
    }
    console.log(`For a ${size} size house, the carbon footprint would be equal to ${houseSizePoints} points`)
    return houseSizePoints;
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
    const houseSizePts = houseSizeImpact("large");
}

start();
// code worked :D