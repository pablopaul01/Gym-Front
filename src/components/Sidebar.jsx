import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({isLogged, setIsLogged}) => {
  return (
    <div className="text-white">
        {/* <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col">
            <div className="w-full navbar bg-[#18181B]">
            
            <div className="flex-1 px-2 mx-2">
                <img src="https://res.cloudinary.com/dtjybx29n/image/upload/v1710107785/logo_bqpomp.png" alt="Logo" className='w-20'/>
            </div>
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div> 
            <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                {
                    isLogged && (
                        <>
                        <li><Link to={'/books'} className={location.pathname === '/books' ? ' text-[#16b187] focus:text-[#16b187] hover:text-[#16b187]' : 'focus:text-white hover:text-[#16b187]'}>Listado de Libros</Link></li>
                        <li><Link to={'/favorites/'} className={location.pathname === '/favorites/' ? 'text-[#16b187] focus:text-[#16b187] hover:text-[#16b187]' : 'focus:text-white hover:text-[#16b187]'}>Mis favoritos</Link></li>
                        </>
                    )
                }

                    <li>
                        {
                            isLogged ? 
                            (
                                <Link to={'/'} onClick={handleLogout} className='hover:text-[#16b187]'>Cerrar Sesión</Link>
                            ) 
                            : 
                            (
                                <ul className="p-2 bg-[#18181B] rounded-t-none flex items-center flex-row w-full">
                                    <li><Link to={'/'} className={location.pathname === '/login' ? ' text-[#16b187] focus:text-[#16b187] hover:text-[#16b187]' : 'focus:text-white hover:text-[#16b187]'}>Iniciar Sesión</Link></li>
                                    <li><Link to={'/register'} className={location.pathname === '/register' ? ' text-[#16b187] focus:text-[#16b187] hover:text-[#16b187]' : 'focus:text-white hover:text-[#16b187]'}>Registrarme</Link></li>
                                </ul>
                            )
                        
                        }
                    </li>
                </ul>
            </div>
            </div>
        </div>  */}
        <div className="h-[100vh]">
            {/* <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>  */}
            <ul className="menu p-4 w-60 min-h-full bg-[#18181B] flex items-center">
            <div className='w-full flex justify-center mb-12'>
                <img src="https://res.cloudinary.com/dtjybx29n/image/upload/v1710107785/logo_bqpomp.png" alt="Logo" className='w-20'/>
            </div>
            {
                    isLogged && (
                        <>
                        <li><Link to={'/books'} className={location.pathname === '/books' ? ' text-[#16b187] focus:text-[#16b187] hover:text-[#16b187]' : 'focus:text-white hover:text-[#16b187]'}>Listado de Libros</Link></li>
                        <li><Link to={'/favorites/'} className={location.pathname === '/favorites/' ? 'text-[#16b187] focus:text-[#16b187] hover:text-[#16b187]' : 'focus:text-white hover:text-[#16b187]'}>Mis favoritos</Link></li>
                        </>
                    )
                }

                    <li>
                        {
                            isLogged ? 
                            (
                                <Link to={'/login'} onClick={handleLogout} className='hover:text-[#16b187]'>Cerrar Sesión</Link>
                            ) 
                            : 
                            (
                                <ul className="p-2 bg-[#18181B] rounded-t-none flex items-center flex-col w-full">
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