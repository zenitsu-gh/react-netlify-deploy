import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Features from './pages/Features'
import Skills from './pages/Skills'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Features />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </>
  )
}

export default App
