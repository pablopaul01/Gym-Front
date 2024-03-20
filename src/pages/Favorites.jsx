import {useState, useEffect} from 'react'
import TableFavoritesBooks from '../components/TableFavoritesBooks'
import { getFavoritesBooks } from '../helpers/dataBooks';
import { jwtDecode } from 'jwt-decode';

const Favorites = () => {
    const [books, setBooks] = useState([])

  useEffect(() => {
   const decode = jwtDecode(localStorage.getItem("token"))
   getFavoritesBooks(decode.sub,setBooks)
  }, [])

  return (
<div className='bg-slate-100 text-black h-max flex justify-center w-full min-h-[800px] h-[90vh]'>
        <div className="container w-[100%] max-w-[1200px] flex flex-col gap-10 px-5 pt-10">
            <TableFavoritesBooks books={books} setBooks={setBooks}/>
        </div>
    </div>
  )
}

export default Favorites