import MattsDiner from "./pages/MattsDiner"
import Home from "./pages/Home"
import ComponentLibrary from "./pages/ComponentLibrary"
import {Routes, Route, useLocation} from 'react-router-dom'
import { useEffect } from "react"
function App() {
  function ScrollToTop() {
    const { pathname, hash } = useLocation()
    
    useEffect(() => {
      if (hash) {
        const el = document.getElementById(hash.slice(1))
        if (el) el.scrollIntoView()
      } else {
        window.scrollTo(0, 0)
      }
    }, [pathname, hash])
    
    return null
  }
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/matts-diner' element={<MattsDiner/>}/>
        <Route path='/component-library' element={<ComponentLibrary/>}/>
      </Routes>
    </>
  )
}

export default App
