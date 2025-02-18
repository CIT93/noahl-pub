const movieArray = [];

function addMovie(movieTitle, movieReleaseYear, movieRating) {
    const movieObj = {
        movieTitle: movieTitle,
        movieReleaseYear: movieReleaseYear,
        movieRating: movieRating,
    };

    movieArray.push(movieObj);
}

function displayMovies() {
    const output = document.getElementById("output");

    for(movieObj of movieArray) {
        const newH2 = document.createElement("h2");
        newH2.textContent = `${movieObj.movieTitle} (${movieObj.movieReleaseYear}) has a rating of ${movieObj.movieRating}/10`;

        output.appendChild(newH2);
    }
}

addMovie("Interstellar", 2014, 9);
addMovie("The Martian", 2015, 9);
addMovie("El Camino", 2019, 8);
addMovie("Moonfall", 2021, 4);
displayMovies();