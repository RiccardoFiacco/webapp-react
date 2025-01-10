import { Link } from "react-router-dom";
import { getStar } from "../Utils/Utils";

export function Card({props}){
    const {id, title, image, avg_vote} = props
    const img = 'http://localhost:3000/photo/'+image;
    let star = getStar(avg_vote)
    return(
        <div className="relative">
            <img src={img ? img : ''}/>
            
            <div className="absolute bottom-0 text-white bg-cyan-300/80  w-full py-4 px-4">
             <div className=" text-neutral-950 text-3xl sm:text-md">{title}</div>
             <div className="py-2">{star}</div>
             <Link to={`/${id}`} className=" bg-slate-600 text-white rounded-md py-1 px-2 hover:bg-slate-800 h-7">dettagli</Link>
            </div>
            
        </div>   
    )
}