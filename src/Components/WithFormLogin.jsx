/* eslint-disable react/display-name */
import axios from "axios";
import { useNavigate } from "react-router";
import { loginUrl } from '../Utils/Utils'
import { useContext } from "react";
import { GlobalContext } from "../Utils/GlobalContext";
export function WithFormLogin(Component, baseForm){

    const {setLogged} =useContext(GlobalContext)

    return (props)=>{

        // eslint-disable-next-line react-hooks/rules-of-hooks
        let navigate = useNavigate();
        const {data, setter} = props 
        
        async function sendData(event){
            event.preventDefault();
            data.email = data.email.trim()
            data.password = data.password.trim()
            try{
                const result = await axios.post(loginUrl+'/login', data)
                const {loggato, code} = result.data
                if(loggato){
                 console.log('utente trovato')
                 setLogged(code)
                 setter(baseForm)
                 navigate("/") 
                }else{
                    console.log('utente non trovato')
                }
                
            }catch(err){
                console.log(err)
            }
        }
        
        return <Component //con questo io ritorno il componente arricchito di nuove props, create in questo componente ma usufruibili nell'import  
                sender = {sendData}
                {...props}/> //queste sono le props che aveva gia il componente 
    }
}