/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import axios from "axios";
import { useNavigate } from "react-router";
import { loginUrl } from '../../Utils/Utils';
import { useContext } from "react";
import { GlobalContext } from "../../Utils/GlobalContext";
export function WithFormRegistration (Component){
    
    return (props)=>{

        
        let navigate = useNavigate();
        const {data, resetForm, validation, ...other} = props
        const {setLogged, setUserName, setUserEmail, setSeeToast, setToastMsg} = useContext(GlobalContext) //importo setLogged per impostare la variabile 
        const result = validation()

           
        async function sendData(event){
            event.preventDefault();
            data.email = data.email.trim()
            data.password = data.password.trim()
             if(result.valid){
                console.log(result.msg)
            }else{
                console.log(result.msg)
            }
            try{
                const result = await axios.post(loginUrl+'/registration', data)//chiamata alla rotta a cui passo i dati
                const {loggato, code, userEmail} = result.data //destructuring della risposta 
                if(loggato){
                 setLogged(true) //setto la variabile reattiva a true
                 setUserName(code) //importi l'user name
                 setUserEmail(userEmail)//imposti l'email che invierai per la chiave esterna nel db
                 setSeeToast(true) //imposti a true la variabile di stato che ti fa vedere il toast
                 setToastMsg('Registrato con successo!') //imposti il messaggio del tost
                 resetForm(); //resetto i campi a vuoto
                 navigate("/") //torno alla home
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