import React from 'react'

const ActionButton = ({value, type,accion, variante}) => {
  return (
    <button type={type} className={`btn ${variante ? variante : "bg-[#18181B]"}  text-white hover:bg-[#18181BE6] w-full`} onClick={accion}>{value}</button>
  )
}

export default ActionButton