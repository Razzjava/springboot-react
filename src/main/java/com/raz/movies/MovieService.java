package com.raz.movies;

public class MovieService {





    public Movie createNewMovie(NewMovie movie){
        Movie newMovie = new Movie();

        if (movie.description().isEmpty() || movie.name().isEmpty()){
            return null;
        }

        newMovie.setName(movie.name());
        newMovie.setDescription(movie.description());

        return newMovie;

    }


    public Movie updateMovie(NewMovie movie){
        Movie existingMovie = new Movie();

        return existingMovie;
    }






}
