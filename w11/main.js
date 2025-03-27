import { renderTable } from "./render.js";
import { FORM, FIRSTNAME, LASTNAME, SUBMITERROR } from "./global.js";
import { localSave, cfpDataArray } from "./storage.js";
import { Footprint } from "./fp.js";

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
        
        const fpObj = new Footprint(FIRSTNAME.value, LASTNAME.value, FORM.houseSize.value, parseInt(FORM.houseHoldMembers.value), FORM.foodEval.value);
        cfpDataArray.push(fpObj);

        localSave(cfpDataArray);
        renderTable(cfpDataArray);
        
        FORM.reset();
    } else {
        SUBMITERROR.textContent = "Form requires first name and last name";
    }
});