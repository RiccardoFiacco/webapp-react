import { WithButton } from "./Hoc components/WithButton"

export function Button({setter}){
    return(
     <button className="bg-red-500 py-1 px-3 rounded-xl hover:bg-red-700" onClick={setter}>esci</button>
    )
}

const ExitButton  = WithButton(Button)
export {ExitButton} 