import React, {useState} from 'react'
import ActionButton from './ActionButton'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'sonner'
import { FaUser } from "react-icons/fa6";
import { useDispatch } from 'react-redux'
import { axiosInstance } from '../config/axiosInstance'
import { FaWhatsapp } from "react-icons/fa";
import { PiIdentificationCardLight } from "react-icons/pi";
import { RiHealthBookLine } from "react-icons/ri";
import { getMembers } from '../store/MemberSlice'
import { MEMBER_SCHEMA } from '../helpers/validationSchemas'

const FormCreateMember = () => {
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(MEMBER_SCHEMA)
    })

    const onSubmit = async (data) => {
      console.log("entrpo para guardar")
        try {
            setLoading(true);
            const response = await axiosInstance.post("/alumno", data)
            toast.success("Alumno cargado correctamente!",{position:"top-right"});
            dispatch(getMembers())
        } catch (error) {
            console.log(error)
            toast.error("Ocurroió un problema! Intentelo más tarde.",{position:"top-right"})
        } finally {
            document.getElementById(`modal_1`).close()
            setLoading(false); 
            reset();
        }
    }

  return (
    <form
      className="mt-5 flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label
        className="input input-bordered flex items-center gap-2"
        data-theme="light"
      >
        <FaUser className="w-4 h-4 opacity-70" />
        <input
          type="text"
          className="grow"
          placeholder="Nombre"
          name="name"
          {...register("name")}
          maxLength={40}
        />
      </label>
      <label
        className="input input-bordered flex items-center gap-2"
        data-theme="light"
      >
        <FaUser className="w-4 h-4 opacity-70" />
        <input
          type="text"
          className="grow"
          placeholder="Apellido"
          name="lastname"
          {...register("lastname")}
          maxLength={40}
        />
      </label>
      <label
        className="input input-bordered flex items-center gap-2"
        data-theme="light"
      >
        <PiIdentificationCardLight className="w-4 h-4 opacity-70"/>
        <input
          type="number"
          className="grow"
          placeholder="DNI"
          name="dni"
          {...register("dni")}
          maxLength={40}
        />
      </label>
      <label
        className="input input-bordered flex items-center gap-2"
        data-theme="light"
      >
        {/* <FaUser  /> */}
        <FaWhatsapp className="w-4 h-4 opacity-70"/>
        <input
          type="number"
          className="grow"
          placeholder="Whatsapp"
          name="whatsapp"
          {...register("whatsapp")}
          maxLength={40}
        />
      </label>
      <label
        className="input input-bordered flex items-center gap-2"
        data-theme="light"
      >
        <RiHealthBookLine className="w-4 h-4 opacity-70"/>
        <input
          type="text"
          className="grow"
          placeholder="Obra social"
          name="obraSocial"
          {...register("obraSocial")}
          maxLength={40}
        />
      </label>
      <button className='btn' type='submit'>guardar</button>
      
      {loading ? (
        <div className="flex mt-3 justify-center mt-4 mb-3">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <div className="d-grid mt-4 mb-4">
          <ActionButton value={"Cargar Alumno"} type="submit" />
          <button className="btn" type='submit'>guardar</button>
        </div>
      )}
    </form>
  );
};

export default FormCreateMember;
