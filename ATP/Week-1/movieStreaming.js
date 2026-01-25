const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
//only "Sci-Fi" movies
const sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi");
console.log("Sci-Fi Movies:", sciFiMovies);
//format as "Title (rating)"
const formattedMovies = movies.map(
  movie => `${movie.title} (${movie.rating})`
);
console.log("Formatted Movies:", formattedMovies);
//find average movie rating
const averageRating =
  movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length;
console.log("Average Rating:", averageRating);
//movie "Joker"
const jokerMovie = movies.find(movie => movie.title === "Joker");
console.log("Movie Joker:", jokerMovie);
//index of "Avengers"
const avengersIndex = movies.findIndex(movie => movie.title === "Avengers");
console.log("Index of Avengers:", avengersIndex);
