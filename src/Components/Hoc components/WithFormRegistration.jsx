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

        // eslint-disable-next-line react-hooks/rules-of-hooks
        let navigate = useNavigate();
        const {data, resetForm, validation, ...other} = props
        const {setLogged} = useContext(GlobalContext) //importo setLogged per impostare la variabile 
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
                const {loggato, code} = result.data //destructuring della risposta 
                if(loggato){
                 console.log('utente trovato')
                 setLogged(code) //setto la variabile reattiva con il valore ricevuto dal be
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