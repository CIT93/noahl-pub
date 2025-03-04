const TABLE = document.getElementById("table-output");

function createTableHead() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArray = ["Title", "Release Year", "Rating", "Viewed"];

    headingTextArray.forEach(function(text) {
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);

    return table;
}

function createTableBody(movies) {
    const tbody = document.createElement("tbody");

    movies.forEach(function(movie) {
        if (movie.rating >= 7 && movie.watched >= 3) {
            const tr = document.createElement("tr");

            // Instant refactor because I got blind-sided by an easier solution
            for (const key in movie) {
                const tableData = document.createElement("td");
                tableData.textContent = movie[key];
                tr.appendChild(tableData);
            }

            tbody.appendChild(tr);
        }
    });

    return tbody;
}

function renderTable(movies) {
    const tableHead = createTableHead();
    const tableBody = createTableBody(movies);

    tableHead.appendChild(tableBody);
    TABLE.appendChild(tableHead);
}

export { renderTable };