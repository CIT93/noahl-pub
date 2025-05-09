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

        const fpObj = new Footprint(
            FIRSTNAME.value, 
            LASTNAME.value, 
            e.target.houseSize.value, 
            parseInt(e.target.houseHoldMembers.value), 
            e.target.foodEval.value, 
            e.target.foodSource.value,
            parseInt(e.target.waterConsum.value)
        );

        cfpDataArray.push(fpObj);
        localSave(cfpDataArray);
        renderTable(cfpDataArray);

        FORM.reset();
    } else {
        SUBMITERROR.textContent = "Form requires first name and last name";
    }
});

// Async Code Along

// Basic Setup/Example
// let pizza;
//
// function orderPizza() {
//     console.log("Order pizza");
//     setTimeout(() => { // Async function
//         pizza = "This is a pizza";
//         console.log(`${pizza}: Pizza is ready`)
//     }, 2000)
//     console.log("Pizza was ordered");
// }
//
// orderPizza()
// console.log("Call John Lastname")
// console.log(`Eat ${pizza}`)

// Callback Example
// function orderPizza(callback) {
//     setTimeout(() => {
//         const pizza = `This is a pizza`;
//         callback(pizza);
//     }, 2000);
// }
//
// function pizzaReady(pizza) {
//     console.log(`Eat ${pizza}`);
// }
//
// orderPizza(pizzaReady);
// console.log("Call John Lastname");

// Callback Hell:
// thing(() => {
//     thingAgain(() => {
//         thingAgainAgain(() => {
//             thingAgainAgainAgain()
//         })
//     })
// })