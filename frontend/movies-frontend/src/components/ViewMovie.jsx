import {useState, useEffect} from "react";
import Home from "./Home.jsx";
import PostReview from "./PostReview.jsx";


function ViewMovie({id, selectedMovie}){

    return(
        <>
            <div className="modal fade " id="viewMovie" tabIndex="-1" aria-labelledby="viewMovie"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable min-vw-100">
                    <div className="modal-content min-vh-100 ">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{selectedMovie ==null? "": selectedMovie.name}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h4>Description</h4>
                            <br></br>
                            {selectedMovie ==null? "": selectedMovie.description}
                            <br></br>

                        </div>
                        <div className={"mx-auto p-2 borderReview"}>
                            <PostReview id={id}></PostReview>
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