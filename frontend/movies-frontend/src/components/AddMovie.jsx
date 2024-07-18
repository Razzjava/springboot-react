import { useState } from "react";
import FetchMovies from "../api/FetchMovies.js"


function AddMovie(){

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")


    const handleName = (e) => {
        setName(e.target.value);


    }

    const handleDescription = (e) =>{
        setDescription(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMovie = {"name": name, "description": description};
        console.log(newMovie);

        fetch(
            'http://localhost:9001/api/v1/createmovie',{
                method: 'POST',
                headers:{"Content-Type": "application/json"},
                body:JSON.stringify(newMovie)
            }
        )

        FetchMovies();

    }


    return(
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Movie</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <label htmlfor="movieName">Name: </label>
                            <input id="movieName" onChange={handleName} />
                            <br></br>
                            <label htmlfor="movieDescription"> Description: </label>
                            <textarea id="movieDescription"  onChange={handleDescription} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>Create Movie</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddMovie;