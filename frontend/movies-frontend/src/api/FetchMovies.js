

function FetchMovies(){
let allMovies = []
    fetch("http://localhost:9001/api/v1/getallmovies").then(res=>{return res.json()}).then(
                data => {

                    let serverMovies = Object.values(data)
                    serverMovies.forEach(e =>{
                        allMovies.push(e);
                    })


                }
            )

}

export default FetchMovies;