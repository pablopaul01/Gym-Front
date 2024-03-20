import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner';
import { axiosInstance } from '../config/axiosInstance';
import ActionButton from './ActionButton';

const RecoverForm = () => {
    const [email, setEmail] = useState()
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        axiosInstance.post('/user/recover', {email})
        .then(res => {
            if(res.data.Status === "Success") {
                navigate('/')
               toast.success("Se envió mail de recuperación de contraseña, verifique su casilla")
            }
        }).catch(err => console.log(err.response.data.mensaje))
        .finally(()=>setLoading(false))
    }

  return (
    <form className="text-white" onSubmit={handleSubmit}>
            <div className="mb-2 pt-4">
            <label className="input input-bordered flex items-center gap-2" data-theme="light">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="email" className="grow" placeholder="Email"  name="email" maxLength={40} onChange={(e) => setEmail(e.target.value)}/>
                </label>
            </div>
            {
                loading ?
                    (
                        <div className="flex mt-3 content-center mt-4">
                            <span className="loading loading-bars loading-lg text-black"></span>
                        </div>
                    )
                    :
                    (
                        <div className="flex mt-5">
                            <ActionButton value={'Enviar correo de recuperación'} type="submit" />
                        </div>
                    )
            }

            <div className="text-center">
                <p className="text-sm text-black mb-4 mt-3 underline">Si el correo ingresado es correcto recibirás un mail para reestablecer tu contraseña</p>
            </div>
        </form>
  )
}

export default RecoverForm