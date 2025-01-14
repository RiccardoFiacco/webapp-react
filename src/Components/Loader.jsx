import { useContext } from "react"
import { GlobalContext } from "../Utils/GlobalContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner as spinner} from "@fortawesome/free-solid-svg-icons"

export function Loader(){
    const { loading } = useContext(GlobalContext)
    return(
         loading ?         
         <div className="absolute h-full w-full flex bg-black/80 justify-center items-center">
            <FontAwesomeIcon icon={spinner} className="text-9xl text-white animate-spin "/>
         </div>
         :
         <div className="h-screen bg-black/80 flex justify-center items-center">
            <FontAwesomeIcon icon={spinner} className="text-5xl text-white animate-spin"/>
         </div>
    )
}