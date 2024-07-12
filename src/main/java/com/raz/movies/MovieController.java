package com.raz.movies;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
public class MovieController {

    private final MovieRepository movieRepository;

    public MovieController(MovieRepository movieRepository){
        this.movieRepository = movieRepository;
    }

    @PostMapping(value = "/api/v1/createmovie")
   public void createMovie(@RequestBody NewMovie movie){
        MovieService possibleMovie = new MovieService();
        Movie newMovie = possibleMovie.createNewMovie(movie);

        if (newMovie == null){
            throw new ResponseStatusException(HttpStatus.NO_CONTENT, "Name or description is empty");
        } else {
            movieRepository.save(newMovie);
        }


    }


    @GetMapping(value = "/api/v1/getallmovies")
    public List<Movie> getAllMovies(){
        List<Movie> allMovies = movieRepository.findAll();

        if (allMovies.isEmpty()){
            return null;
        }
        return allMovies;
    }

    @PutMapping(value = "/api/v1/updateMovie")
    public void updateMovie(@RequestBody NewMovie movie){
MovieService existingMovie = new MovieService();
        if(movie.id().describeConstable().isEmpty()){
           throw new ResponseStatusException(HttpStatus.NO_CONTENT, "No Id present");
        } else{

            existingMovie.updateMovie(movie);
        }

    }


}
