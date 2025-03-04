import { renderTable } from "./renderTable.js";
const moviesArray = [];

function addMovie(title, releaseYear, rating, timesWatched) {
    const movieObj = {
        title: title,
        releaseYear: releaseYear,
        rating: rating,
        watched: timesWatched
    };

    moviesArray.push(movieObj);
}

addMovie("The Martian", 2015, 9.3, 8);
addMovie("Interstellar", 2014, 9.8, 4);
addMovie("Doctor Strange", 2016, 8.1, 6);
addMovie("El Camino", 2019, 7.7, 2);
addMovie("The Time Machine", 1960, 7.2, 11);
addMovie("Black Widow", 2021, 3.9, 1);
addMovie("Catch Me If You Can", 2002, 8, 3);
addMovie("Knives Out", 2019, 9.6, 4);

// Sort by rating
moviesArray.sort((a, b) => (a.rating < b.rating));

renderTable(moviesArray);