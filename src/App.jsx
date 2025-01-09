import './App.css'
import { BrowserRouter, Route} from 'react-router-dom'
import { DefaultLayout } from './Layout/DefaultLayout'
import { Home } from './Pages/Home'
import { Details } from './Pages/Details.jsx'
import { Routes } from 'react-router-dom'
function App() {
 
  return (
    <>
     <BrowserRouter>
      <Routes>
       <Route Component={DefaultLayout}>
        <Route index Component={Home}/>
        <Route path='/:id' Component={Details}/>
       </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
