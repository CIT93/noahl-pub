const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpDataArray = []

function determineHouseSizePts(size) {
    let houseSizePoints = 0;
        if(size === "large") {
            houseSizePoints = 10;
        } else if(size === "medium") {
            houseSizePoints = 7;
        } else if (size === "small") {
            houseSizePoints = 4;
        } else if (size === "apt") {
            houseSizePoints = 2;
        }
        return houseSizePoints;
    }

function determineHouseHoldPts(numberInHousehold) {
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
        houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
        houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
        houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
        houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
        houseHoldPoints = 6;
    } else if (numberInHousehold === 6) {
        houseHoldPoints = 4;
    } else if (numberInHousehold > 6) {
        houseHoldPoints = 2;
    }
    return houseHoldPoints;
}

function start(firstName, lastName, houseSize, houseHoldMembers) {
    const houseSizePTS = determineHouseSizePts(houseSize);
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const total = houseHoldPTS + houseSizePTS;
    
    const cfpDataObject = {
        firstName: firstName,
        lastName: lastName,
        houseHoldMembers: houseHoldMembers,
        houseSize: houseSize,
        houseHoldPts: houseHoldPTS,
        houseSizePts: houseSizePTS,
        total: total
    };

    cfpDataArray.push(cfpDataObject);
}

function displayOutput() {
    for(dataObject of cfpDataArray) {
        const newP = document.createElement("p");
        const newH2 = document.createElement("h2");
        const newH3 = document.createElement("h3");

        newH2.textContent = `${dataObject.firstName} ${dataObject.lastName}'s Carbon Footprint Score is ${dataObject.total}`;
        newH3.textContent = `Based on number in Household and Size of Home.`;
        newP.textContent = `This number is based on the number of members in the home ${dataObject.houseHoldMembers} (Score: ${dataObject.houseHoldPts})`;
        newP.textContent += ` and a ${dataObject.houseSize} size of home (Score: ${dataObject.houseSizePts})`;

        OUTPUT.appendChild(newH2);
        OUTPUT.appendChild(newH3);
        OUTPUT.appendChild(newP);
    }
}

FORM.addEventListener('submit', function(e) {
    e.preventDefault();

    
    const firstName = FORM.firstName.value;
    const lastName = FORM.lastName.value;
    const houseSize = FORM.houseSize.value;
    const houseHoldMembers = parseInt(FORM.houseHoldMembers.value);
    start(firstName, lastName, houseSize, houseHoldMembers);

    OUTPUT.innerHTML = "";
    FORM.reset();
    displayOutput();

    console.log(`${firstName} ${lastName}\nHouse Size: ${houseSize}\nMember Count: ${houseHoldMembers}`);
});