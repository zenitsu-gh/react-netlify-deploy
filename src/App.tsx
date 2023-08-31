import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Features from './pages/Features'
import Skills from './pages/Skills'
import Project from './pages/Project'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Features />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Project />} />
      </Routes>
    </>
  )
}

export default App
