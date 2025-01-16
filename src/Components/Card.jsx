/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { getStar } from "../Utils/Utils";
import { imgUrl } from "../Utils/Utils";
export function Card({props}){
    const {id, title, image, avg_vote} = props
    const img = imgUrl + image;
    let star = getStar(avg_vote)
    return(
        <div className="relative w-8/12 sm:w-6/12 md:w-5/12 lg:w-3/12 xl:w-2/12 flex items-stretch">
            <img src={img ? img : ''} />
            
            <div className="absolute bottom-0 text-white  bg-cyan-300/70 w-full py-4 px-4">
             <div className="text-neutral-950 text-2xl sm:text-md">{title}</div>
             <div className="flex justify-between items-center ">
                <div className="text-black">{star}</div>
                <Link to={`/${id}`} className=" bg-slate-600 text-white rounded-md px-2 hover:bg-slate-800 h-7">dettagli</Link>
             </div>
             
            </div>
            
        </div>   
    )
}