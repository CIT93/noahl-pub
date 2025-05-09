import { renderTable } from "./render.js";
import { FORM, FIRSTNAME, LASTNAME, WATERCONSUMPTION, SUBMITERROR } from "./global.js";
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

const tagCheckbox = e => {
    const dishWasher = document.getElementById("dishWash");
    dishWasher.disabled = false;

    if (e.target.value === "0")
        dishWasher.disabled = true;
}

FIRSTNAME.addEventListener('blur', validateField);
LASTNAME.addEventListener('blur', validateField);
WATERCONSUMPTION.addEventListener('click', tagCheckbox)

renderTable(cfpDataArray);

FORM.addEventListener('submit', e => {
    e.preventDefault();
    if (FIRSTNAME.value !== "" && LASTNAME.value !== "") {
        SUBMITERROR.textContent = "";

        const fpObj = new Footprint(
            FIRSTNAME.value, 
            LASTNAME.value, 
            e.target.houseSize.value, 
            parseInt(e.target.houseHoldMembers.value), 
            e.target.foodEval.value, 
            e.target.foodSource.value,
            parseInt(e.target.waterConsum.value),
            e.target.homePurchase.value,
            e.target.washer.checked
        );

        cfpDataArray.push(fpObj);
        localSave(cfpDataArray);
        renderTable(cfpDataArray);

        FORM.reset();
    } else {
        SUBMITERROR.textContent = "Form requires first name and last name";
    }
});