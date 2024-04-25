import Header from './Header'
import Balance from './Balance'
import { GlobalProvaider} from '../Context/GlobalState'
import FormularioTransaccion from './transaciones/FormularioTransaccion'
import ListaDeTransacciones from './transaciones/ListaDeTransacciones'
import PasivosYActivos from './PasivosYActivos'
import VictoryReact from './VictoryReact'

function App() {
  return (
    <GlobalProvaider> 
      <div className=' text-white h-screen flex justify-center items-center'>
        <div className='container mx-auto w-3/6 gap-x-2'>
        <div className=' bg-zinc-700 p-10 rounded-lg flex'>
          <div>
            <Header/>
            <PasivosYActivos/>
            <Balance/>
            <FormularioTransaccion/>
          </div>
          <div className='flex flex-col flex-1'>
          <VictoryReact/>
          <ListaDeTransacciones/>
          </div>
        </div>
        </div>
      </div>

    </GlobalProvaider>
  )
}

export default App
