/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import axios from "axios";
import { useNavigate } from "react-router";
import { loginUrl } from '../Utils/Utils'
import { useContext } from "react";
import { GlobalContext } from "../Utils/GlobalContext";
export function WithFormLogin(Component){
    return ({data, resetForm,  ...other}) => {
        const {setLogged} = useContext(GlobalContext)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        let navigate = useNavigate();
        
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
                 resetForm();
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
                data={data}
                {...other}/> //queste sono le props che aveva gia il componente 
    }
}