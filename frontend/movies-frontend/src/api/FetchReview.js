

function FetchReview(id){
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


        })

           console.log(listReviews);
          return listReviews;




}

export default FetchReview;