import React, { useState, useEffect, useRef } from 'react'
import ActionButton from './ActionButton';
import { createBook, getBooks } from '../helpers/dataBooks';

const FormCreateBook = ({setBooks}) => {
    const [imgFile, setImgFile] = useState([])
  const [errors, setErrors] = useState({});
  const [formDatos, setFormDatos] = useState({
    title: "",
    autor: "",
    year: null,
    resume: "",
    gender: "",
  })
  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);

 
  const handleImges = (e) => {
    setImgFile([...e.target.files])
  }

  const handleChangeDatos = (e) => {
    const { name, value } = e.target;
    setFormDatos({
        ...formDatos,
        [e.target.name]: e.target.value,
      });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(errors).some(error => error)) {
    return; 
  }
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", formDatos.title)
      formData.append("autor", formDatos.autor)
      formData.append("year", formDatos.year)
      formData.append("resume", formDatos.resume)
      formData.append("gender", formDatos.gender)
      formData.append("img", imgFile[0])
      createBook(formData,setLoading,setBooks)
      formRef.current.reset();
    } catch (error) {
        console.log(error)
    }
  }

  return (
      <form className="form-container" onSubmit={handleSubmit} ref={formRef} method='dialog'>
        <label className="mb-2 pt-2 flex flex-col">
          <label className="form-label">Titulo del libro</label>
          <input
            type="text"
            className={`input input-bordered w-full  ${errors.title ? 'is-invalid' : ''}`}
            name="title"
            onChange={handleChangeDatos}
            maxLength={40}
            required
            data-theme="light"
          />
           {errors.title && <div className="invalid-feedback">Ingresa un nombre válido.</div>}
        </label>
        <div>
            
        </div>
        <div className="mb-2 pt-2 flex flex-col">
          <div className="text-label">Autor</div>
          <input
            type="text"
            data-theme="light"
            className="input input-bordered w-full"
            name="autor"
            onChange={handleChangeDatos}
            min={0}
            required
          />
        </div>

        <div className='flex gap-2'>
            <div className="mb-2 pt-2 flex flex-col" >
            <label className="form-label">Año de publicación</label>
            <input
                type="number"
                data-theme="light"
                className="input input-bordered max-w-xs"
                name="year"
                onChange={handleChangeDatos}
                min={1}
                required
            />
            </div>
            <div className="mb-2 pt-2 flex flex-col">
            <label className="form-label">Genero</label>
            <input
                type="text"
                data-theme="light"
                className="input input-bordered w-full max-w-xs"
                name="gender"
                onChange={handleChangeDatos}
                required
            />
            </div>
        </div>

        <div className="mb-2 pt-2">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control textarea w-full"
            data-theme="light"
            name="resume"
            onChange={handleChangeDatos}
            style={{ height: "100px" }}
            maxLength={200}
            required
          />
        </div>

        <div className="mb-2 pt-2">
          <label className="form-label">Imagen de portada</label>
          <input
            type="file"
            data-theme="light"
            className="file-input file-input-bordered w-full"
            name="img"
            onChange={handleImges}
            required
          />
        </div>
        
        {
          loading ?
            (
              <div className="flex mt-3 justify-center mt-4 mb-3">
                <span className="loading loading-bars loading-lg"></span>
              </div>
            )
            :
            (
              <div className="d-grid mt-10 mb-4">
                <ActionButton value={'Cargar libro'} type="submit" />
              </div>
            )
        }
      </form >
  )
}

export default FormCreateBook