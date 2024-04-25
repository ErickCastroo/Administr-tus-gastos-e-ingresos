import {useGlobalState} from '../Context/GlobalState'

function Balance() {
    const {transaccion} = useGlobalState()

    const Montos = transaccion.map(transaccion => transaccion.monto)

    const total = Montos.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <div className='flex justify-between'>
        <h3>Tu balance</h3>
        <h1 className='text-2xl font-bold'>${total}</h1>
    </div>
  )
}

export default Balance