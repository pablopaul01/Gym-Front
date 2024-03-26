import React, { useState,useEffect} from 'react'
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { axiosInstance } from '../config/axiosInstance';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import { getMembers } from '../store/MemberSlice';
import FormEditMember from './FormEditMember';
import { IoMdEye } from "react-icons/io";
import FormMember from './FormMember';


const MembersTable = () => {
    const [pending, setPending] = useState(true)
    const members = useSelector(state => state.members.members) // Obtenemos los usuarios del estado de Redux
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMembers())
        setPending(false)
    }, [])
    
    const columns = [
        {
          name: '#',
          selector: (row, index) => index+1,
          width: "fit-content",
        },
        {
          name: 'Nombre',
          selector: row => row.name,
          sortable: true,
          center: "true",
        },
        {
          name: 'Apellido',
          selector: row => row.lastname,
          sortable: true,
          center: "true",
        },
        {
          name: 'Dni',
          selector: row => row.dni,
          sortable: true,
          center: "true",
        },
        {
          name: "Acciones",
          selector: row => {
              return (
                  <div className='flex justify-center gap-2'>
                        <Modal
                            btnA={ 
                                <button className="btn btn-outline-light btn-sm d-flex align-items-center" title="Editar">
                                    <FaRegEdit className='t-1'/>
                                </button>
                                }
                            id={row._id+1}
                        >
                            <div className='flex flex-col gap-5'>
                            <h3 className='font-bold text-lg'>Editar Alumno</h3>
                            <FormEditMember id={row._id} name={row.name} lastname={row.lastname} dni={row.dni} whatsapp={row.whatsapp} obraSocial={row.obraSocial} />
                            </div>
                        </Modal>

                      <button className="btn btn-danger btn-sm d-flex align-items-center" title="Eliminar"  onClick={() => {handleDelete(row._id)  }}>
                          <FaTrashAlt className='t-1'/>
                      </button>
                      <Modal
                            btnA={ 
                                <button className="btn btn-outline-light btn-sm d-flex align-items-center" title="Ver mas datos">
                                    <IoMdEye size={20}/>
                                </button>
                                }
                            id={row._id+"data"}
                        >
                            <div className='flex flex-col gap-5'>
                            <h3 className='font-bold text-lg'>Ficha del Alumno</h3>
                            <FormMember id={row._id} name={row.name} lastname={row.lastname} dni={row.dni} whatsapp={row.whatsapp} obraSocial={row.obraSocial} programa={row.programa} proximo_vencimiento={row.proximo_vencimiento} inicioCiclo={row.fecha_inicio_ciclo} />
                            </div>
                        </Modal>
                  </div>
              )
          },
          center: "true",
      }
      ];

      const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    const handleDelete = async (id) => {
        try {
            await axiosInstance.delete(`/alumno/${id}`)
            toast.success("Alumno eliminado correctamente!",{position:"top-right"});
            dispatch(getMembers())
        } catch (error) {
            console.log(error)
        } finally {

        }
    }
  return (
    <div className='w-full overflow-x-auto mb-10 rounded-lg shadow-md p-7 bg-white' data-theme='light'>
        <DataTable
			      columns={columns}
			      data={members}
            pagination
            highlightOnHover
		        pointerOnHover
            paginationComponentOptions={paginationComponentOptions}
            progressPending={pending}
		      />
    </div>
  )
}

export default MembersTable