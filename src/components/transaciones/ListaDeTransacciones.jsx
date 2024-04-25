import React from 'react';
import { useGlobalState } from '../../Context/GlobalState';
import TransaccionItem from './TransaccionItem';

function ListaDeTransacciones() {
  const { transaccion } = useGlobalState();

  return (
    <div className='px-2'>
      <h3 className='text-slate-300 text-xl font-bold block w-full'>Historial</h3>
      {transaccion.map(trans => (
        <TransaccionItem transaccion={trans} key={trans.id} />
      ))}
    </div>
  );
}

export default ListaDeTransacciones;
