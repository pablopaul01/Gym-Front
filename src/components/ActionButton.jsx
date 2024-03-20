import React from 'react'

const ActionButton = ({value, type}) => {
  return (
    <button type={type} className="btn bg-[#18181B] text-white hover:bg-[#18181BE6] w-full">{value}</button>
  )
}

export default ActionButton