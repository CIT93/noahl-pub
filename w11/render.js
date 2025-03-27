import { FORM, TABLE } from "./global.js"
import { localSave } from "./storage.js";

const createTableHead = () => {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArray = ["Name", "House Size", "Member Count", "Food Evaluation", "Footprint", "Actions"];

    headingTextArray.forEach(function(text) {
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);

    return table;
}

const onUpdate = (data, index) => {
    data.splice(index, 1);
    localSave(data);
    renderTable(data);
}

const createTableButtons = (data, index) => {
    const rowButtons = document.createElement("td");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    editButton.textContent = "Edit";
    deleteButton.textContent = "Del";

    // Didn't change variable names so luckily this didn't need an update :)
    editButton.addEventListener('click', () => {
        FORM.firstName.value = data[index].firstName;
        FORM.lastName.value = data[index].lastName;
        FORM.houseSize.value = data[index].houseSize;
        FORM.houseHoldMembers.value = data[index].houseHoldMembers;
        FORM.foodEval.value = data[index].foodEvaluation;

        onUpdate(data, index);
    });

    deleteButton.addEventListener('click', () => {
        onUpdate(data, index);
    });

    rowButtons.appendChild(editButton);
    rowButtons.appendChild(deleteButton);

    return rowButtons;
}

const createTableBody = data => {
    const tableBody = document.createElement("tbody");
    const ignoredValues = ["lastName", "houseHoldPoints", "houseSizePoints", "foodPoints"];

    data.forEach((submittedData, index) => {
        const tr = document.createElement("tr");

        for (const [key, value] of Object.entries(submittedData)) {
            console.log(`key: ${key}, value: ${value}`);

            if (!ignoredValues.includes(key)) {
                console.log(`Building on ${key}`);

                const td = document.createElement("td");
                td.textContent = value;
                tr.appendChild(td);
            }
        }

        const rowButtons = createTableButtons(data, index);
        tr.appendChild(rowButtons);
        tableBody.appendChild(tr);
    });

    console.log(typeof(tableBody));
    return tableBody;
}

const renderTable = data => {
    TABLE.textContent = "";
    if (data.length > 0) {
        const table = createTableHead();
        const tableBody = createTableBody(data);
    
        table.appendChild(tableBody);
        TABLE.appendChild(table);
    }
}

export { renderTable };