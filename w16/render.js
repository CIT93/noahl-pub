import { FORM, TABLE } from "./global.js"
import { localSave } from "./storage.js";

const createTableHead = () => {
    const table = document.createElement("table");
    table.setAttribute("id", "table-output");

    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArray = ["First Name", "Last Name", "Footprint", "Actions"];

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
    // I might be going crazy but this is working just fine (???)
    editButton.addEventListener('click', () => {
        FORM.firstName.value = data[index].firstName;
        FORM.lastName.value = data[index].lastName;
        FORM.houseSize.value = data[index].houseSize;
        FORM.houseHoldMembers.value = data[index].houseHoldMembers;
        FORM.foodEval.value = data[index].foodEvaluation;
        FORM.foodSource.value = data[index].foodSource;
        FORM.waterConsum.value = data[index].waterConsumption;

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

    data.forEach((submittedData, index) => {
        const tr = document.createElement("tr");
        const keys = ["firstName", "lastName", "total"];

        keys.forEach(key => {
            const td = document.createElement("td");
            td.textContent = submittedData[key];
            tr.appendChild(td);
        });

        const rowButtons = createTableButtons(data, index);
        tr.appendChild(rowButtons);
        tableBody.appendChild(tr);
    });

    console.log(typeof(tableBody));
    return tableBody;
}

const displayAverage = data => {
    const tableReference = document.getElementById("table-output");
    const averageRow = tableReference.insertRow(-1);

    const summedTotal = data
        .map(footprint => footprint.total)
        .reduce((sum, score) => sum + score, 0);

    const average = summedTotal / data.length;
    
    const valueDisplay = document.createElement("p");
    valueDisplay.innerHTML = average;
    averageRow.insertCell(0).appendChild(valueDisplay);

    const averageDisplay = document.createElement("p");
    averageDisplay.innerHTML = "Average: ";
    averageRow.insertCell(0).appendChild(averageDisplay);

    for(let cellCount = 0; cellCount < 1; cellCount++)
        averageRow.insertCell(0);
}

const renderTable = data => {
    TABLE.textContent = "";
    if (data.length > 0) {
        const table = createTableHead();
        const tableBody = createTableBody(data);
        
        table.appendChild(tableBody);
        TABLE.appendChild(table);
        displayAverage(data);
    }
}

export { renderTable };