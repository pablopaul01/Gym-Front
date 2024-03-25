import React, { useEffect,useState } from 'react'
import DashBoardLayout from './DashBoardLayout'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../components/Modal'
import ActionButton from '../components/ActionButton'
import MembersTable from '../components/MembersTable'
import FormCreateMember from '../components/FormCreateMember'
import ExpirationsTable from '../components/ExpirationsTable'


const Expirations = ({isLogged, setIsLogged}) => {

  return (
    <DashBoardLayout isLogged={isLogged} setIsLogged={setIsLogged}>

    <div className='h-[100vh] bg-slate-100 flex justify-center w-full flex flex-col px-20 gap-5 items-start'>
    <div className='flex justify-start items-center'>
      <p>Vencimientos</p>
        {/* <Modal
                btnA={<ActionButton value={`Cargar alumno nuevo`} />}
                id={1}
              >
                <div className='flex flex-col'>
                  <h3 className='font-bold text-xl text-black'>Agregar alumno</h3>
                  <div className='modal-action' method='dialog'>
                    <FormCreateMember />
                  </div>
                </div>
        </Modal> */}
    </div>    
        <ExpirationsTable />
    </div>
    </DashBoardLayout>
  )
}

export default Expirations