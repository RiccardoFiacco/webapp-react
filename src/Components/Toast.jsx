import { useContext } from "react"
import { GlobalContext } from "../Utils/GlobalContext"

export function Toast(){
    const {toastMsg, setSeeToast, seeToast} =useContext(GlobalContext)
    return(<>
        {seeToast ? <div className="fixed right-10 bottom-10 bg-slate-200 py-6 px-3 rounded border border-slate-950">
            <div>{toastMsg}</div>
            <div className="absolute top-1 right-3 border border-slate-950 px-2" onClick={()=>setSeeToast(false)}>X</div>
        </div>: null}
        </>
    )
}