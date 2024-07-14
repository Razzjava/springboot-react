import {useState} from "react";
import AddMovie from "./AddMovie.jsx";
import ShowMovies from "./ShowMovies.jsx";

function Home(){


    return(
        <>
            <h1>Movie Review Platform</h1>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Movie</button>
            <AddMovie></AddMovie>
            <ShowMovies></ShowMovies>



        </>

    )


}


export default Home;