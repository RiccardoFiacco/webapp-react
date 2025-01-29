/* eslint-disable react/display-name */
import { useContext } from "react";
import { GlobalContext } from "../../Utils/GlobalContext";

export function finalToast(Component){
    
    return(props)=>{

        const {setSeeToast} = useContext(GlobalContext)

        function timoutToast(){
            const delayDebounceFn = setTimeout(() => {
                setSeeToast(false);
            }, 3000);
      
            return () => clearTimeout(delayDebounceFn); 
        }

        return <Component timeout = {timoutToast} {...props}/>
    }
}