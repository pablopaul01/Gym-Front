import React, {useState, useEffect} from 'react'
import ActionButton from './ActionButton'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'sonner'
import { FaUser } from "react-icons/fa6";
import { getUsers } from '../store/UserSlice'
import { axiosInstance } from '../config/axiosInstance'
import { useDispatch, useSelector } from 'react-redux';
import { EDITUSER_SCHEMA } from '../helpers/validationSchemas'

const FormEditUser = ({id, name, lastname, email}) => {
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch()
    

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(EDITUSER_SCHEMA)
    })

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const response = await axiosInstance.put(`/usuario/${id}`, data)
            toast.success("Cuenta actualizada correctamente!",{position:"top-right"});
            dispatch(getUsers())
        } catch (error) {
            console.log(error)
            toast.error("Ocurroió un problema! Intentelo más tarde.",{position:"top-right"})
        } finally {
            document.getElementById(`modal_1`).close()
            setLoading(false); 
            reset();
        }
    }

    const handleReset = () => {
        reset()
        document.getElementById(`modal_${id+1}`).close()
    }

  return (
    <form
      className="mt-5 flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label
          className="input input-bordered flex items-center gap-2"
          data-theme="light"
        >
          <FaUser className="w-4 h-4 opacity-70" />
          <input
            type="text"
            className="grow"
            defaultValue={name}
            placeholder='Nombre'
            name="name"
            {...register("name")}
            maxLength={40}
          />
        </label>
        {
          errors.name?.message && (
            <p className="text-red-600 my-0 text-center">{errors.name?.message}</p>
          )
        }
      </div>
      <div>
        <label
          className="input input-bordered flex items-center gap-2"
          data-theme="light"
        >
          <FaUser className="w-4 h-4 opacity-70" />
          <input
            type="text"
            className="grow"
            defaultValue={lastname}
            placeholder="Apellido"
            name="lastname"
            {...register("lastname")}
            maxLength={40}
          />
        </label>
        {
          errors.lastname?.message && (
            <p className="text-red-600 my-0 text-center">{errors.lastname?.message}</p>
          )
        }
      </div>
      <div>
        <label
          className="input input-bordered flex items-center gap-2"
          data-theme="light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            className="grow"
            placeholder="Email"
            defaultValue={email}
            name="email"
            {...register("email")}
            maxLength={40}
          />
        </label>
        <p className="text-red-600 my-0 text-center">{errors.email?.message}</p>
      </div>
      {loading ? (
        <div className="flex mt-3 justify-center mt-4 mb-3">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <div className="flex justify-end mt-8 mb-4 gap-3">
            <div className='w-50' >
                <ActionButton value={"Salir sin guardar"} type="button"  accion={handleReset} variante={"btn-error"} />
            </div>
            <div className='w-50'>
                <ActionButton value={"Guardar cambios"} type="submit" />
            </div>
        </div>
      )}

    </form>
  )
}

export default FormEditUser