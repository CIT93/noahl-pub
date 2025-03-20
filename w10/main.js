import { renderTable } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import { FORM, FIRSTNAME, LASTNAME, SUBMITERROR } from "./global.js";
import { localSave, cfpDataArray } from "./storage.js";

const start = (...cfpObjects) => {
    const houseSizePTS = determineHouseSizePts(cfpObjects[2]);
    const houseHoldPTS = determineHouseHoldPts(cfpObjects[3]);
    const total = houseHoldPTS + houseSizePTS;
    
    const cfpDataObject = {
        firstName: cfpObjects[0],
        lastName: cfpObjects[1],
        houseSize: cfpObjects[2],
        houseHoldMembers: cfpObjects[3],
        houseHoldPts: houseHoldPTS,
        houseSizePts: houseSizePTS,
        total: total
    };

    cfpDataArray.push(cfpDataObject);
}

const validateField = e => {
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

FORM.addEventListener('submit', e => {
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