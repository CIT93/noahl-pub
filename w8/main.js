import { renderTable } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpDataArray = []

function start(firstName, lastName, houseSize, houseHoldMembers) {
    const houseSizePTS = determineHouseSizePts(houseSize);
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const total = houseHoldPTS + houseSizePTS;
    
    const cfpDataObject = {
        firstName: firstName,
        lastName: lastName,
        houseSize: houseSize,
        houseHoldMembers: houseHoldMembers,
        houseHoldPts: houseHoldPTS,
        houseSizePts: houseSizePTS,
        total: total
    };

    cfpDataArray.push(cfpDataObject);
}

FORM.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const firstName = FORM.firstName.value;
    const lastName = FORM.lastName.value;
    const houseSize = FORM.houseSize.value;
    const houseHoldMembers = parseInt(FORM.houseHoldMembers.value);
    
    OUTPUT.innerHTML = "";
    
    start(firstName, lastName, houseSize, houseHoldMembers)
    renderTable(cfpDataArray);
    
    FORM.reset();
});