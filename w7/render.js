const TABLE = document.getElementById("table-data");

function createTableHead() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArray = ["Name", "Footprint"];

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
    TABLE.textContent = "";

    const table = createTableHead();
    const tableBody = document.createElement("tbody");

    data.forEach(function(submittedData) {
        const tr = document.createElement("tr");
        const tdName = document.createElement("td");
        const tdTotal = document.createElement("td");

        tdName.textContent = submittedData.name;
        tdTotal.textContent = submittedData.total;

        tr.appendChild(tdName);
        tr.appendChild(tdTotal);
        tableBody.appendChild(tr);
    });

    // const td = document.createElement("td");
    // const editButton = document.createElement("button");
    // const deleteButton = document.createElement("button");

    // editButton.textContent = "Edit";
    // deleteButton.textContent = "Del";

    // td.appendChild(editButton);
    // td.appendChild(deleteButton);
    // tr.appendChild(td);

    table.appendChild(tableBody);
    TABLE.appendChild(table);
}

export { renderTable };