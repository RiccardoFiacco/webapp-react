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

{/* <div className="card relative">

<img src={obj.poster_path ? finalImg : fotoPlace} className="myCard"/>

<div className="hidden">
  <h3>{title}</h3>
 
    <p>original name: {original_title}</p>
    <p>
      language: 
       {language ?  <img src={language} className={style.h_flag}/> : original_language}
    </p>
    <p>avarage vote: {star}</p>
    
  <button className="btn btn-outline-primary" onClick={addInList}>add in your List</button>
  <button><NavLink to={`/${objType}/${id}`} >Dettagli</NavLink></button>
  
</div>  
</div> */}