import React from 'react'
import DashBoardLayout from './DashBoardLayout'

const Main = ({isLogged, setIsLogged}) => {
  return (
    <DashBoardLayout isLogged={isLogged} setIsLogged={setIsLogged}>
    <div className='min-h-[800px] h-[100vh] bg-slate-100 flex justify-center items-center w-full'>
        Main
    </div>
    </DashBoardLayout>
  )
}

export default Main