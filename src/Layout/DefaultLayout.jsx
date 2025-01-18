import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { Loader } from "../Components/Loader";
import { useContext } from "react";
import { GlobalContext } from "../Utils/GlobalContext";
import { Toast } from "../Components/Toast";
export function DefaultLayout(){
    const {loading} = useContext(GlobalContext)
    return(
        <>
         <Header/>
         <Outlet/>
         <Toast/>
         <Footer/>  
         {loading && <Loader/>}
        </>
    )
}