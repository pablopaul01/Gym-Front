import React, {useState} from 'react'
import CardUser from '../components/login/CardUser'
import LoginForm from '../components/login/LoginForm'

const Login = ({setIsLogged}) => {


  return (
    <div className='min-h-[800px] h-[90vh] bg-slate-100 flex justify-center items-center'>
        <CardUser title={"Iniciar Sesión"} subTitle={"Ingrese su correo para iniciar sesión"}>
            <LoginForm setIsLogged={setIsLogged}/>
        </CardUser>
    </div>
  )
}

export default Login