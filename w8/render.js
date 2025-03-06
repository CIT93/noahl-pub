const TABLE = document.getElementById("table-data");

function createTableHead() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArray = ["Name", "House Size", "Member Count", "Footprint", "Actions"];

    headingTextArray.forEach(function(text) {
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);

    return table;
}

function createTableButtons(data, index) {
    const rowButtons = document.createElement("td");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    editButton.textContent = "Edit";
    deleteButton.textContent = "Del";

    editButton.addEventListener('click', function(e) {
        
    });

    deleteButton.addEventListener('click', function(e) {
        console.log("delete");
        data.splice(index, 1);
        renderTable(data);
    });

    rowButtons.appendChild(editButton);
    rowButtons.appendChild(deleteButton);

    return rowButtons;
}

function createTableBody(data) {
    const tableBody = document.createElement("tbody");

    data.forEach(function(submittedData, index) {
        const tr = document.createElement("tr");

        for (const [key, value] of Object.entries(submittedData)) {
            console.log(`key: ${key}, value: ${value}`);

            if (key !== "lastName" && key !== "houseHoldPts" && key !== "houseSizePts") {
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

    return tableBody;
}

function renderTable(data) {
    TABLE.textContent = "";

    const table = createTableHead();
    const tableBody = createTableBody(data);

    table.appendChild(tableBody);
    TABLE.appendChild(table);
}

export { renderTable };