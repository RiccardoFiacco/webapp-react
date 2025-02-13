import { Movies } from '../Components/Movies'
import { GlobalContext } from '../Utils/GlobalContext'
import { useContext } from "react"
export function Home(){
    const { search, setSearch } = useContext(GlobalContext)
    
    function changeHandler(e){
        setSearch(e.target.value)  
    }

    return(
     <div className="container grow flex flex-col py-8"> 
      <div className="flex justify-between items-center py-3 ">
          <div>
           <h1 className="text-3xl font-bold">Benvenuti su movies review </h1>
           <p>Uno spazio dove poter recensire vari film in totale liberta</p>
          </div>
          
          <div>
           <input 
           onChange={(e)=>changeHandler(e)} 
           className="h-8 bg-slate-500 rounded-md border-2 border-slate-950" 
           type="text" 
           value={search}
           placeholder='Cerca'/>
          </div>
      </div>
     <Movies/> 
     </div>
    )
}