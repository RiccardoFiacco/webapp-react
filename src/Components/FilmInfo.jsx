import {imgUrl} from "../Utils/Utils"

export function FilmInfo ({props}){
    const {title, director, genre, release_year, abstract, image} = props
    const img = imgUrl+image;
    
    return(
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
    )
}