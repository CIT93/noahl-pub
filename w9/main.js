import { renderTable } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import { FORM } from "./global.js";
import { localSave, cfpDataArray } from "./storage.js";

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

function validateField(e) {
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

function updateButton(easterEggCounter, color) {
    const button = document.getElementById("submitButton");
    const defaultColor = button.style.backgroundColor;
    const easterEggExists = document.getElementById("superSecretSettings") !== null;

    if (easterEggExists)
        document.getElementById("superSecretSettings").remove()

    if (easterEggCounter == 0)
        button.textContent = "Submit";
    else if (easterEggCounter < 3)
        button.textContent = "First and Last Name are required Fields.";
    else if (easterEggCounter < 4)
        button.textContent = "Okay, now you're just messing around.";
    else if (easterEggCounter < 5)
        button.textContent = "Please just enter your first and last name.";
    else if (easterEggCounter < 6)
        button.textContent = "What are you expecting a prize?";
    else if (easterEggCounter == 8) {
        button.textContent = "Alright, you win, here's a free ticket to the bahamas!";
        const superSecretSettings = document.createElement("img");
        superSecretSettings.id = "superSecretSettings";
        superSecretSettings.src = "https://i.etsystatic.com/38366575/r/il/49707e/6221896863/il_fullxfull.6221896863_huzi.jpg";
        FORM.appendChild(superSecretSettings);
    } else {
        button.textContent = "Welp, you missed it, too bad I guess.";
    }

    button.animate(
        { backgroundColor: [color, defaultColor] },
        { duration: 1000 }
    );
}

document.getElementById("firstName").addEventListener('blur', validateField);
document.getElementById("lastName").addEventListener('blur', validateField);

renderTable(cfpDataArray);

let counter = 0; // Ignore this I got a little too silly

FORM.addEventListener('submit', function(e) {
    e.preventDefault();

    const firstNameValidity = FORM.firstName.value !== "";
    const lastNameValidity = FORM.lastName.value !== "";

    if (firstNameValidity && lastNameValidity) {
        counter = 0;
        updateButton(counter, 'green');

        const firstName = FORM.firstName.value;
        const lastName = FORM.lastName.value;
        const houseSize = FORM.houseSize.value;
        const houseHoldMembers = parseInt(FORM.houseHoldMembers.value);
        
        start(firstName, lastName, houseSize, houseHoldMembers)
        localSave(cfpDataArray);
        renderTable(cfpDataArray);
        
        FORM.reset();
    } else {
        counter++;
        updateButton(counter, 'red');
    }
});