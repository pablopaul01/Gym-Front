import React from 'react'
import Sidebar from '../components/Sidebar'

const DashBoardLayout = ({children}) => {
  return (
    <div className='flex'>
        <Sidebar />
        {children}
    </div>
  )
}

export default DashBoardLayout