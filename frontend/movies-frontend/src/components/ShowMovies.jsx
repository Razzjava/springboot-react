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

            <h2 className="list-of-movies">List of all Movies</h2>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>

                </tr>
                </thead>
                <tbody>
                {movies.map(e => (
                    <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.description}</td>
                    </tr>
                ))}

                </tbody>
            </table>
        </>
    )
}

export default ShowMovies;