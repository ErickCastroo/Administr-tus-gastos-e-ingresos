import React from 'react'
import {useGlobalState} from '../../Context/GlobalState'
import { RiDeleteBack2Fill } from "react-icons/ri";

function TransaccionItem({transaccion}) {

	const { borrarTransaccion} = useGlobalState()

	return (
	<li className='bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center'>             
		<p className='text-sm'>{transaccion.descripcion}</p>
		<div>
			<span>${transaccion.monto}</span>
	
			<button className='px-2' onClick={ () => {
				borrarTransaccion(transaccion.id)
				toast
			}}>
				<RiDeleteBack2Fill/>
			</button>
		</div>
	</li>
	)
}

export default TransaccionItem