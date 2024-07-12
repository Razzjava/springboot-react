package com.raz.reviews;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Objects;

@Entity
public class Review {

    @Id
    @GeneratedValue
    private Integer Id;
    private Integer movieId;
    private String review;
    private String name;

    public Review(Integer Id, Integer movieId, String review, String name){
        this.Id = Id;
        this.movieId = movieId;
        this.review = review;
        this.name = name;
    }

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public Integer getMovieId() {
        return movieId;
    }

    public void setMovieId(Integer movieId) {
        this.movieId = movieId;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Review review1 = (Review) o;
        return Objects.equals(Id, review1.Id) && Objects.equals(movieId, review1.movieId) && Objects.equals(review, review1.review) && Objects.equals(name, review1.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(Id, movieId, review, name);
    }
}
