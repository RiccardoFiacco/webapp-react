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
 const [search, setSearch] = useState('')
 const [movies, setMovies] = useState([])
 const [movie, setMovie] = useState([])
 const [loading, setLoading] = useState(true)

  useEffect(()=>{ 
    setLoading(true)
    axios.get(baseUrl,search ?? {
      params: {
        title: search
      }
    })
      .then(response => {
        setMovies(response.data)
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
    
  },[baseUrl, search])

  return (
    <GlobalContext.Provider value={{
      search, setSearch,
      movies, setMovies,
      movie, setMovie,
      loading, setLoading
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
