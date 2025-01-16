/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react"
import { GlobalContext } from "../../Utils/GlobalContext"

/* eslint-disable react/display-name */
export function WithButton(Component){
   
    return (props)=>{
         const { setLogged } = useContext(GlobalContext)
        function exit(){
           setLogged('') 
        }

         return <Component setter={exit} {...props}/>
    }
}