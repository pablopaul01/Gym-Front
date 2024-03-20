import { useState } from 'react'
import Books from './pages/Books'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Favorites from './pages/Favorites'
import RecoverPass from './pages/RecoverPass'
import ResetPass from './pages/ResetPass'
import Footer from './components/Footer'
import Error from './pages/Error'

function App() {
  const [isLogged, setIsLogged] = useState(()=>{
    return !!localStorage.getItem('token') || false
  })

  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <>
    <Navbar isLogged={isLogged} setIsLogged={setIsLogged}/>
    <Toaster richColors/>
      <Routes>

        <Route path='/books' element={isAuthenticated ? <Books /> : <Login setIsLogged={setIsLogged} />} />
        <Route path='/' element={!isAuthenticated ? <Login setIsLogged={setIsLogged} /> : <Books />} />
        <Route path='/register' element={!isAuthenticated ? <Register /> : <Books />} />
        <Route path='/favorites' element={isAuthenticated ? <Favorites /> : <Login setIsLogged={setIsLogged} />} />
        <Route path='/recover' element={!isAuthenticated ? <RecoverPass /> : <Books />} />
        <Route path='/reset_password/:id/:token' element={!isAuthenticated ? <ResetPass /> : <Books />} />

        <Route path='*' element={<Error />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
