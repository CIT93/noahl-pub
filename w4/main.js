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
    for (data of cfpData) {
        console.log(data);
        const output = document.getElementById("output");
        const newParagraph = document.createElement("p");
        const houseGrammarFormat = data[1] == "apt" ? `an Apartment` : `a ${data[1]} size house`;
        const pluralization = data[0] > 1 ? "members" : "member";
        newParagraph.textContent = `For ${houseGrammarFormat} with ${data[0]} ${pluralization} the Carbon Footprint score is ${data[4]} points`;
        output.appendChild(newParagraph);
    }
}

start(5, "large");
start(2, "medium");
start(1, "apt");
start(3, "medium");
start(2, "apt");
start(4, "large");

displayOutput();

// Shoutouts to github for not deploying the javascript file so I get to re-commit!!