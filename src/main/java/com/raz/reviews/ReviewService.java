package com.raz.reviews;

public class ReviewService {


public Review createNewReview(NewReview review){
    Review newReview = new Review();

    if(review.name().isEmpty()){
        newReview.setName("Anonymous");
    }else{
        newReview.setName(review.name());
    }
    newReview.setMovieId(review.movieId());
    newReview.setReview(review.review());

    return newReview;

}




}

