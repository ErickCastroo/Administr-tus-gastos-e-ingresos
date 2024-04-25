import React from 'react'
import { useGlobalState } from '../Context/GlobalState'

function PasivosYActivos() {

    const {transaccion} = useGlobalState()

    const Montos = transaccion.map((transaccion) => transaccion.monto)

    const ingresos = Montos.filter((item) => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2)

    const gastos = Montos.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2) * -1;



  return (
  <>
        <div className='flex justify-between my-2'>
        <h1>ingresos</h1>
        <p>{ingresos}</p>
        </div>
    
        <div className='flex justify-between my-2'>
        <h1>Gastos</h1>
        <p>{gastos}</p>
        </div>
  </>
  )
}

export default PasivosYActivos