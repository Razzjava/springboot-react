import { useState} from "react";

function AllReviews({allReviews}){


    return(
        <>
            <ul className="list-group">
                {allReviews.map(e =>(
                    <li className="list-group-item" key={e.id}>
                        <p>Review: {e.review}</p>
                        <p>Name: {e.name}</p>
                    </li>
                ))}


            </ul>
        </>
    )
}

export default AllReviews;