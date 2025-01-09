import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
 
  return (
    <>
    <BrowserRouter>
     <Routes Component={DefaultLayout}>
      <Route/>
      <Route/>
      <Route/>
     </Routes>
    </BrowserRouter>
    
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1><p>ciao</p>
    </>
  )
}

export default App
