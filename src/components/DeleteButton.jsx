import axios from 'axios';
import {useState} from 'react'
import { IoTrash } from "react-icons/io5";
import { MdCheckCircle } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { deleteBook } from '../helpers/dataBooks';

const DeleteButton = ({id, setBooks}) => {
    const [openDelete, setOpenDelete] = useState(false)

    const handleDelete = async (_id) => {
      deleteBook(id, setBooks)
      }

  return (
    <span className='flex flex-row gap-3 justify-center items-center'>
      {!openDelete ? (
        <IoTrash
          size={24}
          className='p-0  text-gray-600 hover:text-red-600 hover:border-transparent hover:cursor-pointer hover:scale-110 transition-all'
          onClick={() => setOpenDelete(true)}
        />
      ) : (
        <>
          <MdCheckCircle
            size={30}
            className='hover:scale-110 hover:cursor-pointer transition-all text-red-600'
            onClick={() => {
              handleDelete(id)
              setOpenDelete(false)
            }}
          />
          <MdCancel
            size={30}
            className='hover:scale-110 hover:cursor-pointer transition-all'
            onClick={() => setOpenDelete(false)}
          />
        </>
      )}
    </span>
  )
}

export default DeleteButton