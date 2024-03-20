import React, {useState, useEffect} from 'react'
import DataTable from 'react-data-table-component';
import "../css/pagination.css"
import { getUserById, removeFavoriteBook } from '../helpers/dataBooks';
import { jwtDecode } from 'jwt-decode';
import { FaHeart } from "react-icons/fa";
import CardBook from './cardBook';
import { FaCircleInfo } from 'react-icons/fa6';
import BookContent from './BookContent';
import SearchComponent from './SearchComponent';



const TableFavoritesBooks = ({books, setBooks }) => {
    const [userId, setUserId]  = useState (null)
    const [favoritesBooks, setFavoritesBooks] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
      const decode = jwtDecode(localStorage.getItem("token"))
      setUserId(decode.sub)
      getUserById(decode.sub, setFavoritesBooks)
    }, [])
    

    const removeFavorite = (idBook,setBooks) => {
        const fromFavorites = true;
        removeFavoriteBook(idBook, userId, setBooks, setFavoritesBooks, fromFavorites)
    }

    const columns = [
        {
            name: '',
            selector: row => (<img src={row.img} alt={row.title} width="50" className='py-2'/>),
            sortable: true,
            center: "true",
            width: "7%",
            hide:"md"
        },
        {
            name: 'Titulo',
            selector: row =>
            <div>
                {row.title}
            <div className="flex justify-center gap-1 flex-row items-center px-5 py-2 lg:py-0 md:hidden">
                <FaHeart 
                size={20} 
                className='p-0 text-gray-600 hover:text-red-600 hover:border-transparent hover:cursor-pointer hover:scale-110 transition-all'
                onClick={()=>removeFavorite(row._id, setBooks)}
                />
                <CardBook 
                    btnText={<FaCircleInfo size={20} />}
                    id={row._id+1}>
                        <BookContent 
                            img={row.img}
                            title={row.title}
                            autor={row.autor}
                            year={row.year}
                            gender={row.gender}
                            resume={row.resume}
                        />
                </CardBook>               
            </div>    
            </div>
            ,
            center: "true",
        },
        {
            name: 'Autor',
            selector: row => row.autor,
            sortable: true,
            center: "true",
            width: "20%",
            hide: "md"
        },
        {
            name: 'Año',
            selector: row => row.year,
            sortable: true,
            center: "true",
            width: "10%",
            hide: "md"
        },
        {
            name: 'Genero',
            selector: row => row.gender,
            sortable: true,
            center: "true",
            width: "10%",
            hide: "md"
        },
        {
            name: 'Acciones',
            selector: row =>               
            <div className="flex justify-center gap-1 flex-col lg:flex-row items-center px-5 py-2 lg:py-0">
                <FaHeart 
                size={20} 
                className='p-0 text-gray-600 hover:text-red-600 hover:border-transparent hover:cursor-pointer hover:scale-110 transition-all'
                onClick={()=>removeFavorite(row._id, setBooks)}
                />
                <CardBook 
                    btnText={<FaCircleInfo size={20} />}
                    id={row._id}>
                        <BookContent 
                            img={row.img}
                            title={row.title}
                            autor={row.autor}
                            year={row.year}
                            gender={row.gender}
                            resume={row.resume}
                        />
                </CardBook>               
            </div>,
            center: "true",
            width: "19%",
            hide:"md"
        },
    ];

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    const filteredBooks = searchTerm ? books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase())) : books;

  return (
    <div className="overflow-x-auto mb-10 rounded-lg shadow-md p-7 bg-white">
        <div className='w-full flex justify-center lg:justify-end mb-10'>
            <SearchComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <DataTable 
            columns={columns} 
            data={filteredBooks}
            noDataComponent="No hay ningún libro en favoritos del usuario"
            pagination
            highlightOnHover
		    pointerOnHover
            paginationComponentOptions={paginationComponentOptions}
        />
    </div>
  )
}

export default TableFavoritesBooks