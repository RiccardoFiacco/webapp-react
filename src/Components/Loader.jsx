import { useContext } from "react"
import { GlobalContext } from "../Utils/GlobalContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function Loader(){
    const { loading } =useContext(GlobalContext)
    return(
         loading ? 
         <div className="h-screen bg-black/80 hidden flex justify-center items-center">
            <FontAwesomeIcon icon="fa-solid fa-spinner" />
         </div>
         :
         <div className="h-screen bg-black/80 flex justify-center items-center">
            <FontAwesomeIcon icon="fa-solid fa-spinner" />
         </div>
    )
}