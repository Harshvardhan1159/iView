import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import Navbar from './components/common/Navbar/Navbar'
import InterviewInterface from './pages/InterviewInterface/InterviewInterface'
import WhiteboardContainer from './components/common/Whiteboard/WhiteboardContainer'
import CodeApp from './components/CodeEditor/CodeApp'
function App() {

  return (
    <>
      <Navbar/>
      <LandingPage/>
    </>
  )
}

export default App
