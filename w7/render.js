const TABLE = document.getElementById("table-data");

function createTable() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArray = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];

    headingTextArray.forEach(function(text) {
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);

    return table;
}

function renderTable(data) {
    const table = createTable();
    const tableBody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const trTextArray = ["Noah", 4, "Medium", 15];

    trTextArray.forEach(function(text) {
        const td = document.createElement("td");
        td.textContent = text;
        tr.appendChild(td);
    });

    const td = document.createElement("td");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    editButton.textContent = "Edit";
    deleteButton.textContent = "Del";

    // It doesn't exist in the current block scope
    td.appendChild(editButton);
    td.appendChild(deleteButton);
    tr.appendChild(td);
    tableBody.appendChild(tr);

    table.appendChild(tableBody);
    TABLE.appendChild(table);
}

export { renderTable };