/* eslint-disable react/display-name */
import axios from "axios";
import { useNavigate } from "react-router";
import { loginUrl } from '../Utils/Utils'
export function WithFormLogin(Component, baseForm){
    
    return (props)=>{

        // eslint-disable-next-line react-hooks/rules-of-hooks
        let navigate = useNavigate();
        const {data, setData} = props 
        
        async function sendData(event){
            event.preventDefault();
            data.email = data.email.trim()
            data.password = data.password.trim()
            try{
                const result = await axios.post(loginUrl, data)
                console.log(result.data)
                setData(baseForm)
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