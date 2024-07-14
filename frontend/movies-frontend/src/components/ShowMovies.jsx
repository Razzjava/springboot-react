import {useState, useEffect} from "react";


function ShowMovies(){

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("http://localhost:9001/api/v1/getallmovies").then(res=>{return res.json()}).then(
            data => {
                let allMovies = []
                let serverMovies = Object.values(data)
                serverMovies.forEach(e =>{
                    allMovies.push(e);
                })
                setMovies(allMovies);
                console.log(allMovies);
            }
        )
    }, []);


    return(
        <>
            <ul>
                {movies.map(e=>(
                    <li key={e.id}>
                        <h4>{e.name}</h4>
                        <p>{e.description}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ShowMovies;