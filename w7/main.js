import { renderTable } from "./render.js";

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

function start(houseSize, houseHoldMembers) {
    const houseSizePTS = determineHouseSizePts(houseSize);
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const total = houseHoldPTS + houseSizePTS;
    
    const cfpDataObject = {
        houseHoldMembers: houseHoldMembers,
        houseSize: houseSize,
        houseHoldPts: houseHoldPTS,
        houseSizePts: houseSizePTS,
        total: total
    };

    cfpDataArray.push(cfpDataObject);
}

FORM.addEventListener('submit', function(e) {
    e.preventDefault();
    FORM.reset();

    const firstName = FORM.firstName.value;
    const lastName = FORM.lastName.value;
    const houseSize = FORM.houseSize.value;
    const houseHoldMembers = parseInt(FORM.houseHoldMembers.value);

    OUTPUT.innerHTML = "";
    
    start(houseSize, houseHoldMembers)
    renderTable(cfpDataArray);
});