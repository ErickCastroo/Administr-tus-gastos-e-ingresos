import React from 'react'
import {useGlobalState} from '../Context/GlobalState'
import {VictoryPie, VictoryLabel} from 'victory'
import { BsPieChartFill } from "react-icons/bs";

function VictoryReact() {
  const {transaccion} = useGlobalState()

  const totalIngreso = transaccion
  .filter((transaccion) => transaccion.monto > 0)
  .reduce((acc, transaccion) => (acc += transaccion.monto), 0);

const totalGastos = transaccion
  .filter((transaccion) => transaccion.monto < 0)
  .reduce((acc, transaccion) => (acc += transaccion.monto), 0) * -1;


  const totalGastosporcentaje = Math.round((totalGastos / totalIngreso) * 100);
  const totalIngresoporcentaje = 100 - (totalGastosporcentaje);
    


  if (totalIngreso === 0 && totalGastos === 0) {
    return (
      <div className="bg-zinc-900 p-4 my-2 mx-auto ml-20">
        <div className="h-full flex items-center justify-center w-full flex-col">
          <BsPieChartFill className="text-9xl" />
          <h1 className="text-3xl font-bold my-2">No hay datos aún</h1>
        </div>
      </div>
    );
  }

  return (
    <VictoryPie
    colorScale={["#fff", "#000000"]}
      data ={[
        {x: 'Ingresos', y: totalIngresoporcentaje},
        {x: 'Gastos', y: totalGastosporcentaje}
      ]}
      animate={{
        duration:200,
      }}
      labels={({datum}) => `${datum.y} %` }
      labelComponent={
        <VictoryLabel
          angle={45}
          style={
            {
              fill:'white'
            }
          }
        />
      }
    />
  )
}

export default VictoryReact
