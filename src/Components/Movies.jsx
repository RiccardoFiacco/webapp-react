import { useContext, useEffect} from "react"
import { Card } from './Card'
import { GlobalContext } from "../Utils/GlobalContext"
import {  baseUrl, axiosCall  } from "../Utils/Utils"


export function Movies(){
    const { search, movies, setMovies } = useContext(GlobalContext)
    
    useEffect(()=>{
        setTimeout(()=>{
            axiosCall(baseUrl, setMovies, search)
        }, 1000)
    },[baseUrl, search])

    
    return(
        <div className="grid grid-cols-4 gap-y-10 gap-x-10 items-center">
            {movies? 
             movies.map((movie,i)=>{
                return(
                    <div key={i}>
                        <Card props={movie}/>
                    </div>
                )
             }):
             <p>non esisto</p>
            }
        </div>
    )
}