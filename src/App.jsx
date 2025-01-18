import './App.css'
import { BrowserRouter, Route} from 'react-router-dom'
import { DefaultLayout } from './Layout/DefaultLayout'
import { Home } from './Pages/Home'
import { Details } from './Pages/Details.jsx'
import { Routes } from 'react-router-dom'
import { GlobalContext } from './Utils/GlobalContext.js'
import { useState, useEffect } from 'react'
import { baseUrl } from './Utils/Utils.jsx'
import { Login } from './Pages/Login.jsx'
import axios from 'axios'
import { Registration } from './Pages/Registration.jsx'

function App() {
 const [search, setSearch] = useState('')// variabile reattiva per gestire il filtro di ricerca
 const [movies, setMovies] = useState([]) // variabile reattiva per gestire i film nella pagina principale
 const [movie, setMovie] = useState([]) //variabile reattiva per gestire il film nella pagina di dettaglio
 const [loading, setLoading] = useState(true)//variabile reattiva per gestire la schermata di caricamento
 const [logged, setLogged] = useState(false) //variabile reattiva per gestire l'accesso o meno dell'utente
 const [userName, setUserName] =useState('') //variabile reattiva per gestire il nome dell'utente
 const [userEmail, setUserEmail] =useState('') //variabile reattiva per gestire l'email dell'utente
 const [seeToast, setSeeToast] = useState(false) 
 const [toastMsg, setToastMsg] = useState('') 
  useEffect(()=>{ 
    setLoading(true) //imposto la variabile di caricamento a true
    axios.get(baseUrl,search?{
      params: {
        title: search
      }
    }:'')
      .then(response => {
        setMovies(response.data)
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
    console.log(search)
  },[baseUrl, search])

  return (
    <GlobalContext.Provider value={{
      search, setSearch,
      movies, setMovies,
      movie, setMovie,
      loading, setLoading,
      logged, setLogged,
      userName, setUserName,
      userEmail, setUserEmail,
      seeToast, setSeeToast,
      toastMsg, setToastMsg
    }}>
     <BrowserRouter>
      <Routes>
       <Route Component={DefaultLayout}>
        <Route index Component={Home}/>
        <Route path='/:id' Component={Details}/>
        <Route path='/user' Component={Login}/>
        <Route path='/registration' Component={Registration}/>
       </Route>
      </Routes>
     </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
