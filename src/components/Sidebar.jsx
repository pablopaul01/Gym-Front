import React, {useState, useEffect} from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const Sidebar = ({isLogged, setIsLogged}) => {
    const [userId, setUserId] = useState(null)

    const location = useLocation()

    const handleLogout = () => {
        localStorage.clear()
        setIsLogged(false)
        setUserId("null")
    }

    useEffect(() => {
        if (isLogged){
            const decode = jwtDecode(localStorage.getItem('token'));
            setUserId(decode.sub)
        }
    }, [isLogged])

  return (
    <div className="text-white" id='sidebar'>
        <div className="h-[100vh] w-[190px]">
            <ul className="menu p-4 min-h-full bg-[#18181B] flex items-center m-0">
            <div className='w-full flex justify-center mb-12'>
                <img src="https://res.cloudinary.com/dm1sgld8c/image/upload/v1710946840/media/logo2_c1gnzt.png" alt="Logo" className='w-40 py-5'/>
            </div>
            {
                    isLogged && (
                        <>
                        <li><NavLink to={'/users'} className={location.pathname === '/books' ? ' text-[#16b187] focus:text-[#16b187] hover:text-[#16b187]' : 'focus:text-white hover:text-[#16b187]'}>Usuarios</NavLink></li>
                        <li><NavLink to={'/members'} className={location.pathname === '/favorites/' ? 'text-[#16b187] focus:text-[#16b187] hover:text-[#16b187]' : 'focus:text-white hover:text-[#16b187]'}>Alumnos</NavLink></li>
                        <li><NavLink to={'/programs'} className={location.pathname === '/favorites/' ? 'text-[#16b187] focus:text-[#16b187] hover:text-[#16b187]' : 'focus:text-white hover:text-[#16b187]'}>Programas</NavLink></li>
                        <li><NavLink to={'/expirations'} className={location.pathname === '/favorites/' ? 'text-[#16b187] focus:text-[#16b187] hover:text-[#16b187]' : 'focus:text-white hover:text-[#16b187]'}>Vencimientos</NavLink></li>
                        <li><NavLink to={'/favorites/'} className={location.pathname === '/favorites/' ? 'text-[#16b187] focus:text-[#16b187] hover:text-[#16b187]' : 'focus:text-white hover:text-[#16b187]'}>Pagos</NavLink></li>
                        </>
                    )
                }
                    <li>
                        {
                            isLogged ? 
                            (
                                <Link to={'/login'} onClick={handleLogout} className='hover:text-[#16b187] mt-20'>Cerrar Sesión</Link>
                            ) 
                            : 
                            (
                                <ul className="p-2 bg-[#18181B] rounded-t-none flex items-center flex-col w-full m-0">
                                    <li><Link to={'/'} className={location.pathname === '/login' ? ' text-[#16b187] focus:text-[#16b187] hover:text-[#16b187]' : 'focus:text-white hover:text-[#16b187]'}>Iniciar Sesión</Link></li>
                                    <li><Link to={'/register'} className={location.pathname === '/register' ? ' text-[#16b187] focus:text-[#16b187] hover:text-[#16b187]' : 'focus:text-white hover:text-[#16b187]'}>Registrarme</Link></li>
                                </ul>
                            )
                        
                        }
                    </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar