import {useEffect, useState} from 'react'
import { getBooks } from '../helpers/dataBooks'
import TableBooks from '../components/TableBooks'
import ActionButton from '../components/ActionButton'
import Modal from '../components/modal/Modal'
import FormCreateBook from '../components/FormCreateBook'

const Books = () => {
    const [books, setBooks] = useState([])
    const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getBooks(setBooks)
  }, [])

  return (
    <div className='bg-slate-100 text-black h-max flex justify-center w-full min-h-[800px] h-[90vh]'>
        <div className="container  max-w-[1200px] flex flex-col gap-10 px-5 pt-10">
            <Modal
                    btnA={<ActionButton value={`Agregar Libro`} />}
                    id={1}
                  >
                    <div className='flex flex-col gap-5'>
                      <h3 className='font-bold text-lg'>Cargar Libro</h3>
                      <div className='modal-action' method='dialog'>

                        <FormCreateBook setBooks={setBooks} />
                      </div>
                    </div>
            </Modal>
            <TableBooks books={books} setBooks={setBooks}/>
        </div>
    </div>
  )
}

export default Books