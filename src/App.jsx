import { useState } from 'react'
import './App.css'
import { Toaster } from 'sonner'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Toaster richColors/>
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
