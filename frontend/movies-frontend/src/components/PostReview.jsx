import { useState } from "react";

function PostReview({id}){
     const [review, setReview] = useState("");
     const [name, setName] = useState("")

    const handleReview = (e) =>{
        setReview(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newReview = {"review": review, "movieId": id, "name": name}
        console.log(newReview)
        fetch("http://localhost:9001/api/v1/createreview", {
            method: 'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(newReview)
        })
    }

    return (
        <>
            <h4>Post Review</h4>
            <br></br>
            <label htmlFor="reviewInput">Add Review</label>
            <br></br>
            <textarea id="reviewInput" onChange={handleReview}></textarea>
            <br></br>
            <button className={"btn btn-primary"} onClick={handleSubmit}>Post Review</button>
        </>
    )
}

export default PostReview;