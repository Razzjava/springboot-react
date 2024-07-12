package com.raz.reviews;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ReviewController {

    private final ReviewRepository reviewRepository;

    public ReviewController(ReviewRepository reviewRepository){
        this.reviewRepository = reviewRepository;
    }



    @GetMapping(value = "/api/v1/getreview")
    public List<Review> getReviewByMovieId(Integer movieId){
        if (movieId == null){
            return null;
        } else {
            List<Review> allReviews = reviewRepository.findAllByIdEquals(movieId);
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
