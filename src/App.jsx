import { useState } from 'react'
import './App.css'
import { Toaster } from 'sonner'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [isLogged, setIsLogged] = useState(()=>{
    return !!localStorage.getItem('token') || false
  })
  return (
    <>
      <Toaster richColors/>
      <Routes>
        <Route path='/' element={<Login setIsLogged={setIsLogged}/>}/>
      </Routes>
    </>
  )
}

export default App
