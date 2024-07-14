package com.raz.reviews;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ReviewController {

    private final ReviewRepository reviewRepository;

    public ReviewController(ReviewRepository reviewRepository){
        this.reviewRepository = reviewRepository;
    }



    @GetMapping(value = "/api/v1/getreview")
    public List<Review> getReviewByMovieId(@RequestBody Integer movieId){
        if (movieId == null){
            return null;
        } else {
            List<Review> allReviews = reviewRepository.findAllByMovieIdEquals(movieId);
            return allReviews;
        }
    }


    @PostMapping(value = "/api/v1/createreview")
    public void createReview(@RequestBody NewReview review){
        ReviewService newReview = new ReviewService();
         Review savablereview = newReview.createNewReview(review);
        reviewRepository.save(savablereview);
    }


}
