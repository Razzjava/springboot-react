import {useEffect, useState} from "react";
import AllReviews from "./AllReviews.jsx";

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
    }

    useEffect(() => {

        const param = new URLSearchParams({
            "movieId": id
        })

        const url = `http://localhost:9001/api/v1/getreview?` + param;
        console.log(url);
        fetch(url).then(res=> {return res.json()}).then(data =>{
            let allReview = Object.values(data);
            let listReviews = []

            allReview.map( e=>{
                listReviews.push(e);
            })
            setAllReviews(listReviews);
        })
            console.log(allReviews);

            console.log()


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