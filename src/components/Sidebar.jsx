import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
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
    <div className="text-white">
        <div className="h-[100vh]">
            {/* <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>  */}
            <ul className="menu p-4 w-60 min-h-full bg-[#18181B] flex items-center m-0">
            <div className='w-full flex justify-center mb-12'>
                <img src="https://res.cloudinary.com/dm1sgld8c/image/upload/v1710946840/media/logo2_c1gnzt.png" alt="Logo" className='w-40'/>
            </div>
            {
                    isLogged && (
                        <>
                        <li><Link to={'/books'} className={location.pathname === '/books' ? ' text-[#16b187] focus:text-[#16b187] hover:text-[#16b187]' : 'focus:text-white hover:text-[#16b187]'}>Usuarios</Link></li>
                        <li><Link to={'/favorites/'} className={location.pathname === '/favorites/' ? 'text-[#16b187] focus:text-[#16b187] hover:text-[#16b187]' : 'focus:text-white hover:text-[#16b187]'}>Alumnos</Link></li>
                        <li><Link to={'/favorites/'} className={location.pathname === '/favorites/' ? 'text-[#16b187] focus:text-[#16b187] hover:text-[#16b187]' : 'focus:text-white hover:text-[#16b187]'}>Vencimientos</Link></li>
                        <li><Link to={'/favorites/'} className={location.pathname === '/favorites/' ? 'text-[#16b187] focus:text-[#16b187] hover:text-[#16b187]' : 'focus:text-white hover:text-[#16b187]'}>Pagos</Link></li>
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