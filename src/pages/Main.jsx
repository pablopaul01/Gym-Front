import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DashBoardLayout from './DashBoardLayout'
import { getPagosMensual } from '../store/MonthlyPaymentsSlice'
import { getPagosMensualMedio } from '../store/MonthlyPaymentsMethodSlice'
import { getAlumnosStats } from '../store/MembersStats'

const Main = ({isLogged, setIsLogged}) => {
  const dispatch = useDispatch()
  const pagosMensual = useSelector(state => state.monthlyPayments.pagosMensual)
  const pagosPorMedio = useSelector(state => state.monthlyPaymentsMethod.pagosMensualMedios)
  const alumnosStats = useSelector(state => state.alumnosStats)
  
  useEffect(() => {
    // Obtener el mes actual (0-indexado)
    const currentMonth = new Date().getMonth() + 1
    dispatch(getPagosMensual(currentMonth))
    dispatch(getPagosMensualMedio(currentMonth))
    dispatch(getAlumnosStats())
  }, [])


  console.log(alumnosStats)
  return (
    <DashBoardLayout isLogged={isLogged} setIsLogged={setIsLogged}>
      <div className='min-h-[800px] h-[100vh] bg-slate-100 flex justify-center items-center w-full gap-3'>
        <div className='card bg-white shadow-xl p-4 w-[300px]'>
          <p>Total de pagos del mes: ${pagosMensual}</p>
          {
            pagosPorMedio?.map((pago, index) => (
              <div key={index}>
                <p>Total en {pago._id}: ${pago.total}</p>
              </div>
            )
            )
          }
        </div>
        <div className='card bg-white shadow-xl p-4 w-[450px]'>
          <p>Total de alumnos: {alumnosStats.totalAlumnos}</p>
          <p>Total de Alumnos activos: {alumnosStats.alumnosActivosProximoVencimiento}</p>
          <p>Total de Alumnos con cuotas vencidas {alumnosStats.alumnosConVencimientoMayor}</p>
        </div>
      </div>
    </DashBoardLayout>
  )
}

export default Main
