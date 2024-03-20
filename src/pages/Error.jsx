import React from 'react'

const Error = () => {
  return (
    <div className='bg-slate-100 text-black h-max flex flex-col justify-center w-full min-h-[800px] h-[90vh] items-center gap-5 md:gap-0'>
        <h1 className='text-4xl md:text-6xl font-bold text-center'>
            Error 404 - Pagina no encontrada
        </h1>
        <p className='text-base md:text-2xl mt-2 text-slate-500	text-center'> 
            La página buscada pudo ser removida, su nombre cambió, o está temporalmente no disponible.
        </p>


    </div>
  )
}

export default Error