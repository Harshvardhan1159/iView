import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import Navbar from './components/common/Navbar/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <LandingPage/>
    </>
  )
}

export default App
