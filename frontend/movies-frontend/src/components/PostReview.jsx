import { useState } from "react";

function PostReview(){
     const [review, setReview] = useState("");

    const handleReview = (e) =>{
        setReview(e.target.value)
    }

    return (
        <>
            <h4>Post Review</h4>
            <br></br>
            <label htmlFor="reviewInput">Add Review</label>
            <br></br>
            <textarea id="reviewInput" onChange={handleReview}></textarea>
            <button className={"btn btn-primary"}>Post Review</button>
        </>
    )
}

export default PostReview;