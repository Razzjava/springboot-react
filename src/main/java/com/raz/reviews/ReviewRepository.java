package com.raz.reviews;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Iterator;
import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Integer> {

    // this is not working, need to revisit
    List<Review> findAllByMovieIdEquals(Integer movieId);


}
