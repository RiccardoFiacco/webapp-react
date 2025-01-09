import { Link } from "react-router-dom";

export function Card({props}){
    const {id, title , director, genre, release_year, abstract, image} = props
    const img = 'http://localhost:3000/photo/'+image;
    
    return(
        <div className="relative ">
            <img src={img ? img : ''}/>
            
            <div className="absolute bottom-0 text-white bg-cyan-300/80 flex flex-wrap justify-between w-full py-4 px-4">
             <div className="text-neutral-950 text-3xl sm:text-md">{title}</div>
             <Link to={`/${id}`} className=" bg-slate-600 text-white rounded-md px-2 hover:bg-slate-800">dettagli</Link>
            </div>
            
        </div>   
    )
}