import { Link } from "react-router-dom"

export function Header(){
 return(
    <div className="bg-cyan-300 py-6">
        <div className="container ">
            <Link to='/' className="text-3xl bg-slate-600 text-white rounded-md px-2 hover:bg-slate-800">MOVIES REVIEW</Link>
        </div>   
    </div>
 )
}