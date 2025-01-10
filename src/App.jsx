import './App.css'
import { BrowserRouter, Route} from 'react-router-dom'
import { DefaultLayout } from './Layout/DefaultLayout'
import { Home } from './Pages/Home'
import { Details } from './Pages/Details.jsx'
import { Routes } from 'react-router-dom'
import { GlobalContext } from './Utils/GlobalContext.js'
import { useState, useEffect } from 'react'
import { axiosCall } from './Utils/Utils.jsx'
import { baseUrl } from './Utils/Utils.jsx'

function App() {
 const [search, setSearch] = useState('')
 const [movies, setMovies] = useState([])
 
  useEffect(()=>{
      axiosCall(baseUrl, setMovies)
  },[])

  return (
    <GlobalContext.Provider value={{
      search, setSearch,
      movies, setMovies,
    }}>
     <BrowserRouter>
      <Routes>
       <Route Component={DefaultLayout}>
        <Route index Component={Home}/>
        <Route path='/:id' Component={Details}/>
       </Route>
      </Routes>
     </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
