import { useState } from 'react'
import { Toaster } from 'sonner'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Users from './pages/Users'

function App() {
  const [isLogged, setIsLogged] = useState(()=>{
    return !!localStorage.getItem('token') || false
  })

  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <>
      <Toaster richColors/>
      <Routes>
        <Route path='/' element={<Login setIsLogged={setIsLogged}/>}/>
        <Route path='/main' element={<Main isLogged={isLogged} setIsLogged={setIsLogged}/>}/>
        <Route path='/users' element={<Users isLogged={isLogged} setIsLogged={setIsLogged}/>}/>
      </Routes>
    </>
  )
}

export default App
