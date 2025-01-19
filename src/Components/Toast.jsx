import { useContext } from "react"
import { GlobalContext } from "../Utils/GlobalContext"
import 'animate.css';

export function Toast(){
    const {toastMsg, setSeeToast, seeToast} =useContext(GlobalContext)
    return(<>
        {seeToast ? <div className="animate__animated animate__fadeInRight flex fixed right-10 bottom-10 bg-slate-200 py-3 px-3 rounded border border-l-4 border-l-indigo-500 border-slate-950">
            <div>{toastMsg}</div>
            <button className="border border-slate-950  mx-4 px-2 rounded-lg" onClick={()=>setSeeToast(false)}>X</button>
        </div>: null}
        </>
    )
}