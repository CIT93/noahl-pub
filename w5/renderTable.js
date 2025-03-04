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
            const tdTitle = document.createElement("td");
            const tdYear = document.createElement("td");
            const tdRating = document.createElement("td");
            const tdViewed = document.createElement("td");
    
            tdTitle.textContent = movie.title;
            tdYear.textContent = movie.releaseYear;
            tdRating.textContent = movie.rating;
            tdViewed.textContent = movie.watched;
    
            tr.appendChild(tdTitle);
            tr.appendChild(tdYear);
            tr.appendChild(tdRating);
            tr.appendChild(tdViewed);
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