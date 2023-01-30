// O - SOLID PRINCIPLES
// Open for extension but closed for modification 
// Open for extension means that you can add new features to the code without affecting the existing code.
// Closed for modification means that you can’t change the existing code to add new features.

const movies = ["jack sparrow", "harry potter", "hunger games"];

class Movie {
    constructor(name) {
        this.name = name;
    }

    watch() {
        if(movies.includes(this.name)) {
            console.log(`You are watching ${this.name}`);
        } else {
            console.log("Movie not found");
        }
    }
}



// to handle adding movies to the list
//closed to modification but open to an extension 
// because you can add new movies without directly affecting the movies array.
class addMovieList {
    constructor(movies) {
        this.movies = movies;
    }

    addMovie(movie) {
        this.movies.push(movie);
    }
}

const movie = new Movie("harry potter");
movie.watch(); // You are watching harry potter
