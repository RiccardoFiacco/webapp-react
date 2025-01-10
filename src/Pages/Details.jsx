import { useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { getStar } from "../Utils/Utils"
export function Details(){
    const {id} =useParams()
    let url = 'http://localhost:3000/api/movies/'+id
    const [movie, setMovie] = useState([])
    const {title, director, genre, release_year, abstract, image, reviews, avg_vote} = movie
    const img = 'http://localhost:3000/photo/'+image;
    let star = getStar(avg_vote)
    useEffect(()=>{
        axios
        .get(url)
        .then((res)=>{
            setMovie(res.data)
        })
        .catch((err)=>{console.log(err)})
    },[url])

    return(
        <div className="container grow grid flex-col py-7"> 
            <section className="flex py-4">
            {movie &&  
                <>
                 <div>
                  <img className="w-1/2 place-self-center" src={img} />
                 </div>
                 <div>
                   <p className="text-6xl py-5">{title}</p> 
                   <p className="font-bold py-1">{director}</p> 
                   <p className="py-1">{genre}</p> 
                   <p className="py-1">{release_year}</p> 
                   <p className="py-1">{abstract}</p>
                 </div>
                </>
                }
            </section>
            <section className="container flex justify-between items-center gap-4 mb-4">
                <h2 className="font-bold text-xl">Tutte le recensioni</h2>
                <div className="py-2 text-black">{star}</div>
            </section>
            <section>
                {reviews && reviews.map(({name, vote, text},i)=>{
                    return(
                        <div key={i} className="rounded-lg border-gray-600 border-2 py-3 my-4 px-3">
                            <p>{text}</p>
                            <p>voto: {vote}</p>
                            <p className=" text-gray-500 text-lg font-bold italic ">by {name}</p>
                       </div>
                    )
                })}
            </section>
        </div>
        
    )
}