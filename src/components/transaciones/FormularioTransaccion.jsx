import React, { useState } from 'react'
import {useGlobalState} from '../../Context/GlobalState'

function FormularioTransaccion() {

  const {agregarTransaccion} = useGlobalState()

  const [descripcion, setDescripcion] = useState("");
  const [monto, setMonto] = useState("")

  const HandlerOnsubmit = (e) =>{
    e.preventDefault()
    agregarTransaccion({
      id: window.crypto.randomUUID(),
      descripcion,
      monto : +monto
    })
    setMonto("");
    setDescripcion('');
  }

  return (
    <div >
      <form onSubmit={HandlerOnsubmit}>

        <input className='bg-zinc-500 text-white px-3 py-2 rounded-lg block mb-1 w-full'
        placeholder='Motivo de Transaccion'
        onChange={(e) => setDescripcion(e.target.value)}
        value={descripcion}
        />
        
        <input className='bg-zinc-500 text-white py-2 px-3  rounded-lg block mb-2 w-full'
        type='number'
        step={0.01}
        placeholder='00.00'
        onChange={(e) => setMonto(e.target.value)}
          value={monto}
        /> 
    
        <button className="bg-indigo-700 text-white font-bold py-2 px-3  rounded-lg block mb-2 w-full">Gauardar transaccion</button>
      </form>
    </div>
  )
}

export default FormularioTransaccion