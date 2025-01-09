import { useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

export function Details(){
    const {id} =useParams()
    let url = 'http://localhost:3000/api/movies/'+id
    const [movie, setMovie] = useState([])
    const {title, director, genre, release_year, abstract, image} = movie
    
    useEffect(()=>{
        axios
        .get(url)
        .then((res)=>{
            setMovie(res.data)
        })
        .catch((err)=>{console.log(err)})
    },[url])

    return(
        <div className="container grow flex flex-col py-7"> 
            {movie &&  
            <>
            <h1 className="text-7xl">
               {title}
            </h1>
            <ul className="text-3xl py-7">
                <li>{director}</li>
                <li>{genre}</li>
                <li>{release_year}</li>
                <li>{abstract}</li>
            </ul>
            </>
            }
        </div>
        
    )
}