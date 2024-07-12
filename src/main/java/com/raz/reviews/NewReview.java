package com.raz.reviews;

public record NewReview(

        Integer Id,
        Integer movieId,
        String review,
        String name
) {
}
