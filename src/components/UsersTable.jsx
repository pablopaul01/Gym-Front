import React from 'react'
import DataTable from 'react-data-table-component';
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { ImBlocked } from "react-icons/im";
import { MdAudiotrack } from "react-icons/md";

const UsersTable = ({users}) => {

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
          name: 'Email',
          selector: row => row.email,
          sortable: true,
          center: "true",
        },
        {
          name: "Acciones",
          selector: row => {
              return (
                  <div style={{ display: "flex", gap: "5px", justifyContent: "center" , minWidth: "150px"}}>
                      <button className="btn btn-outline-light btn-sm d-flex align-items-center " title="Editar"  onClick={() => {  }}><FaRegEdit className='t-1'/></button>
                      <button className="btn btn-outline-light btn-sm d-flex align-items-center" title="Asignar Audios" onClick={() => { }} ><MdAudiotrack  className='t-1'/></button>
                      <button className="btn btn-danger btn-sm d-flex align-items-center" title="Suspender/Activar" onClick={() => {  }}><ImBlocked id='t-1'/></button>
                      <button className="btn btn-danger btn-sm d-flex align-items-center" title="Eliminar"  onClick={() => {  }}><FaTrashAlt className='t-1'/></button>
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

  return (
    <div className='w-full overflow-x-auto mb-10 rounded-lg shadow-md p-7 bg-white' data-theme='light'>
        <DataTable
			columns={columns}
			data={users}
            pagination
            highlightOnHover
		    pointerOnHover
            paginationComponentOptions={paginationComponentOptions}
		/>
    </div>
  )
}

export default UsersTable