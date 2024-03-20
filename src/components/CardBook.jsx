import React from 'react'

const CardBook = ({id,btnText,children}) => {
  return (
    <>
          <div  
          className='p-1  rounded-lg  text-gray-600 hover:text-black hover:cursor-pointer hover:scale-125 transition-all'
          onClick={() => {document.getElementById(`cardBook_${id}`).showModal() }}>
            {btnText}
          </div>
      <dialog id={`cardBook_${id}`} className='modal border border-black flex justify-center' >
        <div className='w-10/12 md:w-7/12 bg-white rounded-box bg-clip-padding backdrop-filter backdrop-blur-md  shadow-2xl card lg:card-side'>
          {/* CONTENT */}
            {children}
          {/* END CONTENT */}
          <form method='dialog'>
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              X
            </button>
          </form>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button className='cursor-default'></button>
        </form>
      </dialog>
    </>
  )
}

export default CardBook