const cfpData = [];

function houseSizeImpact(houseSize) {
    let houseSizePoints = 0;
    if (houseSize === "large") {
        houseSizePoints = 10;
    } else if (houseSize === "medium") {
        houseSizePoints = 7;
    } else if (houseSize === "small") {
        houseSizePoints = 4;
    } else if (houseSize === "apt") {
        houseSizePoints = 2;
    }
    else {
        return houseSizePoints; // In the case of Edgecase
    }
    return houseSizePoints;
}

function houseHoldImpact(numberInHousehold) {
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
    return houseHoldPoints;
}

function start(numberInHousehold, houseSize) {
    const houseHoldPts = houseHoldImpact(numberInHousehold);
    const houseSizePts = houseSizeImpact(houseSize);
    const total = houseHoldPts + houseSizePts;
    cfpData.push([numberInHousehold, houseSize, houseHoldPts, houseSizePts, total]);
}

function displayOutput() {
    
}

start(5, "apt");
start(4, "large");
start(3, "medium");
start(2, "small");
start(1, "apt");

displayOutput();