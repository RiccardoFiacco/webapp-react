/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import axios from "axios";
import { useNavigate } from "react-router";
import { loginUrl } from '../../Utils/Utils'
export function WithFormRegistration (Component, baseForm){
    
    return (props)=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        let navigate = useNavigate();
        const {data, setter} = props 
        
        async function sendData(event){
            event.preventDefault();
            data.email = data.email.trim()
            data.password = data.password.trim()
            
            try{
                const result = await axios.post(loginUrl+'/registration', data)
                console.log(result.data)
                setter(baseForm)
                navigate("/")
            }catch(err){
                console.log(err)
            }
        }
        
        return <Component //con questo io ritorno il componente arricchito di nuove props, create in questo componente ma usufruibili nell'import  
                sender = {sendData}
                {...props}/> //queste sono le props che aveva gia il componente 
    }
}