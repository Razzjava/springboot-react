import {useState, useEffect} from "react";
import Home from "./Home.jsx";


function ViewMovie({id, selectedMovie}){

    return(
        <>
            <div className="modal fade" id="viewMovie" tabIndex="-1" aria-labelledby="viewMovie"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{selectedMovie.name}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {selectedMovie.description}
                            <br></br>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ViewMovie;