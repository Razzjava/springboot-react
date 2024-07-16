import {useEffect, useState} from "react";
import AllReviews from "./AllReviews.jsx";
import FetchReview from '../api/FetchReview.js'

function PostReview({id}){
     const [review, setReview] = useState("");
     const [name, setName] = useState("")
    const [allReviews, setAllReviews] = useState([])

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

      setAllReviews(FetchReview(id));

    }

    useEffect(() => {

let listReviews = [];
 const param = new URLSearchParams({
            "movieId": id
        })

        const url = `http://localhost:9001/api/v1/getreview?` + param;

        fetch(url).then(res=> {return res.json()}).then(data =>{
            let allReview = Object.values(data);
           // let listReviews = []

            allReview.map( e=>{
                listReviews.push(e);
            })

setAllReviews(listReviews);
        })




    }, [id]);


    return (
        <>
            <h4>Post Review</h4>
            <br></br>
            <label htmlFor="reviewInput">Add Review</label>
            <br></br>
            <textarea id="reviewInput" onChange={handleReview}></textarea>
            <br></br>
            <button className={"btn btn-primary"} onClick={handleSubmit}>Post Review</button>

            <AllReviews allReviews={allReviews}></AllReviews>
        </>
    )
}

export default PostReview;