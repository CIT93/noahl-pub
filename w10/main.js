import { renderTable } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import { FORM, FIRSTNAME, LASTNAME, SUBMITERROR } from "./global.js";
import { localSave, cfpDataArray } from "./storage.js";

const start = function(firstName, lastName, houseSize, houseHoldMembers) {
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

const validateField = function(e) {
    const field = e.target.value;
    const fieldId = e.target.id;
    const fieldError = document.getElementById(`${fieldId}Error`);

    if (field === "") {
        fieldError.textContent = `${fieldId} is required`;
        e.target.classList.add("invalid");
    } else {
        fieldError.textContent = "";
        e.target.classList.remove("invalid");
    }
}

FIRSTNAME.addEventListener('blur', validateField);
LASTNAME.addEventListener('blur', validateField);

renderTable(cfpDataArray);

FORM.addEventListener('submit', function(e) {
    e.preventDefault();
    if (FIRSTNAME.value !== "" && LASTNAME.value !== "") {
        SUBMITERROR.textContent = "";
        
        start(FIRSTNAME.value, LASTNAME.value, FORM.houseSize.value, parseInt(FORM.houseHoldMembers.value))
        localSave(cfpDataArray);
        renderTable(cfpDataArray);
        
        FORM.reset();
    } else {
        SUBMITERROR.textContent = "Form requires first name and last name";
    }
});

const add2 = function(...a) {
    return 2 + a(3);
}

const result = add2(1, 2, 3, 4);

// IIFE
const a = 3;

(function(a) {
    console.log(a);
})(a);