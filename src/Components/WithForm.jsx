/* eslint-disable react/display-name */
import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router";
import { loginUrl } from '../Utils/Utils'
export function WithForm(Component, baseForm){
    let navigate = useNavigate();
    return (props)=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [data, setData] = useState(baseForm)

        function changeHandler(event) {
            setData((review) => {
            return {
              ...review,
              [event.target.name]: event.target.value,
            };
          });
        }

        async function sendData(event){
            event.preventDefault();
            data.email = data.email.trim()
            data.password = data.password.trim()
            try{
                const result = await axios.post(loginUrl, data)
                console.log(result)
                setData(baseForm)
                navigate("/")
            }catch(err){
                console.log(err)
            }
        }
        
        return <Component //con questo io ritorno il componente arricchito di nuove props, create in questo componente ma usufruibili nell'import 
                setter={setData} //passo il metodo per aggiornare il valore 
                data={data} //passo i valori che dovranno essere mostrati come value
                handlerInput={changeHandler} //passo il gestore per aggiornare gli input
                sender = {sendData}
                {...props}/> //queste sono le props che aveva gia il componente 
    }
}