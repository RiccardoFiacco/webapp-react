import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Form } from '../Components/Form' //PERCHE DA PROBLEMI ADDFORM?
import { getStar, baseUrl, axiosCall} from "../Utils/Utils"
import { GlobalContext } from "../Utils/GlobalContext"
import { FilmInfo } from "../Components/FilmInfo"
import { Reviews } from "../Components/Reviews"

export function Details(){
    const {id} = useParams()
    const {movie, setMovie} = useContext(GlobalContext)
    const {reviews, avg_vote} = movie

    let star = getStar(avg_vote)
    let url = baseUrl+'/'+id
    
    useEffect(()=>{
        axiosCall(url, setMovie)
    },[url, setMovie])

    return(
        <div className="container grow grid flex-col py-7"> 
            <section className="flex py-7">
             {movie && <FilmInfo props={movie}/> }
            </section>
            <section className="container flex justify-between items-center mb-4">
             <h2 className="font-bold text-xl">Tutte le recensioni</h2>
             <div className="py-2 text-black">{star}</div>
            </section>
            <section>
             {reviews && <Reviews reviews={reviews} />}
            </section>
            <Form filmUrl={url}/>
        </div>
        
    )
}