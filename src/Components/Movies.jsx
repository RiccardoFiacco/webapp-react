import axios from "axios"
import { useEffect, useState } from "react"

export function Movies(){
    let baseUrl = 'http://localhost:3000/api/movies'
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        axios
        .get(baseUrl)
        .then((res)=>{
            setMovies(res.data)
        })
        .catch((err)=>{console.log(err)})
    },[baseUrl])

    return(
        <div className="grid grid-cols-4 gap-y-10 gap-x-10 items-center">
            {movies? 
             movies.map((movie,i)=>{
                return(
                    <span key={i}>{movie.title}</span>
                )
             }):
             <p>non esisto</p>
            }
        </div>
    )
}