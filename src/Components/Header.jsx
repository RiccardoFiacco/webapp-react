import { Link } from "react-router-dom"

export function Header(){
 return(
    <div className="bg-cyan-300 py-6">
        <div className="container flex justify-between">
            <Link to='/' className="text-3xl bg-slate-600 text-white rounded-md px-2 hover:bg-slate-800">MOVIES REVIEW</Link>
            <div className="flex items-center gap-6">
                <Link to='/' className="hover:text-amber-500">home</Link>
                <Link to='/user' className="hover:text-amber-500">login</Link>
            </div>
        </div>   
    </div>
 )
}
