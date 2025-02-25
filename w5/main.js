const moviesArray = []; // Keeping the array and function for readability and usability

function addMovie(movieTitle, movieReleaseYear, movieRating, timesWatched) {
    const movieObj = {
        title: movieTitle,
        releaseYear: movieReleaseYear,
        rating: movieRating,
        watched: timesWatched
    };

    moviesArray.push(movieObj);
}

function displayMovies(movies) {
    const output = document.getElementById("output");

    // They made foreach a lambda???
    movies.forEach(movie => {
        const newH2 = document.createElement("h2");
        if (movie.rating >= 7 && movie.watched >= 3) {
            newH2.textContent = `I have watched ${movie.title} (${movie.releaseYear}) ${movie.watched} times and give it a rating of ${movie.rating}/10`;
        } else {
            newH2.textContent = `N/A` // idk
        }
        output.appendChild(newH2);
    });
}

// I rarely watch movies idk what to put
addMovie("Interstellar", 2014, 10, 4);
addMovie("The Martian", 2015, 9, 8);
addMovie("Doctor Strange", 2016, 8, 6);
addMovie("El Camino", 2019, 7, 2);
addMovie("The Time Machine", 1960, 7, 11);
addMovie("Black Widow", 2021, 4, 1);

displayMovies(moviesArray);