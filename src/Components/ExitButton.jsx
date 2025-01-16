import { WithButton } from "./WithButton"

export function Button({setter}){
    return(
     <a onClick={setter}>esci</a>
    )
}

const ExitButton  = WithButton(Button)
export {ExitButton} 