/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import axios from "axios";
import { useNavigate } from "react-router";
import { loginUrl } from '../../Utils/Utils'
import { useContext } from "react";
import { GlobalContext } from "../../Utils/GlobalContext";
export function WithFormLogin(Component){
    return (props) => { //destructuring delle props che mi servono, con other prendo le altre e le metto in quella prop
        
        const {data, resetForm, validation, ...other} = props
        
        const {setLogged, setUserName, setUserEmail} = useContext(GlobalContext) //importo setLogged per impostare la variabile 
        let navigate = useNavigate(); //uso l'hook per creare la variabile per far tornare alla home 
        
        async function sendData(event){
            event.preventDefault();
            //trim degli input
            data.email = data.email.trim()
            data.password = data.password.trim()
            const result = validation()
            if(result.valid){
                console.log(result.msg)
            }else{
                console.log(result.msg)
            }
            try{
                const result = await axios.post(loginUrl+'/login', data) //chiamata alla rotta a cui passo i dati
                const {loggato, code,userEmail} = result.data //destructuring della risposta
                if(loggato){
                 console.log('utente trovato')
                 setLogged(true) //setto la variabile reattiva con il valore ricevuto dal be
                 setUserName(code) //setto la variabile reattiva con il valore ricevuto dal be
                 setUserEmail(userEmail) //setto la variabile reattiva con il valore ricevuto dal be 
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