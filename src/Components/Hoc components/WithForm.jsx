/* eslint-disable react/display-name */
import { useState } from "react"
export function WithForm(Component, baseForm){
    
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

        function resetForm() {
          setData(baseForm);
        }
        
        return <Component //con questo io ritorno il componente arricchito di nuove props, create in questo componente ma usufruibili nell'import  
                data={data} //passo i valori che dovranno essere mostrati come value
                handlerInput={changeHandler} //passo il gestore per aggiornare gli input
                resetForm={resetForm}
                setter={setData}
                {...props}/> //queste sono le props che aveva gia il componente  
    }
}