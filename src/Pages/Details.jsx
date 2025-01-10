import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Form } from '../Components/Form' //PERCHE DA PROBLEMI ADDFORM?
import { getStar, imgUrl, baseUrl, axiosCall} from "../Utils/Utils"
import { GlobalContext } from "../Utils/GlobalContext"

export function Details(){
    const {id} = useParams()
    const {movie, setMovie} = useContext(GlobalContext)
    const {title, director, genre, release_year, abstract, image, reviews, avg_vote} = movie
    let star = getStar(avg_vote)
    let url = baseUrl+'/'+id
    const img = imgUrl+image;

    
    useEffect(()=>{
        axiosCall(url, setMovie)
    },[url, setMovie])

    return(
        <div className="container grow grid flex-col py-7"> 
            <section className="flex py-7">
                
            {movie &&  
                <>
                 <div className="w-1/2">
                  <img className="w-1/2 place-self-center" src={img} />
                 </div>
                 <div className="w-1/2">
                   <p className="text-6xl py-5">{title}</p> 
                   <p className="font-bold py-1">{director}</p> 
                   <p className="py-1">{genre}</p> 
                   <p className="py-1">{release_year}</p> 
                   <p className="py-1">{abstract}</p>
                 </div>
                </>
                }
            </section>
            <section className="container flex justify-between items-center mb-4">
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
            <Form/>
        </div>
        
    )
}