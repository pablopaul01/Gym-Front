import React, { useState, useEffect, useRef } from 'react'
import ActionButton from './ActionButton';
import { updateBook } from '../helpers/dataBooks';
import { toast } from 'sonner';

const FormUpdateBook = ({id,setBooks,book}) => {
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
    if (formDatos.title === "" && formDatos.autor === "" && formDatos.year === null && formDatos.resume === "" && formDatos.gender === "") {
      toast.error(
        "Debes completar al menos un campo del libro para actualizarlo",
        {
          position: "top-right",
        }
      );
      return
    }
    try {
      setLoading(true);
      const formData = new FormData();
      if (formDatos.title !== "") {
        formData.append("title", formDatos.title)
      }
      if (formDatos.autor !== "") {
        formData.append("autor", formDatos.autor)
      }
      if (formDatos.year !== null) {
        formData.append("year", formDatos.year)
      }
      if (formDatos.resume !== "") {
        formData.append("resume", formDatos.resume)
      }
      if (formDatos.gender !== "") {
        formData.append("gender", formDatos.gender)
      }
      updateBook(formData, id, setLoading, setBooks)
      formRef.current.reset();
    } catch (error) {
        console.log(error)
    } finally {
      setFormDatos({title: "",
      autor: "",
      year: null,
      resume: "",
      gender: "",})
    }
  }

  return (
      <form className="form-container" onSubmit={handleSubmit} ref={formRef} >
        <label className="mb-2 pt-2 flex flex-col">
          <label className="form-label">Titulo del libro</label>
          <input
            type="text"
            className={`input input-bordered w-full  ${errors.title ? 'is-invalid' : ''}`}
            name="title"
            onChange={handleChangeDatos}
            maxLength={40}
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
                <ActionButton value={'Actualizar libro'} type="submit" />
              </div>
            )
        }
      </form >
  )
}

export default FormUpdateBook